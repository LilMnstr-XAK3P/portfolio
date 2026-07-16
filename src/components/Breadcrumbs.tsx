import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

/** Breadcrumb trail derived from the current route. Hidden on the home page. */
export function Breadcrumbs() {
  const { pathname } = useLocation();
  if (pathname === '/') return null;

  const current = siteConfig.nav.find((item) => item.path === pathname);
  const label = current?.label ?? 'Page not found';

  return (
    <nav aria-label="Breadcrumb" className="no-print container-content pt-6">
      <ol className="flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
        <li>
          <Link to="/" className="hover:text-slate-900 dark:hover:text-white">
            Home
          </Link>
        </li>
        <li aria-hidden="true">
          <ChevronRight className="h-3.5 w-3.5" />
        </li>
        <li aria-current="page" className="font-medium text-slate-900 dark:text-white">
          {label}
        </li>
      </ol>
    </nav>
  );
}
