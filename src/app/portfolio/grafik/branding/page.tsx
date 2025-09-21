import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Branding",
};

export default function BrandingPage() {
  return (
    <div>
      <PageHeader title="Branding" backHref="/portfolio/grafik" />
      <section className="card">
        <p className="muted">Branding çalışmaları yakında.</p>
      </section>
    </div>
  );
}
