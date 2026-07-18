import type { LucideIcon } from 'lucide-react';
import {
  Terminal,
  ShieldCheck,
  Search,
  Sparkles,
  BookOpen,
  Gamepad2,
  Briefcase,
  BarChart3,
} from 'lucide-react';

const icons: Record<string, LucideIcon> = {
  Terminal,
  ShieldCheck,
  Search,
  Sparkles,
  BookOpen,
  Gamepad2,
  Briefcase,
  BarChart3,
};

/** Pastel card tints cycled by position — mint, sky, lavender, peach. */
const tones = [
  'border-emerald-200/70 bg-emerald-50 dark:border-emerald-900/60 dark:bg-emerald-950/30',
  'border-sky-200/70 bg-sky-50 dark:border-sky-900/60 dark:bg-sky-950/30',
  'border-violet-200/70 bg-violet-50 dark:border-violet-900/60 dark:bg-violet-950/30',
  'border-orange-200/70 bg-orange-50 dark:border-orange-900/60 dark:bg-orange-950/30',
];

interface ExpertiseCardProps {
  title: string;
  description: string;
  icon: string;
  /** Position in the grid; drives the pastel tint and the 01/02… label. */
  index?: number;
}

export function ExpertiseCard({ title, description, icon, index = 0 }: ExpertiseCardProps) {
  const Icon = icons[icon] ?? ShieldCheck;
  return (
    <article className={`rounded-xl border p-5 ${tones[index % tones.length]}`}>
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold tracking-wider text-stone-500 dark:text-stone-400">
          {String(index + 1).padStart(2, '0')}
        </span>
        <Icon className="h-5 w-5 text-stone-600 dark:text-stone-300" aria-hidden="true" />
      </div>
      <h3 className="mt-3 font-semibold text-stone-900 dark:text-white">{title}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
        {description}
      </p>
    </article>
  );
}
