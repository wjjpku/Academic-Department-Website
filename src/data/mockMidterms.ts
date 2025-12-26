import type { MockYear } from '../types';

export const mockMidterms: MockYear[] = [
  {
    year: 2025,
    exams: [
      {
        subject: '数学分析 I',
        questionFile: '/pdfs/2025_MA_I_Q.pdf',
        answerFile: '/pdfs/2025_MA_I_A.pdf',
      },
      {
        subject: '高等代数 I',
        questionFile: '/pdfs/2025_LA_I_Q.pdf',
        answerFile: '/pdfs/2025_LA_I_A.pdf',
      },
    ],
  },
  {
    year: 2024,
    exams: [
      {
        subject: '数学分析 I',
        questionFile: '/pdfs/2024_MA_I_Q.pdf',
        answerFile: '/pdfs/2024_MA_I_A.pdf',
      },
      {
        subject: '高等代数 I',
        questionFile: '/pdfs/2024_LA_I_Q.pdf',
        answerFile: '/pdfs/2024_LA_I_A.pdf',
      },
      {
        subject: '几何学基础',
        questionFile: '/pdfs/2024_Geo_Q.pdf',
        answerFile: '/pdfs/2024_Geo_A.pdf',
      },
    ],
  },
];
