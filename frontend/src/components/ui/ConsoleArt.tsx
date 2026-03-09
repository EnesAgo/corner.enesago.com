'use client';

import { useEffect } from 'react';

export default function ConsoleArt() {
  useEffect(() => {
    console.log(
      '%c' +
        ' ███████╗███╗   ██╗███████╗███████╗\n' +
        ' ██╔════╝████╗  ██║██╔════╝██╔════╝\n' +
        ' █████╗  ██╔██╗ ██║█████╗  ███████╗\n' +
        ' ██╔══╝  ██║╚██╗██║██╔══╝  ╚════██║\n' +
        ' ███████╗██║ ╚████║███████╗███████║\n' +
        ' ╚══════╝╚═╝  ╚═══╝╚══════╝╚══════╝',
      'color: #FFE500; font-size: 10px; font-family: monospace;'
    );
    console.log(
      '%c hey dev 👋 you\'re curious. i like that.',
      'color: #FF2D78; font-size: 14px; font-weight: bold; font-family: monospace; padding: 4px 0;'
    );
    console.log(
      '%c try typing "billcipher" or the konami code for a surprise.',
      'color: #00C8FF; font-size: 11px; font-family: monospace; padding: 2px 0;'
    );
    console.log(
      '%c built with next.js, vibes, and too many duman songs.',
      'color: #555; font-size: 10px; font-family: monospace; padding: 2px 0;'
    );
  }, []);

  return null;
}
