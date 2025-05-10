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
            className="relative w-[120px] h-[60px] md:w-[180px] md:h-[100px]"
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
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href}
                className="text-sm link-hover-animation"
                aria-label={link.label}
              >
                <span className="text-primary">{link.label}</span>
                <span className="text-secondary">{link.label}</span>
              </Link>
            ))}
            <Button
              variant="contained" 
              color="primary"
              size="small"
              href="/pricing"
              sx={{ 
                ml: 4,
                borderRadius: 1,
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: '#357ABD'
                }
              }}
              aria-label="Teklif al"
            >
              Teklif Al
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
          className={`md:hidden fixed top-[80px] left-0 w-full bg-[#001f3f] transition-all duration-300 ${
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
            <Button
              variant="contained" 
              color="primary"
              size="small"
              href="/pricing"
              fullWidth
              sx={{ 
                mt: 2,
                borderRadius: 1,
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: '#357ABD'
                }
              }}
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Teklif al"
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