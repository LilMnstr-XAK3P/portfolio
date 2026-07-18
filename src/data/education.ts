import type { EducationEntry } from './types';

export const education: EducationEntry[] = [
  {
    id: 'unlv-phd',
    institution: 'University of Nevada, Las Vegas',
    degree: 'Ph.D. in Curriculum and Instruction',
    specialization: 'Interaction and Media Sciences (IMS)',
    status: 'In progress',
    expected: 'Expected graduation: Spring 2028',
    notes: ['Completed doctoral credits: 33'],
    focusAreas: [
      'AI in education',
      'Cybersecurity education',
      'Gamification and experiential learning',
      'Accessibility and universal design for learning',
      'Student engagement and motivation',
      'Learning analytics',
    ],
    public: true,
  },
  {
    id: 'unlv-edd',
    institution: 'University of Nevada, Las Vegas',
    degree: 'Ed.D. study in Curriculum and Instruction',
    // Not a separate completed degree — 27 credits completed, transferred
    // into the Ph.D. program in 2025.
    status: '27 credits completed; transferred to Ph.D. program, 2025',
    notes: ['Focus on learner-technology symbiotic interaction'],
    public: true,
  },
  {
    id: 'utica-ms',
    institution: 'Utica University (formerly Utica College of Syracuse University)',
    degree: 'M.S. in Cybersecurity and Digital Forensics',
    year: '2018',
    focusAreas: ['Information security', 'Computer crime investigation', 'Digital forensics'],
    capstone: 'Data Extraction from Solid State Drives',
    public: true,
  },
  {
    id: 'ncfu-ms-bs',
    institution: 'North Caucasus Federal University (formerly Stavropol State University)',
    degree: 'M.S. / M.Ed. / B.S. in Applied Mathematics and Informatics',
    year: '2007',
    focusAreas: ['Mathematical modeling', 'Computer science', 'Networking theory', 'Education'],
    capstone: 'Data Transferring Over the Local Area Network Model',
    public: true,
  },
];
