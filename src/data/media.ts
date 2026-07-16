import type { MediaItem } from './types';

export const mediaItems: MediaItem[] = [
  {
    id: 'insomniac-tv-interview',
    title: 'Insomniac Television Interview',
    outlet: 'Insomniac Television, NBC Channel 3, Las Vegas',
    host: 'Jonathan Scott',
    kind: 'Television Interview',
    startDate: '2026-04-09',
    displayDate: 'April 9, 2026',
    summary:
      'A 40-minute televised conversation about the CSN cybersecurity program, cybersecurity careers, educational opportunities, why students should consider CSN, and workforce preparation.',
    topics: [
      'CSN cybersecurity program',
      'Cybersecurity careers',
      'Educational opportunities',
      'Why students should consider CSN',
      'Workforce preparation',
    ],
    tags: ['television', 'interview', 'outreach'],
    featured: true,
    public: true,
  },
  {
    id: 'linkedin-idk-degree',
    // TODO (owner): confirm the article title matches the published headline.
    title: 'Cybersecurity: The New "I Don\'t Know" Degree',
    outlet: 'LinkedIn',
    kind: 'LinkedIn Article',
    startDate: '2026-01-01',
    displayDate: '2026',
    summary:
      'LinkedIn article on cybersecurity as a degree choice for students who are still deciding on a career direction.',
    url: 'https://www.linkedin.com/pulse/cybersecurity-new-i-dont-know-degree-lily-morningstar-ytshc/',
    tags: ['article', 'linkedin', 'outreach'],
    public: true,
  },
  {
    id: 'linkedin-7500-students',
    // TODO (owner): confirm the article title matches the published headline.
    title: 'What 7,500 Students Taught Me About Closing the Cybersecurity Gap',
    outlet: 'LinkedIn',
    kind: 'LinkedIn Article',
    startDate: '2026-01-02',
    displayDate: '2026',
    summary:
      'LinkedIn article drawing on years of classroom experience to examine how education can close the cybersecurity workforce gap.',
    url: 'https://www.linkedin.com/pulse/what-7500-students-taught-me-closing-cybersecurity-gap-morningstar-xmikc/',
    tags: ['article', 'linkedin', 'outreach'],
    public: true,
  },
];

/**
 * Additional outreach categories. The Media page renders a card for each,
 * listing matching items or an "add" hint when empty. Add new items to
 * mediaItems above with the matching `kind`.
 */
export const outreachKinds = [
  'LinkedIn Article',
  'Faculty Publication',
  'Community Presentation',
  'Podcast',
  'Interview',
  'Guest Lecture',
  'Recruitment Event',
  'Cybersecurity Awareness Event',
] as const;
