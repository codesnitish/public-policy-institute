export type Blog = {
  id: string;
  slug: string;
  title: string;
  authors: string[];
  publishedAt: string; // YYYY-MM-DD
  coverImageUrl?: string;
  excerpt: string;
  contentMarkdown: string;
};

export type BlogStore = {
  version: number;
  updatedAt: string; // YYYY-MM-DD
  blogs: Blog[];
};
