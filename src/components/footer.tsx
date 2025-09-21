import type { SocialKey } from "@/data/site";
import { siteConfig } from "@/data/site";
import { SocialIcon } from "./social-icon";
import { ThemeToggle } from "./theme-toggle";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-bar">
        <div className="footer-start">
          <ThemeToggle />
          <div className="footer-signature muted">
            © {year} {siteConfig.title} · Made with Next.js
          </div>
        </div>
        <div className="footer-socials">
          {Object.entries(siteConfig.social).map(([key, url]) => (
            <SocialIcon key={key} name={key as SocialKey} url={url} />
          ))}
        </div>
      </div>
    </footer>
  );
}
