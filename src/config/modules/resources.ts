import type { ResourceCategory } from '../../types';

export const resourcesConfig: {
  title: string;
  subtitle: string;
  submitUrl?: string;
  categories: ResourceCategory[];
} = {
  title: '学术资源',
  subtitle: '汇聚优质学习资料，助力学术探索之路',
  submitUrl: 'https://wj.qq.com/s2/25364156/62a3/', // Replace with your actual survey link
  categories: [
    {
      id: 'general',
      title: '常用链接',
      description: '学术链接',
      items: [
        {
          id: 'sms',
          title: '数学科学学院官网',
          description: '学院新闻、通知公告、教室预约',
          link: 'http://portal.math.pku.edu.cn/htdocs/main.php',
          tags: ['学院']
        },
        {
          id: 'pkuhub',
          title: 'PKUHUB',
          description: '北大学生自行搭建的课程资料网站，助力学习进步',
          link: 'https://pkuhub.cn/',
          tags: ['资料']
        },
        {
          id: 'tuanwei',
          title: '更多数院资源',
          description: '由数院学术科创部负责的资源网站，久未更新，但是资源丰富',
          link: 'https://flowus.cn/share/afd555bf-fd94-4124-988f-f98653dd3a52',
          tags: ['资料']
        },
        {
          id: 'library',
          title: 'Z-Library',
          description: 'Z-Library，存有大量电子书籍，可以找到大多数课本',
          link: 'https://zh.z-library.sk/',
          tags: ['资料']
        },
      ]
    },
    {
      id: 'freshman',
      title: '新生指引',
      description: '帮助大一新生快速适应大学生活',
      items: [
        {
          id: 'handbook',
          title: '选课手册',
          description: '2025年选课手册, 包含选课指南、生活攻略等实用信息',
          pdfPath: '/pdfs/lecture.pdf',
          tags: ['手册', '新生']
        },
        {
          id: 'handbook2',
          title: '双学位培养方案',
          description: '2025年双学位培养方案, 包含辅修与双专业的课程内容、选修要求等',
          pdfPath: '/pdfs/shuangxuewei.pdf',
          tags: ['手册', '新生']
        }
      ]
    },
    {
      id: 'more',
      title: '专业资料',
      description: '知识分享为导向的pdf资源',
      items: [
        {
          id: 'l1',
          title: '计算机基础手册',
          description: '由臧炫懿学长热心整理的计算机基础手册，伟大！',
          pdfPath: '/pdfs/shouce.pdf',
          tags: ['计算机']
        }
      ]
    }
  ]
};
