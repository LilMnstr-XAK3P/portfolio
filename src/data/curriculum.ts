import type { CurriculumItem } from './types';

/** New courses created. Each counts toward the "courses developed" statistic. */
export const newCourses: CurriculumItem[] = [
  {
    id: 'csec100',
    title: 'CSEC 100: Cloud Security',
    kind: 'created',
    tags: ['cloud-security'],
    public: true,
  },
  {
    id: 'csec103',
    title: 'CSEC 103: IoT Security Essentials',
    kind: 'created',
    tags: ['iot-security'],
    public: true,
  },
  {
    id: 'csec181',
    title: 'CSEC 181 and CSEC 281: Ethical Hacking',
    kind: 'created',
    description: 'Certified Ethical Hacker (CEH) Practical certification preparation courses.',
    tags: ['ethical-hacking', 'certification'],
    public: true,
  },
  {
    id: 'csec191',
    title: 'CSEC 191: Disaster Recovery and Business Continuity',
    kind: 'created',
    tags: ['business-continuity'],
    public: true,
  },
  {
    id: 'csec-chfi-pathway',
    title: 'CSEC 120, 121, 220, and 221: Digital Forensics CHFI Pathway',
    kind: 'created',
    description:
      'A four-course digital forensics pathway preparing students for the Computer Hacking Forensics Investigator (CHFI) certification.',
    tags: ['forensics', 'certification'],
    public: true,
  },
];

/** Major course redesigns. Each counts toward the "courses redesigned" statistic. */
export const courseRedesigns: CurriculumItem[] = [
  {
    id: 'cit274-redesign',
    title: 'CIT 274: Ethical Hacking Essentials',
    kind: 'redesigned',
    tags: ['ethical-hacking'],
    public: true,
  },
  {
    id: 'csec110-redesign',
    title: 'CSEC 110: Digital Forensics Essentials',
    kind: 'redesigned',
    tags: ['forensics'],
    public: true,
  },
  {
    id: 'csec281-redesign',
    title: 'CSEC 281: Ethical Hacking',
    kind: 'redesigned',
    tags: ['ethical-hacking'],
    public: true,
  },
  {
    id: 'csec285-redesign',
    title: 'CSEC 285: Emerging Technology Security',
    kind: 'redesigned',
    tags: ['emerging-tech'],
    public: true,
  },
  {
    id: 'csec286-redesign',
    title: 'CSEC 286: Applied Network Defense',
    kind: 'redesigned',
    tags: ['network-defense'],
    public: true,
  },
  {
    id: 'csec287-redesign',
    title: 'CSEC 287: Threat Intelligence Essentials',
    kind: 'redesigned',
    tags: ['threat-intelligence'],
    public: true,
  },
  {
    id: 'csec289-redesign',
    title: 'CSEC 289: Malware and Memory Forensics',
    kind: 'redesigned',
    tags: ['forensics', 'malware'],
    public: true,
  },
];

/** Program- and degree-level redesign work. */
export const programRedesigns: CurriculumItem[] = [
  {
    id: 'aas-network-security',
    title: 'Cybersecurity–Network Security AAS Degree Redesign',
    kind: 'program-redesign',
    description:
      'Led the redesign of the Cybersecurity–Network Security Associate of Applied Science degree.',
    details: [
      'Replaced a legacy capstone with CSEC 286: Applied Network Defense',
      'Developed specialization pathways: Artificial Intelligence, Cloud Security, Offensive Security, Compliance, and Digital Forensics',
      'Emphasized hands-on labs, applied security skills, and alignment with EC-Council, CompTIA, and other industry standards',
    ],
    tags: ['program-redesign', 'network-security'],
    public: true,
  },
  {
    id: 'aas-digital-forensics',
    title: 'Cybersecurity–Digital Forensics AAS Degree and Certificate Redesign',
    kind: 'program-redesign',
    description:
      'Led the redesign of the Cybersecurity–Digital Forensics AAS degree and Certificate of Achievement.',
    details: [
      'Replaced unrelated coursework with industry-certification-aligned curriculum',
      'Supported course modernization and deactivation planning',
    ],
    tags: ['program-redesign', 'forensics'],
    public: true,
  },
];

/** Teaching innovation highlights featured on the Teaching page. */
export const teachingInnovations = [
  {
    id: 'ctf-learning',
    title: 'Capture-the-Flag Learning',
    description:
      'Competition-style challenges woven into coursework to build applied skill and confidence.',
  },
  {
    id: 'linux-sims',
    title: 'Linux Simulations',
    description:
      'Interactive simulations that let students practice Linux administration safely and repeatedly.',
  },
  {
    id: 'scorm-labs',
    title: 'SCORM Labs',
    description:
      'Portable, standards-based lab modules that run inside the learning management system.',
  },
  {
    id: 'redhat-academy',
    title: 'Red Hat Academy Integration',
    description:
      'Industry-standard Red Hat curriculum and environments integrated into Linux courses.',
  },
  {
    id: 'cert-aligned',
    title: 'Certification-Aligned Instruction',
    description: 'Courses mapped to Security+, Network+, CHFI, and other industry certifications.',
  },
  {
    id: 'ai-enhanced',
    title: 'AI-Enhanced Learning',
    description:
      'Responsible AI integration that builds student AI fluency alongside core content.',
  },
  {
    id: 'experiential-labs',
    title: 'Experiential Cybersecurity Labs',
    description:
      'Hands-on labs modeled on real security operations, forensics, and defense workflows.',
  },
  {
    id: 'reflection',
    title: 'Reflection & Metacognitive Assessment',
    description:
      'Structured student reflection that turns lab experience into durable understanding.',
  },
] as const;
