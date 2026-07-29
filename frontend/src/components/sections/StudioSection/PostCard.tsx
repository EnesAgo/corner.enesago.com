'use client';

import Link from 'next/link';
import type { BlogPost } from '@/data/blogPosts';

const ACCENT = '#00C8FF';

function formatDate(d: Date): string {
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

/** Blog card. `featured` renders the larger hero variant (like the old FeaturedPost). */
export default function PostCard({ post, featured = false }: { post: BlogPost; featured?: boolean }) {
  return (
    <Link
      href={`/studio/blog/${post.slug}`}
      className="hl hs"
      style={{
        display: 'block',
        textDecoration: 'none',
        border: `3px solid ${ACCENT}`,
        background: '#0d0d0d',
        boxShadow: `6px 6px 0px ${ACCENT}`,
        overflow: 'hidden',
      }}
    >
      {post.coverUrl && (
        <div className="dh" style={{ position: 'relative', height: featured ? 300 : 240, overflow: 'hidden' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={post.coverUrl}
            alt={post.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'contrast(1.2) saturate(.6) brightness(.65)' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(transparent 30%,rgba(0,0,0,.9))' }} />
          {featured && (
            <span style={{ position: 'absolute', top: 12, left: 12, background: ACCENT, color: '#000', border: '2px solid #000', padding: '2px 8px', fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, fontWeight: 700, textTransform: 'uppercase' }}>LATEST</span>
          )}
        </div>
      )}
      <div style={{ padding: featured ? '16px 18px' : '12px 14px' }}>
        <div style={{ fontFamily: "'VT323', monospace", fontSize: 14, color: '#555', marginBottom: 5 }}>
          {formatDate(post.createdAt)}
        </div>
        <h3 className="font-heading" style={{ fontSize: featured ? 'clamp(18px,3vw,24px)' : 15, fontWeight: 700, color: '#fff', margin: '0 0 6px 0', lineHeight: 1.25 }}>
          {post.title}
        </h3>
        <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: '#888', margin: '0 0 10px', lineHeight: 1.6 }}>
          {post.excerpt}
        </p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8, flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {post.tags.slice(0, 3).map((tag) => (
              <span key={tag} style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: ACCENT, border: `1px solid ${ACCENT}`, padding: '2px 6px' }}>
                {tag}
              </span>
            ))}
          </div>
          <span className="lh" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: ACCENT, textTransform: 'uppercase', letterSpacing: 1 }}>
            READ →
          </span>
        </div>
      </div>
    </Link>
  );
}
