'use client';

import { useEffect, useState } from 'react';
import { recordVisit, getTotalVisits } from '@/services/visitor.service';

export function useVisitorCount() {
  const [count, setCount] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function track() {
      try {
        // Record this visit (handles new vs returning visitor)
        await recordVisit();
        // Fetch updated total visits
        const total = await getTotalVisits();
        if (!cancelled) {
          setCount(total);
          setLoading(false);
        }
      } catch (err) {
        console.error('Visitor tracking error:', err);
        if (!cancelled) setLoading(false);
      }
    }

    track();

    return () => {
      cancelled = true;
    };
  }, []);

  return { count, loading };
}
