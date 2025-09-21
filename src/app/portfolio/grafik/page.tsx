import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { grafikCategoryCards } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Grafik",
};

export default function GrafikPortfolioPage() {
  return (
    <div>
      <PageHeader title="Grafik" backHref="/portfolio" />

      <div className="toolbar sticky">
        <div className="chips">
          <Link className="chip" href="/portfolio/grafik/film-afisleri">
            Film Afişleri
          </Link>
          <Link className="chip" href="/portfolio/grafik/poster-tasarimlari">
            Poster Tasarımları
          </Link>
          <Link className="chip" href="/portfolio/grafik/branding">
            Branding
          </Link>
        </div>
      </div>

      <p className="muted">Grafik portföyünü kategoriye göre inceleyin.</p>

      <div className="grid cols-1 reveal" id="portfolioGrid">
        {grafikCategoryCards.map((card) => (
          <Link key={card.href} className="card nav" href={card.href}>
            <h3>{card.title}</h3>
            <p className="muted">{card.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
