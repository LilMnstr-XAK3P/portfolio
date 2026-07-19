import { useState } from 'react';
import { CalendarClock, Check, Copy, Mail, QrCode } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { ExternalLink } from '../components/ExternalLink';
import { useSeo } from '../hooks/useSeo';
import { profile, socialLinks } from '../data/profile';
import { siteConfig } from '../data/siteConfig';

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

      {/* Book an appointment */}
      {profile.bookingUrl && (
        <section aria-labelledby="booking-heading">
          <div className="card border-emerald-200/70 bg-emerald-50 p-6 dark:border-emerald-900/60 dark:bg-emerald-950/30">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="rounded-lg bg-white p-2.5 text-brand-700 dark:bg-stone-900 dark:text-brand-400">
                  <CalendarClock className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <h2
                    id="booking-heading"
                    className="text-xl font-bold text-stone-900 dark:text-white"
                  >
                    Book an Appointment
                  </h2>
                  <p className="mt-1 max-w-md text-sm text-stone-600 dark:text-stone-400">
                    Schedule office hours or a meeting online — appointments are held through
                    Microsoft Teams.
                  </p>
                </div>
              </div>
              <a
                href={profile.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <CalendarClock className="h-4 w-4" aria-hidden="true" />
                Schedule online
              </a>
            </div>
          </div>
        </section>
      )}

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

      {/* QR code */}
      <section aria-labelledby="qr-heading">
        <h2 id="qr-heading" className="mb-4 text-xl font-bold text-stone-900 dark:text-white">
          Share This Site
        </h2>
        <div className="card flex flex-wrap items-center gap-6 p-6">
          <img
            src={`${import.meta.env.BASE_URL}images/portfolio-qr.png`}
            alt={`QR code linking to ${siteConfig.siteUrl}`}
            className="h-36 w-36 rounded-lg border border-stone-200 bg-white p-1 dark:border-stone-700"
          />
          <div className="min-w-48 flex-1">
            <p className="text-sm leading-relaxed text-stone-600 dark:text-stone-400">
              Scan to open this portfolio, or download the QR code for slides, posters, and
              conference materials.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href={`${import.meta.env.BASE_URL}images/portfolio-qr.png`}
                download="Lily-Morningstar-portfolio-qr.png"
                className="btn-secondary !py-2"
              >
                <QrCode className="h-4 w-4" aria-hidden="true" />
                PNG
              </a>
              <a
                href={`${import.meta.env.BASE_URL}images/portfolio-qr.svg`}
                download="Lily-Morningstar-portfolio-qr.svg"
                className="btn-secondary !py-2"
              >
                <QrCode className="h-4 w-4" aria-hidden="true" />
                SVG (print quality)
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
