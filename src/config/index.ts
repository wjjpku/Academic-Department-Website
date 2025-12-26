import { BookOpen, Coffee, Users, TrendingUp } from 'lucide-react';

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
  { name: '活动掠影', path: '/activities' },
  { name: '九章征解', path: '/challenges' },
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
      '/images/activity4-1.jpg',
    ],
  },
  intro: {
    image: '/images/homepage3.jpg',
    title: '关于学术组',
    description: `北京大学数学科学学院学生会学术组致力于搭建师生交流平台，推动学术氛围建设。
    我们通过举办学术讲座、经验分享会、模拟面试等多样化活动，帮助同学们开阔视野，
    提升学术素养，规划未来发展。`,
    features: [
      {
        title: '学术交流',
        description: '连接教授与学生，传递前沿知识',
        color: 'pku-red',
      },
      {
        title: '生涯规划',
        description: '分享保研经验，助力未来发展',
        color: 'pku-blue',
      },
    ],
  },
};

export const activitiesConfig = {
  title: '活动掠影',
  subtitle: '回顾过往精彩瞬间，展望未来无限可能',
  homeSection: {
    title: '活动掠影',
    description: '记录学术组的每一个精彩瞬间，见证思想的碰撞与成长的足迹',
    buttonText: '查看更多活动',
  }
};

export const challengesConfig = {
  title: '九章征解',
  subtitle: '挑战思维极限，享受解题乐趣',
};

export const teamConfig = {
  title: '团队风采',
  subtitle: '一群热爱数学、乐于奉献的伙伴，共同打造温暖的学术家园',
  defaultRoleDescription: '北京大学数学科学学院学生会学术组',
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
      desc: '定期举办讲座、研讨会，拓宽学术视野，近距离接触知名教授'
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
  features: {
    title: '网站特色',
    list: [
      '实时访客统计和地理位置显示',
      '学术活动信息发布和报名',
      '团队成员介绍',
      '征解题目和解答',
      '用户反馈和建议收集',
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
