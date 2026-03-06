'use client';

import { useState, useEffect } from 'react';

export default function Ticker() {
  const [commitInfo, setCommitInfo] = useState<string>('loading...');
  const [stars, setStars] = useState<number | null>(null);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        // Fetch latest commit
        const commitsRes = await fetch('https://api.github.com/repos/EnesAgo/corner.enesago.com/commits?per_page=1');
        if (commitsRes.ok) {
          const commits = await commitsRes.json();
          if (commits[0]) {
            const commitDate = new Date(commits[0].commit.author.date);
            const now = new Date();
            const diffMs = now.getTime() - commitDate.getTime();
            const diffMins = Math.floor(diffMs / 60000);
            const diffHours = Math.floor(diffMs / 3600000);
            const diffDays = Math.floor(diffMs / 86400000);

            let timeAgo = '';
            if (diffMins < 60) {
              timeAgo = `${diffMins} min${diffMins !== 1 ? 's' : ''} ago`;
            } else if (diffHours < 24) {
              timeAgo = `${diffHours} hr${diffHours !== 1 ? 's' : ''} ago`;
            } else {
              timeAgo = `${diffDays} day${diffDays !== 1 ? 's' : ''} ago`;
            }

            setCommitInfo(timeAgo);
          }
        }

        // Fetch repo stars
        const repoRes = await fetch('https://api.github.com/repos/EnesAgo/corner.enesago.com');
        if (repoRes.ok) {
          const repo = await repoRes.json();
          setStars(repo.stargazers_count);
        }
      } catch (error) {
        setCommitInfo('2 hrs ago');
      }
    };

    fetchGitHubData();
  }, []);

  const text = `★ WELCOME TO MY CORNER OF THE WEB   ★ last commit: ${commitInfo} ★   mood: chilling   react · nestjs · mongodb · vibes   ★ здраво · merhaba · hallo · hey`;

  return (
    <div style={{ background: '#FFE500', borderBottom: '3px solid #000', height: 30, overflow: 'hidden', position: 'relative', zIndex: 50 }}>
      <div className="ticker-inner" style={{ height: '100%', alignItems: 'center' }}>
        <span style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 8, color: '#000', padding: '0 40px' }}>
          {text}
        </span>
        <span style={{ fontFamily: "'Press Start 2P', monospace", fontSize: 8, color: '#000', padding: '0 40px' }}>
          {text}
        </span>
      </div>
    </div>
  );
}
