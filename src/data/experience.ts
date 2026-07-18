import type { ExperienceEntry } from './types';

/** Academic appointment and prior professional experience, newest first. */
export const experience: ExperienceEntry[] = [
  {
    id: 'csn-professor',
    role: 'Professor of Cybersecurity and Digital Forensics',
    organization: 'College of Southern Nevada (CSN)',
    location: 'Las Vegas, NV',
    period: '2019 to Present',
    startDate: '2019-08-01',
    summary:
      'Develop and teach undergraduate courses in cybersecurity and digital forensics; lead initiatives for inclusive learning environments leveraging emerging technologies. Tenured, 2023.',
    public: true,
  },
  {
    id: 'infosec-analyst-60out',
    role: 'Information Security Analyst',
    organization: '60out.com',
    location: 'Los Angeles, CA',
    period: '2017 to 2019',
    startDate: '2017-01-01',
    summary: 'Conducted risk assessments and safeguarded organizational data and system integrity.',
    details: [
      'Conducted penetration testing and evaluated risks',
      'Performed information security compliance audits',
      'Delivered user security awareness education',
      'Implemented security best practices and policies',
    ],
    public: true,
  },
  {
    id: 'matpellika-owner',
    role: 'Owner-Operator',
    organization: 'MATPELLIKA Group / MATPELLIKA Learning Center, LLC',
    location: 'Los Angeles, CA',
    period: '2012 to 2017',
    startDate: '2012-01-01',
    summary:
      'Operated two businesses: MATPELLIKA Group provided technology support and services, including web application development, digital advertisement design, and photo and video editing. MATPELLIKA Learning Center, LLC provided licensed educational services for adults and children, including winter and summer break camps for elementary and middle school students.',
    public: true,
  },
];
