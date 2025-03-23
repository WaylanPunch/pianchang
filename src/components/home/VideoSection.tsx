'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface VideoItem {
  id: string;
  title: string;
  thumbnailUrl: string;
  duration: string;
  views: string;
  likes: string;
  author: {
    name: string;
    avatarUrl: string;
  };
  category: string;
}

interface VideoSectionProps {
  title: string;
  icon?: React.ReactNode;
  moreLink: string;
  moreText?: string;
  videos: VideoItem[];
}

const VideoSection: React.FC<VideoSectionProps> = ({
  title,
  icon,
  moreLink,
  moreText = '查看更多',
  videos
}) => {
  return (
    <div className="py-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          {icon && <span>{icon}</span>}
          <h2 className="text-lg font-bold flex items-center">
            {title}
          </h2>
        </div>
        <Link href={moreLink} className="text-sm text-gray-500 hover:text-[hsl(var(--xpc-red))] flex items-center">
          {moreText} <ChevronRight className="h-4 w-4 ml-1" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {videos.map((video) => (
          <Card key={video.id} className="border-none shadow-none overflow-hidden">
            <CardContent className="p-0">
              <Link href={`/video/${video.id}`} className="video-card block">
                <div className="relative aspect-video overflow-hidden rounded-md">
                  <Image
                    src={video.thumbnailUrl}
                    alt={video.title}
                    fill
                    className="object-cover transition-transform hover:scale-105"
                  />
                  <span className="video-duration">{video.duration}</span>
                </div>
              </Link>
              <div className="video-card-info pt-3">
                <Link href={`/video/${video.id}`} className="font-medium line-clamp-2 hover:text-[hsl(var(--xpc-red))]">
                  {video.title}
                </Link>
                <div className="flex items-center mt-2 text-sm text-gray-500">
                  <Link href={`/creator/${video.author.name}`} className="flex items-center hover:text-[hsl(var(--xpc-red))]">
                    <Avatar className="h-6 w-6 mr-2">
                      <AvatarImage src={video.author.avatarUrl} alt={video.author.name} />
                      <AvatarFallback>{video.author.name[0]}</AvatarFallback>
                    </Avatar>
                    <span>{video.author.name}</span>
                  </Link>
                </div>
                <div className="flex items-center gap-3 mt-2 text-xs text-gray-400">
                  <span>{video.category}</span>
                  <span>·</span>
                  <span>{video.views}次观看</span>
                  <span>·</span>
                  <span>{video.likes}赞</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default VideoSection;
