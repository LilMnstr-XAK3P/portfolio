import type { ReactNode } from 'react';

interface TimelineItem {
  id: string;
  content: ReactNode;
}

/** Vertical timeline with markers, used for activity histories. */
export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="relative space-y-6 border-l border-stone-200 pl-6 dark:border-stone-800">
      {items.map((item) => (
        <li key={item.id} className="relative">
          <span
            className="absolute -left-[1.85rem] top-2 h-3 w-3 rounded-full border-2 border-white bg-brand-600 dark:border-stone-950 dark:bg-brand-400"
            aria-hidden="true"
          />
          {item.content}
        </li>
      ))}
    </ol>
  );
}
