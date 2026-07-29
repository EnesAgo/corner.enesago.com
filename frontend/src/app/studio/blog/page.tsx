'use client';

import { blogPosts } from '@/data/blogPosts';
import PostCard from '@/components/sections/StudioSection/PostCard';

export default function BlogPage() {
  // Static data — newest-first as authored; featured = flagged one, else the first.
  const featured = blogPosts.find((p) => p.featured) ?? blogPosts[0] ?? null;
  const rest = featured ? blogPosts.filter((p) => p.id !== featured.id) : [];

  let content: React.ReactNode;

  if (!featured) {
    content = (
      <div style={{ border: '2px dashed #222', padding: 40, textAlign: 'center', background: '#080808' }}>
        <div style={{ fontFamily: "'Caveat', cursive", fontSize: 18, color: '#555' }}>
          no posts yet. the first brain dump is coming soon ✍
        </div>
      </div>
    );
  } else {
    content = (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
        <PostCard post={featured} featured />
        {rest.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    );
  }

  // Narrow, centered reading column (Substack-style feed).
  return <div style={{ maxWidth: 620, margin: '0 auto' }}>{content}</div>;
}
