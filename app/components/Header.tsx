'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`h-1/12 flex items-center fixed w-full z-50 transition-colors duration-300 ${!isHomePage || isScrolled ? 'bg-[#001f3f]' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-2 py-2">
        <div className="flex items-center justify-between">
          <Link href="/" className="relative w-[180px] h-[80px]">
            <Image
              src="/images/logo.png"
              alt="EMD Ajans Logo"
              fill
              className="object-contain"
              priority
            />
          </Link>
          
          <div className="flex items-center space-x-8">
            <Link href="/about" className="text-sm ml-[36px] link-hover-animation">
              <span className="text-primary">Hakkımızda</span>
              <span className="text-secondary">Hakkımızda</span>
            </Link>
            <Link href="/portfolio" className="text-sm ml-[36px] link-hover-animation">
              <span className="text-primary">Projelerimiz</span>
              <span className="text-secondary">Projelerimiz</span>
            </Link>
            <Link href="/services" className="text-sm ml-[36px] link-hover-animation">
              <span className="text-primary">Hizmetlerimiz</span>
              <span className="text-secondary">Hizmetlerimiz</span>
            </Link>
            <Link href="/contact" className="text-sm ml-[36px] link-hover-animation">
              <span className="text-primary">İletişim</span>
              <span className="text-secondary">İletişim</span>
            </Link>
            <Button
              variant="contained" 
              color="primary"
              size="small"
              href="/contact"
              sx={{ 
                ml: 4,
                borderRadius: 1,
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: '#357ABD'
                }
              }}
            >
              Teklif Al
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;