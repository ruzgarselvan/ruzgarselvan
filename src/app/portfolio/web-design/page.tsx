import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { githubRepos } from "@/data/github";
import { formatDate } from "@/lib/date";

export const metadata: Metadata = {
  title: "Web Design",
};

export default function WebDesignPortfolioPage() {
  const repos = [...githubRepos].sort((a, b) =>
    a.updated === b.updated ? 0 : a.updated > b.updated ? -1 : 1
  );

  return (
    <div>
      <PageHeader title="Web Design" backHref="/portfolio" />

      <div className="toolbar sticky">
        <div className="chips">
          <Link className="chip" href="/portfolio">
            Tümü
          </Link>
          <Link className="chip" href="/portfolio/grafik">
            Grafik
          </Link>
          <Link className="chip active" href="/portfolio/web-design">
            Web Design
          </Link>
        </div>
      </div>

      {repos.length ? (
        <div className="grid cols-1 reveal" id="portfolioGrid">
          {repos.map((repo) => {
            const meta: string[] = [];
            if (repo.language) meta.push(repo.language);
            if ((repo.stars ?? 0) >= 1) meta.push(`⭐ ${repo.stars}`);
            return (
              <Link
                key={repo.url}
                className="card nav"
                href={repo.url}
                target="_blank"
                rel="noopener"
              >
                <h3>{repo.name}</h3>
                {repo.description ? <p className="muted">{repo.description}</p> : null}
                <div className="muted small">
                  {meta.length ? <span>{meta.join(" • ")}</span> : null}
                  <div>Son güncelleme: {formatDate(repo.updated)}</div>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <section className="card center">
          <h2>Web Design</h2>
          <p className="muted">GitHub projeleri şu an listelenemiyor.</p>
        </section>
      )}
    </div>
  );
}
