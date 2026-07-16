import type { ProfessionalActivity } from '../data/types';

/** Anything gated by a `public` flag. */
interface MaybePublic {
  public: boolean;
}

/** Keep only records approved for the public site. */
export function publicOnly<T extends MaybePublic>(items: T[]): T[] {
  return items.filter((item) => item.public);
}

/** Sort newest-first by ISO startDate. Does not mutate the input. */
export function sortByDateDesc<T extends { startDate: string }>(items: T[]): T[] {
  return [...items].sort((a, b) => b.startDate.localeCompare(a.startDate));
}

export function filterByCategory<T extends { category: string }>(
  items: T[],
  category: string,
): T[] {
  return items.filter((item) => item.category === category);
}

export function filterByYear<T extends { startDate: string }>(items: T[], year: string): T[] {
  return items.filter((item) => item.startDate.startsWith(year));
}

export function filterByTag<T extends { tags: string[] }>(items: T[], tag: string): T[] {
  return items.filter((item) => item.tags.includes(tag));
}

/**
 * Sum of verified hours. Activities without a numeric `hours` value are
 * excluded — totals only reflect verified duration information.
 */
export function totalVerifiedHours(items: ProfessionalActivity[]): number {
  const total = items.reduce(
    (sum, item) => sum + (typeof item.hours === 'number' ? item.hours : 0),
    0,
  );
  return Math.round(total * 100) / 100;
}

export function totalCeus(items: ProfessionalActivity[]): number {
  return items.reduce((sum, item) => sum + (item.ceus ?? 0), 0);
}

export function featuredItems<T extends { featured?: boolean }>(items: T[]): T[] {
  return items.filter((item) => item.featured);
}

/**
 * Records missing information the owner still needs to supply
 * (no verified hours, or an unresolved TODO in the summary).
 */
export function incompleteRecords(items: ProfessionalActivity[]): ProfessionalActivity[] {
  return items.filter((item) => item.hours === undefined || item.summary.includes('TODO'));
}

/** Distinct values of a string field, sorted alphabetically. */
export function distinctValues<T>(items: T[], pick: (item: T) => string | undefined): string[] {
  const values = new Set<string>();
  for (const item of items) {
    const value = pick(item);
    if (value) values.add(value);
  }
  return [...values].sort();
}

/** Distinct years present in the data, newest first. */
export function distinctYears<T extends { startDate: string }>(items: T[]): string[] {
  return distinctValues(items, (item) => item.startDate.slice(0, 4)).reverse();
}

export interface Searchable {
  title?: string;
  provider?: string;
  organization?: string;
  summary?: string;
  description?: string;
  skills?: string[];
  tags?: string[];
  code?: string;
}

/** Case-insensitive search across the common text fields of any record. */
export function matchesQuery(item: Searchable, query: string): boolean {
  const q = query.trim().toLowerCase();
  if (!q) return true;
  const haystack = [
    item.title,
    item.provider,
    item.organization,
    item.summary,
    item.description,
    item.code,
    ...(item.skills ?? []),
    ...(item.tags ?? []),
  ]
    .filter(Boolean)
    .join(' ')
    .toLowerCase();
  return haystack.includes(q);
}

export function searchItems<T extends Searchable>(items: T[], query: string): T[] {
  return items.filter((item) => matchesQuery(item, query));
}
