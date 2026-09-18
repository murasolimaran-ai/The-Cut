import React from 'react';
import { PageId } from '../types';
import { Calendar, ArrowUpRight } from 'lucide-react';

interface MobileStickyCTAProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const MobileStickyCTA: React.FC<MobileStickyCTAProps> = ({ currentPage, onNavigate }) => {
  // Hide on booking page itself so it doesn't overlap the booking submission
  if (currentPage === 'booking') return null;

  return (
    <aside aria-label="Mobile booking action" className="fixed bottom-0 left-0 right-0 z-40 p-3 bg-[#0B0B0B]/90 backdrop-blur-md border-t border-[#222222] md:hidden">
      <button
        id="mobile-sticky-book-btn"
        onClick={() => {
          onNavigate('booking');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        className="w-full py-3.5 px-5 bg-[#D6A85F] text-[#0B0B0B] font-semibold text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2 shadow-lg shadow-black/60 active:scale-[0.99] transition-transform"
      >
        <Calendar className="w-4 h-4" />
        <span>BOOK APPOINTMENT</span>
        <ArrowUpRight className="w-4 h-4 ml-0.5" />
      </button>
    </aside>
  );
};
