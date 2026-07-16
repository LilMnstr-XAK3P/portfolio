import { describe, expect, it } from 'vitest';
import {
  publicOnly,
  sortByDateDesc,
  filterByCategory,
  filterByYear,
  filterByTag,
  totalVerifiedHours,
  totalCeus,
  featuredItems,
  incompleteRecords,
  distinctYears,
  searchItems,
} from '../lib/dataUtils';
import type { ProfessionalActivity } from '../data/types';
import { professionalDevelopment } from '../data/professionalDevelopment';

function activity(overrides: Partial<ProfessionalActivity>): ProfessionalActivity {
  return {
    id: 'test',
    title: 'Test Activity',
    startDate: '2026-01-01',
    displayDate: 'January 1, 2026',
    type: 'Course',
    category: 'Testing',
    summary: 'A test activity.',
    skills: [],
    tags: [],
    public: true,
    ...overrides,
  };
}

describe('publicOnly', () => {
  it('removes private records', () => {
    const items = [activity({ id: 'a', public: true }), activity({ id: 'b', public: false })];
    expect(publicOnly(items).map((i) => i.id)).toEqual(['a']);
  });
});

describe('sortByDateDesc', () => {
  it('sorts newest first without mutating input', () => {
    const items = [
      activity({ id: 'old', startDate: '2024-05-01' }),
      activity({ id: 'new', startDate: '2026-07-15' }),
      activity({ id: 'mid', startDate: '2025-01-01' }),
    ];
    const sorted = sortByDateDesc(items);
    expect(sorted.map((i) => i.id)).toEqual(['new', 'mid', 'old']);
    expect(items[0].id).toBe('old'); // original untouched
  });
});

describe('totalVerifiedHours', () => {
  it('excludes activities without verified hours', () => {
    const items = [
      activity({ id: 'a', hours: 2 }),
      activity({ id: 'b', hours: undefined }),
      activity({ id: 'c', hours: 1.5 }),
    ];
    expect(totalVerifiedHours(items)).toBe(3.5);
  });

  it('returns 0 for an empty list', () => {
    expect(totalVerifiedHours([])).toBe(0);
  });
});

describe('totalCeus', () => {
  it('sums CEUs, treating missing values as 0', () => {
    const items = [activity({ ceus: 2 }), activity({}), activity({ ceus: 1 })];
    expect(totalCeus(items)).toBe(3);
  });
});

describe('filters', () => {
  const items = [
    activity({
      id: 'ai',
      category: 'Artificial Intelligence',
      startDate: '2026-06-01',
      tags: ['ai'],
    }),
    activity({
      id: 'cyber',
      category: 'Cybersecurity Education',
      startDate: '2025-03-01',
      tags: ['cyber'],
    }),
  ];

  it('filters by category', () => {
    expect(filterByCategory(items, 'Artificial Intelligence').map((i) => i.id)).toEqual(['ai']);
  });

  it('filters by year', () => {
    expect(filterByYear(items, '2025').map((i) => i.id)).toEqual(['cyber']);
  });

  it('filters by tag', () => {
    expect(filterByTag(items, 'ai').map((i) => i.id)).toEqual(['ai']);
  });

  it('lists distinct years newest first', () => {
    expect(distinctYears(items)).toEqual(['2026', '2025']);
  });
});

describe('featuredItems', () => {
  it('returns only featured records', () => {
    const items = [activity({ id: 'a', featured: true }), activity({ id: 'b' })];
    expect(featuredItems(items).map((i) => i.id)).toEqual(['a']);
  });
});

describe('incompleteRecords', () => {
  it('flags records with missing hours or TODO summaries', () => {
    const items = [
      activity({ id: 'ok', hours: 1 }),
      activity({ id: 'no-hours', hours: undefined }),
      activity({ id: 'todo', hours: 2, summary: 'TODO: verify' }),
    ];
    expect(incompleteRecords(items).map((i) => i.id)).toEqual(['no-hours', 'todo']);
  });
});

describe('searchItems', () => {
  it('matches across title, provider, skills, and tags case-insensitively', () => {
    const items = [
      activity({
        id: 'a',
        title: 'OpenAI Builder Bootcamp',
        provider: 'OpenAI',
        skills: ['Evals'],
        tags: ['rag'],
      }),
      activity({ id: 'b', title: 'NICE Conference' }),
    ];
    expect(searchItems(items, 'openai').map((i) => i.id)).toEqual(['a']);
    expect(searchItems(items, 'EVALS').map((i) => i.id)).toEqual(['a']);
    expect(searchItems(items, 'rag').map((i) => i.id)).toEqual(['a']);
    expect(searchItems(items, '').map((i) => i.id)).toEqual(['a', 'b']);
    expect(searchItems(items, 'zzz')).toEqual([]);
  });
});

describe('real dataset integrity', () => {
  it('every professional-development record has a unique id', () => {
    const ids = professionalDevelopment.map((a) => a.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('every record has a valid ISO startDate', () => {
    for (const a of professionalDevelopment) {
      expect(a.startDate).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    }
  });
});
