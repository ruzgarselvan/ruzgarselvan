"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export function LightboxImage({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: string;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      document.body.classList.remove("noscroll");
      return;
    }
    document.body.classList.add("noscroll");
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("noscroll");
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <figure>
      <Image
        src={src}
        alt={alt}
        width={1280}
        height={854}
        sizes="(max-width:900px) 100vw, 80vw"
        className="lightbox-trigger"
        onClick={() => setOpen(true)}
      />
      {caption ? <figcaption className="muted">{caption}</figcaption> : null}

      {open ? (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setOpen(false)}>
          <div className="lightbox-backdrop" />
          <Image
            className="lightbox-img"
            src={src}
            alt={alt}
            width={1600}
            height={1200}
            sizes="(max-width:900px) 92vw, 70vw"
          />
          <a
            className="lb-ctrl lb-open"
            href={src}
            target="_blank"
            rel="noopener"
            aria-label="Orijinali aç"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      ) : null}
    </figure>
  );
}
