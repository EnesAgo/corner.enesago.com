import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  increment,
  serverTimestamp,
  Timestamp,
} from 'firebase/firestore';
import { db } from '@/lib/firebase';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface VisitorData {
  /** Unique visitor fingerprint (stored in localStorage) */
  visitorId: string;
  /** Total visits from this visitor */
  visits: number;
  firstSeen: Date;
  lastSeen: Date;
  /** Analytics metadata */
  city: string | null;
  country: string | null;
  countryCode: string | null;
  timezone: string | null;
  language: string;
  referrer: string;
  userAgent: string;
}

interface GeoData {
  city: string;
  country: string;
  countryCode: string;
  timezone: string;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const STATS_DOC = doc(db, 'stats', 'counters');
const VISITOR_ID_KEY = 'corner_visitor_id';

/** Generate a random visitor ID. */
function generateVisitorId(): string {
  return `v_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 10)}`;
}

/** Get or create a persistent visitor ID in localStorage. */
export function getVisitorId(): string {
  if (typeof window === 'undefined') return generateVisitorId();
  let id = localStorage.getItem(VISITOR_ID_KEY);
  if (!id) {
    id = generateVisitorId();
    localStorage.setItem(VISITOR_ID_KEY, id);
  }
  return id;
}

/** Fetch approximate geo-location (city, country) from a free API. */
async function fetchGeoData(): Promise<GeoData | null> {
  try {
    const res = await fetch('https://ipapi.co/json/', {
      signal: AbortSignal.timeout(3000),
    });
    if (!res.ok) return null;
    const data = await res.json();
    return {
      city: data.city ?? null,
      country: data.country_name ?? null,
      countryCode: data.country_code ?? null,
      timezone: data.timezone ?? null,
    } as GeoData;
  } catch {
    return null;
  }
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/** Record a visit. Returns `true` if this is a brand-new visitor. */
export async function recordVisit(): Promise<boolean> {
  const visitorId = getVisitorId();
  const visitorRef = doc(db, 'visitors', visitorId);
  const snap = await getDoc(visitorRef);

  const geo = await fetchGeoData();
  const meta = {
    city: geo?.city ?? null,
    country: geo?.country ?? null,
    countryCode: geo?.countryCode ?? null,
    timezone: geo?.timezone ?? null,
    language: typeof navigator !== 'undefined' ? navigator.language : 'unknown',
    referrer: typeof document !== 'undefined' ? document.referrer || 'direct' : 'unknown',
    userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : 'unknown',
  };

  if (!snap.exists()) {
    // New visitor — create doc + increment both counters
    await setDoc(visitorRef, {
      ...meta,
      visits: 1,
      firstSeen: serverTimestamp(),
      lastSeen: serverTimestamp(),
    });

    // Ensure stats/counters doc exists, then increment both
    const statsSnap = await getDoc(STATS_DOC);
    if (!statsSnap.exists()) {
      await setDoc(STATS_DOC, { visitorCount: 1, totalVisits: 1 });
    } else {
      await updateDoc(STATS_DOC, { 
        visitorCount: increment(1),
        totalVisits: increment(1)
      });
    }

    return true;
  }

  // Returning visitor — bump visit count & update metadata + increment total visits
  await updateDoc(visitorRef, {
    ...meta,
    visits: increment(1),
    lastSeen: serverTimestamp(),
  });

  // Always increment total visits counter
  const statsSnap = await getDoc(STATS_DOC);
  if (statsSnap.exists()) {
    await updateDoc(STATS_DOC, { totalVisits: increment(1) });
  } else {
    await setDoc(STATS_DOC, { visitorCount: 0, totalVisits: 1 });
  }

  return false;
}

/** Get the total visit count (includes repeat visits). */
export async function getTotalVisits(): Promise<number> {
  const snap = await getDoc(STATS_DOC);
  if (!snap.exists()) return 0;
  return (snap.data() as { totalVisits?: number }).totalVisits ?? 0;
}

/** Get the total unique visitor count. */
export async function getVisitorCount(): Promise<number> {
  const snap = await getDoc(STATS_DOC);
  if (!snap.exists()) return 0;
  return (snap.data() as { visitorCount?: number }).visitorCount ?? 0;
}
