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
  // Figures from the owner's 2026 CV (authoritative source).
  {
    id: 'ncl-2026-team-44',
    title: 'National Cyber League — CSN Team Placement',
    detail: '44th nationally',
    season: 'Spring 2026',
    verified: true,
    public: true,
  },
  {
    id: 'ncl-2026-college-59',
    title: 'National Cyber League — College Placement',
    detail: '59th nationally, competing against approximately 500 colleges and universities',
    season: 'Spring 2026',
    verified: true,
    public: true,
  },
  {
    id: 'ncl-2026-earlier-reported',
    title: 'Earlier reported results (superseded — owner review)',
    detail:
      'Previously supplied figures: team placements 56th and 199th nationally out of approximately 4,000 teams. Superseded by the 2026 CV figures above; kept here for reconciliation only.',
    season: 'Spring 2026',
    verified: false,
    public: false,
    internalNotes:
      'Conflicting ranking sets: original project brief said 56th/199th of ~4,000 teams; the 2026 CV says team 44th and college 59th of ~500 colleges. The CV figures are displayed publicly. Delete this record once reconciled against official NCL results.',
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
