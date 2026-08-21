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
      'A televised conversation about the CSN cybersecurity program, cybersecurity careers, educational opportunities, why students should consider CSN, and workforce preparation.',
    topics: [
      'CSN cybersecurity program',
      'Cybersecurity careers',
      'Educational opportunities',
      'Why students should consider CSN',
      'Workforce preparation',
    ],
    url: 'https://youtu.be/7h8iM3HTLyY',
    tags: ['television', 'interview', 'outreach'],
    featured: true,
    public: true,
  },
  {
    id: 'cyberfed-nice-competitions-podcast',
    title: 'NICE Competitions Subgroup Podcast',
    outlet: 'CyberFed (YouTube)',
    kind: 'Podcast',
    // TODO (owner): confirm the publish date — YouTube reported August 8, 2020,
    // but it could not be fully verified through the site's bot protection.
    startDate: '2020-08-08',
    displayDate: 'August 8, 2020',
    summary:
      'A CyberFed podcast conversation on the NICE Competitions Subgroup and the role of cybersecurity competitions in building the workforce.',
    topics: ['NICE Competitions Subgroup', 'Cybersecurity competitions', 'Workforce development'],
    url: 'https://youtu.be/P1vFL0_6PJU',
    tags: ['podcast', 'interview', 'outreach', 'competitions'],
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
