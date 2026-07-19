import { useMemo, useState, type ReactNode } from 'react';
import { ChevronDown, ChevronUp, Printer } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { DownloadButton } from '../components/DownloadButton';
import { FilterSelect } from '../components/FilterBar';
import { useSeo } from '../hooks/useSeo';
import { profile } from '../data/profile';
import { education } from '../data/education';
import { coursesTaught, courseGroupOrder } from '../data/courses';
import { newCourses, courseRedesigns, programRedesigns } from '../data/curriculum';
import { contributions } from '../data/contributions';
import { professionalDevelopment } from '../data/professionalDevelopment';
import { serviceRoles, volunteerRoles } from '../data/service';
import { experience } from '../data/experience';
import { ctfSquad, competitionResults } from '../data/studentSuccess';
import { mediaItems } from '../data/media';
import { currentResearch, researchInterests } from '../data/research';
import { siteConfig } from '../data/siteConfig';
import { publicOnly, sortByDateDesc } from '../lib/dataUtils';

/** CV focus areas. Each section declares which filtered views include it. */
const cvFilters = [
  'Full Academic CV',
  'Grant CV',
  'AI and Emerging Technology',
  'Cybersecurity Education',
  'Curriculum Leadership',
  'Student Success',
  'Professional Service',
] as const;

interface CVSection {
  id: string;
  title: string;
  areas: string[];
  content: ReactNode;
}

function Entry({
  heading,
  meta,
  children,
}: {
  heading: string;
  meta?: string;
  children?: ReactNode;
}) {
  return (
    <div className="py-2">
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
        <p className="font-medium text-stone-900 dark:text-white">{heading}</p>
        {meta && <p className="shrink-0 text-sm text-stone-500 dark:text-stone-400">{meta}</p>}
      </div>
      {children}
    </div>
  );
}

function buildSections(): CVSection[] {
  return [
    {
      id: 'education',
      title: 'Education',
      areas: ['Grant CV', 'AI and Emerging Technology', 'Cybersecurity Education'],
      content: (
        <div className="divide-y divide-stone-100 dark:divide-stone-800">
          {publicOnly(education).map((entry) => (
            <Entry
              key={entry.id}
              heading={`${entry.degree}${entry.specialization ? ` — ${entry.specialization}` : ''}`}
              meta={entry.year ?? entry.expected ?? entry.status}
            >
              <p className="text-sm text-stone-600 dark:text-stone-400">{entry.institution}</p>
              {entry.capstone && (
                <p className="text-sm text-stone-500 dark:text-stone-400">
                  Capstone: {entry.capstone}
                </p>
              )}
            </Entry>
          ))}
        </div>
      ),
    },
    {
      id: 'experience',
      title: 'Professional Experience',
      areas: ['Grant CV', 'Cybersecurity Education', 'Professional Service'],
      content: (
        <div className="divide-y divide-stone-100 dark:divide-stone-800">
          {publicOnly(experience).map((entry) => (
            <Entry key={entry.id} heading={entry.role} meta={entry.period}>
              <p className="text-sm text-stone-600 dark:text-stone-400">
                {[entry.organization, entry.location].filter(Boolean).join(' — ')}
              </p>
              {entry.summary && (
                <p className="mt-1 text-sm text-stone-600 dark:text-stone-400">{entry.summary}</p>
              )}
            </Entry>
          ))}
        </div>
      ),
    },
    {
      id: 'teaching',
      title: 'Teaching',
      areas: ['Cybersecurity Education', 'Curriculum Leadership'],
      content: (
        <div className="space-y-4">
          {courseGroupOrder.map((group) => {
            const courses = publicOnly(coursesTaught).filter((c) => c.group === group);
            if (courses.length === 0) return null;
            return (
              <div key={group}>
                <p className="text-sm font-semibold uppercase tracking-wide text-stone-500 dark:text-stone-400">
                  {group}
                </p>
                <div className="divide-y divide-stone-100 dark:divide-stone-800">
                  {courses.map((course) => (
                    <Entry
                      key={course.id}
                      heading={`${course.code}: ${course.title}`}
                      meta={course.terms}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      ),
    },
    {
      id: 'curriculum',
      title: 'Curriculum Development',
      areas: [
        'Grant CV',
        'Cybersecurity Education',
        'Curriculum Leadership',
        'AI and Emerging Technology',
      ],
      content: (
        <div className="space-y-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-stone-500 dark:text-stone-400">
              Program & Degree Redesign
            </p>
            <div className="divide-y divide-stone-100 dark:divide-stone-800">
              {publicOnly(programRedesigns).map((item) => (
                <Entry key={item.id} heading={item.title}>
                  {item.details && (
                    <ul className="mt-1 list-inside list-disc text-sm text-stone-600 dark:text-stone-400">
                      {item.details.map((d) => (
                        <li key={d}>{d}</li>
                      ))}
                    </ul>
                  )}
                </Entry>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-stone-500 dark:text-stone-400">
              New Courses Created
            </p>
            <ul className="mt-1 list-inside list-disc text-sm text-stone-700 dark:text-stone-300">
              {publicOnly(newCourses).map((c) => (
                <li key={c.id}>{c.title}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-stone-500 dark:text-stone-400">
              Major Course Redesigns
            </p>
            <ul className="mt-1 list-inside list-disc text-sm text-stone-700 dark:text-stone-300">
              {publicOnly(courseRedesigns).map((c) => (
                <li key={c.id}>{c.title}</li>
              ))}
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: 'contributions',
      title: 'National & Professional Contributions',
      areas: [
        'Grant CV',
        'Curriculum Leadership',
        'AI and Emerging Technology',
        'Professional Service',
      ],
      content: (
        <div className="divide-y divide-stone-100 dark:divide-stone-800">
          {sortByDateDesc(publicOnly(contributions)).map((c) => (
            <Entry key={c.id} heading={c.title} meta={c.displayDate}>
              <p className="text-sm text-stone-600 dark:text-stone-400">{c.organization}</p>
              <p className="mt-1 text-sm text-stone-600 dark:text-stone-400">{c.summary}</p>
            </Entry>
          ))}
        </div>
      ),
    },
    {
      id: 'research',
      title: 'Research',
      areas: ['Grant CV', 'AI and Emerging Technology'],
      content: (
        <div className="space-y-3">
          <Entry heading={`${currentResearch.title} (${currentResearch.label})`}>
            <p className="text-sm text-stone-600 dark:text-stone-400">
              {currentResearch.description}
            </p>
          </Entry>
          <p className="text-sm text-stone-600 dark:text-stone-400">
            <span className="font-medium text-stone-700 dark:text-stone-300">
              Research interests:
            </span>{' '}
            {researchInterests.join('; ')}
          </p>
        </div>
      ),
    },
    {
      id: 'professional-development',
      title: 'Professional Development',
      areas: ['Grant CV', 'AI and Emerging Technology', 'Cybersecurity Education'],
      content: (
        <div className="divide-y divide-stone-100 dark:divide-stone-800">
          {sortByDateDesc(publicOnly(professionalDevelopment)).map((a) => (
            <Entry
              key={a.id}
              heading={a.cvEntry ?? a.title}
              meta={`${a.displayDate}${typeof a.hours === 'number' ? ` · ${a.hours} hr` : ''}`}
            >
              <p className="text-sm text-stone-600 dark:text-stone-400">
                {[a.provider ?? a.organization, a.category].filter(Boolean).join(' · ')}
              </p>
            </Entry>
          ))}
        </div>
      ),
    },
    {
      id: 'student-success',
      title: 'Student Success & Coaching',
      areas: ['Student Success', 'Cybersecurity Education'],
      content: (
        <div className="space-y-2">
          <Entry heading={`${ctfSquad.name} — ${ctfSquad.role}`} meta={ctfSquad.season}>
            <p className="text-sm text-stone-600 dark:text-stone-400">{ctfSquad.description}</p>
            <ul className="mt-1 list-inside list-disc text-sm text-stone-600 dark:text-stone-400">
              {publicOnly(competitionResults)
                .filter((r) => r.verified)
                .map((r) => (
                  <li key={r.id}>{r.detail}</li>
                ))}
            </ul>
          </Entry>
        </div>
      ),
    },
    {
      id: 'service',
      title: 'Institutional Service',
      areas: ['Professional Service', 'Grant CV'],
      content: (
        <div className="space-y-4">
          <div className="divide-y divide-stone-100 dark:divide-stone-800">
            {publicOnly(serviceRoles).map((role) => (
              <Entry key={role.id} heading={role.role} meta={role.period} />
            ))}
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-stone-500 dark:text-stone-400">
              Volunteer Experience
            </p>
            <div className="divide-y divide-stone-100 dark:divide-stone-800">
              {publicOnly(volunteerRoles).map((v) => (
                <Entry key={v.id} heading={v.organization} meta={v.period} />
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'media',
      title: 'Media & Outreach',
      areas: ['Student Success', 'Professional Service'],
      content: (
        <div className="divide-y divide-stone-100 dark:divide-stone-800">
          {sortByDateDesc(publicOnly(mediaItems)).map((m) => (
            <Entry key={m.id} heading={m.title} meta={m.displayDate}>
              <p className="text-sm text-stone-600 dark:text-stone-400">
                {[m.kind, m.outlet].filter(Boolean).join(' · ')}
              </p>
            </Entry>
          ))}
        </div>
      ),
    },
  ];
}

export function CVPage() {
  useSeo('Curriculum Vitae', `Interactive curriculum vitae of ${profile.name}.`);

  const sections = useMemo(buildSections, []);
  const [filter, setFilter] = useState<string>('Full Academic CV');
  const [collapsed, setCollapsed] = useState<Set<string>>(new Set());

  const visibleSections =
    filter === 'Full Academic CV' ? sections : sections.filter((s) => s.areas.includes(filter));

  const toggle = (id: string) => {
    setCollapsed((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <div className="container-content py-10">
      <div className="no-print">
        <SectionHeading
          as="h1"
          title="Curriculum Vitae"
          subtitle="An interactive CV built from the same verified data as the rest of this site. Filter by focus area, expand the sections you need, or print."
        />

        <div className="mb-8 flex flex-wrap items-end gap-4">
          <FilterSelect
            label="CV view"
            value={filter === 'Full Academic CV' ? '' : filter}
            options={cvFilters.filter((f) => f !== 'Full Academic CV')}
            onChange={(v) => setFilter(v || 'Full Academic CV')}
            allLabel="Full Academic CV"
          />
          <button type="button" onClick={() => window.print()} className="btn-secondary">
            <Printer className="h-4 w-4" aria-hidden="true" />
            Print
          </button>
          <DownloadButton path={siteConfig.cvFiles.pdf} label="Download PDF" />
        </div>
      </div>

      {/* Print header */}
      <div className="hidden print:block">
        <h1 className="text-2xl font-bold">{profile.name}</h1>
        <p>
          {profile.primaryTitle} — {profile.institution}
        </p>
        <p className="text-sm">{profile.emails.map((e) => e.address).join(' · ')}</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[220px_1fr]">
        {/* Section navigation */}
        <nav aria-label="CV sections" className="no-print hidden lg:block">
          <ul className="sticky top-24 space-y-1 text-sm">
            {visibleSections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#cv-${section.id}`}
                  className="block rounded-md px-3 py-1.5 text-stone-600 hover:bg-stone-100 hover:text-stone-900 dark:text-stone-400 dark:hover:bg-stone-800 dark:hover:text-white"
                >
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Sections */}
        <div className="space-y-4">
          {visibleSections.map((section) => {
            const isCollapsed = collapsed.has(section.id);
            return (
              <section key={section.id} id={`cv-${section.id}`} className="card scroll-mt-24">
                <h2>
                  <button
                    type="button"
                    onClick={() => toggle(section.id)}
                    aria-expanded={!isCollapsed}
                    aria-controls={`cv-panel-${section.id}`}
                    className="no-print flex w-full items-center justify-between gap-3 p-5 text-left text-lg font-bold text-stone-900 dark:text-white"
                  >
                    {section.title}
                    {isCollapsed ? (
                      <ChevronDown className="h-5 w-5 text-stone-400" aria-hidden="true" />
                    ) : (
                      <ChevronUp className="h-5 w-5 text-stone-400" aria-hidden="true" />
                    )}
                  </button>
                  <span className="hidden p-5 pb-0 text-lg font-bold print:block">
                    {section.title}
                  </span>
                </h2>
                {/* Collapsed sections still print in full via print-expanded. */}
                <div
                  id={`cv-panel-${section.id}`}
                  className={`px-5 pb-5 ${isCollapsed ? 'hidden print-expanded' : ''}`}
                >
                  {section.content}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}
