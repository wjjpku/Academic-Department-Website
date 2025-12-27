import { BookOpen, Coffee, Users, TrendingUp } from 'lucide-react';

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
