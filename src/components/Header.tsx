import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // Close the mobile menu after navigation.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `whitespace-nowrap rounded-md px-2.5 py-1.5 text-sm font-medium transition-colors ${
      isActive
        ? 'bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-white'
        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800/60 dark:hover:text-white'
    }`;

  return (
    <header className="no-print sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-50 focus:rounded focus:bg-brand-700 focus:px-3 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>
      <div className="container-content flex h-14 items-center justify-between gap-4">
        <NavLink
          to="/"
          className="flex items-center gap-2 font-semibold text-slate-900 dark:text-white"
        >
          <ShieldCheck className="h-6 w-6 text-brand-600 dark:text-brand-400" aria-hidden="true" />
          <span>Lily Morningstar</span>
        </NavLink>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="rounded-md p-2 text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <nav aria-label="Primary" className="hidden lg:block">
        <div className="container-content flex flex-wrap items-center gap-0.5 pb-2">
          {siteConfig.nav.map((item) => (
            <NavLink key={item.path} to={item.path} className={linkClass} end={item.path === '/'}>
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Primary mobile"
          className="border-t border-slate-200 bg-white px-4 pb-4 pt-2 dark:border-slate-800 dark:bg-slate-950 lg:hidden"
        >
          <ul className="flex flex-col gap-1">
            {siteConfig.nav.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  end={item.path === '/'}
                  className={({ isActive }) =>
                    `block rounded-md px-3 py-2 text-base font-medium ${
                      isActive
                        ? 'bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-white'
                        : 'text-slate-600 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800/60'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
