import { Briefcase, GraduationCap } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { TagChip } from '../components/TagChip';
import { DownloadButton } from '../components/DownloadButton';
import { useSeo } from '../hooks/useSeo';
import { profile } from '../data/profile';
import { education } from '../data/education';
import { experience } from '../data/experience';
import { skillGroups } from '../data/skills';
import { researchInterests } from '../data/research';
import { siteConfig } from '../data/siteConfig';
import { publicOnly } from '../lib/dataUtils';

export function AboutPage() {
  useSeo('About', `Professional biography, education, and competencies of ${profile.name}.`);

  return (
    <div className="container-content space-y-14 py-10">
      {/* Biography */}
      <section aria-labelledby="bio-heading">
        <SectionHeading id="bio-heading" as="h1" title="About" />
        <div className="max-w-3xl space-y-4 leading-relaxed text-slate-700 dark:text-slate-300">
          {profile.bio.split('\n\n').map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
        <div className="mt-6">
          <DownloadButton path={siteConfig.cvFiles.pdf} label="Download CV (PDF)" />
        </div>
      </section>

      {/* Education */}
      <section aria-labelledby="education-heading">
        <SectionHeading id="education-heading" title="Education" />
        <div className="grid gap-4 md:grid-cols-2">
          {publicOnly(education).map((entry) => (
            <article key={entry.id} className="card p-5">
              <div className="flex items-start gap-3">
                <div className="rounded-lg bg-brand-50 p-2 text-brand-700 dark:bg-brand-900/40 dark:text-brand-400">
                  <GraduationCap className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">{entry.degree}</h3>
                  {entry.specialization && (
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {entry.specialization}
                    </p>
                  )}
                  <p className="mt-0.5 text-sm font-medium text-slate-700 dark:text-slate-300">
                    {entry.institution}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {[entry.status, entry.year, entry.expected].filter(Boolean).join(' · ')}
                  </p>
                  {entry.notes?.map((note) => (
                    <p key={note} className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                      {note}
                    </p>
                  ))}
                  {entry.focusAreas && (
                    <ul className="mt-2 flex flex-wrap gap-1.5" aria-label="Focus areas">
                      {entry.focusAreas.map((area) => (
                        <li key={area}>
                          <TagChip label={area} />
                        </li>
                      ))}
                    </ul>
                  )}
                  {entry.capstone && (
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                      <span className="font-medium text-slate-700 dark:text-slate-300">
                        Capstone:
                      </span>{' '}
                      {entry.capstone}
                    </p>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Professional experience */}
      <section aria-labelledby="experience-heading">
        <SectionHeading id="experience-heading" title="Professional Experience" />
        <div className="space-y-4">
          {publicOnly(experience).map((entry) => (
            <article key={entry.id} className="card p-5">
              <div className="flex items-start gap-3">
                <div className="rounded-lg bg-brand-50 p-2 text-brand-700 dark:bg-brand-900/40 dark:text-brand-400">
                  <Briefcase className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                    <h3 className="font-semibold text-slate-900 dark:text-white">{entry.role}</h3>
                    <p className="shrink-0 text-sm font-medium text-slate-500 dark:text-slate-400">
                      {entry.period}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    {[entry.organization, entry.location].filter(Boolean).join(' — ')}
                  </p>
                  {entry.summary && (
                    <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                      {entry.summary}
                    </p>
                  )}
                  {entry.details && (
                    <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-slate-600 dark:text-slate-400">
                      {entry.details.map((d) => (
                        <li key={d}>{d}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Philosophies */}
      <section aria-labelledby="philosophy-heading" className="grid gap-4 md:grid-cols-2">
        <div className="card p-6">
          <h2 id="philosophy-heading" className="text-xl font-bold text-slate-900 dark:text-white">
            Professional Philosophy
          </h2>
          <p className="mt-3 leading-relaxed text-slate-700 dark:text-slate-300">
            {profile.professionalPhilosophy}
          </p>
        </div>
        <div className="card p-6">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">Teaching Philosophy</h2>
          <p className="mt-3 leading-relaxed text-slate-700 dark:text-slate-300">
            {profile.teachingPhilosophy}
          </p>
        </div>
      </section>

      {/* Research interests */}
      <section aria-labelledby="interests-heading">
        <SectionHeading id="interests-heading" title="Research Interests" />
        <ul className="flex flex-wrap gap-2">
          {researchInterests.map((interest) => (
            <li key={interest}>
              <TagChip label={interest} />
            </li>
          ))}
        </ul>
      </section>

      {/* Core competencies */}
      <section aria-labelledby="competencies-heading">
        <SectionHeading id="competencies-heading" title="Core Competencies" />
        <div className="grid gap-4 md:grid-cols-2">
          {publicOnly(skillGroups).map((group) => (
            <article key={group.id} className="card p-5">
              <h3 className="font-semibold text-slate-900 dark:text-white">{group.title}</h3>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <li key={skill}>
                    <TagChip label={skill} />
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* Affiliations */}
      <section aria-labelledby="affiliations-heading">
        <SectionHeading id="affiliations-heading" title="Professional Affiliations" />
        <ul className="card list-inside list-disc space-y-2 p-6 text-slate-700 dark:text-slate-300">
          {profile.affiliations.map((affiliation) => (
            <li key={affiliation}>{affiliation}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
