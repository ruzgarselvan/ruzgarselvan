"use client";

import { useState } from "react";
import Image from "next/image";
import type { SkillIconKey } from "@/data/skills";

const iconSize = 28;

type IconMeta = {
  src: string;
  title: string;
};

const iconMap: Record<SkillIconKey, IconMeta> = {
  html5: { src: "/icons/skills/html5.png", title: "HTML5" },
  tailwind: { src: "/icons/skills/tailwind-css.png", title: "Tailwind CSS" },
  javascript: { src: "/icons/skills/javascript.png", title: "JavaScript" },
  typescript: { src: "/icons/skills/typescript.png", title: "TypeScript" },
  react: { src: "/icons/skills/react.png", title: "React" },
  nextjs: { src: "/icons/skills/nextjs.png", title: "Next.js" },
  photoshop: { src: "/icons/skills/adobe-photoshop.png", title: "Adobe Photoshop" },
  premiere: { src: "/icons/skills/adobe-premiere-pro.png", title: "Adobe Premiere Pro" },
};

export function SkillIcon({ icon }: { icon: SkillIconKey }) {
  const data = iconMap[icon];
  const [failed, setFailed] = useState(false);

  if (failed) {
    return null;
  }

  return (
    <span className="skill-icon" aria-hidden="true" title={data.title}>
      <Image
        src={data.src}
        alt=""
        width={iconSize}
        height={iconSize}
        loading="lazy"
        onError={() => setFailed(true)}
      />
    </span>
  );
}
