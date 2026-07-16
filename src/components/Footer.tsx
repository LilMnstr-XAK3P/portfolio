import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import { profile, socialLinks } from '../data/profile';
import { siteConfig } from '../data/siteConfig';
import { ExternalLink } from './ExternalLink';

export function Footer() {
  const activeSocial = socialLinks.filter((s) => s.url);

  return (
    <footer className="no-print border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/50">
      <div className="container-content grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <p className="font-semibold text-slate-900 dark:text-white">{profile.name}</p>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{profile.primaryTitle}</p>
          <p className="text-sm text-slate-600 dark:text-slate-400">{profile.institution}</p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
            Contact
          </p>
          <ul className="mt-2 space-y-1 text-sm">
            {profile.emails.map((email) => (
              <li key={email.address}>
                <a
                  href={`mailto:${email.address}`}
                  className="link inline-flex items-center gap-1.5"
                >
                  <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                  {email.address}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
            Profiles
          </p>
          <ul className="mt-2 space-y-1 text-sm">
            {activeSocial.map((s) => (
              <li key={s.id}>
                <ExternalLink href={s.url} className="link">
                  {s.label}
                </ExternalLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200 dark:border-slate-800">
        <div className="container-content flex flex-col gap-2 py-4 text-xs text-slate-500 dark:text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {profile.shortName}. Content maintained in{' '}
            <ExternalLink href={siteConfig.repoUrl} className="link">
              version-controlled data files
            </ExternalLink>
            .
          </p>
          <p>
            <Link to="/cv" className="link">
              Curriculum Vitae
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
