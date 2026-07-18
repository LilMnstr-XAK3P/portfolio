import { BrainCircuit, GraduationCap, Landmark, ListChecks } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { ProjectCard } from '../components/ProjectCard';
import { CertificateCard } from '../components/CertificateCard';
import { TagChip } from '../components/TagChip';
import { useSeo } from '../hooks/useSeo';
import {
  aiCurriculumEvaluation,
  aiFacultyDevelopment,
  aiCompetencies,
  aiInstitutionalLeadership,
} from '../data/aiPortfolio';
import { projects } from '../data/projects';
import { publicOnly, filterByTag } from '../lib/dataUtils';

export function AILeadershipPage() {
  useSeo(
    'AI Leadership',
    'Sustained AI development and leadership: curriculum evaluation, faculty development, institutional policy, and applied AI projects in higher education.',
  );

  const aiProjects = filterByTag(publicOnly(projects), 'ai');

  return (
    <div className="container-content space-y-14 py-10">
      <SectionHeading
        as="h1"
        title="AI Leadership"
        subtitle="Sustained, current work in artificial intelligence — from evaluating industry AI curricula and building faculty AI fluency to shaping institutional policy and integrating AI into cybersecurity education."
      />

      {/* AI curriculum and evaluation */}
      <section aria-labelledby="ai-curriculum-heading">
        <div className="mb-6 flex items-center gap-3">
          <div className="rounded-lg bg-brand-50 p-2.5 text-brand-700 dark:bg-brand-900/40 dark:text-brand-400">
            <ListChecks className="h-6 w-6" aria-hidden="true" />
          </div>
          <h2
            id="ai-curriculum-heading"
            className="text-2xl font-bold tracking-tight text-stone-900 dark:text-white"
          >
            {aiCurriculumEvaluation.title}
          </h2>
        </div>
        <p className="max-w-3xl text-stone-700 dark:text-stone-300">
          {aiCurriculumEvaluation.description}
        </p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {aiCurriculumEvaluation.programs.map((program) => (
            <CertificateCard key={program} title={program} provider="EC-Council" />
          ))}
        </div>
        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Focus areas">
          {aiCurriculumEvaluation.focusAreas.map((area) => (
            <li key={area}>
              <TagChip label={area} />
            </li>
          ))}
        </ul>
      </section>

      {/* AI faculty development */}
      <section aria-labelledby="ai-facdev-heading">
        <div className="mb-6 flex items-center gap-3">
          <div className="rounded-lg bg-brand-50 p-2.5 text-brand-700 dark:bg-brand-900/40 dark:text-brand-400">
            <GraduationCap className="h-6 w-6" aria-hidden="true" />
          </div>
          <h2
            id="ai-facdev-heading"
            className="text-2xl font-bold tracking-tight text-stone-900 dark:text-white"
          >
            {aiFacultyDevelopment.title}
          </h2>
        </div>
        <p className="max-w-3xl text-stone-700 dark:text-stone-300">
          {aiFacultyDevelopment.description}
        </p>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {aiFacultyDevelopment.activities.map((activity) => (
            <li key={activity} className="card p-4 font-medium text-stone-800 dark:text-stone-200">
              {activity}
            </li>
          ))}
        </ul>
      </section>

      {/* AI competencies */}
      <section aria-labelledby="ai-competencies-heading">
        <div className="mb-6 flex items-center gap-3">
          <div className="rounded-lg bg-brand-50 p-2.5 text-brand-700 dark:bg-brand-900/40 dark:text-brand-400">
            <BrainCircuit className="h-6 w-6" aria-hidden="true" />
          </div>
          <h2
            id="ai-competencies-heading"
            className="text-2xl font-bold tracking-tight text-stone-900 dark:text-white"
          >
            {aiCompetencies.title}
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {aiCompetencies.groups.map((group) => (
            <article key={group.title} className="card p-5">
              <h3 className="font-semibold text-stone-900 dark:text-white">{group.title}</h3>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <li key={item}>
                    <TagChip label={item} />
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* AI institutional leadership */}
      <section aria-labelledby="ai-leadership-heading">
        <div className="mb-6 flex items-center gap-3">
          <div className="rounded-lg bg-brand-50 p-2.5 text-brand-700 dark:bg-brand-900/40 dark:text-brand-400">
            <Landmark className="h-6 w-6" aria-hidden="true" />
          </div>
          <h2
            id="ai-leadership-heading"
            className="text-2xl font-bold tracking-tight text-stone-900 dark:text-white"
          >
            {aiInstitutionalLeadership.title}
          </h2>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {aiInstitutionalLeadership.items.map((item) => (
            <li key={item} className="card p-4 font-medium text-stone-800 dark:text-stone-200">
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* AI projects */}
      <section aria-labelledby="ai-projects-heading">
        <SectionHeading
          id="ai-projects-heading"
          title="AI Projects"
          subtitle="Applied AI work in education — from SCORM Linux simulations to grounded course assistants."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {aiProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
