import type { Course } from './types';

/** Courses taught, organized by expertise group. */
export const coursesTaught: Course[] = [
  // Linux and Systems Administration
  {
    id: 'cit173',
    code: 'CIT 173',
    title: 'Introduction to Linux',
    group: 'Linux and Systems Administration',
    terms: 'Spring 2020 to Present',
    tags: ['linux'],
    public: true,
  },
  {
    id: 'cit174',
    code: 'CIT 174',
    title: 'Linux System Administration',
    group: 'Linux and Systems Administration',
    terms: 'Fall 2025',
    tags: ['linux'],
    public: true,
  },
  // Cybersecurity
  {
    id: 'cit217',
    code: 'CIT 217',
    title: 'Security+',
    group: 'Cybersecurity',
    terms: 'Fall 2019 to Present',
    tags: ['cybersecurity', 'certification'],
    public: true,
  },
  {
    id: 'cit112b',
    code: 'CIT 112B',
    title: 'Network+',
    group: 'Cybersecurity',
    terms: 'Fall 2019 to Present',
    tags: ['cybersecurity', 'networking', 'certification'],
    public: true,
  },
  {
    id: 'cit274b-csec281',
    code: 'CIT 274B / CSEC 281',
    title: 'Ethical Hacking',
    group: 'Cybersecurity',
    terms: 'Spring 2021 to Present',
    tags: ['cybersecurity', 'ethical-hacking'],
    public: true,
  },
  {
    id: 'csco230b',
    code: 'CSCO 230B',
    title: 'Security Operations Center Fundamentals',
    group: 'Cybersecurity',
    terms: 'Fall 2023 to Present',
    tags: ['cybersecurity', 'security-operations'],
    public: true,
  },
  {
    id: 'csec290b',
    code: 'CSEC 290B',
    title: 'Security Capstone',
    group: 'Cybersecurity',
    terms: 'Spring 2022',
    tags: ['cybersecurity', 'capstone'],
    public: true,
  },
  {
    id: 'csec226b',
    code: 'CSEC 226B',
    title: 'Compliance',
    group: 'Cybersecurity',
    terms: 'Summer 2021',
    tags: ['cybersecurity', 'compliance'],
    public: true,
  },
  // Digital Forensics
  {
    id: 'csec110b',
    code: 'CSEC 110B',
    title: 'Introduction to Digital Forensics',
    group: 'Digital Forensics',
    terms: 'Fall 2021 to Present',
    tags: ['forensics'],
    public: true,
  },
  {
    id: 'csec114b',
    code: 'CSEC 114B',
    title: 'Introduction to Applied Network Forensics',
    group: 'Digital Forensics',
    terms: 'Fall 2023',
    tags: ['forensics', 'networking'],
    public: true,
  },
  // General Information Technology
  {
    id: 'is101',
    code: 'IS 101',
    title: 'Introduction to Information Systems',
    group: 'General Information Technology',
    terms: 'Fall 2019; Spring 2020; 2024–2025',
    tags: ['information-technology'],
    public: true,
  },
];

/** Display order for course groups on the Teaching page. */
export const courseGroupOrder = [
  'Linux and Systems Administration',
  'Cybersecurity',
  'Digital Forensics',
  'General Information Technology',
];
