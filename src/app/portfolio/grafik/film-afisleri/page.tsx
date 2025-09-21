import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Gallery } from "@/components/gallery";
import { filmPosterItems } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Film Afişleri",
};

export default function FilmAfisleriPage() {
  return (
    <div>
      <PageHeader title="Film Afişleri" backHref="/portfolio/grafik" />
      <Gallery items={filmPosterItems} detailBasePath="/portfolio/grafik/film-afisleri" />
    </div>
  );
}
