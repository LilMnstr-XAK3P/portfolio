import { Flag, Trophy } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { TagChip } from '../components/TagChip';
import { EmptyState } from '../components/EmptyState';
import { useSeo } from '../hooks/useSeo';
import { ctfSquad, competitionResults, studentEngagements } from '../data/studentSuccess';
import { publicOnly } from '../lib/dataUtils';

export function StudentSuccessPage() {
  useSeo(
    'Student Success',
    'CSN CTF Squad coaching, National Cyber League results, and student engagement in cybersecurity.',
  );

  const results = publicOnly(competitionResults).filter((r) => r.verified);
  const engagements = publicOnly(studentEngagements);

  return (
    <div className="container-content space-y-14 py-10">
      <SectionHeading
        as="h1"
        title="Student Success"
        subtitle="Coaching, mentoring, and real competition results — preparing CSN students for the cybersecurity workforce."
      />

      {/* CTF Squad */}
      <section aria-labelledby="ctf-heading">
        <div className="card overflow-hidden">
          <div className="border-b border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900/60">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-brand-50 p-2.5 text-brand-700 dark:bg-brand-900/40 dark:text-brand-400">
                <Flag className="h-6 w-6" aria-hidden="true" />
              </div>
              <div>
                <h2
                  id="ctf-heading"
                  className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white"
                >
                  {ctfSquad.name}
                </h2>
                <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                  {ctfSquad.role}
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-5 p-6">
            <p className="max-w-3xl leading-relaxed text-slate-700 dark:text-slate-300">
              {ctfSquad.description}
            </p>

            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white">
                {ctfSquad.season} — Verified Results
              </h3>
              <ul className="mt-3 grid gap-3 sm:grid-cols-2">
                {results.map((result) => (
                  <li
                    key={result.id}
                    className="flex items-start gap-3 rounded-lg border border-slate-200 p-4 dark:border-slate-800"
                  >
                    <Trophy className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" aria-hidden="true" />
                    <div>
                      <p className="font-medium text-slate-900 dark:text-white">{result.title}</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{result.detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white">
                Competition Skill Areas
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {ctfSquad.skillAreas.map((skill) => (
                  <li key={skill}>
                    <TagChip label={skill} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Other engagement */}
      <section aria-labelledby="engagement-heading">
        <SectionHeading
          id="engagement-heading"
          title="Other Student Engagement"
          subtitle="Industry visits, events, internships, scholarships, certifications, and professional-readiness activities."
        />
        {engagements.length === 0 ? (
          <EmptyState
            title="Engagement highlights coming soon"
            message="Details of student engagement activities will be published as they are verified. Records are maintained in src/data/studentSuccess.ts."
            hints={[
              'AWS Jam',
              'Google Data Center visit',
              'DEF CON',
              'Internships',
              'Scholarships',
              'Certifications',
              'Student awards',
              'Guest-speaker events',
              'Professional-readiness activities',
            ]}
          />
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {engagements.map((engagement) => (
              <article key={engagement.id} className="card p-5">
                <h3 className="font-semibold text-slate-900 dark:text-white">{engagement.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {engagement.description}
                </p>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
