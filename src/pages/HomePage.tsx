import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ProfileHero } from '../components/ProfileHero';
import { SectionHeading } from '../components/SectionHeading';
import { ExpertiseCard } from '../components/ExpertiseCard';
import { StatCard } from '../components/StatCard';
import { useSeo } from '../hooks/useSeo';
import { profile } from '../data/profile';
import { expertiseAreas } from '../data/skills';
import { contributions } from '../data/contributions';
import { professionalDevelopment } from '../data/professionalDevelopment';
import { publicOnly, sortByDateDesc, featuredItems } from '../lib/dataUtils';
import { getSiteStats } from '../lib/stats';
import { siteConfig } from '../data/siteConfig';

export function HomePage() {
  useSeo(siteConfig.siteName, siteConfig.defaultDescription);

  const stats = getSiteStats();
  const featured = featuredItems(publicOnly(contributions));
  const recent = sortByDateDesc(publicOnly(professionalDevelopment)).slice(0, 5);

  return (
    <>
      <ProfileHero />

      {/* Introduction */}
      <section className="container-content py-12">
        <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-slate-700 dark:text-slate-300">
          {profile.introSummary}
        </p>
      </section>

      {/* Areas of expertise */}
      <section className="container-content py-8" aria-labelledby="expertise-heading">
        <SectionHeading
          id="expertise-heading"
          title="Areas of Expertise"
          subtitle="Depth across cybersecurity practice, curriculum leadership, and responsible AI integration."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {expertiseAreas.map((area) => (
            <ExpertiseCard
              key={area.id}
              title={area.title}
              description={area.description}
              icon={area.icon}
            />
          ))}
        </div>
      </section>

      {/* Featured contributions */}
      <section
        className="border-y border-slate-200 bg-slate-50 py-12 dark:border-slate-800 dark:bg-slate-900/40"
        aria-labelledby="featured-heading"
      >
        <div className="container-content">
          <SectionHeading
            id="featured-heading"
            title="Featured Contributions"
            subtitle="Selected national, institutional, and student-facing work."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((item) => (
              <article key={item.id} className="card p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-700 dark:text-brand-400">
                  {item.category}
                </p>
                <h3 className="mt-1 font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {item.summary}
                </p>
              </article>
            ))}
            <article className="card p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-700 dark:text-brand-400">
                Student Success
              </p>
              <h3 className="mt-1 font-semibold text-slate-900 dark:text-white">
                National Cyber League Coaching
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                Coached the CSN CTF Squad through the Spring 2026 National Cyber League season, with
                teams placing 56th and 199th nationally among approximately 4,000 teams.
              </p>
            </article>
            <article className="card p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-700 dark:text-brand-400">
                Curriculum Leadership
              </p>
              <h3 className="mt-1 font-semibold text-slate-900 dark:text-white">
                CSN Cybersecurity Degree Redesign
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                Led the redesign of two AAS degrees, introducing specialization pathways in cloud
                security, digital forensics, offensive security, compliance, and artificial
                intelligence.
              </p>
            </article>
            <article className="card p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-700 dark:text-brand-400">
                Workforce Alignment
              </p>
              <h3 className="mt-1 font-semibold text-slate-900 dark:text-white">
                Industry & CTE Pathway Collaboration
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                Industry advisory participation and high-school-to-college pathway alignment
                connecting CSN programs to regional workforce needs.
              </p>
            </article>
          </div>
          <div className="mt-6">
            <Link to="/contributions" className="link inline-flex items-center gap-1">
              All professional contributions
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Impact statistics */}
      <section className="container-content py-12" aria-labelledby="impact-heading">
        <SectionHeading
          id="impact-heading"
          title="Professional Impact"
          subtitle="Calculated from the verified records published on this site."
        />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          <StatCard value={`${stats.yearsTeaching}+`} label="Years teaching cybersecurity" />
          <StatCard
            value={stats.coursesDeveloped + stats.coursesRedesigned}
            label="Courses developed or redesigned"
          />
          <StatCard value={stats.nationalInitiatives} label="National curriculum initiatives" />
          <StatCard
            value={stats.pdHours}
            label="Professional-development hours"
            note="Verified durations only"
          />
          <StatCard value={stats.aiPdActivities} label="AI-focused training activities" />
          <StatCard value={stats.competitionPlacements} label="National competition placements" />
        </div>
        <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
          Totals reflect activities with verified duration information.
        </p>
      </section>

      {/* Recent activity */}
      <section className="container-content pb-14" aria-labelledby="recent-heading">
        <SectionHeading
          id="recent-heading"
          title="Recent Activity"
          subtitle="The five most recent professional-development and contribution activities."
        />
        <ol className="card divide-y divide-slate-100 dark:divide-slate-800">
          {recent.map((activity) => (
            <li
              key={activity.id}
              className="flex flex-col gap-1 p-4 sm:flex-row sm:items-baseline sm:justify-between"
            >
              <div>
                <p className="font-medium text-slate-900 dark:text-white">{activity.title}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {[activity.provider ?? activity.organization, activity.category]
                    .filter(Boolean)
                    .join(' · ')}
                </p>
              </div>
              <p className="shrink-0 text-sm text-slate-500 dark:text-slate-400">
                {activity.displayDate}
              </p>
            </li>
          ))}
        </ol>
        <div className="mt-4">
          <Link to="/professional-development" className="link inline-flex items-center gap-1">
            Full professional-development record
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
