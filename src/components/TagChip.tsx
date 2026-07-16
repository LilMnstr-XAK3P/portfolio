interface TagChipProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

/** Small pill for tags and skills. Renders a button when onClick is given. */
export function TagChip({ label, active, onClick }: TagChipProps) {
  const base = 'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium';
  const style = active
    ? 'bg-brand-700 text-white dark:bg-brand-500 dark:text-slate-950'
    : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300';

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        aria-pressed={active}
        className={`${base} ${style} transition-colors hover:bg-slate-200 dark:hover:bg-slate-700`}
      >
        {label}
      </button>
    );
  }
  return <span className={`${base} ${style}`}>{label}</span>;
}
