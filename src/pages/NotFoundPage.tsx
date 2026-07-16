import { Link } from 'react-router-dom';
import { Compass } from 'lucide-react';
import { useSeo } from '../hooks/useSeo';

export function NotFoundPage() {
  useSeo('Page Not Found');

  return (
    <div className="container-content flex flex-col items-center gap-4 py-24 text-center">
      <Compass className="h-12 w-12 text-slate-400" aria-hidden="true" />
      <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
        Page not found
      </h1>
      <p className="max-w-md text-slate-600 dark:text-slate-400">
        The page you are looking for doesn't exist or may have moved.
      </p>
      <Link
        to="/"
        className="mt-2 inline-flex items-center gap-2 rounded-lg bg-brand-700 px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-800 dark:bg-brand-600 dark:hover:bg-brand-500"
      >
        Back to home
      </Link>
    </div>
  );
}
