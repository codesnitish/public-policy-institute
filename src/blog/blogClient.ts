import type { Blog, BlogStore } from './blogTypes';

const BLOGS_URL = '/blog_data/blogs.json';

export async function fetchBlogStore(): Promise<BlogStore> {
  const response = await fetch(BLOGS_URL, { cache: 'no-store' });
  if (!response.ok) throw new Error(`Failed to load blogs (${response.status})`);
  return (await response.json()) as BlogStore;
}

export function getLatestBlog(blogs: Blog[]): Blog | undefined {
  return [...blogs].sort((a, b) => (b.publishedAt || '').localeCompare(a.publishedAt || ''))[0];
}

export function findBlogBySlug(blogs: Blog[], slug: string): Blog | undefined {
  return blogs.find((b) => b.slug === slug);
}
