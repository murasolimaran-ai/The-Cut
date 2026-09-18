import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { siteConfig } from '../data/siteConfig';
import { Scissors, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'services', label: 'SERVICES' },
    { id: 'pricing', label: 'PRICING' },
    { id: 'gallery', label: 'GALLERY' },
    { id: 'team', label: 'TEAM' },
    { id: 'contact', label: 'CONTACT' },
  ];

  const handleLinkClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        id="main-navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0B0B0B]/95 backdrop-blur-md py-3.5 border-b border-[#222222]'
            : 'bg-[#0B0B0B]/70 backdrop-blur-sm py-5 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              id="nav-logo-btn"
              onClick={() => handleLinkClick('home')}
              className="flex items-center gap-2.5 text-left group focus:outline-none"
              aria-label="THE CUT Home"
            >
              <div className="w-8 h-8 rounded-full border border-[#D6A85F]/50 flex items-center justify-center text-[#D6A85F] group-hover:border-[#D6A85F] transition-colors">
                <Scissors className="w-4 h-4 transform -rotate-45" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif tracking-widest text-xl sm:text-2xl font-semibold text-[#F5F2EA] group-hover:text-[#D6A85F] transition-colors">
                  {siteConfig.salonName}
                </span>
                <span className="text-[9px] tracking-[0.28em] text-[#D6A85F] font-medium -mt-1">
                  MEN&apos;S GROOMING
                </span>
              </div>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-7 lg:space-x-9" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const isActive = currentPage === link.id;
                return (
                  <button
                    key={link.id}
                    id={`nav-link-${link.id}`}
                    onClick={() => handleLinkClick(link.id)}
                    className={`relative py-1 text-xs tracking-[0.2em] font-medium transition-colors duration-200 uppercase ${
                      isActive
                        ? 'text-[#D6A85F]'
                        : 'text-[#F5F2EA]/80 hover:text-[#D6A85F]'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#D6A85F]" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Right Action: Book Now (Desktop) */}
            <div className="hidden md:flex items-center">
              <button
                id="nav-book-btn"
                onClick={() => handleLinkClick('booking')}
                className="group relative inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] bg-[#D6A85F] text-[#0B0B0B] hover:bg-[#e4ba72] active:scale-[0.98] transition-all duration-200"
              >
                <span>BOOK NOW</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>

            {/* Mobile Hamburger */}
            <div className="flex items-center gap-3 md:hidden">
              <button
                id="mobile-quick-book-btn"
                onClick={() => handleLinkClick('booking')}
                className="px-3 py-1.5 text-[11px] font-semibold uppercase tracking-widest bg-[#D6A85F] text-[#0B0B0B]"
              >
                BOOK
              </button>
              <button
                id="nav-mobile-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#F5F2EA] hover:text-[#D6A85F] focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0B0B0B]/98 flex flex-col justify-between pt-24 pb-10 px-8 md:hidden animate-in fade-in duration-200">
          <nav className="flex flex-col space-y-6 text-center">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`font-serif text-2xl tracking-widest uppercase transition-colors ${
                    isActive ? 'text-[#D6A85F]' : 'text-[#F5F2EA]/90 hover:text-[#D6A85F]'
                  }`}
                >
                  {link.label}
                  {isActive && <div className="w-8 h-[2px] bg-[#D6A85F] mx-auto mt-1" />}
                </button>
              );
            })}
          </nav>

          <div className="pt-8 border-t border-[#222222] flex flex-col space-y-4 text-center">
            <button
              onClick={() => handleLinkClick('booking')}
              className="w-full py-4 text-sm font-semibold uppercase tracking-[0.2em] bg-[#D6A85F] text-[#0B0B0B] flex items-center justify-center gap-2"
            >
              <span>BOOK APPOINTMENT</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <p className="text-xs text-[#F5F2EA]/50 tracking-wider">
              {siteConfig.phone.display} • {siteConfig.address.area}
            </p>
          </div>
        </div>
      )}
    </>
  );
};
