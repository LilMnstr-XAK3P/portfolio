import type { StudentEngagement, StudentResult } from './types';

export const ctfSquad = {
  name: 'CSN CTF Squad',
  role: 'Faculty Coach and Mentor',
  description:
    'Professor Morningstar trained CSN cybersecurity students for the Spring 2026 National Cyber League season, preparing them across the full range of competition skill areas.',
  season: 'Spring 2026 National Cyber League',
  skillAreas: [
    'Digital forensics',
    'Network defense',
    'OSINT',
    'Cryptography',
    'Web security',
    'Incident response',
    'Log analysis',
    'Password security',
    'Applied problem solving',
  ],
} as const;

/**
 * Competition results. Only verified: true AND public: true results render.
 * Put any conflicting or unconfirmed rankings in a record with public: false
 * and explain in internalNotes — never display contradictory statistics.
 */
export const competitionResults: StudentResult[] = [
  // Verified by the owner against official Cyber Skyline results.
  {
    id: 'ncl-2026-team-56',
    title: 'National Cyber League — CSN Team Placement',
    detail: '56th nationally',
    season: 'Spring 2026',
    url: 'https://cyberskyline.com/hosted_events/ncl-spring-2026',
    verified: true,
    public: true,
  },
  {
    id: 'ncl-2026-college-59',
    title: 'National Cyber League — CSN College Power Ranking',
    detail:
      '59th nationally in the overall college Power Ranking, among approximately 500 colleges and universities',
    season: 'Spring 2026',
    url: 'https://cyberskyline.com/data/power-ranking/spring-2026-national',
    verified: true,
    public: true,
  },
];

/**
 * Other student-engagement activities. These are editable placeholders —
 * fill in real details and set public: true to display them. Do not invent
 * results or participant counts.
 */
export const studentEngagements: StudentEngagement[] = [
  {
    id: 'aws-jam',
    title: 'AWS Jam',
    description: 'TODO: add event details.',
    tags: ['cloud'],
    public: false,
  },
  {
    id: 'google-dc-visit',
    title: 'Google Data Center Visit',
    description: 'TODO: add visit details.',
    tags: ['industry'],
    public: false,
  },
  {
    id: 'defcon',
    title: 'DEF CON',
    description: 'TODO: add participation details.',
    tags: ['conference'],
    public: false,
  },
  {
    id: 'internships',
    title: 'Internships',
    description: 'TODO: add internship pathway details.',
    tags: ['workforce'],
    public: false,
  },
  {
    id: 'scholarships',
    title: 'Scholarships',
    description: 'TODO: add scholarship details.',
    tags: ['funding'],
    public: false,
  },
  {
    id: 'certifications',
    title: 'Student Certifications',
    description: 'TODO: add certification achievement details.',
    tags: ['certification'],
    public: false,
  },
  {
    id: 'student-awards',
    title: 'Student Awards',
    description: 'TODO: add award details.',
    tags: ['awards'],
    public: false,
  },
  {
    id: 'guest-speakers',
    title: 'Guest-Speaker Events',
    description: 'TODO: add event details.',
    tags: ['events'],
    public: false,
  },
  {
    id: 'linkedin-readiness',
    title: 'LinkedIn & Professional-Readiness Activities',
    description: 'TODO: add activity details.',
    tags: ['career'],
    public: false,
  },
];
