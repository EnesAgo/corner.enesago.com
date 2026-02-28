'use client';

import { useEffect, useState, useCallback, useRef } from 'react';
import {
  subscribeToEntries,
  addEntry,
  getEntryCount,
  type GuestbookEntry,
} from '@/services/guestbook.service';
import { nameColors } from '@/data/guestbook';

const ENTRY_LIMIT = 50;

export function useGuestbook() {
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const unsubRef = useRef<(() => void) | null>(null);

  // Subscribe to real-time entries
  useEffect(() => {
    setLoading(true);

    // Get initial count
    getEntryCount()
      .then(setTotalCount)
      .catch(() => {/* count will update on next snapshot */});

    unsubRef.current = subscribeToEntries(
      ENTRY_LIMIT,
      (data) => {
        setEntries(data);
        setLoading(false);
        setError(null);
      },
      (err) => {
        console.error('Guestbook subscription error:', err);
        setError('Failed to load guestbook entries.');
        setLoading(false);
      },
    );

    return () => {
      unsubRef.current?.();
    };
  }, []);

  const submitEntry = useCallback(async (name: string, msg: string) => {
    const trimmedName = name.trim() || 'anonymous';
    const trimmedMsg = msg.trim();
    if (!trimmedMsg) return;

    const color = nameColors[Math.floor(Math.random() * nameColors.length)];

    setSubmitting(true);
    try {
      await addEntry(trimmedName, color, trimmedMsg);
      setTotalCount((prev) => prev + 1);
    } catch (err) {
      console.error('Failed to submit guestbook entry:', err);
      setError('Failed to submit. Try again.');
    } finally {
      setSubmitting(false);
    }
  }, []);

  return { entries, totalCount, loading, submitting, error, submitEntry };
}
