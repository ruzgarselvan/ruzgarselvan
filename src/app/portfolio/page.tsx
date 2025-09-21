import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { portfolioLandingCards } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Portföy",
};

export default function PortfolioPage() {
  return (
    <div>
      <PageHeader title="Portföy" backHref="/" />

      <div className="toolbar sticky">
        <div className="chips">
          <Link className="chip active" href="/portfolio">
            Tümü
          </Link>
          <Link className="chip" href="/portfolio/grafik">
            Grafik
          </Link>
          <Link className="chip" href="/portfolio/web-design">
            Web Design
          </Link>
        </div>
      </div>

      <div className="grid cols-1 reveal" id="portfolioGrid">
        {portfolioLandingCards.map((card) => (
          <Link key={card.href} className="card nav" href={card.href}>
            <h2>{card.title}</h2>
            <p className="muted">{card.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
