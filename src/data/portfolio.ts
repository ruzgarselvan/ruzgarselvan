export type PortfolioNavCard = {
  title: string;
  description: string;
  href: string;
};

export const portfolioLandingCards: PortfolioNavCard[] = [
  {
    title: "Grafik",
    description: "Afiş, poster tasarımları ve branding çalışmaları.",
    href: "/portfolio/grafik",
  },
  {
    title: "Web Design",
    description: "Kişisel projelerim ve kaynak kodları.",
    href: "/portfolio/web-design",
  },
];

export const grafikCategoryCards: PortfolioNavCard[] = [
  {
    title: "Film Afişleri",
    description: "Sinema için afiş çalışmaları",
    href: "/portfolio/grafik/film-afisleri",
  },
  {
    title: "Poster Tasarımları",
    description: "Farklı temalarda posterler",
    href: "/portfolio/grafik/poster-tasarimlari",
  },
  {
    title: "Branding",
    description: "Logo ve kurumsal kimlik",
    href: "/portfolio/grafik/branding",
  },
];

export type PortfolioGalleryItem = {
  slug: string;
  title: string;
  category: string;
  thumbnail: string;
  image: string;
  caption?: string;
};

export const filmPosterItems: PortfolioGalleryItem[] = [
  {
    slug: "fallen-angels",
    title: "Afiş Tasarımı",
    category: "Film Afişleri",
    thumbnail: "/portfolio/grafik/film-afisleri/Fallen-Angels.png",
    image: "/portfolio/grafik/film-afisleri/Fallen-Angels.png",
    caption: "Photoshop çalışması",
  },
  {
    slug: "la-haine",
    title: "La Haine",
    category: "Film Afişleri",
    thumbnail: "/portfolio/grafik/film-afisleri/La-Haine.png",
    image: "/portfolio/grafik/film-afisleri/La-Haine.png",
  },
];

export const posterDesignItems: PortfolioGalleryItem[] = [
  {
    slug: "frank",
    title: "Afiş Tasarımı",
    category: "Müzik Afişleri",
    thumbnail: "/portfolio/grafik/poster-tasarimlari/frank.png",
    image: "/portfolio/grafik/poster-tasarimlari/frank.png",
    caption: "Photoshop çalışması",
  },
  {
    slug: "k-dot",
    title: "Afiş Tasarımı",
    category: "Müzik Afişleri",
    thumbnail: "/portfolio/grafik/poster-tasarimlari/k-dot.png",
    image: "/portfolio/grafik/poster-tasarimlari/k-dot.png",
    caption: "Photoshop çalışması",
  },
  {
    slug: "k-dot2",
    title: "Afiş Tasarımı",
    category: "Müzik Afişleri",
    thumbnail: "/portfolio/grafik/poster-tasarimlari/k-dot2.png",
    image: "/portfolio/grafik/poster-tasarimlari/k-dot2.png",
    caption: "Photoshop çalışması",
  },
  {
    slug: "gezi",
    title: "Afiş Tasarımı",
    category: "Genel Afiş",
    thumbnail: "/portfolio/grafik/poster-tasarimlari/gezi.png",
    image: "/portfolio/grafik/poster-tasarimlari/gezi.png",
    caption: "Photoshop çalışması",
  },
];

export const portfolioItemMap: Record<string, PortfolioGalleryItem> = [
  ...filmPosterItems,
  ...posterDesignItems,
].reduce((acc, item) => {
  acc[item.slug] = item;
  return acc;
}, {} as Record<string, PortfolioGalleryItem>);
