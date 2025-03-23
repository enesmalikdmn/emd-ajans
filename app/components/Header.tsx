'use client';

import Link from 'next/link';

const Header = () => {
  return (
    <header className="h-1/12 flex items-center fixed w-full bg-transparent z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-[20px] font-normal">
            <span className="text-white">emd</span>
            <span className="text-[#4A90E2]">Ajans</span>
          </Link>
          
          <div className="flex items-center space-x-8">
            <Link href="/about" className="text-white text-sm hover:text-[#4A90E2] transition-colors ml-[24px]">
              Hakkımızda
            </Link>
            <Link href="/portfolio" className="text-white text-sm hover:text-[#4A90E2] transition-colors ml-[24px]">
              Projelerimiz
            </Link>
            <Link href="/services" className="text-white text-sm hover:text-[#4A90E2] transition-colors ml-[24px]">
              Hizmetlerimiz
            </Link>
            <Link href="/contact" className="text-white text-sm hover:text-[#4A90E2] transition-colors ml-[24px]">
              İletişim
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;