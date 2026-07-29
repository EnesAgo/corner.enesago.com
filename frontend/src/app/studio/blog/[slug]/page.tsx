'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { blogPosts } from '@/data/blogPosts';
import { openLightbox } from '@/components/ui';
import RichText from '@/components/sections/StudioSection/RichText';

const ACCENT = '#00C8FF';

export default function PostPage() {
  const params = useParams<{ slug: string }>();
  const slug = params?.slug;
  const post = blogPosts.find((p) => p.slug === slug) ?? null;

  if (!post) {
    return (
      <div style={{ border: '2px dashed #222', padding: 40, textAlign: 'center', background: '#080808' }}>
        <div style={{ fontFamily: "'Caveat', cursive", fontSize: 18, color: '#555', marginBottom: 12 }}>post not found 👻</div>
        <Link href="/studio/blog" className="lh" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: ACCENT, textDecoration: 'none' }}>← back to blog</Link>
      </div>
    );
  }

  return (
    <article style={{ maxWidth: 760, margin: '0 auto' }}>
      <Link href="/studio/blog" className="lh" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: '#888', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: 1, display: 'inline-block', marginBottom: 18 }}>← all posts</Link>

      {post.coverUrl && (
        <div style={{ border: `3px solid ${ACCENT}`, boxShadow: `6px 6px 0 ${ACCENT}`, overflow: 'hidden', marginBottom: 24 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={post.coverUrl} alt={post.title} style={{ width: '100%', display: 'block', maxHeight: 360, objectFit: 'cover' }} />
        </div>
      )}

      <div style={{ fontFamily: "'VT323', monospace", fontSize: 16, color: '#555', marginBottom: 8 }}>
        {post.createdAt.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
      </div>
      <h1 className="font-heading" style={{ fontSize: 'clamp(26px,5vw,42px)', fontWeight: 700, color: '#f0f0f0', letterSpacing: -1, margin: '0 0 14px', lineHeight: 1.1 }}>
        {post.title}
      </h1>
      {post.tags.length > 0 && (
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 24 }}>
          {post.tags.map((tag) => (
            <span key={tag} style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: ACCENT, border: `1px solid ${ACCENT}`, padding: '2px 6px' }}>
              {tag}
            </span>
          ))}
        </div>
      )}

      <RichText html={post.bodyHtml} />

      {/* Video — capped so it doesn't dominate the page */}
      {post.videoUrl && (
        <div className="wcf" style={{ position: 'relative', marginTop: 24, maxWidth: 480 }}>
          <video src={post.videoUrl} controls playsInline style={{ width: '100%', display: 'block', background: '#000' }} />
          <div className="vhs" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />
        </div>
      )}

      {/* Photo gallery — up to 3 across */}
      {post.photoUrls.length > 0 && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(200px,1fr))', gap: 10, marginTop: 24 }}>
          {post.photoUrls.map((url, i) => (
            <button
              key={url}
              onClick={() => openLightbox(url, post.title)}
              className="dh"
              style={{ aspectRatio: '4 / 3', border: '2px solid #222', padding: 0, cursor: 'pointer', overflow: 'hidden', background: '#000' }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={url} alt={`${post.title} photo ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </button>
          ))}
        </div>
      )}
    </article>
  );
}
