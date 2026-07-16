import type { EducationEntry } from './types';

export const education: EducationEntry[] = [
  {
    id: 'unlv-phd',
    institution: 'University of Nevada, Las Vegas',
    degree: 'Ph.D. in Curriculum and Instruction',
    specialization: 'Interaction and Media Sciences',
    status: 'In progress',
    expected: 'Expected graduation: Spring 2028',
    notes: ['Completed doctoral credits: 33'],
    public: true,
  },
  {
    id: 'unlv-edd',
    institution: 'University of Nevada, Las Vegas',
    degree: 'Previous Ed.D. study in Curriculum and Instruction',
    // Not a separate completed degree — coursework transferred into the Ph.D.
    status: 'Transferred into Ph.D. program',
    public: true,
  },
  {
    id: 'utica-ms',
    institution: 'Utica University',
    degree: 'M.S. in Cybersecurity and Digital Forensics',
    year: '2018',
    focusAreas: ['Information security', 'Computer crime investigation', 'Digital forensics'],
    capstone: 'Data Extraction from Solid State Drives',
    public: true,
  },
  {
    id: 'ncfu-ms-bs',
    institution: 'North Caucasus Federal University',
    degree: 'M.S. and B.S. in Applied Mathematics and Informatics',
    year: '2007',
    focusAreas: ['Mathematical modeling', 'Computer science', 'Networking theory', 'Education'],
    capstone: 'Data Transferring Over the Local Area Network Model',
    public: true,
  },
];
