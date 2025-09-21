export const siteConfig = {
  title: "Rüzgar Selvan",
  description: "Videografi & Photoshop portföyü, blog ve iletişim",
  menu: [
    { label: "Portföy", href: "/portfolio" },
    { label: "Blog", href: "/blog" },
    { label: "İletişim", href: "mailto:rvzgar@protonmail.com" },
  ],
  social: {
    x: "https://x.com/ruzgarslvn",
    instagram: "https://instagram.com/ruzgarslvn",
    github: "https://github.com/ruzgarselvan",
    mail: "mailto:rvzgar@protonmail.com",
  },
};

export type SocialKey = keyof typeof siteConfig.social;
