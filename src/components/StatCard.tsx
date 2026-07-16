interface StatCardProps {
  value: string | number;
  label: string;
  note?: string;
}

export function StatCard({ value, label, note }: StatCardProps) {
  return (
    <div className="card p-5 text-center">
      <p className="text-3xl font-bold tracking-tight text-brand-700 dark:text-brand-400">
        {value}
      </p>
      <p className="mt-1 text-sm font-medium text-slate-700 dark:text-slate-300">{label}</p>
      {note && <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{note}</p>}
    </div>
  );
}
