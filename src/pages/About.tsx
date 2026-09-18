import React from 'react';
import { PageId } from '../types';
import { SectionHeader } from '../components/SectionHeader';
import { Scissors, ShieldCheck, Heart, ArrowRight } from 'lucide-react';

interface AboutProps {
  onNavigate: (page: PageId) => void;
}

export const About: React.FC<AboutProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#0B0B0B] text-[#F5F2EA] min-h-screen pt-24">
      {/* 21. ABOUT HERO */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#1C1C1C]">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#D6A85F] font-semibold mb-4">
            <span className="w-6 h-[1px] bg-[#D6A85F]" />
            <span>OUR STORY</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl uppercase text-[#F5F2EA] tracking-tight leading-[1.08] mb-6">
            MORE THAN A SALON.
            <br />
            <span className="text-[#D6A85F] italic font-normal">A STYLE DESTINATION.</span>
          </h1>

          <p className="text-lg sm:text-xl text-[#F5F2EA]/80 font-light leading-relaxed max-w-2xl">
            At The Cut, grooming is more than a service. It is a lifestyle built around precision, confidence and personal style.
          </p>
        </div>
      </section>

      {/* 22. ABOUT STORY (Split Layout) */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#1C1C1C]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-6 relative">
            <div className="border border-[#262626] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=85"
                alt="Master barber crafting precision hairstyle with scissors"
                className="w-full h-[460px] sm:h-[540px] object-cover filter brightness-90 contrast-105"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-b-2 border-r-2 border-[#D6A85F]/40 -z-10 hidden sm:block" />
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#D6A85F] font-semibold">
              <span className="w-6 h-[1px] bg-[#D6A85F]" />
              <span>THE CRAFTSMANSHIP</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl uppercase text-[#F5F2EA] leading-[1.12]">
              CRAFTED FOR THE CONTEMPORARY GENTLEMAN
            </h2>

            <p className="text-base sm:text-lg text-[#F5F2EA]/80 font-light leading-relaxed">
              The Cut was created for modern men who care about how they look and how they feel. We noticed that contemporary grooming had split into two extremes: rushed, noisy express kiosks or outdated traditional barber shops lacking modern aesthetic sensibilities.
            </p>

            <p className="text-base text-[#F5F2EA]/70 font-light leading-relaxed">
              From precision haircuts to complete grooming experiences, our goal is to combine skilled craftsmanship with a premium environment. Every workstation is sanitized between appointments, tools are sterilized with hospital-grade UV units, and every consultation begins with an honest dialogue about your routine, hairline, and facial bone structure.
            </p>

            <div className="pt-4 flex items-center gap-8">
              <div>
                <p className="font-serif text-3xl text-[#D6A85F] font-bold">100%</p>
                <p className="text-xs uppercase tracking-wider text-[#F5F2EA]/60 mt-1">Single-Use Hygiene</p>
              </div>
              <div className="w-[1px] h-10 bg-[#262626]" />
              <div>
                <p className="font-serif text-3xl text-[#D6A85F] font-bold">Bespoke</p>
                <p className="text-xs uppercase tracking-wider text-[#F5F2EA]/60 mt-1">Stylist Consultation</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 23. ABOUT VALUES */}
      <section className="py-24 bg-[#0E0E0E] border-b border-[#1C1C1C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="OUR FOUNDATIONS"
            title="THE THREE PILLARS"
            subtitle="The uncompromising standards guiding every single blade stroke, wash, and style."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            
            <div className="p-8 sm:p-10 border border-[#222222] bg-[#0B0B0B]">
              <div className="w-12 h-12 rounded border border-[#D6A85F]/40 flex items-center justify-center text-[#D6A85F] mb-6">
                <Scissors className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl uppercase text-[#F5F2EA] mb-3">
                PRECISION
              </h3>
              <p className="text-sm sm:text-base text-[#F5F2EA]/70 font-light leading-relaxed">
                Details define the difference. We do not rush appointments. Every hairline, fade gradient, and mustache taper is scrutinized down to the millimeter.
              </p>
            </div>

            <div className="p-8 sm:p-10 border border-[#222222] bg-[#0B0B0B]">
              <div className="w-12 h-12 rounded border border-[#D6A85F]/40 flex items-center justify-center text-[#D6A85F] mb-6">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl uppercase text-[#F5F2EA] mb-3">
                QUALITY
              </h3>
              <p className="text-sm sm:text-base text-[#F5F2EA]/70 font-light leading-relaxed">
                Professional products and techniques. We curate sulfate-free shampoos, organic botanical clay formulations, and Italian shave lathers that nourish both scalp and skin.
              </p>
            </div>

            <div className="p-8 sm:p-10 border border-[#222222] bg-[#0B0B0B]">
              <div className="w-12 h-12 rounded border border-[#D6A85F]/40 flex items-center justify-center text-[#D6A85F] mb-6">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl uppercase text-[#F5F2EA] mb-3">
                CONFIDENCE
              </h3>
              <p className="text-sm sm:text-base text-[#F5F2EA]/70 font-light leading-relaxed">
                Every style should feel like you. We refuse one-size-fits-all cuts. We adapt modern trends to amplify your natural charisma and day-to-day ease.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 24. ABOUT MISSION */}
      <section className="py-24 max-w-5xl mx-auto px-4 text-center">
        <span className="text-xs uppercase tracking-[0.28em] text-[#D6A85F] font-semibold mb-4 block">
          OUR MISSION
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl text-[#F5F2EA] uppercase tracking-tight leading-[1.2] mb-8">
          &ldquo;TO CREATE A PREMIUM GROOMING EXPERIENCE WHERE MODERN STYLE, SKILLED CRAFTSMANSHIP AND PERSONAL CONFIDENCE COME TOGETHER.&rdquo;
        </h2>
        <div className="w-16 h-[1.5px] bg-[#D6A85F] mx-auto" />
      </section>

      {/* 25. ABOUT INTERIOR SECTION */}
      <section className="relative py-28 border-t border-[#1C1C1C] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=2000&q=85"
            alt="Interior view of The Cut salon studio"
            className="w-full h-full object-cover filter brightness-[0.3] contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-[#0B0B0B]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-6 text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-[#D6A85F] mb-6">
            <span>CLEAN</span>
            <span>•</span>
            <span>MODERN</span>
            <span>•</span>
            <span>PROFESSIONAL</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl uppercase text-[#F5F2EA] tracking-wide mb-8">
            STYLE YOUR STORY
          </h2>

          <button
            onClick={() => {
              onNavigate('booking');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-8 py-4 text-xs font-bold uppercase tracking-[0.22em] bg-[#D6A85F] text-[#0B0B0B] hover:bg-[#e4ba72] transition-all shadow-xl"
          >
            <span>RESERVE A CHAIR</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
