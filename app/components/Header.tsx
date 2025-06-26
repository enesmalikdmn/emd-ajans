'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, Close } from '@mui/icons-material';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { href: '/about', label: 'Hakkımızda' },
    // { href: '/portfolio', label: 'Projelerimiz' },
    { href: '/services', label: 'Hizmetlerimiz' },
    { href: '/pricing', label: 'Paketlerimiz' },
    { href: '/contact', label: 'İletişim' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-colors duration-300 ${
        !isHomePage || isScrolled ? 'bg-[#001f3f]' : 'bg-transparent'
      }`}
      role="banner"
    >
      <nav className="container mx-auto px-4 py-4" role="navigation" aria-label="Ana menü">
        <div className="flex items-center justify-between">
          <Link 
            href="/" 
            className="relative w-[180px] h-[90px] md:w-[240px] md:h-[120px] cursor-pointer"
            aria-label="Ana sayfa"
          >
            <Image
              src="/images/logo.png"
              alt="EMD Ajans Logo"
              fill 
              className="object-contain"
              priority
            />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.filter(link => link.href !== '/pricing').map((link) => (
              <Link 
                key={link.href}
                href={link.href}
                className="text-sm link-hover-animation cursor-pointer"
                aria-label={link.label}
              >
                <span className="text-primary">{link.label}</span>
                <span className="text-secondary">{link.label}</span>
              </Link>
            ))}
            <Button
              variant="contained"
              size="small"
              href="/pricing"
              sx={{
                ml: 4,
                borderRadius: 1,
                textTransform: 'none',
                backgroundColor: '#087E8B !important',
                color: '#fff !important',
              }}
              aria-label="Paketlerimiz"
            >
              Paketlerimiz
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={toggleMobileMenu}
            aria-label="Menüyü aç/kapat"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <Close /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden fixed top-[80px] left-0 w-full ${
            !isHomePage || isScrolled ? 'bg-[#001f3f]' : 'bg-black/5 backdrop-blur-sm'
          } transition-all duration-300 ${
            isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href}
                className="text-white py-2 hover:text-secondary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label={link.label}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;