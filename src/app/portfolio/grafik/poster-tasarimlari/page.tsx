import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Gallery } from "@/components/gallery";
import { posterDesignItems } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Poster Tasarımları",
};

export default function PosterTasarimlariPage() {
  return (
    <div>
      <PageHeader title="Poster Tasarımları" backHref="/portfolio/grafik" />
      <Gallery items={posterDesignItems} detailBasePath="/portfolio/grafik/poster-tasarimlari" />
    </div>
  );
}
