import type { ResearchWork } from './types';

export const researchInterests = [
  'Women in cybersecurity',
  'Capture-the-Flag participation',
  'Self-efficacy',
  'Impostor phenomenon',
  'Stereotype threat',
  'Social identity',
  'AI-enhanced learning',
  'Gamification',
  'Experiential learning',
  'Student motivation',
  'Inclusive learning environments',
];

export const doctoralPreparation = [
  'Curriculum theory',
  'Instructional design',
  'Learning sciences',
  'Interaction and media sciences',
  'Educational research methods',
  'Statistics',
  'Quantitative research',
  'Qualitative research',
  'Mixed-methods research',
];

/**
 * Current research direction. Labeled "Research in Development" on the site —
 * do not present this as completed or published research.
 */
export const currentResearch = {
  label: 'Research in Development',
  title: 'Women in Cybersecurity Competitions',
  description:
    'Research in development examining the experiences and performance of women in cybersecurity competitions, including the relationships among team composition, self-efficacy, impostor phenomenon, and individual performance.',
};

/**
 * Publications, presentations, conference sessions, articles, and posters.
 * Currently empty — the Research page shows an empty state with guidance.
 *
 * HOW TO ADD: copy this template, fill it in, and set public: true.
 * {
 *   id: 'unique-id',
 *   kind: 'publication', // or 'presentation' | 'conference-session' | 'article' | 'poster'
 *   title: 'Title of the work',
 *   venue: 'Journal or conference name',
 *   date: '2027-01-15',
 *   status: 'Published', // or 'In review', 'Accepted', ...
 *   url: 'https://doi.org/...',
 *   public: true,
 * }
 */
export const researchWorks: ResearchWork[] = [];
