import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "片场 - 与百万创作人一起成长，用作品打动世界",
  description: "片场汇聚全球原创优质视频及创作人，提供4K、无广告、无水印视频观看，专业的视频艺术学习教程，正版视觉素材交易等，与百万创作人一起成长。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
