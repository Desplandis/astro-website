/**
 * Format a date for display
 * @param date - Date to format
 * @param format - Format type ('long' | 'short')
 * @returns Formatted date string
 */
export function formatDate(
  date: Date,
  format: 'long' | 'short' = 'long'
): string {
  const options: Intl.DateTimeFormatOptions =
    format === 'long'
      ? { year: 'numeric', month: 'long', day: 'numeric' }
      : { year: 'numeric', month: 'short', day: 'numeric' };

  return new Intl.DateTimeFormat('en-US', options).format(date);
}

/**
 * Sort dates in descending order (newest first)
 */
export function sortByDateDesc<T extends { data: { publishDate: Date } }>(
  items: T[]
): T[] {
  return items.sort(
    (a, b) => b.data.publishDate.getTime() - a.data.publishDate.getTime()
  );
}

/**
 * Filter out draft content
 */
export function filterDrafts<T extends { data: { draft?: boolean } }>(
  items: T[]
): T[] {
  return items.filter((item) => !item.data.draft);
}

