import { useState } from 'react';
import { Check, Copy, Mail } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { ExternalLink } from '../components/ExternalLink';
import { useSeo } from '../hooks/useSeo';
import { profile, socialLinks } from '../data/profile';

function CopyEmailButton({ address }: { address: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable — the mailto link still works */
    }
  };

  return (
    <button type="button" onClick={copy} className="btn-secondary !px-4 !py-1.5" aria-live="polite">
      {copied ? (
        <>
          <Check className="h-4 w-4 text-emerald-600" aria-hidden="true" />
          Copied
        </>
      ) : (
        <>
          <Copy className="h-4 w-4" aria-hidden="true" />
          Copy
        </>
      )}
    </button>
  );
}

export function ContactPage() {
  useSeo(
    'Contact',
    `Contact ${profile.name} for collaboration, speaking, media, and academic partnerships.`,
  );

  const activeSocial = socialLinks.filter((s) => s.url);
  const pendingSocial = socialLinks.filter((s) => !s.url);

  return (
    <div className="container-content max-w-3xl space-y-10 py-10">
      <SectionHeading
        as="h1"
        title="Contact"
        subtitle="Open to collaboration on cybersecurity education, AI in higher education, curriculum development, grant partnerships, student success initiatives, and media inquiries."
      />

      {/* Email */}
      <section aria-labelledby="email-heading">
        <h2 id="email-heading" className="mb-4 text-xl font-bold text-stone-900 dark:text-white">
          Email
        </h2>
        <div className="space-y-3">
          {profile.emails.map((email) => (
            <div
              key={email.address}
              className="card flex flex-wrap items-center justify-between gap-3 p-4"
            >
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-stone-500 dark:text-stone-400">
                  {email.label}
                </p>
                <a
                  href={`mailto:${email.address}`}
                  className="link inline-flex items-center gap-1.5"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  {email.address}
                </a>
              </div>
              <CopyEmailButton address={email.address} />
            </div>
          ))}
        </div>
      </section>

      {/* Institution */}
      <section aria-labelledby="institution-heading">
        <h2
          id="institution-heading"
          className="mb-4 text-xl font-bold text-stone-900 dark:text-white"
        >
          Institution
        </h2>
        <div className="card p-4">
          <p className="font-medium text-stone-900 dark:text-white">{profile.institution}</p>
          <p className="text-sm text-stone-600 dark:text-stone-400">{profile.primaryTitle}</p>
        </div>
      </section>

      {/* Profiles */}
      <section aria-labelledby="profiles-heading">
        <h2 id="profiles-heading" className="mb-4 text-xl font-bold text-stone-900 dark:text-white">
          Professional Profiles
        </h2>
        <ul className="space-y-2">
          {activeSocial.map((s) => (
            <li key={s.id} className="card flex items-center justify-between p-4">
              <span className="font-medium text-stone-900 dark:text-white">{s.label}</span>
              <ExternalLink href={s.url} className="link text-sm">
                View profile
              </ExternalLink>
            </li>
          ))}
          {pendingSocial.map((s) => (
            <li key={s.id} className="card flex items-center justify-between border-dashed p-4">
              <span className="font-medium text-stone-500 dark:text-stone-400">{s.label}</span>
              <span className="text-sm text-stone-400 dark:text-stone-500">Coming soon</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
