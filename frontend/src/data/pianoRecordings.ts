export interface PianoRecording {
  id: string;
  title: string;
  descriptionHtml: string;
  tags: string[];
  audioUrl: string | null;
  videoUrl: string | null;
  photoUrls: string[];
  duration: string | null;
  recordedAt: string | null;
  createdAt: Date;
}

/**
 * Static piano recordings shown on /studio/piano.
 *
 * No backend for now — to add one, drop the file into `public/media/` and add an
 * entry here. `videoUrl` → shows as a clip; `audioUrl` (with no video) → shows as
 * an audio recording in the tracklist. Paths are relative to `public/`.
 *
 * Example:
 *   {
 *     id: 'waltz2',
 *     title: 'Waltz no.2',
 *     descriptionHtml: '<p>shostakovich. one take.</p>',
 *     tags: ['piano'],
 *     audioUrl: null,
 *     videoUrl: '/media/waltz-no2.mp4',
 *     photoUrls: [],
 *     duration: null,
 *     recordedAt: 'JUL 2026',
 *     createdAt: new Date('2026-07-01'),
 *   },
 */
export const pianoRecordings: PianoRecording[] = [
  {
    id: 'hatirla-sevgili',
    title: 'Hatırla Sevgili',
    descriptionHtml: '',
    tags: ['piano'],
    audioUrl: null,
    videoUrl: '/media/hatirla-sevgili.mp4',
    photoUrls: [],
    duration: null,
    recordedAt: null,
    createdAt: new Date('2026-07-29'),
  },
  {
    id: 'nazende-sevdigim',
    title: 'Nazende Sevdiğim',
    descriptionHtml: '',
    tags: ['piano'],
    audioUrl: null,
    videoUrl: '/media/nazende-sevdigim.mp4',
    photoUrls: [],
    duration: null,
    recordedAt: null,
    createdAt: new Date('2026-07-28'),
  },
];
