import React, { useState } from 'react';
import { PageId, ServiceCategory, ServiceItem } from '../types';
import { servicesData } from '../data/services';
import { SectionHeader } from '../components/SectionHeader';
import { Clock, ArrowUpRight } from 'lucide-react';

interface ServicesProps {
  onNavigate: (page: PageId) => void;
  onSelectServiceToBook: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onNavigate, onSelectServiceToBook }) => {
  const [selectedCategory, setSelectedCategory] = useState<'ALL' | ServiceCategory>('ALL');

  const categories: { key: 'ALL' | ServiceCategory; label: string }[] = [
    { key: 'ALL', label: 'ALL SERVICES' },
    { key: 'HAIR', label: 'HAIR' },
    { key: 'BEARD', label: 'BEARD' },
    { key: 'SKIN', label: 'SKIN' },
    { key: 'COLOUR', label: 'COLOUR' },
    { key: 'SPA', label: 'SPA & CARE' },
  ];

  const filteredServices =
    selectedCategory === 'ALL'
      ? servicesData
      : servicesData.filter((s) => s.category === selectedCategory);

  const handleBook = (service: ServiceItem) => {
    onSelectServiceToBook(service.name);
    onNavigate('booking');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#0B0B0B] text-[#F5F2EA] min-h-screen pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 26. HERO SECTION & HEADER */}
        <div className="pt-12 sm:pt-16 pb-12 border-b border-[#1C1C1C]">
          <SectionHeader
            label="OUR SERVICES"
            title="COMPLETE GROOMING FOR A BETTER YOU"
            subtitle="Precision haircuts, beard engineering, bespoke skin therapies, and restorative head spas. Select your treatment below."
          />

          {/* Filter Tabs */}
          <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setSelectedCategory(cat.key)}
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

        {/* 27 - 31. SERVICE CARDS DIRECTORY */}
        <div className="mt-14">
          <div className="flex items-center justify-between mb-8">
            <p className="text-xs uppercase tracking-[0.2em] text-[#F5F2EA]/60 font-mono">
              SHOWING {filteredServices.length} SERVICES
            </p>
            <span className="text-xs text-[#D6A85F] font-light hidden sm:inline">
              Prices include tax • Premium sterilised tools
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="group bg-[#111111] border border-[#222222] hover:border-[#D6A85F]/50 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Visual Thumbnail */}
                <div className="relative h-60 overflow-hidden bg-[#161616]">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover img-luxury-zoom filter brightness-90 contrast-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-[#0B0B0B]/85 backdrop-blur-sm px-2.5 py-1 border border-[#262626]">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#D6A85F] font-semibold">
                      {service.category}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-[#0B0B0B]/85 backdrop-blur-sm px-2.5 py-1 border border-[#262626] flex items-center gap-1.5 text-xs text-[#F5F2EA]/85">
                    <Clock className="w-3.5 h-3.5 text-[#D6A85F]" />
                    <span className="font-mono">{service.duration}</span>
                  </div>
                </div>

                {/* Information Block */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-baseline justify-between mb-2">
                      <h3 className="font-serif text-2xl text-[#F5F2EA] group-hover:text-[#D6A85F] transition-colors">
                        {service.name}
                      </h3>
                      <span className="font-mono text-2xl font-bold text-[#D6A85F]">
                        ₹{service.price}
                      </span>
                    </div>

                    <p className="text-sm text-[#F5F2EA]/70 font-light leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#1C1C1C] flex items-center justify-between">
                    <span className="text-xs text-[#F5F2EA]/50 uppercase tracking-widest font-mono">
                      {service.duration} session
                    </span>
                    <button
                      onClick={() => handleBook(service)}
                      className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] bg-[#1a1a1a] text-[#D6A85F] border border-[#2e2e2e] group-hover:bg-[#D6A85F] group-hover:text-[#0B0B0B] group-hover:border-[#D6A85F] transition-all"
                    >
                      <span>BOOK THIS</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Consultation Banner */}
        <div className="mt-20 p-8 sm:p-12 border border-[#222222] bg-[#0E0E0E] flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F2EA] uppercase">
              Need a personalized recommendation?
            </h3>
            <p className="text-sm text-[#F5F2EA]/70 font-light mt-1">
              Our stylists provide complimentary face-shape and hair diagnostic consultations before any treatment.
            </p>
          </div>
          <button
            onClick={() => {
              onNavigate('booking');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="shrink-0 px-7 py-3.5 bg-[#D6A85F] text-[#0B0B0B] text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#e4ba72] transition-colors"
          >
            BOOK CONSULTATION
          </button>
        </div>

      </div>
    </div>
  );
};
