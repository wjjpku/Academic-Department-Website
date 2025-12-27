import type { TeamMember } from '../../types';

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
