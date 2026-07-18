import { Award, CalendarDays, Clock } from 'lucide-react';
import type { ProfessionalActivity } from '../data/types';
import { TagChip } from './TagChip';
import { EvidenceIndicator } from './EvidenceIndicator';

interface ActivityCardProps {
  activity: ProfessionalActivity;
}

export function ActivityCard({ activity }: ActivityCardProps) {
  return (
    <article className="card p-5">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div>
          <h3 className="font-semibold text-stone-900 dark:text-white">{activity.title}</h3>
          <p className="mt-0.5 text-sm text-stone-600 dark:text-stone-400">
            {[activity.provider ?? activity.organization, activity.format]
              .filter(Boolean)
              .join(' · ')}
          </p>
        </div>
        <span className="inline-flex items-center rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-medium text-brand-800 dark:bg-brand-900/40 dark:text-brand-300">
          {activity.category}
        </span>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-stone-700 dark:text-stone-300">
        {activity.summary}
      </p>

      <dl className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-stone-500 dark:text-stone-400">
        <div className="inline-flex items-center gap-1">
          <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
          <dt className="sr-only">Date</dt>
          <dd>{activity.displayDate}</dd>
        </div>
        {typeof activity.hours === 'number' && (
          <div className="inline-flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
            <dt className="sr-only">Hours</dt>
            <dd>
              {activity.hours} {activity.hours === 1 ? 'hour' : 'hours'}
              {activity.ceus ? ` · ${activity.ceus} CEUs` : ''}
            </dd>
          </div>
        )}
        {activity.certificate && (
          <div className="inline-flex items-center gap-1 text-brand-700 dark:text-brand-400">
            <Award className="h-3.5 w-3.5" aria-hidden="true" />
            <dt className="sr-only">Certificate</dt>
            <dd>Certificate</dd>
          </div>
        )}
        <EvidenceIndicator
          evidence={activity.evidence}
          evidencePrivate={activity.evidencePrivate}
        />
      </dl>

      {activity.tags.length > 0 && (
        <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Tags">
          {activity.tags.map((tag) => (
            <li key={tag}>
              <TagChip label={tag} />
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
