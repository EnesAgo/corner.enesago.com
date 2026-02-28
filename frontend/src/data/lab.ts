export interface ExperimentMeta {
  num: string;
  color: string;
  title: string;
  desc: string;
}

export const experiments: ExperimentMeta[] = [
  {
    num: '001',
    color: '#00FF88',
    title: 'CSS Glitch Generator',
    desc: 'real-time css glitch effects. type something, watch it break. pure css, no js.',
  },
  {
    num: '002',
    color: '#FFE500',
    title: 'VHS Filter Canvas',
    desc: 'drop any image, get vhs scanlines + grain + color bleed. canvas api + webgl.',
  },
  {
    num: '003',
    color: '#FF2D78',
    title: 'Pixel Font Renderer',
    desc: 'render any text in retro pixel fonts. export as svg or png. for stickers, obviously.',
  },
];
