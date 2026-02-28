/**
 * Seed script: populates Firestore guestbook with initial entries.
 *
 * Usage:
 *   1. Copy .env.local.example → .env.local and fill in your Firebase config
 *   2. Run: npx tsx scripts/seed-guestbook.ts
 */

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, Timestamp } from 'firebase/firestore';
import { config } from 'dotenv';

config({ path: '.env.local' });

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const seedEntries = [
  { name: 'sk8er_mike', color: '#FFE500', msg: 'dude your site is sick. reminds me of the old web. keep it up 🤙', daysAgo: 2 },
  { name: 'anonymous', color: '#00C8FF', msg: 'found this site at 2am. stayed for an hour. this is the internet i miss.', daysAgo: 7 },
  { name: 'css_nerd_99', color: '#FF2D78', msg: '121 day streak on cssbattle?? absolute legend. i gave up at day 12 😭', daysAgo: 14 },
  { name: 'piano_enjoyer', color: '#9B59FF', msg: "the chopin recording is beautiful. don't stop playing.", daysAgo: 21 },
  { name: 'devgirl_mk', color: '#00FF88', msg: 'здраво од Македонија! 🇲🇰 nice to see someone from the balkans building cool stuff in munich', daysAgo: 30 },
  { name: 'konami_guy', color: '#FFE500', msg: '↑↑↓↓←→←→BA — you know what i mean 😏', daysAgo: 30 },
];

async function seed() {
  console.log('Seeding guestbook entries...');

  for (const entry of seedEntries) {
    const createdAt = Timestamp.fromDate(
      new Date(Date.now() - entry.daysAgo * 24 * 60 * 60 * 1000),
    );

    await addDoc(collection(db, 'guestbook'), {
      name: entry.name,
      color: entry.color,
      msg: entry.msg,
      createdAt,
    });

    console.log(`  ✓ ${entry.name}: "${entry.msg.slice(0, 40)}..."`);
  }

  console.log(`\nDone! Seeded ${seedEntries.length} entries.`);
  process.exit(0);
}

seed().catch((err) => {
  console.error('Seed failed:', err);
  process.exit(1);
});
