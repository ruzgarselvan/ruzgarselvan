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
    updated: "2025-09-20T11:35:45Z",
  },
  {
    name: "ruzgarselvan",
    description: "Next.js based kişisel portfolyo ve blog sitesi.",
    url: "https://github.com/ruzgarselvan/ruzgarselvan",
    language: "TypeScript",
    stars: 0,
    updated: "2025-09-21T19:54:31Z",
  },
  {
    name: "uynu",
    description:
      "Next.js based uyku için çeşitli frekansları dinleyebileceğiniz ve 4-7-8 metoduyla nefes egzersizi yapabileceğiniz bir site.",
    url: "https://github.com/ruzgarselvan/uynu",
    language: "TypeScript",
    stars: 0,
    updated: "2025-09-21T21:44:50Z",
  },
];
