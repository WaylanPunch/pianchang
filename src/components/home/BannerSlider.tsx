'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const banners = [
  {
    id: 1,
    title: '金雀广告奖',
    imageUrl: 'https://oss-xpc6.xpccdn.com/default/d7lPPWyI4l8joRhtkmZLIqSMbcG4iFsxQpgClYgP.png',
    href: '/activity/commercial/jinque'
  },
  {
    id: 2,
    title: '年度榜单投票开启',
    imageUrl: 'https://oss-xpc6.xpccdn.com/default/4eFJe97R4tH1EdzU8G1plQ9cZFRR11p4ouPoO698.jpg',
    href: '/activity/jinque/year-rank-vote'
  },
  {
    id: 3,
    title: '创意广告训练营',
    imageUrl: 'https://oss-xpc6.xpccdn.com/default/KPSuTBSM8S5e4o6eBW2WSy5iPRGQYzJmC6R0njOZ.png',
    href: '/edu/subject/1506'
  },
  {
    id: 4,
    title: '影视后期课程',
    imageUrl: 'https://oss-xpc6.xpccdn.com/default/svpXsdzkxsKh6KLGH3O5gtSJzj4Qs4I4sQWnC4G6.png',
    href: '/edu/subject/172'
  }
];

const BannerSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    loop: true,
  });

  return (
    <div className="relative">
      <div ref={sliderRef} className="keen-slider h-[450px] bg-gray-100">
        {banners.map((banner) => (
          <Link key={banner.id} href={banner.href} className="keen-slider__slide relative">
            <Image
              src={banner.imageUrl}
              alt={banner.title}
              fill
              className="object-cover"
              priority
            />
          </Link>
        ))}
      </div>

      {loaded && instanceRef.current && (
        <>
          <button
            onClick={() => instanceRef.current?.prev()}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 p-2 rounded-full hover:bg-black/50 transition-colors"
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </button>

          <button
            onClick={() => instanceRef.current?.next()}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 p-2 rounded-full hover:bg-black/50 transition-colors"
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {[...Array(banners.length)].map((_, idx) => (
              <button
                key={idx}
                onClick={() => instanceRef.current?.moveToIdx(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentSlide === idx ? 'bg-white w-6' : 'bg-white/60'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default BannerSlider;
