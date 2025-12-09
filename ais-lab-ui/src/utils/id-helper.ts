export function generateId(title: string): string {
  return title.toLowerCase().replace(/\s+/g, '-');
}
