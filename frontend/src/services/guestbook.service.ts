import {
  collection,
  addDoc,
  query,
  orderBy,
  limit,
  onSnapshot,
  serverTimestamp,
  getCountFromServer,
  type Unsubscribe,
  Timestamp,
} from 'firebase/firestore';
import { db } from '@/lib/firebase';

const COLLECTION = 'guestbook';

export interface GuestbookEntry {
  id: string;
  name: string;
  color: string;
  msg: string;
  createdAt: Date;
}

/** Raw shape stored in Firestore */
interface GuestbookDoc {
  name: string;
  color: string;
  msg: string;
  createdAt: Timestamp | null;
}

/** Subscribe to the latest guestbook entries in real-time. */
export function subscribeToEntries(
  limitCount: number,
  onData: (entries: GuestbookEntry[]) => void,
  onError: (error: Error) => void,
): Unsubscribe {
  const q = query(
    collection(db, COLLECTION),
    orderBy('createdAt', 'desc'),
    limit(limitCount),
  );

  return onSnapshot(
    q,
    (snapshot) => {
      const entries: GuestbookEntry[] = snapshot.docs.map((doc) => {
        const data = doc.data() as GuestbookDoc;
        return {
          id: doc.id,
          name: data.name,
          color: data.color,
          msg: data.msg,
          createdAt: data.createdAt?.toDate() ?? new Date(),
        };
      });
      onData(entries);
    },
    onError,
  );
}

/** Add a new guestbook entry. */
export async function addEntry(name: string, color: string, msg: string): Promise<string> {
  const docRef = await addDoc(collection(db, COLLECTION), {
    name,
    color,
    msg,
    createdAt: serverTimestamp(),
  });
  return docRef.id;
}

/** Get total count of guestbook entries. */
export async function getEntryCount(): Promise<number> {
  const snapshot = await getCountFromServer(collection(db, COLLECTION));
  return snapshot.data().count;
}
