import { CalendarDays, Landmark } from 'lucide-react';
import type { Contribution } from '../data/types';
import { TagChip } from './TagChip';

export function ContributionCard({ contribution }: { contribution: Contribution }) {
  return (
    <article className="card p-5">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <h3 className="font-semibold text-stone-900 dark:text-white">{contribution.title}</h3>
        {contribution.national && (
          <span className="inline-flex items-center gap-1 rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-medium text-brand-800 dark:bg-brand-900/40 dark:text-brand-300">
            <Landmark className="h-3 w-3" aria-hidden="true" />
            National
          </span>
        )}
      </div>
      <p className="mt-0.5 text-sm text-stone-600 dark:text-stone-400">
        {contribution.organization}
      </p>
      <p className="mt-1 inline-flex items-center gap-1 text-xs text-stone-500 dark:text-stone-400">
        <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
        {contribution.displayDate}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-stone-700 dark:text-stone-300">
        {contribution.summary}
      </p>
      <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-stone-600 dark:text-stone-400">
        {contribution.details.map((detail) => (
          <li key={detail}>{detail}</li>
        ))}
      </ul>
      {contribution.tags.length > 0 && (
        <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Tags">
          {contribution.tags.map((tag) => (
            <li key={tag}>
              <TagChip label={tag} />
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
