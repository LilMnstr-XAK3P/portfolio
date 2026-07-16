import type { LucideIcon } from 'lucide-react';
import { FileText } from 'lucide-react';

interface EmptyStateProps {
  title: string;
  message: string;
  /** Optional short hints, e.g. the kinds of items that can be added. */
  hints?: string[];
  icon?: LucideIcon;
}

export function EmptyState({ title, message, hints, icon: Icon = FileText }: EmptyStateProps) {
  return (
    <div className="card flex flex-col items-center gap-3 border-dashed p-10 text-center">
      <Icon className="h-8 w-8 text-slate-400 dark:text-slate-500" aria-hidden="true" />
      <p className="font-semibold text-slate-900 dark:text-white">{title}</p>
      <p className="max-w-md text-sm text-slate-600 dark:text-slate-400">{message}</p>
      {hints && hints.length > 0 && (
        <ul className="mt-1 flex flex-wrap justify-center gap-2">
          {hints.map((hint) => (
            <li
              key={hint}
              className="rounded-full border border-dashed border-slate-300 px-3 py-1 text-xs text-slate-500 dark:border-slate-700 dark:text-slate-400"
            >
              {hint}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
