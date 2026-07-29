export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  bodyHtml: string;
  coverUrl: string | null;
  videoUrl: string | null;
  photoUrls: string[];
  tags: string[];
  featured: boolean;
  createdAt: Date;
}

/**
 * Static blog posts shown on /studio/blog.
 *
 * No backend for now — add an entry here to publish a post. `bodyHtml` is rendered
 * as-is (author-trusted), and `slug` is the URL at /studio/blog/<slug>. Media paths
 * point at files in `public/` (e.g. `/media/...`).
 *
 * Example:
 *   {
 *     id: 'first',
 *     title: 'First Post',
 *     slug: 'first-post',
 *     excerpt: 'a short teaser.',
 *     bodyHtml: '<p>hello <strong>world</strong>.</p>',
 *     coverUrl: null,
 *     videoUrl: null,
 *     photoUrls: [],
 *     tags: ['life'],
 *     featured: true,
 *     createdAt: new Date('2026-07-01'),
 *   },
 */
export const blogPosts: BlogPost[] = [
  {
    id: 'my-first-blog',
    title: 'my first blog',
    slug: 'my-first-blog',
    excerpt: 'why i made this site.',
    bodyHtml:
      '<p>my first blog — just a test.</p><p>why did i make this site? <strong>bc i like websites that have personality.</strong></p>',
    coverUrl: null,
    videoUrl: null,
    photoUrls: [],
    tags: ['meta'],
    featured: true,
    createdAt: new Date('2026-07-29'),
  },
];
