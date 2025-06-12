'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BellSvg, CloseSvg, HamburgerSvg } from '../svgs';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="w-full max-w-full">
      <div className="mx-auto border border-greyColorOne px-10 py-3">
        <div className="flex h-full items-center justify-between">
          {/* Desktop Navigation */}
          <Link
            href="/"
            className="hidden items-center font-inter text-lg font-bold text-blackColorOne md:flex"
          >
            Test Task
          </Link>

          <div className="flex flex-row items-center gap-8">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-greyColorTwo">
              <BellSvg />
            </div>
            <Image width={40} height={40} src="/avatar.svg" alt="Avatar" />
          </div>

          <button
            className="bg-alabasterColor h-12 w-12 p-2 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <CloseSvg /> : <HamburgerSvg />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute left-0 right-0 bg-white md:hidden"></div>
        )}
      </div>
    </nav>
  );
};
