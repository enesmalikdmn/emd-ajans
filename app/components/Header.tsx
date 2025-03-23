'use client';

import Link from 'next/link';

const Header = () => {
  return (
    <header className="h-1/12 flex items-center fixed w-full bg-transparent z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-normal text-white">
            emdAgency
          </Link>

          <div className="flex items-center">
            <Link href="/about" className="text-white text-sm hover:text-gray-300 transition-colors">
              About Us
            </Link>
            <Link href="/portfolio" className="text-white text-sm hover:text-gray-300 transition-colors ml-[24px]">
              Portfolio
            </Link>
            <Link href="/services" className="text-white text-sm hover:text-gray-300 transition-colors ml-[24px]">
              Services
            </Link>
            <Link href="/contact" className="text-white text-sm hover:text-gray-300 transition-colors ml-[24px]">
              Contact Us
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header; 