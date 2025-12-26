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
  id: string;
  title: string;
  issue: number;
  description: string;
  pdfLinks?: {
    title: string;
    url: string;
  }[];
}

export * from './mockMidterm';
