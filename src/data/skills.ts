export type SkillIconKey =
  | "html5"
  | "tailwind"
  | "javascript"
  | "typescript"
  | "react"
  | "nextjs"
  | "photoshop"
  | "premiere";

export type SkillItem = {
  name: string;
  icon: SkillIconKey;
};

export type SkillGroup = {
  category: string;
  items: SkillItem[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    items: [
      { name: "HTML5", icon: "html5" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "JavaScript", icon: "javascript" },
      { name: "TypeScript", icon: "typescript" },
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
    ],
  },
  {
    category: "Medya",
    items: [
      { name: "Adobe Photoshop", icon: "photoshop" },
      { name: "Adobe Premiere Pro", icon: "premiere" },
    ],
  },
];
