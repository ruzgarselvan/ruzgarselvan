export function calculateReadingTime(markdown: string): number {
  const words = markdown.split(/\s+/).filter(Boolean).length;
  const wordsPerMinute = 200;
  return Math.max(1, Math.round(words / wordsPerMinute));
}
