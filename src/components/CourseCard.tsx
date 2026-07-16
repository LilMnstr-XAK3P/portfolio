import type { Course } from '../data/types';

export function CourseCard({ course }: { course: Course }) {
  return (
    <article className="card p-4">
      <p className="text-xs font-semibold uppercase tracking-wide text-brand-700 dark:text-brand-400">
        {course.code}
      </p>
      <h4 className="mt-0.5 font-semibold text-slate-900 dark:text-white">{course.title}</h4>
      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{course.terms}</p>
      {course.description && (
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{course.description}</p>
      )}
    </article>
  );
}
