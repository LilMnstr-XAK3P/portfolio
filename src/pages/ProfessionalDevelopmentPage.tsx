import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SectionHeading } from '../components/SectionHeading';
import { ActivityCard } from '../components/ActivityCard';
import { StatCard } from '../components/StatCard';
import { FilterBar, FilterSelect } from '../components/FilterBar';
import { SearchInput } from '../components/SearchInput';
import { EmptyState } from '../components/EmptyState';
import { useSeo } from '../hooks/useSeo';
import { professionalDevelopment } from '../data/professionalDevelopment';
import {
  publicOnly,
  sortByDateDesc,
  distinctValues,
  distinctYears,
  searchItems,
  totalVerifiedHours,
  totalCeus,
} from '../lib/dataUtils';

/**
 * Searchable, filterable professional-development record. Filter state lives
 * in URL query parameters so filtered views can be shared, e.g.
 * /professional-development?year=2026&category=Artificial+Intelligence
 */
export function ProfessionalDevelopmentPage() {
  useSeo(
    'Professional Development',
    'A searchable, filterable record of professional-development activities, conferences, certificates, and training.',
  );

  const [params, setParams] = useSearchParams();
  const query = params.get('q') ?? '';
  const year = params.get('year') ?? '';
  const category = params.get('category') ?? '';
  const provider = params.get('provider') ?? '';
  const type = params.get('type') ?? '';
  const tag = params.get('tag') ?? '';
  const certificate = params.get('certificate') ?? '';

  const all = useMemo(() => sortByDateDesc(publicOnly(professionalDevelopment)), []);

  const setParam = (key: string, value: string) => {
    const next = new URLSearchParams(params);
    if (value) next.set(key, value);
    else next.delete(key);
    setParams(next, { replace: true });
  };

  const filtered = useMemo(() => {
    let items = all;
    if (year) items = items.filter((a) => a.startDate.startsWith(year));
    if (category) items = items.filter((a) => a.category === category);
    if (provider) items = items.filter((a) => (a.provider ?? a.organization) === provider);
    if (type) items = items.filter((a) => a.type === type);
    if (tag) items = items.filter((a) => a.tags.includes(tag));
    if (certificate === 'yes') items = items.filter((a) => a.certificate);
    if (certificate === 'no') items = items.filter((a) => !a.certificate);
    return searchItems(items, query);
  }, [all, year, category, provider, type, tag, certificate, query]);

  const hasFilters = Boolean(query || year || category || provider || type || tag || certificate);

  return (
    <div className="container-content space-y-8 py-10">
      <SectionHeading
        as="h1"
        title="Professional Development"
        subtitle="A complete, verifiable record of training, conferences, national contributions, and outreach. Use the filters — filtered views can be shared by URL."
      />

      {/* Totals for the current view */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <StatCard value={filtered.length} label="Activities shown" />
        <StatCard
          value={totalVerifiedHours(filtered)}
          label="Verified hours"
          note="Verified durations only"
        />
        <StatCard value={totalCeus(filtered)} label="CEUs" />
        <StatCard value={filtered.filter((a) => a.certificate).length} label="Certificates" />
      </div>
      <p className="-mt-4 text-xs text-slate-500 dark:text-slate-400">
        Totals reflect activities with verified duration information.
      </p>

      {/* Search + filters */}
      <div className="space-y-4">
        <SearchInput
          value={query}
          onChange={(v) => setParam('q', v)}
          placeholder="Search titles, providers, skills, tags…"
          label="Search professional development"
        />
        <FilterBar
          showClear={hasFilters}
          onClear={() => setParams(new URLSearchParams(), { replace: true })}
        >
          <FilterSelect
            label="Year"
            value={year}
            options={distinctYears(all)}
            onChange={(v) => setParam('year', v)}
          />
          <FilterSelect
            label="Category"
            value={category}
            options={distinctValues(all, (a) => a.category)}
            onChange={(v) => setParam('category', v)}
          />
          <FilterSelect
            label="Provider"
            value={provider}
            options={distinctValues(all, (a) => a.provider ?? a.organization)}
            onChange={(v) => setParam('provider', v)}
          />
          <FilterSelect
            label="Type"
            value={type}
            options={distinctValues(all, (a) => a.type)}
            onChange={(v) => setParam('type', v)}
          />
          <FilterSelect
            label="Topic"
            value={tag}
            options={[...new Set(all.flatMap((a) => a.tags))].sort()}
            onChange={(v) => setParam('tag', v)}
          />
          <FilterSelect
            label="Certificate"
            value={certificate}
            options={['yes', 'no']}
            onChange={(v) => setParam('certificate', v)}
          />
        </FilterBar>
      </div>

      {/* Results */}
      {filtered.length === 0 ? (
        <EmptyState
          title="No matching activities"
          message="Try removing a filter or changing the search terms."
        />
      ) : (
        <ol className="space-y-4" aria-label="Professional-development activities, newest first">
          {filtered.map((activity) => (
            <li key={activity.id}>
              <ActivityCard activity={activity} />
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
