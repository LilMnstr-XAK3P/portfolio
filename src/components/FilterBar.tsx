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
        className="text-xs font-medium uppercase tracking-wide text-stone-500 dark:text-stone-400"
      >
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-lg border border-stone-300 bg-white px-2.5 py-2 text-sm text-stone-900 dark:border-stone-700 dark:bg-stone-900 dark:text-white"
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
        <button type="button" onClick={onClear} className="btn-secondary !py-2">
          Clear filters
        </button>
      )}
    </div>
  );
}
