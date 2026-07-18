import { Link } from 'react-router-dom';
import { Compass } from 'lucide-react';
import { useSeo } from '../hooks/useSeo';

export function NotFoundPage() {
  useSeo('Page Not Found');

  return (
    <div className="container-content flex flex-col items-center gap-4 py-24 text-center">
      <Compass className="h-12 w-12 text-stone-400" aria-hidden="true" />
      <h1 className="text-3xl font-bold tracking-tight text-stone-900 dark:text-white">
        Page not found
      </h1>
      <p className="max-w-md text-stone-600 dark:text-stone-400">
        The page you are looking for doesn't exist or may have moved.
      </p>
      <Link to="/" className="btn-primary mt-2">
        Back to home
      </Link>
    </div>
  );
}
