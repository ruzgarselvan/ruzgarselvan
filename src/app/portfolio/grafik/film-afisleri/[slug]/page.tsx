import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/page-header";
import { LightboxImage } from "@/components/lightbox-image";
import { filmPosterItems, portfolioItemMap } from "@/data/portfolio";

export function generateStaticParams() {
  return filmPosterItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = portfolioItemMap[slug];
  if (!item) {
    return { title: "Çalışma bulunamadı" };
  }
  return {
    title: item.title,
    description: item.caption,
  };
}

export default async function FilmAfisleriDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = portfolioItemMap[slug];
  if (!item || !filmPosterItems.some((entry) => entry.slug === item.slug)) {
    notFound();
  }

  return (
    <div>
      <PageHeader title={item.title} backHref="/portfolio/grafik/film-afisleri" />
      <article className="card">
        <LightboxImage src={item.image} alt={item.title} caption={item.caption} />
      </article>
    </div>
  );
}
