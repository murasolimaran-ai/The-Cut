import React from 'react';
import { PageId, ServiceItem } from '../types';
import { siteConfig } from '../data/siteConfig';
import { servicesData } from '../data/services';
import { galleryData } from '../data/gallery';
import { testimonialsData } from '../data/testimonials';
import { SectionHeader } from '../components/SectionHeader';
import {
  Scissors,
  Award,
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  Clock,
  Star,
  ChevronDown,
} from 'lucide-react';

interface HomeProps {
  onNavigate: (page: PageId) => void;
  onSelectServiceToBook: (serviceName: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate, onSelectServiceToBook }) => {
  const featuredServices = servicesData.filter((s) => s.featured).slice(0, 6);
  const previewGallery = galleryData.slice(0, 6);

  const handleBookService = (service: ServiceItem) => {
    onSelectServiceToBook(service.name);
    onNavigate('booking');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#0B0B0B] text-[#F5F2EA] min-h-screen">
      {/* 13. HERO SECTION */}
      <section
        id="home-hero"
        className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden border-b border-[#1C1C1C]"
      >
        {/* Cinematic Background Image with Dark Vignette Gradient */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=2000&q=85"
            alt="Gentleman seated in premium salon leather barber chair"
            className="w-full h-full object-cover object-center scale-105 filter brightness-[0.38] contrast-[1.15]"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B] via-transparent to-[#0B0B0B]/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
          <div className="max-w-3xl">
            {/* Small Label */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 border border-[#D6A85F]/30 bg-[#0B0B0B]/60 backdrop-blur-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-[#D6A85F] animate-pulse" />
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.28em] text-[#D6A85F]">
                {siteConfig.tagline}
              </span>
            </div>

            {/* Main Hero Statement */}
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#F5F2EA] leading-[1.02] uppercase mb-6 drop-shadow-sm">
              {siteConfig.heroStatement.line1}
              <br />
              <span className="text-[#D6A85F] italic font-normal">
                {siteConfig.heroStatement.line2}
              </span>
            </h1>

            {/* Supporting Message */}
            <p className="text-base sm:text-lg md:text-xl text-[#F5F2EA]/85 font-light leading-relaxed max-w-xl mb-10">
              {siteConfig.supportingMessage}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                id="hero-book-btn"
                onClick={() => {
                  onNavigate('booking');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="group inline-flex items-center justify-center px-8 py-4 text-xs font-bold uppercase tracking-[0.22em] bg-[#D6A85F] text-[#0B0B0B] hover:bg-[#e4ba72] transition-all shadow-lg active:scale-[0.98]"
              >
                <span>BOOK APPOINTMENT</span>
                <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-services-btn"
                onClick={() => {
                  onNavigate('services');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#F5F2EA] border border-[#333333] hover:border-[#D6A85F] hover:text-[#D6A85F] transition-all bg-[#0B0B0B]/40 backdrop-blur-sm"
              >
                <span>EXPLORE SERVICES</span>
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center text-xs tracking-widest text-[#F5F2EA]/50">
          <span className="text-[10px] uppercase tracking-[0.25em] mb-1.5">SCROLL</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#D6A85F]" />
        </div>
      </section>

      {/* 14. STATISTICS SECTION */}
      <section id="home-stats" className="border-b border-[#1C1C1C] bg-[#0E0E0E] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#222222]">
            
            <div className="pt-4 sm:pt-0 sm:px-6 text-center lg:text-left">
              <p className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#D6A85F] tracking-tight">
                5K+
              </p>
              <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-[#F5F2EA]/70 mt-2 font-medium">
                Happy Clients
              </p>
            </div>

            <div className="pt-4 sm:pt-0 sm:px-6 text-center lg:text-left">
              <p className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#D6A85F] tracking-tight">
                5+
              </p>
              <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-[#F5F2EA]/70 mt-2 font-medium">
                Years Experience
              </p>
            </div>

            <div className="pt-4 sm:pt-0 sm:px-6 text-center lg:text-left">
              <p className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#D6A85F] tracking-tight">
                20+
              </p>
              <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-[#F5F2EA]/70 mt-2 font-medium">
                Expert Stylists
              </p>
            </div>

            <div className="pt-4 sm:pt-0 sm:px-6 text-center lg:text-left">
              <p className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#D6A85F] tracking-tight flex items-center justify-center lg:justify-start gap-1">
                4.9<span className="text-2xl sm:text-3xl text-[#D6A85F]">★</span>
              </p>
              <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-[#F5F2EA]/70 mt-2 font-medium">
                Google Rating
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 15. FEATURED SERVICES */}
      <section id="home-featured-services" className="py-24 sm:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionHeader
            label="OUR SERVICES"
            title="CRAFTED FOR YOUR STYLE"
            subtitle="From precision cuts to complete grooming, every service is designed around you."
            className="mb-0"
          />
          <button
            onClick={() => {
              onNavigate('services');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#D6A85F] hover:text-[#e4ba72] self-start md:self-end pb-2 group"
          >
            <span>VIEW ALL SERVICES</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 6 Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredServices.map((service) => (
            <div
              key={service.id}
              className="group bg-[#111111] border border-[#222222] hover:border-[#D6A85F]/50 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden bg-[#181818]">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover img-luxury-zoom filter brightness-90 contrast-105"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-[#0B0B0B]/80 backdrop-blur-sm px-2.5 py-1 border border-[#262626]">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#D6A85F] font-semibold">
                    {service.category}
                  </span>
                </div>
                <div className="absolute bottom-3 right-3 bg-[#0B0B0B]/80 backdrop-blur-sm px-2.5 py-1 border border-[#262626] flex items-center gap-1.5 text-xs text-[#F5F2EA]/80">
                  <Clock className="w-3.5 h-3.5 text-[#D6A85F]" />
                  <span>{service.duration}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="font-serif text-2xl text-[#F5F2EA] group-hover:text-[#D6A85F] transition-colors">
                      {service.name}
                    </h3>
                    <span className="font-mono text-xl font-bold text-[#D6A85F]">
                      ₹{service.price}
                    </span>
                  </div>

                  <p className="text-sm text-[#F5F2EA]/70 font-light leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#1C1C1C] flex items-center justify-between">
                  <span className="text-xs text-[#F5F2EA]/50 uppercase tracking-widest font-mono">
                    ₹{service.price} • {service.duration}
                  </span>
                  <button
                    onClick={() => handleBookService(service)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#D6A85F] group-hover:text-[#F5F2EA] transition-colors"
                  >
                    <span>BOOK NOW</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 16. WHY CHOOSE US */}
      <section id="home-why-us" className="bg-[#0E0E0E] py-24 sm:py-32 border-y border-[#1C1C1C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="THE DISTINCTION"
            title="WHY THE CUT?"
            subtitle="We treat men's grooming with the devotion of high fashion and architectural precision."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 mt-16">
            
            {/* Block 1 */}
            <div className="p-8 sm:p-10 border border-[#222222] bg-[#0B0B0B] hover:border-[#D6A85F]/50 transition-colors">
              <div className="w-12 h-12 rounded border border-[#D6A85F]/40 flex items-center justify-center text-[#D6A85F] mb-8">
                <Scissors className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-3xl text-[#F5F2EA] uppercase tracking-wide mb-4">
                PRECISION
              </h3>
              <p className="text-base text-[#F5F2EA]/70 font-light leading-relaxed">
                Every cut is shaped with obsessive attention to detail, face structure, bone line geometry, and growth patterns.
              </p>
            </div>

            {/* Block 2 */}
            <div className="p-8 sm:p-10 border border-[#222222] bg-[#0B0B0B] hover:border-[#D6A85F]/50 transition-colors">
              <div className="w-12 h-12 rounded border border-[#D6A85F]/40 flex items-center justify-center text-[#D6A85F] mb-8">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-3xl text-[#F5F2EA] uppercase tracking-wide mb-4">
                EXPERIENCE
              </h3>
              <p className="text-base text-[#F5F2EA]/70 font-light leading-relaxed">
                Professional stylists who understand modern masculine aesthetics, classical barber traditions, and contemporary techniques.
              </p>
            </div>

            {/* Block 3 */}
            <div className="p-8 sm:p-10 border border-[#222222] bg-[#0B0B0B] hover:border-[#D6A85F]/50 transition-colors">
              <div className="w-12 h-12 rounded border border-[#D6A85F]/40 flex items-center justify-center text-[#D6A85F] mb-8">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-3xl text-[#F5F2EA] uppercase tracking-wide mb-4">
                CONFIDENCE
              </h3>
              <p className="text-base text-[#F5F2EA]/70 font-light leading-relaxed">
                A better look should make you feel better too. Leave our studio feeling refreshed, poised, and primed for excellence.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 17. SALON EXPERIENCE (Split Section) */}
      <section id="home-experience" className="py-24 sm:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Large Salon Interior Photograph */}
          <div className="lg:col-span-7 relative">
            <div className="relative overflow-hidden border border-[#262626]">
              <img
                src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1200&q=85"
                alt="The Cut salon modern interior with vintage leather chairs and studio lighting"
                className="w-full h-[400px] sm:h-[520px] object-cover filter brightness-90 contrast-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent opacity-60" />
            </div>
            {/* Subtle decorative border corner */}
            <div className="hidden sm:block absolute -bottom-4 -left-4 w-28 h-28 border-b-2 border-l-2 border-[#D6A85F]/40 -z-10" />
          </div>

          {/* Right: Editorial Content */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#D6A85F] font-semibold">
              <span className="w-6 h-[1px] bg-[#D6A85F]" />
              <span>THE EXPERIENCE</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl text-[#F5F2EA] leading-[1.1] uppercase">
              WHERE STYLE MEETS PRECISION
            </h2>

            <p className="text-base sm:text-lg text-[#F5F2EA]/75 font-light leading-relaxed">
              Step into a clean, modern grooming environment where professional service meets personal style. From the scent of artisanal sandalwood oils to the whisper of Japanese steel shears, every sensory touchpoint is intentional.
            </p>

            <p className="text-sm text-[#F5F2EA]/60 font-light leading-relaxed">
              We offer complimentary single-origin espresso, cold mineral water, and private consultation booths before your cut begins.
            </p>

            <div className="pt-4">
              <button
                id="experience-about-btn"
                onClick={() => {
                  onNavigate('about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] border border-[#D6A85F] text-[#D6A85F] hover:bg-[#D6A85F] hover:text-[#0B0B0B] transition-all"
              >
                <span>DISCOVER OUR STORY</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 18. GALLERY PREVIEW */}
      <section id="home-gallery-preview" className="py-24 sm:py-32 bg-[#0E0E0E] border-t border-[#1C1C1C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
            <SectionHeader
              label="VISUAL ARCHIVE"
              title="A LOOK AT THE CUT"
              subtitle="Precision cuts, razor fades, beard sculpts, and transformations straight from our chairs."
              className="mb-0"
            />
            <button
              onClick={() => {
                onNavigate('gallery');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#D6A85F] hover:text-[#e4ba72] self-start sm:self-end pb-2 group"
            >
              <span>VIEW FULL GALLERY</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Masonry-Style Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {previewGallery.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => {
                  onNavigate('gallery');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`group relative overflow-hidden border border-[#222222] cursor-pointer bg-[#141414] ${
                  idx === 0 || idx === 3 ? 'sm:row-span-1' : ''
                }`}
              >
                <div className="h-64 sm:h-72 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover img-luxury-zoom filter brightness-90 contrast-105"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
                  <div>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D6A85F] block mb-1">
                      {item.category}
                    </span>
                    <h4 className="font-serif text-lg text-[#F5F2EA] group-hover:text-[#D6A85F] transition-colors">
                      {item.title}
                    </h4>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-[#D6A85F]/50 flex items-center justify-center text-[#D6A85F] group-hover:bg-[#D6A85F] group-hover:text-[#0B0B0B] transition-colors shrink-0 ml-3">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 19. TESTIMONIALS */}
      <section id="home-testimonials" className="py-24 sm:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="CLIENT VOICES"
          title="TESTIMONIALS"
          subtitle="Genuine feedback from gentlemen who trust The Cut with their signature look."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {testimonialsData.slice(0, 3).map((t) => (
            <div
              key={t.id}
              className="p-8 sm:p-10 border border-[#222222] bg-[#111111] flex flex-col justify-between relative"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center space-x-1 mb-6 text-[#D6A85F]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D6A85F]" />
                  ))}
                </div>

                <p className="font-serif text-lg sm:text-xl text-[#F5F2EA] leading-relaxed italic mb-8">
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>

              <div className="pt-6 border-t border-[#1C1C1C] flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5F2EA]">
                    — {t.name}
                  </h4>
                  <p className="text-[11px] text-[#D6A85F] font-mono mt-0.5">
                    {t.service}
                  </p>
                </div>
                <span className="text-[10px] text-[#F5F2EA]/40 uppercase tracking-widest">
                  VERIFIED CLIENT
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 20. FINAL CTA */}
      <section
        id="home-final-cta"
        className="relative py-28 sm:py-36 overflow-hidden border-t border-[#1C1C1C]"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=2000&q=85"
            alt="Barber hands detailing luxury beard styling"
            className="w-full h-full object-cover filter brightness-[0.25] contrast-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B] via-[#0B0B0B]/80 to-[#0B0B0B]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <span className="text-xs uppercase tracking-[0.28em] text-[#D6A85F] font-semibold mb-4 block">
            RESERVE YOUR APPOINTMENT
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#F5F2EA] uppercase tracking-tight leading-[1.08] mb-6">
            YOUR NEXT LOOK STARTS HERE.
          </h2>
          <p className="text-base sm:text-lg text-[#F5F2EA]/75 font-light max-w-xl mx-auto mb-10 leading-relaxed">
            Book your next grooming session with The Cut. Walk in with expectations, walk out with distinction.
          </p>

          <button
            onClick={() => {
              onNavigate('booking');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group inline-flex items-center justify-center px-10 py-4 text-xs font-bold uppercase tracking-[0.25em] bg-[#D6A85F] text-[#0B0B0B] hover:bg-[#e4ba72] transition-all shadow-xl active:scale-[0.98]"
          >
            <span>BOOK APPOINTMENT</span>
            <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1.5 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
};
