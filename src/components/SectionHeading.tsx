import type { ReactNode } from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  /** Heading level; defaults to h2. */
  as?: 'h1' | 'h2' | 'h3';
  id?: string;
  children?: ReactNode;
}

export function SectionHeading({
  title,
  subtitle,
  as: Tag = 'h2',
  id,
  children,
}: SectionHeadingProps) {
  return (
    <div className="mb-6">
      <Tag
        id={id}
        className={`font-bold tracking-tight text-slate-900 dark:text-white ${
          Tag === 'h1' ? 'text-3xl sm:text-4xl' : Tag === 'h2' ? 'text-2xl sm:text-3xl' : 'text-xl'
        }`}
      >
        {title}
      </Tag>
      {subtitle && <p className="mt-2 max-w-3xl text-slate-600 dark:text-slate-400">{subtitle}</p>}
      {children}
    </div>
  );
}
