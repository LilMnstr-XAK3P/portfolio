import { Sparkles, PenSquare, PlusCircle } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { CourseCard } from '../components/CourseCard';
import { useSeo } from '../hooks/useSeo';
import { coursesTaught, courseGroupOrder } from '../data/courses';
import {
  newCourses,
  courseRedesigns,
  programRedesigns,
  teachingInnovations,
} from '../data/curriculum';
import { publicOnly } from '../lib/dataUtils';

export function TeachingPage() {
  useSeo(
    'Curriculum & Teaching',
    'Courses taught, new courses created, major course redesigns, and degree-level curriculum leadership.',
  );

  const visibleCourses = publicOnly(coursesTaught);

  return (
    <div className="container-content space-y-14 py-10">
      <SectionHeading
        as="h1"
        title="Curriculum & Teaching"
        subtitle="A decade of hands-on cybersecurity instruction, organized by expertise — plus the new courses, redesigns, and degree pathways behind CSN's cybersecurity programs."
      />

      {/* Courses taught, grouped by expertise */}
      <section aria-labelledby="courses-heading">
        <SectionHeading id="courses-heading" title="Courses Taught" />
        <div className="space-y-8">
          {courseGroupOrder.map((group) => {
            const groupCourses = visibleCourses.filter((c) => c.group === group);
            if (groupCourses.length === 0) return null;
            return (
              <div key={group}>
                <h3 className="mb-3 text-lg font-semibold text-slate-800 dark:text-slate-200">
                  {group}
                </h3>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {groupCourses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* New courses created */}
      <section aria-labelledby="new-courses-heading">
        <SectionHeading
          id="new-courses-heading"
          title="New Courses Created"
          subtitle="Courses designed and built from the ground up."
        />
        <ul className="grid gap-3 sm:grid-cols-2">
          {publicOnly(newCourses).map((course) => (
            <li key={course.id} className="card flex items-start gap-3 p-4">
              <PlusCircle
                className="mt-0.5 h-5 w-5 shrink-0 text-brand-600 dark:text-brand-400"
                aria-hidden="true"
              />
              <div>
                <p className="font-medium text-slate-900 dark:text-white">{course.title}</p>
                {course.description && (
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                    {course.description}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Major course redesigns */}
      <section aria-labelledby="redesigns-heading">
        <SectionHeading
          id="redesigns-heading"
          title="Major Course Redesigns"
          subtitle="Existing courses rebuilt for rigor, currency, and certification alignment."
        />
        <ul className="grid gap-3 sm:grid-cols-2">
          {publicOnly(courseRedesigns).map((course) => (
            <li key={course.id} className="card flex items-start gap-3 p-4">
              <PenSquare
                className="mt-0.5 h-5 w-5 shrink-0 text-brand-600 dark:text-brand-400"
                aria-hidden="true"
              />
              <p className="font-medium text-slate-900 dark:text-white">{course.title}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Program and degree redesign */}
      <section aria-labelledby="program-heading">
        <SectionHeading
          id="program-heading"
          title="Program & Degree Redesign"
          subtitle="Degree-level curriculum leadership across CSN's cybersecurity programs."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {publicOnly(programRedesigns).map((program) => (
            <article key={program.id} className="card p-5">
              <h3 className="font-semibold text-slate-900 dark:text-white">{program.title}</h3>
              {program.description && (
                <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                  {program.description}
                </p>
              )}
              {program.details && (
                <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-slate-600 dark:text-slate-400">
                  {program.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* Teaching innovation */}
      <section aria-labelledby="innovation-heading">
        <SectionHeading
          id="innovation-heading"
          title="Teaching Innovation"
          subtitle="Experiential, gamified, and AI-enhanced approaches that make cybersecurity learning stick."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {teachingInnovations.map((innovation) => (
            <article key={innovation.id} className="card p-5">
              <Sparkles className="h-5 w-5 text-brand-600 dark:text-brand-400" aria-hidden="true" />
              <h3 className="mt-2 font-semibold text-slate-900 dark:text-white">
                {innovation.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {innovation.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
