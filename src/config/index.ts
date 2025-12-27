import { BookOpen, Coffee, Users, TrendingUp } from 'lucide-react';
import type { Activity, TeamMember, Challenge, ResourceCategory } from '../types';

export const siteConfig = {
  title: '北京大学数学科学学院学生会学术组',
  shortTitle: '学术组',
  metaDescription: '搭建师生桥梁 · 引领学术风尚 · 服务同学成长',
  footer: {
    title: '北京大学数学科学学院学生会学术组',
    subtitle: 'Academic Department, SMS Student Union, PKU',
    copyright: `© ${new Date().getFullYear()} SMS Academic Department. All rights reserved.`,
  },
};

export const navConfig = [
  { name: '首页', path: '/' },
  { name: '学术资源', path: '/resources' },
  { name: '九章征解', path: '/challenges' },
  { name: '模拟期中', path: '/mock-midterm' },
  { name: '团队风采', path: '/team' },
  { name: '加入我们', path: '/join' },
  { name: '关于本站', path: '/about' },
];

export const homeConfig = {
  hero: {
    title: '北京大学数学科学学院',
    subtitle: '学生会学术组',
    slogan: '搭建师生桥梁 · 引领学术风尚 · 服务同学成长',
    images: [
      '/images/homepage.jpg',
      '/images/activity1-1.jpg',
      '/images/activity3-1.jpg',
      '/images/activity2-1.jpg',
      '/images/all.jpg',
      '/images/party.jpg'
    ],
  },
  intro: {
    image: '/images/homepage3.jpg',
    title: '关于学术组',
    description: `北京大学数学科学学院学生会学术组致力于搭建师生交流平台，推动学术氛围建设。
    我们通过举办学术讲座、pizza沙龙、模拟面试等多样化活动，帮助同学们开阔视野，
    提升学术素养，规划未来发展。`,
    features: [
      {
        title: '经验交流',
        description: '分享分系经验，指明发展道路',
        color: 'pku-red',
      },
      {
        title: '知识分享',
        description: '连接教授与学生，传递前沿知识',
        color: 'pku-blue',
      },
    ],
  },
};

export const activitiesConfig: {
  title: string;
  subtitle: string;
  homeSection: {
    title: string;
    description: string;
    buttonText: string;
  };
  activities: Activity[];
} = {
  title: '活动掠影',
  subtitle: '回顾过往精彩瞬间，展望未来无限可能',
  homeSection: {
    title: '活动掠影',
    description: '记录学术组的每一个精彩瞬间，见证思想的碰撞与成长的足迹',
    buttonText: '查看更多活动',
  },
  activities: [
    {
      id: '1',
      title: '学术PIZZA沙龙',
      description: '邀请各个方向的知名教授与学生进行深入交流，旨在增进本科生对该学科前沿的理解，创造教授与优秀本科生接触的机会。',
      date: '2025-05-13',
      image: '/images/activity1-1.jpg',
      category: 'salon',
      link: 'https://mp.weixin.qq.com/s/5cymKAUBZtfdv2HEbyvdsA'
    },
    {
      id: '2',
      title: '分系讲座&手册',
      description: '邀请学长学姐分享分系心得，编撰分系手册并举办讲座，旨在帮助同学们明晰分系的方向。',
      date: '2025-04-26',
      image: '/images/activity2-1.jpg',
      category: 'lecture',
      link: 'https://mp.weixin.qq.com/s/9Hzq6mEnws0g_nM5ga_dyA'
    },
    {
      id: '3',
      title: '数学一小时',
      description: '邀请著名教授讲授一小时左右的前沿内容，旨在帮助有志于学术的同学们增长见识，拓宽视野。',
      date: '2025-05-22',
      image: '/images/activity3-1.jpg',
      category: 'lecture',
      link: 'https://mp.weixin.qq.com/s/knU5n7UCmgGGTyo3CiXoaA'
    },
    {
      id: '4',
      title: '四推模拟面试',
      description: '邀请大四本科生或博士生作为面试官，对进行四推面试的同学们进行模拟面试。旨在帮助大三同学熟悉四推面试的形式、流程以及问题。',
      date: '2025-04-12',
      image: '/images/activity4-1.jpg',
      category: 'interview',
      link: 'https://mp.weixin.qq.com/s/iSl8ixuXGz-uRJWZXne_uA'
    }
  ]
};

export const resourcesConfig: {
  title: string;
  subtitle: string;
  submitUrl?: string;
  categories: ResourceCategory[];
} = {
  title: '学术资源',
  subtitle: '汇聚优质学习资料，助力学术探索之路',
  submitUrl: 'https://wj.qq.com/', // Replace with your actual survey link
  categories: [
    {
      id: 'general',
      title: '常用链接',
      description: '数学学院常用网站入口',
      items: [
        {
          id: 'portal',
          title: '北京大学校内门户',
          description: '选课、查询成绩、缴纳学费等',
          link: 'https://portal.pku.edu.cn',
          tags: ['校务']
        },
        {
          id: 'sms',
          title: '数学科学学院官网',
          description: '学院新闻、通知公告、师资介绍',
          link: 'http://portal.math.pku.edu.cn/htdocs/main.php',
          tags: ['学院']
        },
        {
          id: 'bb',
          title: '教学网 (Blackboard)',
          description: '课程资料下载、作业提交',
          link: 'https://course.pku.edu.cn',
          tags: ['教学']
        }
      ]
    },
    {
      id: 'freshman',
      title: '新生指引',
      description: '帮助大一新生快速适应大学生活',
      items: [
        {
          id: 'handbook',
          title: '新生手册',
          description: '包含选课指南、生活攻略等实用信息',
          pdfPath: '/pdfs/freshman-handbook.pdf',
          tags: ['手册', '新生']
        }
      ]
    },
    {
      id: 'lectures',
      title: '讲座资料',
      description: '学术讲座的PPT与录像存档',
      items: [
        {
          id: 'l1',
          title: '如何学好数学分析',
          description: '2024秋季学期学习经验分享会',
          pdfPath: '/pdfs/ma-learning-guide.pdf',
          tags: ['数分', '经验分享']
        }
      ]
    }
  ]
};

export const challengesConfig: {
  title: string;
  subtitle: string;
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
    },
    {
      id: 1,
      title: '第一期',
      contentPath: '/challenges/issue1.md',
      pdfPath: '/pdfs/aw1.pdf',
      solutionPath: null,
    }
  ],
};

export const mockMidtermConfig = {
  title: '模拟期中',
  subtitle: '查漏补缺，备战期中，助你从容应对考试',
  intro: {
    title: '关于模拟期中',
    content: [
      '模拟期中考试是学术组的传统特色活动，旨在帮助大一新生适应大学数学考试的节奏与难度。',
      '我们邀请经验丰富的学长学姐出题，题目适应数学组与非数学组，考纲覆盖数分高代，也有高数线代，模拟真实的考试环境。',
      '考后我们将提供详细的解答，并颁发奖品，鼓励同学们查漏补缺，巩固所学知识。',
    ],
    image: '/images/exam.jpg',
  },
  reports: [
    {
      year: 2025,
      title: '查看2025年成绩报告',
      link: 'https://pkusmsexam.netlify.app/'
    }
  ],
  awards: [
    {
      year: 2025,
      title: '查看2025年获奖名单',
      link: 'https://mp.weixin.qq.com/s/xnfZLnIMhkyYtoxRoAhnpg'
    },
    {
      year: 2024,
      title: '查看2024年获奖名单',
      link: 'https://mp.weixin.qq.com/s/6SZUgBbOYdQPnnWRdW6pdQ'
    }
  ],
  exams: [
    {
      id: 6,
      title: '2025年 数学组',
      pdfPath: '/public/pdfs/2025math.pdf',
    },
    {
      id: 5,
      title: '2025年 高等数学',
      pdfPath: '/public/pdfs/2025gs.pdf',
    },
    {
      id: 4,
      title: '2025年 线性代数',
      pdfPath: '/pdfs/2025xd.pdf',
    },
    {
      id: 2,
      title: '2024年 数学组',
      pdfPath: '/pdfs/2024math.pdf',
    },
    {
      id: 1,
      title: '2023年 数学组',
      pdfPath: '/pdfs/2023math.pdf',
    },
    {
      id: 1,
      title: '2020年 数学组',
      pdfPath: '/pdfs/2020math.pdf',
    },
    {
      id: 1,
      title: '2019年 数学组',
      pdfPath: '/pdfs/2019math.pdf',
    },
    {
      id: 1,
      title: '某届数学组',
      pdfPath: '/pdfs/old1.pdf',
    },
    {
      id: 1,
      title: '首届数学组',
      pdfPath: '/pdfs/old0.pdf',
    }
  ]
};

export const teamConfig: {
  title: string;
  subtitle: string;
  defaultRoleDescription: string;
  members: TeamMember[];
  memberLists: {
    title: string;
    groups: { year: string; names: string[] }[];
  };
  gallery: {
    title: string;
    description: string;
    images: { src: string; caption: string }[];
  };
} = {
  title: '团队风采',
  subtitle: '一群热爱数学、乐于奉献的伙伴，共同打造温暖的学术家园',
  defaultRoleDescription: '北京大学数学科学学院学生会学术组',
  members: [
    {
      name: '吴家驹',
      role: '负责人',
      image: '/images/member1.jpg',
      link: 'https://wjjpku.github.io'
    },
    {
      name: '陈诺',
      role: '骨干',
      image: '/images/member2.jpg',
      link: '#'
    },
    {
      name: '朱既同',
      role: '核心成员',
      image: '/images/member3.jpg',
      link: '#'
    },
    {
      name: '黄乐天',
      role: '核心成员',
      image: '/images/member4.jpg',
      link: '#'
    },
    {
      name: '张清州',
      role: '核心成员',
      image: '/images/member5.jpg',
      link: '#'
    },
    {
      name: '郭焕琨',
      role: '29届负责人',
      image: '/images/member6.jpg',
      link: '#'
    },
    {
      name: '蒋昕灏',
      role: '29届骨干',
      image: '/images/member8.jpg',
      link: '#'
    },
    {
      name: '吴昀泽',
      role: '28届负责人',
      image: '/images/member7.jpg',
      link: '#'
    }
  ],
  memberLists: {
    title: '成员名单',
    groups: [
      {
        year: '2025',
        names: ['黄桢', '徐楚洋', '赵林', '陈文韬', '黄彦钧', '杨博文', '彭柏铭', '郑和易', '郑志远', '闫轶', '翟芸烽', '曹津睿', '唐小雨', '张源', '谢子强', '张晟轩', '庄子路']
      },
      {
        year: '2024',
        names: ['陈诺', '黄乐天', '吴家驹', '张清州', '朱既同']
      }
    ]
  },
  gallery: {
    title: '团队生活',
    description: '工作之余，我们也懂得享受生活，在欢声笑语中共同成长',
    images: [
      { src: '/images/selfintro.jpg', caption: '自我介绍' },
      { src: '/images/firstmeet.jpg', caption: '例会合影' },
      { src: '/images/party.jpg', caption: '团建聚餐' },
      { src: '/images/ghkpiza.jpg', caption: 'pizza沙龙' },
    ],
  },
};

export const joinConfig = {
  hero: {
    title: '加入我们，点亮你的大学生活！',
    subtitle: '这里有最有趣的活动、最温暖的伙伴、最广阔的舞台',
    bgImage: '/images/homepage.jpg',
  },
  benefitsTitle: '在我们这里，你可以获得',
  benefits: [
    {
      icon: BookOpen,
      iconColor: 'text-pku-red',
      title: '丰富的学术活动',
      desc: '定期举办讲座、午餐会，拓宽学术视野，近距离接触知名教授'
    },
    {
      icon: Coffee,
      iconColor: 'text-pku-blue',
      title: '轻松的工作氛围',
      desc: '合理分配工作量，兼顾学业与生活，享受快乐的学生工作'
    },
    {
      icon: Users,
      iconColor: 'text-pku-red',
      title: '温馨的团队文化',
      desc: '定期团建与例会，结识志同道合的伙伴，收获真挚友谊'
    },
    {
      icon: TrendingUp,
      iconColor: 'text-pku-blue',
      title: '个人成长机会',
      desc: '提升组织策划能力，拓展人脉资源，参与有影响力的项目'
    }
  ],
  contact: {
    title: '如何加入我们？',
    qrImage: '/images/QR.jpg',
    qrTip: '扫码加入招新群，期待你的到来！',
    methods: [
      {
        type: 'wechat',
        label: '微信联系',
        value: 'wjj05170032',
      },
      {
        type: 'email',
        label: '邮箱联系',
        value: 'wjj_math@stu.pku.edu.cn',
        isLink: true,
      },
    ],
  },
};

export const aboutConfig = {
  title: '关于本站',
  intro: {
    title: '网站简介',
    content: [
      '欢迎来到北京大学数学科学学院学生会学术组官方网站！',
      '本站致力于为数学科学学院的学生提供学术交流、资源共享和活动信息平台。我们希望通过这个网站，能够更好地被广大同学所了解，促进学术氛围的建设。',
    ],
  },
  author: {
    title: '关于作者',
    content: [
      '本网站由北京大学数学科学学院 2024 级本科生吴家驹开发与维护。',
      '作者热衷于全栈开发与 Web 技术，致力于用技术服务同学，提升学生工作的效率与体验。',
      '如果您对本网站有任何建议或发现任何Bug，欢迎通过下方的联系方式反馈。',
    ],
    social: [
      {
        name: 'GitHub',
        url: 'https://github.com/wjjpku',
      },
      {
        name: '个人主页',
        url: 'https://wjjpku.github.io',
      },
    ],
  },
  features: {
    title: '网站特色',
    list: [
      '团队成员介绍',
      '征解题目和解答',
      '学术活动介绍',
      '响应式设计，支持移动端访问'
    ],
  },
  techStack: {
    title: '技术说明',
  },
  contact: {
    title: '联系我们',
    info: [
      { label: '邮箱', value: 'wjj_math@stu.pku.edu.cn' },
      { label: '地址', value: '北京大学数学科学学院' },
      { label: '微信公众号', value: 'SMS Stu Union' },
    ],
  },
};
