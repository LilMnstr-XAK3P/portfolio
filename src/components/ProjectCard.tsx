import { Github, Globe, Lock } from 'lucide-react';
import type { Project } from '../data/types';
import { TagChip } from './TagChip';
import { ExternalLink } from './ExternalLink';

const statusLabels: Record<Project['status'], string> = {
  active: 'Active',
  'in-development': 'In development',
  completed: 'Completed',
  planned: 'Planned',
};

const statusStyles: Record<Project['status'], string> = {
  active: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300',
  'in-development': 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300',
  completed: 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300',
  planned: 'bg-sky-100 text-sky-800 dark:bg-sky-900/40 dark:text-sky-300',
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card flex h-full flex-col p-5">
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-semibold text-slate-900 dark:text-white">{project.title}</h3>
        <span
          className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${statusStyles[project.status]}`}
        >
          {statusLabels[project.status]}
        </span>
      </div>

      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
        {project.description}
      </p>

      {project.outcomes && project.outcomes.length > 0 && (
        <ul className="mt-3 list-inside list-disc text-sm text-slate-600 dark:text-slate-400">
          {project.outcomes.map((outcome) => (
            <li key={outcome}>{outcome}</li>
          ))}
        </ul>
      )}

      <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Technologies">
        {project.technologies.map((tech) => (
          <li key={tech}>
            <TagChip label={tech} />
          </li>
        ))}
      </ul>

      <div className="mt-4 flex flex-wrap items-center gap-3 border-t border-slate-100 pt-3 text-sm dark:border-slate-800">
        {project.visibility === 'public' && project.repoUrl ? (
          <ExternalLink href={project.repoUrl} className="link inline-flex items-center gap-1.5">
            <Github className="h-4 w-4" aria-hidden="true" />
            Repository
          </ExternalLink>
        ) : (
          <span className="inline-flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
            <Lock className="h-4 w-4" aria-hidden="true" />
            Private repository
          </span>
        )}
        {project.demoUrl && (
          <ExternalLink href={project.demoUrl} className="link inline-flex items-center gap-1.5">
            <Globe className="h-4 w-4" aria-hidden="true" />
            Demo
          </ExternalLink>
        )}
      </div>
    </article>
  );
}
