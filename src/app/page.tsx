import MainHeader from '@/components/header/MainHeader';
import CategoryNav from '@/components/header/CategoryNav';
import BannerSlider from '@/components/home/BannerSlider';
import VideoSection from '@/components/home/VideoSection';
import ForYouSection from '@/components/home/ForYouSection';
import Footer from '@/components/footer/Footer';

// Sample staff picks data
const staffPicksData = [
  {
    id: '1',
    title: '时间都去哪了？',
    thumbnailUrl: 'https://oss-xpc0.xpccdn.com/uploadfile/article/2025/3/12/9f0eb9de44baf9802127700a7ce008b6',
    duration: '01:47',
    views: '2.3万',
    likes: '1.2千',
    author: {
      name: '李明',
      avatarUrl: 'https://ext.same-assets.com/486644875/930352768.jpeg'
    },
    category: '剧情短片'
  },
  {
    id: '2',
    title: '《同路》',
    thumbnailUrl: 'https://oss-xpc0.xpccdn.com/uploadfile/article/2025/3/13/ab81faeb19f48a19ff103d7acf9597cf',
    duration: '03:15',
    views: '1.8万',
    likes: '985',
    author: {
      name: '陈浩',
      avatarUrl: 'https://ext.same-assets.com/486644875/816083196.jpeg'
    },
    category: '广告·美食'
  },
  {
    id: '3',
    title: '《火车上》 | 山影出品 - Director\'s Cut',
    thumbnailUrl: 'https://oss-xpc0.xpccdn.com/uploadfile/article/2025/2/18/d48ff4d789dccf2638247d9c485902fc',
    duration: '10:28',
    views: '3.2万',
    likes: '2.5千',
    author: {
      name: '山影工作室',
      avatarUrl: 'https://ext.same-assets.com/486644875/4246288128.jpeg'
    },
    category: '剧情短片'
  },
  {
    id: '4',
    title: '学院派',
    thumbnailUrl: 'https://oss-xpc0.xpccdn.com/newupload/assets/article/cover/2022/8/62ef5743cdf36',
    duration: '07:06',
    views: '1.5万',
    likes: '754',
    author: {
      name: '徐明',
      avatarUrl: 'https://ext.same-assets.com/486644875/3243938742.jpeg'
    },
    category: '实验影像'
  }
];

// Sample inspiration picks data
const inspirationPicksData = [
  {
    id: '5',
    title: 'KALAIDO花花 | 时尚山东风 秋裤计划',
    thumbnailUrl: 'https://oss-xpc0.xpccdn.com/uploadfile/article/2023/7/7/ef2d0ea6e22a7e300b7a71c3f0d4fa90',
    duration: '00:54',
    views: '1.2万',
    likes: '620',
    author: {
      name: '徐晓晚',
      avatarUrl: 'https://ext.same-assets.com/486644875/2057310354.jpeg'
    },
    category: '时尚·服装'
  },
  {
    id: '6',
    title: 'HUAWEI | PURA 10',
    thumbnailUrl: 'https://oss-xpc0.xpccdn.com/newupload/assets/article/cover/2022/5/6277aeae5c5dc',
    duration: '01:00',
    views: '8.7千',
    likes: '452',
    author: {
      name: '华为',
      avatarUrl: 'https://ext.same-assets.com/486644875/1223090839.jpeg'
    },
    category: '广告·科技数码'
  },
  {
    id: '7',
    title: '天生为高性能而生 | 2025年全新汽车',
    thumbnailUrl: 'https://oss-xpc0.xpccdn.com/uploadfile/article/2025/2/23/877adb767aa958ba1df47265940f6681',
    duration: '00:30',
    views: '5.3千',
    likes: '324',
    author: {
      name: '汽车广告',
      avatarUrl: 'https://ext.same-assets.com/486644875/1475873367.jpeg'
    },
    category: '广告·汽车'
  },
  {
    id: '8',
    title: '彩丽香的甜蜜物语 | 芝芝莓莓',
    thumbnailUrl: 'https://oss-xpc0.xpccdn.com/uploadfile/article/2024/6/20/990611b776f15b4c461e28e01943795e',
    duration: '00:52',
    views: '6.4千',
    likes: '412',
    author: {
      name: '刘冰冰',
      avatarUrl: 'https://ext.same-assets.com/486644875/2735845002.jpeg'
    },
    category: '广告·饮品'
  }
];

// Sample popular watching data
const popularWatchingData = [
  {
    id: '9',
    title: '新年走「新」路',
    thumbnailUrl: 'https://oss-xpc0.xpccdn.com/newupload/assets/article/cover/2023/1/63bfb3b3e6fc0',
    duration: '02:09',
    views: '2.7万',
    likes: '1.3千',
    author: {
      name: '王小明',
      avatarUrl: 'https://ext.same-assets.com/486644875/3932262042.jpeg'
    },
    category: '宣传片'
  },
  {
    id: '10',
    title: '天生为高性能而生 | 2025年全新汽车',
    thumbnailUrl: 'https://oss-xpc0.xpccdn.com/uploadfile/article/2025/2/23/877adb767aa958ba1df47265940f6681',
    duration: '00:30',
    views: '5.3千',
    likes: '324',
    author: {
      name: '汽车广告',
      avatarUrl: 'https://ext.same-assets.com/486644875/1475873367.jpeg'
    },
    category: '广告·汽车'
  },
  {
    id: '11',
    title: '追梦 | 纪录片',
    thumbnailUrl: 'https://oss-xpc0.xpccdn.com/uploadfile/article/2025/3/7/c1ab275ffad768b5bb03e7cf82ed6bb6',
    duration: '02:44',
    views: '1.9万',
    likes: '875',
    author: {
      name: '张导演',
      avatarUrl: 'https://ext.same-assets.com/486644875/1110142855.jpeg'
    },
    category: '纪录片'
  },
  {
    id: '12',
    title: '《倾诉心声》| 舞蹈短片',
    thumbnailUrl: 'https://oss-xpc0.xpccdn.com/newupload/assets/article/cover/2021/6/60d195b882a5d',
    duration: '04:08',
    views: '3.6万',
    likes: '2.1千',
    author: {
      name: '林舞者',
      avatarUrl: 'https://ext.same-assets.com/486644875/2540144521.jpeg'
    },
    category: '舞蹈'
  }
];

// Sample for you data
const forYouData = [
  {
    id: '13',
    title: '可以这样做一个短视频吗？',
    thumbnailUrl: 'https://oss-xpc0.xpccdn.com/newupload/assets/article/cover/2022/5/6277aeae5c5dc',
    duration: '04:22',
    views: '5.3万',
    likes: '3.5千',
    author: {
      name: '短视频教学',
      avatarUrl: 'https://ext.same-assets.com/486644875/1223090839.jpeg'
    },
    category: '教程'
  },
  {
    id: '14',
    title: '片头字幕·浸入感调制教程',
    thumbnailUrl: 'https://oss-xpc0.xpccdn.com/uploadfile/article/2025/3/12/9f0eb9de44baf9802127700a7ce008b6',
    duration: '07:42',
    views: '2.8万',
    likes: '1.6千',
    author: {
      name: '视效课堂',
      avatarUrl: 'https://ext.same-assets.com/486644875/930352768.jpeg'
    },
    category: '教程·后期'
  },
  {
    id: '15',
    title: '镜头语言解密：《剪辑中的力量》',
    thumbnailUrl: 'https://oss-xpc0.xpccdn.com/uploadfile/article/2025/3/7/c1ab275ffad768b5bb03e7cf82ed6bb6',
    duration: '05:34',
    views: '3.9万',
    likes: '2.3千',
    author: {
      name: '徐导演',
      avatarUrl: 'https://ext.same-assets.com/486644875/1110142855.jpeg'
    },
    category: '教程·导演'
  },
  {
    id: '16',
    title: 'Woman\'s Life | 生活的诗意',
    thumbnailUrl: 'https://oss-xpc0.xpccdn.com/newupload/assets/article/cover/2021/6/60d195b882a5d',
    duration: '04:00',
    views: '2.1万',
    likes: '985',
    author: {
      name: '视觉诗人',
      avatarUrl: 'https://ext.same-assets.com/486644875/2540144521.jpeg'
    },
    category: '时尚·生活'
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[hsl(var(--xpc-light-gray))]">
      <MainHeader />
      <CategoryNav />
      <BannerSlider />

      <div className="container-wide">
        <VideoSection
          title="编辑精选"
          icon={<span className="inline-block w-5 h-5 mr-1 rounded-full bg-[hsl(var(--xpc-red))]"></span>}
          moreLink="/discover/article-0-0-all-all-0-0-pick"
          videos={staffPicksData}
        />

        <VideoSection
          title="创意精选"
          icon={<span className="inline-block w-5 h-5 mr-1 rounded-full bg-[hsl(var(--xpc-gold))]"></span>}
          moreLink="/discover/article-inspiration"
          videos={inspirationPicksData}
        />

        <VideoSection
          title="大家都在看"
          moreLink="/discover/article-popular"
          videos={popularWatchingData}
        />

        <ForYouSection videos={forYouData} />
      </div>

      <Footer />
    </main>
  );
}
