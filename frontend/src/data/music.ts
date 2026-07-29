export interface Tape {
  title: string;
  meta: string;
  dur: string;
  borderColor: string;
  /** Where the row links to (the studio) when the recording exists. */
  href?: string;
  comingSoon?: boolean;
}

export const tapes: Tape[] = [
  { title: 'Hatırla Sevgili', meta: 'piano', dur: '', borderColor: '#9B59FF', href: '/studio/piano' },
  { title: 'Nazende Sevdiğim', meta: 'piano', dur: '', borderColor: '#FF2D78', href: '/studio/piano' },
  { title: 'Waltz no.2', meta: 'piano', dur: 'soon', borderColor: '#FFE500', comingSoon: true },
  { title: 'Dernière Danse', meta: 'piano', dur: 'soon', borderColor: '#00C8FF', comingSoon: true },
];
