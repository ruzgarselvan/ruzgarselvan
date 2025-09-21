"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { PortfolioGalleryItem } from "@/data/portfolio";

export function Gallery({
  items,
  detailBasePath,
}: {
  items: PortfolioGalleryItem[];
  detailBasePath: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const currentItem = useMemo(
    () => (openIndex === null ? null : items[openIndex]),
    [openIndex, items]
  );

  const close = useCallback(() => setOpenIndex(null), []);
  const showPrev = useCallback(
    () =>
      setOpenIndex((prev) =>
        prev === null ? null : (prev - 1 + items.length) % items.length
      ),
    [items.length]
  );
  const showNext = useCallback(
    () =>
      setOpenIndex((prev) =>
        prev === null ? null : (prev + 1) % items.length
      ),
    [items.length]
  );

  useEffect(() => {
    if (openIndex === null) {
      document.body.classList.remove("noscroll");
      return;
    }

    document.body.classList.add("noscroll");
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
      } else if (event.key === "ArrowLeft") {
        showPrev();
      } else if (event.key === "ArrowRight") {
        showNext();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.classList.remove("noscroll");
      window.removeEventListener("keydown", handleKey);
    };
  }, [close, openIndex, showNext, showPrev]);

  return (
    <>
      <div className="grid cols-1 reveal" id="portfolioGrid">
        {items.map((item, index) => (
          <div key={item.slug} className="card media gallery horizontal">
            <div className="thumb">
              <Image
                src={item.thumbnail}
                alt={item.title}
                width={768}
                height={512}
                loading="lazy"
                decoding="async"
                onClick={() => setOpenIndex(index)}
                className="lightbox-trigger"
                sizes="(max-width:900px) 100vw, 50vw"
              />
              <div className="caption">
                <span className="cap-title">{item.title}</span>
              </div>
            </div>
            <div className="meta">
              <div>
                <h3>{item.title}</h3>
                <div className="muted">{item.category}</div>
              </div>
              <Link
                className="btn ghost small"
                href={`${detailBasePath}/${item.slug}`}
                aria-label="Detay sayfası"
              >
                Detay
              </Link>
            </div>
          </div>
        ))}
      </div>

      {currentItem ? (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={close}>
          <div className="lightbox-backdrop" />
          <button
            className="lb-ctrl lb-prev"
            onClick={(event) => {
              event.stopPropagation();
              showPrev();
            }}
            aria-label="Önceki"
          >
            ‹
          </button>
          <Image
            className="lightbox-img"
            src={currentItem.image}
            alt={currentItem.title}
            width={1600}
            height={1200}
            sizes="(max-width:900px) 92vw, 70vw"
          />
          <Link
            className="lb-ctrl lb-open"
            href={currentItem.image}
            target="_blank"
            rel="noopener"
            aria-label="Orijinali aç"
            onClick={(event) => event.stopPropagation()}
          />
          <button
            className="lb-ctrl lb-next"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            aria-label="Sonraki"
          >
            ›
          </button>
        </div>
      ) : null}
    </>
  );
}
