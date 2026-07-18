import { FlaskConical } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { TagChip } from '../components/TagChip';
import { EmptyState } from '../components/EmptyState';
import { useSeo } from '../hooks/useSeo';
import {
  researchInterests,
  doctoralPreparation,
  currentResearch,
  researchWorks,
} from '../data/research';
import { publicOnly } from '../lib/dataUtils';

export function ResearchPage() {
  useSeo(
    'Research',
    'Research interests, doctoral preparation, and research in development on women in cybersecurity competitions.',
  );

  const works = publicOnly(researchWorks);

  return (
    <div className="container-content space-y-14 py-10">
      <SectionHeading
        as="h1"
        title="Research"
        subtitle="Doctoral research at the intersection of cybersecurity education, competition-based learning, and inclusive learning environments."
      />

      {/* Research interests */}
      <section aria-labelledby="research-interests-heading">
        <SectionHeading id="research-interests-heading" title="Research Interests" />
        <ul className="flex flex-wrap gap-2">
          {researchInterests.map((interest) => (
            <li key={interest}>
              <TagChip label={interest} />
            </li>
          ))}
        </ul>
      </section>

      {/* Doctoral preparation */}
      <section aria-labelledby="doctoral-prep-heading">
        <SectionHeading
          id="doctoral-prep-heading"
          title="Doctoral Preparation"
          subtitle="Ph.D. coursework in Curriculum and Instruction (Interaction and Media Sciences) at UNLV — 33 doctoral credits completed."
        />
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {doctoralPreparation.map((area) => (
            <li key={area} className="card p-4 font-medium text-stone-800 dark:text-stone-200">
              {area}
            </li>
          ))}
        </ul>
      </section>

      {/* Current research direction */}
      <section aria-labelledby="current-research-heading">
        <SectionHeading id="current-research-heading" title="Current Research Direction" />
        <article className="card border-l-4 border-l-brand-600 p-6 dark:border-l-brand-400">
          <div className="flex items-center gap-2">
            <FlaskConical
              className="h-5 w-5 text-brand-700 dark:text-brand-400"
              aria-hidden="true"
            />
            <span className="inline-flex rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-semibold text-amber-800 dark:bg-amber-900/40 dark:text-amber-300">
              {currentResearch.label}
            </span>
          </div>
          <h3 className="mt-3 text-lg font-semibold text-stone-900 dark:text-white">
            {currentResearch.title}
          </h3>
          <p className="mt-2 leading-relaxed text-stone-700 dark:text-stone-300">
            {currentResearch.description}
          </p>
        </article>
      </section>

      {/* Publications and presentations */}
      <section aria-labelledby="publications-heading">
        <SectionHeading
          id="publications-heading"
          title="Publications & Presentations"
          subtitle="Peer-reviewed and professional dissemination of this work."
        />
        {works.length === 0 ? (
          <EmptyState
            title="Publications and presentations forthcoming"
            message="Published and presented work will appear here as the doctoral research develops. Entries are added through the structured data file src/data/research.ts."
            hints={[
              'Add publication',
              'Add presentation',
              'Add conference session',
              'Add article',
              'Add poster',
            ]}
          />
        ) : (
          <ul className="space-y-3">
            {works.map((work) => (
              <li key={work.id} className="card p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-700 dark:text-brand-400">
                  {work.kind.replace('-', ' ')}
                </p>
                <h3 className="mt-1 font-semibold text-stone-900 dark:text-white">
                  {work.url ? (
                    <a href={work.url} className="link" target="_blank" rel="noopener noreferrer">
                      {work.title}
                    </a>
                  ) : (
                    work.title
                  )}
                </h3>
                <p className="text-sm text-stone-500 dark:text-stone-400">
                  {[work.venue, work.date, work.status].filter(Boolean).join(' · ')}
                </p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
