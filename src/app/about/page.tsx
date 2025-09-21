import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Hakkımda",
};

export default function AboutPage() {
  return (
    <div>
      <PageHeader title="Hakkımda" />
      <article className="card">
        <p>Merhaba, ben Rüzgar. Web Design ve Görsel İletişim alanında çalışıyorum.</p>
      </article>
    </div>
  );
}
