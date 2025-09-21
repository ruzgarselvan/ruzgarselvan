import type { Metadata } from "next";
import { IBM_Plex_Mono, Manrope } from "next/font/google";
import { siteConfig } from "@/data/site";
import { ClientEffects } from "@/components/client-effects";
import { Footer } from "@/components/footer";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "600", "700", "800"],
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex-mono",
  weight: ["400", "600"],
});

const themeScript = `(() => {
  try {
    const key = 'rs-theme';
    const stored = window.localStorage.getItem(key);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = stored === 'dark' || (!stored && prefersDark) ? 'dark' : 'light';
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.setAttribute('data-theme', theme);
  } catch (error) {
    console.warn('Tema yüklenemedi', error);
  }
})();`;

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s — ${siteConfig.title}`,
  },
  description: siteConfig.description,
  metadataBase: new URL("https://ruzgarselvan.com"),
  keywords: [
    "Rüzgar Selvan",
    "portföy",
    "grafik tasarım",
    "web tasarım",
    "blog",
  ],
  icons: {
    icon: "/icons/r.png",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://ruzgarselvan.com",
    siteName: siteConfig.title,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: "/icons/r.png",
        width: 512,
        height: 512,
        alt: siteConfig.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    creator: "@ruzgarslvn",
    images: ["/icons/r.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="no-js" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <link rel="icon" href="/icons/r.png" type="image/png" />
      </head>
      <body
        className={`${manrope.variable} ${plexMono.variable} antialiased`}
      >
        <div className="page-transition" />
        <div id="scrollbar" className="scrollbar" />
        <main className="container">{children}</main>
        <Footer />
        <ClientEffects />
      </body>
    </html>
  );
}
