import React from 'react';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/" className="flex items-center">
      <svg width="30" height="30" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25 0C11.2 0 0 11.2 0 25C0 38.8 11.2 50 25 50C38.8 50 50 38.8 50 25C50 11.2 38.8 0 25 0Z" fill="#F03E3E"/>
        <path d="M33.5 22H27.5V15H22.5V22H16.5V27H22.5V34H27.5V27H33.5V22Z" fill="white"/>
      </svg>
      <span className="ml-2 text-xl font-bold">片场</span>
    </Link>
  );
};

export default Logo;
