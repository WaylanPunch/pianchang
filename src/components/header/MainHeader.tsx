import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, Menu, ChevronDown } from 'lucide-react';
import Logo from './Logo';

const MainHeader = () => {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="container-wide py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Logo />
          </div>

          {/* Main Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="nav-link font-bold">首页</Link>
            <Link href="/discover" className="nav-link">发现</Link>
            <Link href="/rank" className="nav-link">排行榜</Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="nav-link px-0 flex items-center">
                  创作人 <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>创作人</DropdownMenuItem>
                <DropdownMenuItem>机构/企业</DropdownMenuItem>
                <DropdownMenuItem>我关注的</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link href="/articles" className="nav-link">文章</Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="nav-link px-0 flex items-center">
                  活动 <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>金雀企鹅奖</DropdownMenuItem>
                <DropdownMenuItem>电影节</DropdownMenuItem>
                <DropdownMenuItem>NEW VISION</DropdownMenuItem>
                <DropdownMenuItem>所有活动</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="nav-link px-0 flex items-center">
                  素材 <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>素材</DropdownMenuItem>
                <DropdownMenuItem>音效配乐</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link href="/education" className="nav-link">学习</Link>
          </nav>

          {/* Right side - User & Search */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="outline" className="hidden md:flex">登录</Button>
            <Button className="bg-[hsl(var(--xpc-red))] text-white hover:bg-[hsl(var(--xpc-red))/90]">注册</Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
