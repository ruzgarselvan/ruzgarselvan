import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogPost, sortedBlogPosts } from "@/lib/blog";
import { formatDate } from "@/lib/date";

export function generateStaticParams() {
  return sortedBlogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) {
    return { title: "Yazı bulunamadı" };
  }
  return {
    title: post.title,
    description: post.summary,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) {
    notFound();
  }

  return (
    <article className="article-wrap">
      <div className="article-accent" />

      <h1 className="article-title">{post.title}</h1>

      <div className="post-meta">
        <span>{formatDate(post.date)}</span>
        <span>· {post.readingTime} dk okuma</span>
        {post.tags.length ? (
          <span>
            ·{' '}
            {post.tags.map((tag) => (
              <span key={tag} className="tag">
                #{tag}
              </span>
            ))}
          </span>
        ) : null}
      </div>

      <div
        id="tocSimple"
        className="toc simple card"
        style={{ margin: "12px 0", padding: "12px", display: "none" }}
      >
        <strong>İçindekiler</strong>
        <nav>
          <ul></ul>
        </nav>
      </div>

      <hr className="hr-soft" />

      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </article>
  );
}
