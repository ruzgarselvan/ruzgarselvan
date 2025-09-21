"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

function generateId(text: string) {
  return text
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9çğıöşü\-\s]/g, "")
    .replace(/\s+/g, "-");
}

export function ClientEffects() {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const scrollbar = document.getElementById("scrollbar");

    const onScroll = () => {
      if (!scrollbar) return;
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const progress = scrollHeight - clientHeight;
      const ratio = progress > 0 ? Math.min(scrollTop / progress, 1) : 0;
      scrollbar.style.width = `${ratio * 100}%`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.remove("leaving");
  }, [pathname]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const link = (event.target as HTMLElement).closest("a[href]") as
        | HTMLAnchorElement
        | null;

      if (link) {
        const isInternal =
          link.origin === window.location.origin &&
          !link.hasAttribute("download") &&
          link.target !== "_blank" &&
          !link.hash;

        if (isInternal) {
          event.preventDefault();
          document.body.classList.add("leaving");
          const href = link.pathname + link.search;
          setTimeout(() => {
            router.push(href);
          }, 120);
        }
      }

      const clickable = (event.target as HTMLElement).closest(
        ".btn, .chip, a.card, a.card-link"
      ) as HTMLElement | null;
      if (clickable) {
        const rect = clickable.getBoundingClientRect();
        const ripple = document.createElement("span");
        ripple.className = "ripple";
        const size = Math.max(rect.width, rect.height);
        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${event.clientX - rect.left - size / 2}px`;
        ripple.style.top = `${event.clientY - rect.top - size / 2}px`;
        clickable.appendChild(ripple);
        setTimeout(() => ripple.remove(), 650);
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [router]);

  useEffect(() => {
    const headings = Array.from(
      document.querySelectorAll<HTMLElement>(".prose h2, .prose h3")
    );
    headings.forEach((heading) => {
      const baseText = heading.dataset.title ?? heading.textContent ?? "";
      heading.dataset.title = baseText;
      if (!heading.id) {
        heading.id = generateId(baseText);
      }
      const existingAnchor = heading.querySelector("a.anchor");
      if (!existingAnchor) {
        const anchor = document.createElement("a");
        anchor.href = `#${heading.id}`;
        anchor.textContent = "§";
        anchor.className = "anchor";
        anchor.setAttribute("aria-label", "Bağlantı");
        heading.appendChild(anchor);
      }
    });

    const toc = document.getElementById("tocSimple");
    if (toc) {
      const list = toc.querySelector("ul");
      if (!list) return;
      list.innerHTML = "";
      const h2s = headings.filter((h) => h.tagName === "H2");
      if (!h2s.length) {
        (toc as HTMLElement).style.display = "none";
        return;
      }
      h2s.forEach((h) => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = `#${h.id}`;
        a.textContent = h.dataset.title ?? h.textContent ?? "";
        a.className = "toc-link";
        li.appendChild(a);
        list.appendChild(li);
      });
      (toc as HTMLElement).style.display = "block";
    }
  }, [pathname]);

  return null;
}
