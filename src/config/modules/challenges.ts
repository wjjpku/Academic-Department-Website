import type { Challenge } from '../../types';

export const challengesConfig: {
  title: string;
  subtitle: string;
  submitUrl?: string;
  issues: Challenge[];
} = {
  title: '九章征解',
  subtitle: '挑战思维极限，享受解题乐趣',
  issues: [
    {
      id: 2,
      title: '第二期',
      contentPath: '/challenges/issue2.md',
      pdfPath: '/pdfs/aw2.pdf',
      solutionPath: null,
      submitUrl: 'https://mp.weixin.qq.com/s/AEzL46M1J5jUDdvVdPMhYA', // Replace with actual submission link for issue 2
    },
    {
      id: 1,
      title: '第一期',
      contentPath: '/challenges/issue1.md',
      pdfPath: '/pdfs/aw1.pdf',
      solutionPath: null,
      submitUrl: 'https://mp.weixin.qq.com/s/CQVvuLLxyFGKxk1kmPh6bg', // Replace with actual submission link for issue 1
    }
  ],
};
