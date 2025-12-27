export interface Activity {
  id: string;
  title: string;
  description: string;
  date: string;
  image: string;
  category: 'salon' | 'lecture' | 'interview' | 'other';
  link?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  link?: string;
  description?: string;
}

export interface Challenge {
  id: number;
  title: string;
  contentPath: string;
  pdfPath: string | null;
  solutionPath: string | null;
}

export * from './mockMidterm';
