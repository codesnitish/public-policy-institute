const BLOGS_URL = '/blog_data/blogs.json';
export async function fetchBlogStore() {
    const response = await fetch(BLOGS_URL, { cache: 'no-store' });
    if (!response.ok)
        throw new Error(`Failed to load blogs (${response.status})`);
    return (await response.json());
}
export function getLatestBlog(blogs) {
    return [...blogs].sort((a, b) => (b.publishedAt || '').localeCompare(a.publishedAt || ''))[0];
}
export function findBlogBySlug(blogs, slug) {
    return blogs.find((b) => b.slug === slug);
}
