import { marked } from "marked";


export function renderMarkdown(markdown: string): string {
  return marked.parse(markdown) as string;
}

export function stripMarkdown(markdown: string): string {
  return markdown
    .replace(/```[\s\S]*?```/g, "")
    .replace(/`[^`]*`/g, "")
    .replace(/\[([^\]]+)\]\([^\)]+\)/g, "$1")
    .replace(/[*_~>#-]/g, "")
    .replace(/!\[[^\]]*\]\([^\)]*\)/g, "")
    .replace(/\s+/g, " ")
    .trim();
}
