import { blogPosts } from "@/data/blog";
import { renderMarkdown, stripMarkdown } from "@/lib/markdown";
import { calculateReadingTime } from "@/lib/reading-time";

export const sortedBlogPosts = [...blogPosts].sort((a, b) =>
  a.date === b.date ? 0 : a.date > b.date ? -1 : 1
);

export const blogListItems = sortedBlogPosts.map((post) => {
  const summaryRaw = stripMarkdown(post.content);
  const summary =
    summaryRaw.length > 260 ? `${summaryRaw.slice(0, 257).trimEnd()}…` : summaryRaw;
  return {
    slug: post.slug,
    title: post.title,
    date: post.date,
    tags: post.tags,
    summary,
    readingTime: calculateReadingTime(post.content),
  };
});

export function getBlogPost(slug: string) {
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) return null;
  const html = renderMarkdown(post.content);
  const summaryRaw = stripMarkdown(post.content);
  const summary =
    summaryRaw.length > 260 ? `${summaryRaw.slice(0, 257).trimEnd()}…` : summaryRaw;
  const readingTime = calculateReadingTime(post.content);
  return { ...post, html, summary, readingTime };
}
