import type { ServiceRole } from './types';

/** Institutional service roles, newest first by startDate. */
export const serviceRoles: ServiceRole[] = [
  {
    id: 'ai-force-committee',
    role: 'AI Force Initiative Ad Hoc Committee Member',
    organization: 'College of Southern Nevada',
    period: '2024 to Present',
    startDate: '2024-01-01',
    description:
      'Institutional AI initiative shaping policy, curriculum integration, and faculty development.',
    tags: ['ai', 'service'],
    public: true,
  },
  {
    id: 'ai-policy-contributor',
    role: 'AI Policy Development Contributor',
    organization: 'College of Southern Nevada',
    period: '2024 to Present',
    startDate: '2024-01-02',
    description: 'Contributing to institutional AI policy development.',
    tags: ['ai', 'policy', 'service'],
    public: true,
  },
  {
    id: 'tenured-professor',
    role: 'Tenured Professor',
    organization: 'College of Southern Nevada',
    period: '2023 to Present',
    startDate: '2023-01-01',
    tags: ['faculty'],
    public: true,
  },
  {
    id: 'professional-advancement',
    role: 'Professional Advancement Committee Associate',
    organization: 'College of Southern Nevada',
    period: '2023 to Present',
    startDate: '2023-01-02',
    tags: ['service'],
    public: true,
  },
  {
    id: 'degree-evaluation-committee',
    role: 'Annual Degree Evaluation Committee Member',
    organization: 'College of Southern Nevada',
    period: '2022 to Present',
    startDate: '2022-01-01',
    tags: ['service', 'curriculum'],
    public: true,
  },
  {
    id: 'faculty-senator',
    role: 'Faculty Senator, School of Applied Technology',
    organization: 'College of Southern Nevada',
    period: '2020 to 2024',
    startDate: '2020-01-01',
    tags: ['service', 'governance'],
    public: true,
  },
];
