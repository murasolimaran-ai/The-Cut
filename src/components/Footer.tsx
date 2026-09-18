import React from 'react';
import { PageId } from '../types';
import { siteConfig } from '../data/siteConfig';
import { Scissors, MapPin, Phone, Mail, Clock, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#070707] text-[#F5F2EA] pt-20 pb-12 border-t border-[#1C1C1C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-[#1C1C1C]">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full border border-[#D6A85F]/60 flex items-center justify-center text-[#D6A85F]">
                <Scissors className="w-4 h-4 transform -rotate-45" />
              </div>
              <span className="font-serif tracking-widest text-2xl font-semibold text-[#F5F2EA]">
                {siteConfig.salonName}
              </span>
            </div>
            
            <p className="font-serif text-lg tracking-widest text-[#D6A85F] uppercase">
              {siteConfig.tagline}
            </p>
            
            <p className="text-sm text-[#F5F2EA]/70 font-light leading-relaxed max-w-sm">
              Modern grooming crafted around precision, style, and personal confidence. Experience the distinction of bespoke salon care.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded border border-[#262626] flex items-center justify-center text-[#F5F2EA]/70 hover:text-[#D6A85F] hover:border-[#D6A85F] transition-colors"
                aria-label="Instagram"
              >
                <span className="text-xs font-semibold tracking-wider">IG</span>
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded border border-[#262626] flex items-center justify-center text-[#F5F2EA]/70 hover:text-[#D6A85F] hover:border-[#D6A85F] transition-colors"
                aria-label="Facebook"
              >
                <span className="text-xs font-semibold tracking-wider">FB</span>
              </a>
              <a
                href={siteConfig.social.youtube}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded border border-[#262626] flex items-center justify-center text-[#F5F2EA]/70 hover:text-[#D6A85F] hover:border-[#D6A85F] transition-colors"
                aria-label="YouTube"
              >
                <span className="text-xs font-semibold tracking-wider">YT</span>
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsapp.number}`}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded border border-[#262626] flex items-center justify-center text-[#F5F2EA]/70 hover:text-[#D6A85F] hover:border-[#D6A85F] transition-colors"
                aria-label="WhatsApp"
              >
                <span className="text-xs font-semibold tracking-wider">WA</span>
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D6A85F]">
              NAVIGATION
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="text-[#F5F2EA]/70 hover:text-[#D6A85F] transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="text-[#F5F2EA]/70 hover:text-[#D6A85F] transition-colors"
                >
                  About Our Studio
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="text-[#F5F2EA]/70 hover:text-[#D6A85F] transition-colors"
                >
                  Services Directory
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('pricing')}
                  className="text-[#F5F2EA]/70 hover:text-[#D6A85F] transition-colors"
                >
                  Pricing &amp; Packages
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('gallery')}
                  className="text-[#F5F2EA]/70 hover:text-[#D6A85F] transition-colors"
                >
                  Transformation Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('team')}
                  className="text-[#F5F2EA]/70 hover:text-[#D6A85F] transition-colors"
                >
                  Master Stylists
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="text-[#F5F2EA]/70 hover:text-[#D6A85F] transition-colors"
                >
                  Contact &amp; Location
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D6A85F]">
              STUDIO LOCATION &amp; HOURS
            </h3>
            
            <div className="space-y-4 text-sm text-[#F5F2EA]/80 font-light">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#D6A85F] shrink-0 mt-1" />
                <span>{siteConfig.address.full}</span>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#D6A85F] shrink-0" />
                <a href={`tel:${siteConfig.phone.value}`} className="hover:text-[#D6A85F] transition-colors">
                  {siteConfig.phone.display}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#D6A85F] shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-[#D6A85F] transition-colors">
                  {siteConfig.email}
                </a>
              </div>

              <div className="flex items-start gap-3 pt-1">
                <Clock className="w-4 h-4 text-[#D6A85F] shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-[#F5F2EA]">{siteConfig.workingHours.days}</p>
                  <p className="text-[#D6A85F] font-mono text-xs">{siteConfig.workingHours.time}</p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => handleNav('booking')}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D6A85F] hover:underline"
                >
                  <span>REQUEST AN APPOINTMENT</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#F5F2EA]/50 font-light gap-4">
          <p>© 2026 {siteConfig.salonName}. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <span className="hover:text-[#D6A85F] cursor-pointer transition-colors">Privacy Policy</span>
            <span className="text-[#262626]">•</span>
            <span className="hover:text-[#D6A85F] cursor-pointer transition-colors">Terms of Service</span>
            <span className="text-[#262626]">•</span>
            <span className="hover:text-[#D6A85F] cursor-pointer transition-colors">Sanitation Standards</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
