import React from 'react';
import { PageId } from '../types';
import { servicesData } from '../data/services';
import { packageData } from '../data/packages';
import { SectionHeader } from '../components/SectionHeader';
import { Check, Sparkles, ArrowRight, ArrowUpRight } from 'lucide-react';

interface PricingProps {
  onNavigate: (page: PageId) => void;
  onSelectServiceToBook: (serviceName: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onNavigate, onSelectServiceToBook }) => {
  const hairServices = servicesData.filter((s) => s.category === 'HAIR');
  const beardServices = servicesData.filter((s) => s.category === 'BEARD');
  const skinSpaServices = servicesData.filter(
    (s) => s.category === 'SKIN' || s.category === 'SPA' || s.category === 'COLOUR'
  );

  const handleBookService = (name: string) => {
    onSelectServiceToBook(name);
    onNavigate('booking');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#0B0B0B] text-[#F5F2EA] min-h-screen pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 32. HEADER */}
        <div className="pt-12 sm:pt-16 pb-12 border-b border-[#1C1C1C]">
          <SectionHeader
            label="GROOMING MENU"
            title="QUALITY SERVICES. FAIR PRICES."
            subtitle="Clear, transparent pricing without surprise surcharges. High-grade salon craftsmanship priced honestly."
          />
        </div>

        {/* 34. SPECIAL OFFER: FIRST VISIT 10% OFF */}
        <div className="my-12 p-8 sm:p-10 border border-[#D6A85F]/50 bg-gradient-to-r from-[#14120D] via-[#0E0E0E] to-[#14120D] relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#D6A85F]">
                <Sparkles className="w-3.5 h-3.5 text-[#D6A85F]" />
                <span>FIRST VISIT SPECIAL</span>
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#F5F2EA] uppercase tracking-wide">
                GET 10% OFF YOUR FIRST RESERVATION
              </h3>
              <p className="text-sm text-[#F5F2EA]/70 font-light max-w-xl">
                Experience our studio standards for the first time with an exclusive welcoming concession applied automatically at checkout.
              </p>
            </div>

            <button
              onClick={() => handleBookService('First Visit Special (10% Off)')}
              className="shrink-0 px-8 py-4 bg-[#D6A85F] text-[#0B0B0B] text-xs font-bold uppercase tracking-[0.22em] hover:bg-[#e4ba72] transition-colors"
            >
              BOOK YOUR FIRST VISIT
            </button>
          </div>
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-radial from-[#D6A85F]/10 to-transparent pointer-events-none" />
        </div>

        {/* 33. PACKAGE PRICING SECTION */}
        <div className="mb-24">
          <div className="mb-10">
            <span className="text-xs uppercase tracking-[0.25em] text-[#D6A85F] font-semibold block mb-2">
              CURATED COMBINATIONS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#F5F2EA] uppercase">
              SIGNATURE GROOMING PACKAGES
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packageData.map((pkg) => (
              <div
                key={pkg.id}
                className={`p-7 border flex flex-col justify-between relative transition-all duration-300 ${
                  pkg.popular
                    ? 'border-[#D6A85F] bg-[#121212]'
                    : 'border-[#222222] bg-[#0E0E0E] hover:border-[#D6A85F]/50'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#D6A85F] text-[#0B0B0B] text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-0.5">
                    MOST POPULAR
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between text-xs text-[#F5F2EA]/50 uppercase tracking-wider font-mono mb-2">
                    <span>PACKAGE</span>
                    <span>{pkg.duration}</span>
                  </div>

                  <h3 className="font-serif text-2xl text-[#F5F2EA] mb-2 leading-tight">
                    {pkg.name}
                  </h3>

                  <div className="mb-4">
                    <span className="font-mono text-3xl font-bold text-[#D6A85F]">
                      ₹{pkg.price}
                    </span>
                  </div>

                  <p className="text-xs text-[#F5F2EA]/70 font-light leading-relaxed mb-6">
                    {pkg.description}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-[#1C1C1C] mb-8">
                    {pkg.servicesIncluded.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#F5F2EA]/85">
                        <Check className="w-3.5 h-3.5 text-[#D6A85F] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => handleBookService(pkg.name)}
                  className={`w-full py-3 text-xs font-semibold uppercase tracking-[0.18em] transition-all flex items-center justify-center gap-1.5 ${
                    pkg.popular
                      ? 'bg-[#D6A85F] text-[#0B0B0B] hover:bg-[#e4ba72]'
                      : 'border border-[#262626] text-[#F5F2EA] hover:border-[#D6A85F] hover:text-[#D6A85F]'
                  }`}
                >
                  <span>BOOK PACKAGE</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* 32. EDITORIAL PRINTED MENU COLUMNS */}
        <div className="p-8 sm:p-14 border border-[#222222] bg-[#0E0E0E]">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.28em] text-[#D6A85F] font-semibold block mb-2">
              A LA CARTE DIRECTORY
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#F5F2EA] uppercase">
              THE FULL GROOMING TARIFF
            </h2>
            <div className="w-12 h-[1px] bg-[#D6A85F] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            
            {/* Column 1: HAIR */}
            <div>
              <div className="flex items-center gap-2 mb-6 pb-3 border-b border-[#222222]">
                <span className="w-2 h-2 rounded-full bg-[#D6A85F]" />
                <h3 className="font-serif text-2xl uppercase text-[#F5F2EA]">HAIR SERVICES</h3>
              </div>
              <div className="space-y-6">
                {hairServices.map((service) => (
                  <div key={service.id} className="group flex flex-col justify-between">
                    <div className="flex items-baseline justify-between">
                      <h4 className="font-serif text-lg text-[#F5F2EA] group-hover:text-[#D6A85F] transition-colors">
                        {service.name}
                      </h4>
                      <div className="flex-1 border-b border-dotted border-[#2E2E2E] mx-3 mb-1" />
                      <span className="font-mono text-base font-bold text-[#D6A85F]">
                        ₹{service.price}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-[#F5F2EA]/50 font-light mt-1">
                      <span>{service.description}</span>
                      <span className="font-mono shrink-0 ml-2">{service.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2: BEARD */}
            <div>
              <div className="flex items-center gap-2 mb-6 pb-3 border-b border-[#222222]">
                <span className="w-2 h-2 rounded-full bg-[#D6A85F]" />
                <h3 className="font-serif text-2xl uppercase text-[#F5F2EA]">BEARD SCULPTURE</h3>
              </div>
              <div className="space-y-6">
                {beardServices.map((service) => (
                  <div key={service.id} className="group flex flex-col justify-between">
                    <div className="flex items-baseline justify-between">
                      <h4 className="font-serif text-lg text-[#F5F2EA] group-hover:text-[#D6A85F] transition-colors">
                        {service.name}
                      </h4>
                      <div className="flex-1 border-b border-dotted border-[#2E2E2E] mx-3 mb-1" />
                      <span className="font-mono text-base font-bold text-[#D6A85F]">
                        ₹{service.price}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-[#F5F2EA]/50 font-light mt-1">
                      <span>{service.description}</span>
                      <span className="font-mono shrink-0 ml-2">{service.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 3: SKIN, COLOUR & SPA */}
            <div>
              <div className="flex items-center gap-2 mb-6 pb-3 border-b border-[#222222]">
                <span className="w-2 h-2 rounded-full bg-[#D6A85F]" />
                <h3 className="font-serif text-2xl uppercase text-[#F5F2EA]">SKIN, CARE &amp; SPA</h3>
              </div>
              <div className="space-y-6">
                {skinSpaServices.map((service) => (
                  <div key={service.id} className="group flex flex-col justify-between">
                    <div className="flex items-baseline justify-between">
                      <h4 className="font-serif text-lg text-[#F5F2EA] group-hover:text-[#D6A85F] transition-colors">
                        {service.name}
                      </h4>
                      <div className="flex-1 border-b border-dotted border-[#2E2E2E] mx-3 mb-1" />
                      <span className="font-mono text-base font-bold text-[#D6A85F]">
                        ₹{service.price}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-[#F5F2EA]/50 font-light mt-1">
                      <span>{service.description}</span>
                      <span className="font-mono shrink-0 ml-2">{service.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          <div className="mt-12 pt-8 border-t border-[#1C1C1C] text-center">
            <button
              onClick={() => {
                onNavigate('booking');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#D6A85F] text-[#0B0B0B] text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#e4ba72] transition-colors"
            >
              <span>SCHEDULE WITH THIS MENU</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
