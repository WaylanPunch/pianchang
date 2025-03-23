import React from 'react';
import Link from 'next/link';

const footerLinks = [
  {
    title: '片场',
    links: [
      { title: '关于我们', href: '/about' },
      { title: '加入我们', href: '/joinus' },
      { title: '使用协议', href: '/agreement' },
      { title: '隐私政策', href: '/privacy' }
    ]
  },
  {
    title: '网站导航',
    links: [
      { title: '作品库', href: '/discover/article' },
      { title: '创作人', href: '/discover/creators' },
      { title: '学习', href: '/education' },
      { title: '素材', href: '/stock' },
      { title: '活动', href: '/activity' }
    ]
  },
  {
    title: '关于',
    links: [
      { title: '关于我们', href: '/about/us' },
      { title: '联系我们', href: '/contact' },
      { title: '用户反馈', href: '/feedback' },
      { title: '免责声明', href: '/disclaimer' }
    ]
  },
  {
    title: '法律',
    links: [
      { title: '服务条款', href: '/terms' },
      { title: '版权声明', href: '/copyright' },
      { title: '侵权申诉', href: '/report' }
    ]
  },
  {
    title: '集团',
    links: [
      { title: '全览版', href: '/overview' },
      { title: '创作社区', href: '/community' },
      { title: '素材交易', href: '/stock' },
      { title: '版权保护', href: '/copyright-protection' }
    ]
  },
];

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-12 pb-6">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="font-medium text-sm mb-4">{group.title}</h3>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-500 hover:text-[hsl(var(--xpc-red))]"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-gray-100">
          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="flex items-center mb-6 md:mb-0">
              <span className="text-sm text-gray-500">
                © 2023-2025 pianchang.com 片场 版权所有
              </span>
            </div>
            <div className="flex space-x-4">
              <span className="text-sm text-gray-500">京ICP备11030235号-2</span>
              <span className="text-sm text-gray-500">京公网安备 11010102002903号</span>
            </div>
          </div>
          <div className="mt-3">
            <p className="text-xs text-gray-400">
              片场汇聚全球原创优质视频及创作人，提供4K、无广告、无水印视频观看，专业的视频艺术学习教程，正版视觉素材交易等，与百万创作人一起成长。
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
