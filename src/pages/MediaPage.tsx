import { CalendarDays, Newspaper, Tv } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { ExternalLink } from '../components/ExternalLink';
import { EmptyState } from '../components/EmptyState';
import { useSeo } from '../hooks/useSeo';
import { mediaItems, outreachKinds } from '../data/media';
import { publicOnly, sortByDateDesc } from '../lib/dataUtils';

export function MediaPage() {
  useSeo(
    'Media & Outreach',
    'Television interviews, LinkedIn articles, community presentations, and cybersecurity outreach.',
  );

  const visible = sortByDateDesc(publicOnly(mediaItems));
  const featured = visible.find((m) => m.id === 'insomniac-tv-interview');
  const articles = visible.filter((m) => m.id !== 'insomniac-tv-interview');
  const remainingKinds = outreachKinds.filter((kind) => !visible.some((m) => m.kind === kind));

  return (
    <div className="container-content space-y-14 py-10">
      <SectionHeading
        as="h1"
        title="Media & Outreach"
        subtitle="Public communication about cybersecurity education, careers, and the CSN program."
      />

      {/* Featured interview */}
      {featured && (
        <section aria-labelledby="featured-media-heading">
          <article className="card overflow-hidden">
            <div className="border-b border-stone-200 bg-stone-50 p-6 dark:border-stone-800 dark:bg-stone-900/60">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-brand-50 p-2.5 text-brand-700 dark:bg-brand-900/40 dark:text-brand-400">
                  <Tv className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <h2
                    id="featured-media-heading"
                    className="text-2xl font-bold tracking-tight text-stone-900 dark:text-white"
                  >
                    {featured.title}
                  </h2>
                  <p className="text-sm text-stone-600 dark:text-stone-400">
                    {featured.outlet}
                    {featured.host ? ` · Hosted by ${featured.host}` : ''}
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-4 p-6">
              <p className="inline-flex items-center gap-1.5 text-sm text-stone-500 dark:text-stone-400">
                <CalendarDays className="h-4 w-4" aria-hidden="true" />
                {featured.displayDate}
              </p>
              <p className="max-w-3xl leading-relaxed text-stone-700 dark:text-stone-300">
                {featured.summary}
              </p>
              {featured.topics && (
                <div>
                  <h3 className="font-semibold text-stone-900 dark:text-white">Topics</h3>
                  <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-stone-600 dark:text-stone-400">
                    {featured.topics.map((topic) => (
                      <li key={topic}>{topic}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </article>
        </section>
      )}

      {/* Articles and other outreach */}
      <section aria-labelledby="outreach-heading">
        <SectionHeading id="outreach-heading" title="Articles & Additional Outreach" />
        <div className="grid gap-4 md:grid-cols-2">
          {articles.map((item) => (
            <article key={item.id} className="card p-5">
              <p className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-brand-700 dark:text-brand-400">
                <Newspaper className="h-3.5 w-3.5" aria-hidden="true" />
                {item.kind}
              </p>
              <h3 className="mt-1.5 font-semibold text-stone-900 dark:text-white">
                {item.url ? (
                  <ExternalLink href={item.url} className="hover:underline">
                    {item.title}
                  </ExternalLink>
                ) : (
                  item.title
                )}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
                {item.summary}
              </p>
              {item.url && (
                <p className="mt-3">
                  <ExternalLink href={item.url} className="link text-sm">
                    Read on {item.outlet}
                  </ExternalLink>
                </p>
              )}
            </article>
          ))}
        </div>

        {remainingKinds.length > 0 && (
          <div className="mt-6">
            <EmptyState
              title="More outreach categories ready for content"
              message="These outreach types will appear here as items are added to src/data/media.ts."
              hints={[...remainingKinds]}
            />
          </div>
        )}
      </section>
    </div>
  );
}
