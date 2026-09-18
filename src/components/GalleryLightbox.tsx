import React, { useEffect } from 'react';
import { GalleryItem } from '../types';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryLightboxProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onSelect: (item: GalleryItem) => void;
}

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({
  item,
  items,
  onClose,
  onSelect,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!item) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [item, items]);

  if (!item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % items.length;
    onSelect(items[nextIdx]);
  };

  const handlePrev = () => {
    const prevIdx = (currentIndex - 1 + items.length) % items.length;
    onSelect(items[prevIdx]);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      className="fixed inset-0 z-50 bg-[#0B0B0B]/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-8 select-none"
    >
      {/* Top Header */}
      <div className="flex items-center justify-between text-[#F5F2EA] w-full max-w-6xl mx-auto py-2">
        <div className="flex items-center gap-3">
          <span className="text-xs uppercase tracking-[0.25em] text-[#D6A85F] font-semibold">
            {item.category}
          </span>
          <span className="text-[#262626]">•</span>
          <span className="text-xs text-[#F5F2EA]/60 font-light hidden sm:inline">
            {currentIndex + 1} of {items.length}
          </span>
        </div>

        <button
          onClick={onClose}
          className="p-2.5 rounded-full border border-[#262626] text-[#F5F2EA] hover:text-[#D6A85F] hover:border-[#D6A85F] transition-colors focus:outline-none"
          aria-label="Close Lightbox"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Image Viewer */}
      <div className="relative flex-1 flex items-center justify-center max-w-5xl mx-auto w-full my-4 overflow-hidden">
        <button
          onClick={handlePrev}
          className="absolute left-2 sm:left-4 z-10 p-3 rounded-full bg-[#0B0B0B]/70 border border-[#262626] text-[#F5F2EA] hover:text-[#D6A85F] hover:border-[#D6A85F] transition-all"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <img
          src={item.image}
          alt={item.alt}
          className="max-h-[75vh] w-auto max-w-full object-contain rounded-sm shadow-2xl border border-[#262626]"
          loading="eager"
        />

        <button
          onClick={handleNext}
          className="absolute right-2 sm:right-4 z-10 p-3 rounded-full bg-[#0B0B0B]/70 border border-[#262626] text-[#F5F2EA] hover:text-[#D6A85F] hover:border-[#D6A85F] transition-all"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Bottom Caption */}
      <div className="max-w-4xl mx-auto text-center pb-2">
        <p className="font-serif text-xl sm:text-2xl text-[#F5F2EA] tracking-wide">
          {item.title}
        </p>
        <p className="text-xs text-[#F5F2EA]/50 font-light mt-1">
          {item.alt}
        </p>
      </div>
    </div>
  );
};
