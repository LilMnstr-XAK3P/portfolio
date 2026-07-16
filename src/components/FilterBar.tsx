import type { ReactNode } from 'react';

export interface FilterSelectProps {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
  allLabel?: string;
}

/** Labeled select used inside the FilterBar. Empty string means "all". */
export function FilterSelect({
  label,
  value,
  options,
  onChange,
  allLabel = 'All',
}: FilterSelectProps) {
  const id = `filter-${label.toLowerCase().replace(/\s+/g, '-')}`;
  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor={id}
        className="text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400"
      >
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-lg border border-slate-300 bg-white px-2.5 py-2 text-sm text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
      >
        <option value="">{allLabel}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

interface FilterBarProps {
  children: ReactNode;
  onClear?: () => void;
  showClear?: boolean;
}

export function FilterBar({ children, onClear, showClear }: FilterBarProps) {
  return (
    <div className="card flex flex-wrap items-end gap-4 p-4">
      {children}
      {showClear && onClear && (
        <button
          type="button"
          onClick={onClear}
          className="rounded-lg border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
        >
          Clear filters
        </button>
      )}
    </div>
  );
}
