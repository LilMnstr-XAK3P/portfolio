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
      "A televised look at CSN's Computing & Information Technology and Cybersecurity program — its immersive, learn-by-doing model, hands-on labs and the campus Faraday cage, competitive training through the National Cyber League, and Linux as the entry point into cybersecurity.",
    topics: [
      'CSN Computing, IT & Cybersecurity program',
      'Immersive, learn-by-doing education',
      'The campus Faraday cage',
      'National Cyber League (Capture the Flag)',
      'Linux as the entry point',
      'Ethical hacking and hands-on labs',
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
      'A CyberFed podcast conversation on hands-on, competition-based cybersecurity education — how the National Cyber League, cyber clubs, and community platforms like Discord build the "muscle memory" and problem-solving skills employers look for, and why success takes a 50/50 split between the classroom and self-directed learning.',
    topics: [
      'Hands-on, competition-based learning',
      'National Cyber League (NCL)',
      'Cyber clubs as the program “X-factor”',
      'Community learning on Discord',
      'Growth mindset and continuous learning',
      'Career readiness through problem-solving',
    ],
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
