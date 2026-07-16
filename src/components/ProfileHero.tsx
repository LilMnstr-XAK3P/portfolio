import { Link } from 'react-router-dom';
import { FileText, FolderOpen, Mail, GraduationCap, UserRound } from 'lucide-react';
import { profile } from '../data/profile';

export function ProfileHero() {
  return (
    <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white dark:border-slate-800 dark:from-slate-900 dark:to-slate-950">
      <div className="container-content grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-[1fr_auto]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-700 dark:text-brand-400">
            {profile.institution}
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            {profile.name}
          </h1>
          <p className="mt-3 text-xl font-medium text-slate-700 dark:text-slate-300">
            {profile.primaryTitle}
          </p>
          <p className="mt-2 inline-flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
            <GraduationCap className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            {profile.doctoralProgram}
          </p>
          <p className="mt-4 max-w-2xl text-sm font-medium tracking-wide text-slate-500 dark:text-slate-400">
            {profile.focusStatement}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/cv"
              className="inline-flex items-center gap-2 rounded-lg bg-brand-700 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-800 dark:bg-brand-600 dark:hover:bg-brand-500"
            >
              <FileText className="h-4 w-4" aria-hidden="true" />
              View Curriculum Vitae
            </Link>
            <Link
              to="/teaching"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              <FolderOpen className="h-4 w-4" aria-hidden="true" />
              Explore Professional Work
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              Contact
            </Link>
          </div>
        </div>

        <div className="justify-self-center lg:justify-self-end">
          {profile.headshot ? (
            <img
              src={import.meta.env.BASE_URL + profile.headshot}
              alt={`Professional headshot of ${profile.name}`}
              className="h-48 w-48 rounded-2xl border border-slate-200 object-cover shadow-sm dark:border-slate-700 sm:h-56 sm:w-56"
            />
          ) : (
            <div
              role="img"
              aria-label="Professional headshot placeholder"
              className="flex h-48 w-48 items-center justify-center rounded-2xl border border-slate-200 bg-slate-100 text-slate-400 shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-600 sm:h-56 sm:w-56"
            >
              <UserRound className="h-20 w-20" aria-hidden="true" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
