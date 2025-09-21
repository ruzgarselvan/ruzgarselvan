import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { blogListItems } from "@/lib/blog";
import { formatDate } from "@/lib/date";

export const metadata: Metadata = {
  title: "Blog",
};

export default function BlogPage() {
  return (
    <div className="blog-list">
      <PageHeader title="Blog" />
      <p className="muted">Sinema, teknoloji ve günlük notlar</p>

      <div className="grid">
        {blogListItems.map((post) => (
          <Link key={post.slug} className="card card-link post" href={`/blog/${post.slug}`}>
            <div className="meta">
              <h3 className="post-title">{post.title}</h3>
              <div className="post-meta">
                <span>{formatDate(post.date)}</span>
                <span>· {post.readingTime} dk okuma</span>
                {post.tags.length ? <span>· {post.tags.join(", ")}</span> : null}
              </div>
              <p className="muted">{post.summary}</p>
              <div className="readmore">Devamını oku →</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
