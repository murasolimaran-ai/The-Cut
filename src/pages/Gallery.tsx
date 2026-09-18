import React, { useState } from 'react';
import { PageId, GalleryCategory, GalleryItem } from '../types';
import { galleryData } from '../data/gallery';
import { SectionHeader } from '../components/SectionHeader';
import { GalleryLightbox } from '../components/GalleryLightbox';
import { ArrowUpRight, Search } from 'lucide-react';

interface GalleryProps {
  onNavigate: (page: PageId) => void;
}

export const Gallery: React.FC<GalleryProps> = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('ALL');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const categories: { key: GalleryCategory; label: string }[] = [
    { key: 'ALL', label: 'ALL WORK' },
    { key: 'HAIRCUTS', label: 'HAIRCUTS' },
    { key: 'BEARD', label: 'BEARD' },
    { key: 'COLOUR', label: 'COLOUR' },
    { key: 'INTERIOR', label: 'STUDIO INTERIOR' },
  ];

  const filteredItems =
    activeCategory === 'ALL'
      ? galleryData
      : galleryData.filter((item) => item.category === activeCategory);

  return (
    <div className="bg-[#0B0B0B] text-[#F5F2EA] min-h-screen pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="pt-12 sm:pt-16 pb-12 border-b border-[#1C1C1C]">
          <SectionHeader
            label="VISUAL ARCHIVE"
            title="REAL PEOPLE. REAL TRANSFORMATIONS."
            subtitle="An unedited showcase of client craftsmanship, architectural scissor work, razor sculpting, and studio atmosphere."
          />

          {/* Filter Pills */}
          <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] whitespace-nowrap transition-all border ${
                    isActive
                      ? 'bg-[#D6A85F] text-[#0B0B0B] border-[#D6A85F]'
                      : 'bg-[#111111] text-[#F5F2EA]/70 border-[#262626] hover:border-[#D6A85F]/50 hover:text-[#F5F2EA]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="mt-12">
          {filteredItems.length === 0 ? (
            <div className="text-center py-20 border border-[#222222] bg-[#0E0E0E] p-8">
              <Search className="w-8 h-8 text-[#D6A85F] mx-auto mb-3" />
              <h3 className="font-serif text-2xl text-[#F5F2EA] uppercase mb-2">No Visuals Found</h3>
              <p className="text-sm text-[#F5F2EA]/60">Select another category to browse transformations.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                  className="group relative overflow-hidden border border-[#222222] bg-[#121212] cursor-pointer hover:border-[#D6A85F]/60 transition-all duration-300"
                >
                  <div className="h-72 sm:h-80 overflow-hidden bg-[#161616]">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="w-full h-full object-cover img-luxury-zoom filter brightness-90 contrast-105"
                      loading="lazy"
                    />
                  </div>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                  {/* Caption & Category */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
                    <div>
                      <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D6A85F] block mb-1">
                        {item.category}
                      </span>
                      <h4 className="font-serif text-lg text-[#F5F2EA] group-hover:text-[#D6A85F] transition-colors leading-snug">
                        {item.title}
                      </h4>
                    </div>

                    <div className="w-8 h-8 rounded-full border border-[#D6A85F]/40 flex items-center justify-center text-[#D6A85F] group-hover:bg-[#D6A85F] group-hover:text-[#0B0B0B] transition-colors shrink-0 ml-3">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Lightbox Component */}
        <GalleryLightbox
          item={selectedItem}
          items={filteredItems}
          onClose={() => setSelectedItem(null)}
          onSelect={(item) => setSelectedItem(item)}
        />

        {/* Bottom Booking Hook */}
        <div className="mt-20 p-8 sm:p-12 border border-[#222222] bg-[#0E0E0E] text-center max-w-4xl mx-auto">
          <span className="text-xs uppercase tracking-[0.25em] text-[#D6A85F] font-semibold mb-2 block">
            READY FOR YOUR OWN TRANSFORMATION?
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl text-[#F5F2EA] uppercase mb-6">
            CONSULT WITH OUR MASTER STYLISTS
          </h3>
          <button
            onClick={() => {
              onNavigate('booking');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-8 py-4 bg-[#D6A85F] text-[#0B0B0B] text-xs font-bold uppercase tracking-[0.22em] hover:bg-[#e4ba72] transition-colors"
          >
            BOOK YOUR APPOINTMENT
          </button>
        </div>

      </div>
    </div>
  );
};
