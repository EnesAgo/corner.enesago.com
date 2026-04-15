export interface CDData {
  name: string;
  date: string;
  color: string;
  bgTint: string;
  gradient: string;
  note: string | null;
  small?: boolean;
  tracks: { n: string; title: string; artist: string; dur: string; highlight?: boolean }[];
}

export const cds: CDData[] = [
  {
    name: 'for the 3am people',
    date: 'burned NOV 2025 · 74 min',
    color: '#FF2D78',
    bgTint: '#1a0008',
    gradient: 'conic-gradient(#FF2D78,#9B59FF,#00C8FF,#FFE500,#FF2D78)',
    note: 'written on the disc: "play track 3 first"',
    tracks: [
      { n: '01', title: 'Karbeyaz', artist: 'Sertab Erener', dur: '4:26' },
      { n: '02', title: 'Değmesin Ellerimiz', artist: 'Model', dur: '4:19' },
      { n: '03', title: 'Ağlamam Zaman Aldı (İnkar)', artist: 'Model', dur: '4:07', highlight: true  },
      { n: '04', title: 'Mayın Tarlası', artist: 'Şebnem Ferah', dur: '7:29'},
      { n: '05', title: 'Sil Baştan', artist: 'Şebnem Ferah', dur: '5:14' },
      { n: '06', title: "Sen Ona Aşıksın (Kabullenme)", artist: 'Model', dur: '3:50' },
    ],
  },
  {
    name: 'skate session vol.2',
    date: 'burned OCT 2025 · 17 min',
    color: '#9B59FF',
    bgTint: '#0d0a1a',
    gradient: 'conic-gradient(#9B59FF,#FF2D78,#FFE500,#00FF88,#9B59FF)',
    note: 'for the parking lot sessions',
    tracks: [
      { n: '01', title: 'Felaket', artist: 'Ezhel', dur: '3:15' },
      { n: '02', title: 'Bazen', artist: 'Ezhel', dur: '2:35' },
      { n: '03', title: 'Yok Çare', artist: 'Ais Ezhel & Lider', dur: '2:56' },
      { n: '04', title: 'Paspartu', artist: 'Ezhel', dur: '4:35' },
      { n: '05', title: 'Derdo', artist: 'Ezhel', dur: '3:39' },
    ],
  },
  {
    name: 'late night coding',
    date: 'burned MAR 2026 · 17 min',
    color: '#FFE500',
    bgTint: '#1a1500',
    gradient: 'conic-gradient(#FFE500,#FF6B00,#FF2D78,#FFE500)',
    note: null,
    small: true,
    tracks: [
      { n: '01', title: 'Hatırla Sevgili', artist: 'Eylem Aktaş', dur: '4:01' },
      { n: '02', title: 'Goca Dünya', artist: 'Altın Gün', dur: '3:57' },
      { n: '03', title: 'Her Şey Seninle Güzel', artist: 'Eda Baba', dur: '3:26' },
    ],
  },
];
