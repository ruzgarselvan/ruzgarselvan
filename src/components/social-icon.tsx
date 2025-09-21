import type { SocialKey } from "@/data/site";

type Props = {
  name: SocialKey;
  url: string;
};

function resolveName(name: SocialKey, url: string): SocialKey {
  const normalized = name.toLowerCase() as SocialKey;
  if (normalized === "mail") return "mail";
  if (normalized === "instagram" || /instagram\.com/.test(url)) return "instagram";
  if (normalized === "github" || /github\.com/.test(url)) return "github";
  if (normalized === "x" || /(?:x|twitter)\.com/.test(url)) return "x";
  return normalized;
}

export function SocialIcon({ name, url }: Props) {
  const resolved = resolveName(name, url);
  const title = resolved.charAt(0).toUpperCase() + resolved.slice(1);

  return (
    <a
      className="social"
      href={url}
      target="_blank"
      rel="noopener"
      aria-label={title}
      title={title}
    >
      {resolved === "instagram" && (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="5"
            ry="5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <circle
            cx="12"
            cy="12"
            r="4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
        </svg>
      )}
      {resolved === "github" && (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 .296a12 12 0 00-3.79 23.4c.6.113.82-.26.82-.577v-2.234c-3.34.726-4.04-1.61-4.04-1.61-.546-1.387-1.334-1.757-1.334-1.757-1.09-.75.082-.735.082-.735 1.205.085 1.84 1.237 1.84 1.237 1.07 1.836 2.807 1.306 3.492.998.108-.787.418-1.307.76-1.607-2.665-.304-5.466-1.367-5.466-6.086 0-1.345.465-2.445 1.235-3.305-.124-.303-.535-1.523.117-3.176 0 0 1.008-.323 3.3 1.265a11.5 11.5 0 016 0c2.29-1.588 3.297-1.265 3.297-1.265.653 1.653.242 2.873.118 3.176.77.86 1.233 1.96 1.233 3.305 0 4.73-2.807 5.78-5.48 6.08.43.37.81 1.1.81 2.22v3.293c0 .318.215.694.825.576A12 12 0 0012 .296z"
          />
        </svg>
      )}
      {resolved === "x" && (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path fill="currentColor" d="M2.5 3h5.2L21.5 21H16.3L2.5 3z" />
          <path fill="currentColor" d="M21.5 3h-5.2L2.5 21h5.2L21.5 3z" />
        </svg>
      )}
      {resolved === "mail" && (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect
            x="3"
            y="5"
            width="18"
            height="14"
            rx="2"
            ry="2"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M4 7l8 6 8-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      )}
    </a>
  );
}
