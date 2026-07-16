import { SectionHeading } from '../components/SectionHeading';
import { ContributionCard } from '../components/ContributionCard';
import { useSeo } from '../hooks/useSeo';
import { contributions } from '../data/contributions';
import { serviceRoles } from '../data/service';
import { publicOnly, sortByDateDesc } from '../lib/dataUtils';

export function ContributionsPage() {
  useSeo(
    'Professional Contributions',
    'National curriculum contributions through ACM CCECC, AP Cybersecurity curriculum evaluation, CTE pathway alignment, industry advisory participation, and institutional service.',
  );

  const visible = publicOnly(contributions);
  const acm = visible.filter((c) => c.tags.includes('acm'));
  const others = sortByDateDesc(visible.filter((c) => !c.tags.includes('acm')));

  return (
    <div className="container-content space-y-14 py-10">
      <SectionHeading
        as="h1"
        title="Professional Contributions"
        subtitle="National curriculum development, curriculum evaluation, workforce-pathway alignment, industry collaboration, and institutional service."
      />

      {/* ACM CCECC */}
      <section aria-labelledby="acm-heading">
        <SectionHeading
          id="acm-heading"
          title="Association for Computing Machinery"
          subtitle="Contributions to national curricular guidance through the Association for Computing Machinery Committee for Computing Education in Community Colleges (ACM CCECC)."
        />
        <div className="grid gap-4 lg:grid-cols-2">
          {acm.map((contribution) => (
            <ContributionCard key={contribution.id} contribution={contribution} />
          ))}
        </div>
      </section>

      {/* Other contributions */}
      <section aria-labelledby="other-contrib-heading">
        <SectionHeading
          id="other-contrib-heading"
          title="Curriculum Evaluation, Pathways & Industry"
          subtitle="AP Cybersecurity curriculum evaluation, CTE pathway alignment, and industry advisory participation."
        />
        <div className="grid gap-4 lg:grid-cols-2">
          {others.map((contribution) => (
            <ContributionCard key={contribution.id} contribution={contribution} />
          ))}
        </div>
      </section>

      {/* Institutional service */}
      <section aria-labelledby="service-heading">
        <SectionHeading
          id="service-heading"
          title="Institutional Service"
          subtitle="Ongoing service and governance roles at the College of Southern Nevada."
        />
        <ul className="card divide-y divide-slate-100 dark:divide-slate-800">
          {publicOnly(serviceRoles).map((role) => (
            <li
              key={role.id}
              className="flex flex-col gap-1 p-4 sm:flex-row sm:items-baseline sm:justify-between"
            >
              <div>
                <p className="font-medium text-slate-900 dark:text-white">{role.role}</p>
                {role.description && (
                  <p className="text-sm text-slate-500 dark:text-slate-400">{role.description}</p>
                )}
              </div>
              <p className="shrink-0 text-sm font-medium text-slate-500 dark:text-slate-400">
                {role.period}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
