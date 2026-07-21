import type { SocialLink } from './types';

/**
 * Core professional identity. Edit this file to update the name, titles,
 * biography, contact information, and social links shown across the site.
 */
export const profile = {
  name: 'Professor Lily Morningstar',
  shortName: 'Lily Morningstar',
  // Title per CV (2026): appointed 2019, tenured 2023; serves as lead faculty.
  primaryTitle: 'Professor of Cybersecurity and Digital Forensics',
  institution: 'College of Southern Nevada',
  doctoralProgram:
    'Doctoral Student in Curriculum and Instruction, Interaction & Media Sciences — University of Nevada, Las Vegas',
  focusStatement:
    'Cybersecurity Education | Linux | Digital Forensics | Artificial Intelligence | Curriculum Innovation',
  /** Year she began teaching cybersecurity at CSN. Drives the
   *  "years teaching cybersecurity" statistic — edit if incorrect. */
  teachingSince: 2019,
  emails: [{ label: 'CSN', address: 'lily.morningstar@csn.edu' }],
  /** Campus office contact. This is a public office phone/address (not a
   *  private/home number). Set office: null to hide the office section. */
  office: {
    campus: 'North Las Vegas Campus',
    building: 'Arberry Telecom Building',
    room: 'Office 2721',
    address: '3200 E. Cheyenne Ave, North Las Vegas, NV 89030',
    phone: '702.651.2653',
  },
  /** Microsoft Bookings link for office-hours appointments (via MS Teams).
   *  Set to '' to hide the scheduling buttons everywhere. */
  bookingUrl:
    'https://outlook.office.com/book/MorningstarOfficeHours@student.csn.edu/?ismsaljsauthenabled',
  /** Path (relative to the site base) of the professional headshot.
   *  Add the image at public/images/headshot.jpg, then set this to
   *  'images/headshot.jpg'. While empty, a styled placeholder is shown. */
  headshot: 'images/headshot.jpg',
  bio: `Professor Lily Morningstar is a Lead Cybersecurity Faculty member at the College of Southern Nevada and a doctoral student in Curriculum and Instruction, with a specialization in Interaction and Media Sciences, at the University of Nevada, Las Vegas. She specializes in cybersecurity education, Linux systems administration, digital forensics, artificial intelligence integration, and workforce-aligned curriculum development.

Professor Morningstar has led the redesign of multiple cybersecurity degree pathways; developed innovative courses in cloud security, ethical hacking, and digital forensics; and actively contributes to national computing education initiatives through the Association for Computing Machinery Committee for Computing Education in Community Colleges. Her professional activities include AI curriculum evaluation, faculty development in AI fluency and responsible AI, and collaboration with industry and academic partners to strengthen cybersecurity education.

As coach of the CSN CTF Squad, she mentors students in national cybersecurity competitions, helping them achieve top national rankings. Her research and professional interests focus on AI-enhanced learning, gamification, experiential cybersecurity education, and preparing students for the evolving AI-enabled workforce.`,
  introSummary:
    'Working at the intersection of cybersecurity, artificial intelligence, and curriculum leadership — designing workforce-aligned degree pathways, integrating responsible AI into higher education, and coaching students to national success in cybersecurity competitions.',
  professionalPhilosophy:
    'Education should prepare students for the workforce they will actually enter. That means curriculum grounded in industry certifications and real tooling, honest engagement with emerging technology such as AI, and programs designed around measurable student outcomes rather than tradition.',
  teachingPhilosophy:
    'Students learn cybersecurity by doing cybersecurity. Hands-on labs, Capture-the-Flag challenges, simulations, and reflection-driven assessment turn abstract concepts into durable skills — and gamified, experiential learning builds the confidence and self-efficacy students need to persist in the field.',
  affiliations: [
    'ACM Committee for Computing Education in Community Colleges (CCECC) — Contributor (2026)',
    'AP Reader — AP Cybersecurity Pilot Program, Contributor (2026)',
    'CAE in Cybersecurity Community — Regular Participant (2025–Present)',
    'National Cyber League — Faculty Coach',
    "Women's Society of Cyberjutsu (member since 2017; volunteer)",
    'WiCyS (Women in CyberSecurity)', // TODO (owner): CV reads "WyCiS" — confirm exact organization name
    'Information Systems Security Association (ISSA)',
  ],
} as const;

/**
 * Social and scholarly profile links.
 * Leave url: '' for accounts not yet supplied — blank entries are hidden
 * from the site automatically. Do not guess URLs.
 */
export const socialLinks: SocialLink[] = [
  {
    id: 'linkedin',
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/lily-morningstar-7532a8124',
  },
  { id: 'github', label: 'GitHub', url: 'https://github.com/LilMnstr-XAK3P' },
  { id: 'orcid', label: 'ORCID', url: 'https://orcid.org/0009-0002-3587-4835' },
  { id: 'scholar', label: 'Google Scholar', url: '' }, // TODO: owner to supply
  { id: 'researchgate', label: 'ResearchGate', url: '' }, // TODO: owner to supply
];
