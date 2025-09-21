export type GitHubRepo = {
  name: string;
  description: string;
  url: string;
  language?: string;
  stars?: number;
  updated: string;
};

export const githubRepos: GitHubRepo[] = [
  {
    name: "Grup-Yorum-Antisansur",
    description:
      "Spotify'dan kalkınca Grup Yorum dinlemek için Next.js kullanarak basit bir next.js app'i.",
    url: "https://github.com/ruzgarselvan/Grup-Yorum-Antisansur",
    language: "TypeScript",
    stars: 0,
    updated: "2025-09-20T09:24:12Z",
  },
  {
    name: "ruzgarselvan",
    description: "Görüntülediğiniz sitenin açık kaynak kodları.",
    url: "https://github.com/ruzgarselvan/ruzgarselvan",
    language: "Typescript",
    stars: 0,
    updated: "2025-09-20T12:43:47Z",
  },
];
