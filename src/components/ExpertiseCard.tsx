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

interface ExpertiseCardProps {
  title: string;
  description: string;
  icon: string;
}

export function ExpertiseCard({ title, description, icon }: ExpertiseCardProps) {
  const Icon = icons[icon] ?? ShieldCheck;
  return (
    <article className="card p-5">
      <div className="inline-flex rounded-lg bg-brand-50 p-2.5 text-brand-700 dark:bg-brand-900/40 dark:text-brand-400">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <h3 className="mt-3 font-semibold text-slate-900 dark:text-white">{title}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
        {description}
      </p>
    </article>
  );
}
