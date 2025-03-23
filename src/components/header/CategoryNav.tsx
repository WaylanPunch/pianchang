import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const categories = [
  { name: '创作人', href: '/discover/creators', icon: '👤' },
  { name: '机构企业', href: '/discover/enterprises', icon: '🏢' },
  { name: '开放平台', href: '/discover/platforms', icon: '🔄' },
  { name: '职位招聘', href: '/discover/jobs', icon: '💼' },
  { name: 'AIGC', href: '/discover/aigc', icon: '🤖' },
  { name: '剧情', href: '/discover/drama', icon: '🎭' },
  { name: '特效动画', href: '/discover/effects', icon: '✨' },
  { name: '创意广告', href: '/discover/ads', icon: '💡' },
  { name: '宣传片', href: '/discover/promotion', icon: '📢' },
  { name: '纪录片', href: '/discover/documentary', icon: '🎬' },
  { name: 'CG', href: '/discover/cg', icon: '💻' },
  { name: '短视频', href: '/discover/short', icon: '📱' }
];

const CategoryNav = () => {
  return (
    <div className="bg-white border-b border-gray-100">
      <div className="container-wide py-3">
        <div className="flex space-x-6 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="flex flex-col items-center flex-shrink-0 group"
            >
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-1 group-hover:bg-gray-200 transition-colors">
                <span className="text-lg">{category.icon}</span>
              </div>
              <span className="text-xs font-medium group-hover:text-[hsl(var(--xpc-red))] transition-colors">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryNav;
