import type { Activity } from '../types';

export const activities: Activity[] = [
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
];

export const heroImages = [
  '/images/homepage.jpg',
  '/images/activity1-1.jpg',
  '/images/activity3-1.jpg',
  '/images/activity2-1.jpg',
  '/images/activity4-1.jpg',
];
