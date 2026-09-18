import React from 'react';
import { PageId, TeamMember } from '../types';
import { teamData } from '../data/team';
import { SectionHeader } from '../components/SectionHeader';
import { ArrowUpRight } from 'lucide-react';

interface TeamProps {
  onNavigate: (page: PageId) => void;
  onSelectStylistToBook: (stylistName: string) => void;
}

export const Team: React.FC<TeamProps> = ({ onNavigate, onSelectStylistToBook }) => {
  const handleBookWithStylist = (member: TeamMember) => {
    onSelectStylistToBook(member.name);
    onNavigate('booking');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#0B0B0B] text-[#F5F2EA] min-h-screen pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="pt-12 sm:pt-16 pb-12 border-b border-[#1C1C1C]">
          <SectionHeader
            label="THE ARTISANS"
            title="MEET THE EXPERTS BEHIND THE STYLE"
            subtitle="Trained in both heritage British and Italian barbercraft and modern Japanese razor ergonomics. Meet the specialists who craft your signature look."
          />
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mt-14">
          {teamData.map((member) => (
            <div
              key={member.id}
              className="group bg-[#111111] border border-[#222222] hover:border-[#D6A85F]/60 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Portrait */}
              <div className="relative h-96 overflow-hidden bg-[#161616]">
                <img
                  src={member.image}
                  alt={`${member.name} - ${member.role}`}
                  className="w-full h-full object-cover img-luxury-zoom filter grayscale contrast-110 group-hover:grayscale-0 transition-all duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-80" />
                
                {/* Experience Badge */}
                <div className="absolute top-4 right-4 bg-[#0B0B0B]/80 backdrop-blur-sm px-3 py-1 border border-[#262626]">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#D6A85F] font-semibold">
                    {member.experience}
                  </span>
                </div>
              </div>

              {/* Details Body */}
              <div className="p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-baseline justify-between mb-1">
                    <h3 className="font-serif text-3xl text-[#F5F2EA] tracking-wide group-hover:text-[#D6A85F] transition-colors">
                      {member.name}
                    </h3>
                  </div>

                  <p className="text-xs uppercase tracking-[0.2em] text-[#D6A85F] font-semibold mb-4">
                    {member.role}
                  </p>

                  <div className="p-3 bg-[#0B0B0B] border border-[#222222] mb-4">
                    <p className="text-[10px] uppercase tracking-widest text-[#F5F2EA]/50 font-medium mb-1">
                      SPECIALIZATION
                    </p>
                    <p className="text-sm font-medium text-[#F5F2EA]">
                      {member.specialization}
                    </p>
                  </div>

                  {member.bio && (
                    <p className="text-xs text-[#F5F2EA]/70 font-light leading-relaxed mb-6">
                      {member.bio}
                    </p>
                  )}
                </div>

                <div className="pt-5 border-t border-[#1C1C1C] flex items-center justify-between">
                  {/* Minimal Outline Social Links */}
                  <div className="flex items-center space-x-2">
                    <a
                      href={member.socialLinks.instagram}
                      target="_blank"
                      rel="noreferrer"
                      className="w-8 h-8 rounded border border-[#262626] flex items-center justify-center text-xs text-[#F5F2EA]/60 hover:text-[#D6A85F] hover:border-[#D6A85F] transition-colors"
                      aria-label={`${member.name} Instagram`}
                    >
                      IG
                    </a>
                    <a
                      href={member.socialLinks.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="w-8 h-8 rounded border border-[#262626] flex items-center justify-center text-xs text-[#F5F2EA]/60 hover:text-[#D6A85F] hover:border-[#D6A85F] transition-colors"
                      aria-label={`${member.name} Portfolio`}
                    >
                      IN
                    </a>
                  </div>

                  <button
                    onClick={() => handleBookWithStylist(member)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#1a1a1a] text-[#D6A85F] border border-[#2e2e2e] text-xs font-semibold uppercase tracking-[0.18em] group-hover:bg-[#D6A85F] group-hover:text-[#0B0B0B] group-hover:border-[#D6A85F] transition-all"
                  >
                    <span>BOOK CHAIR</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Culture Statement */}
        <div className="mt-20 p-8 sm:p-12 border border-[#222222] bg-[#0E0E0E] max-w-4xl mx-auto text-center">
          <h3 className="font-serif text-2xl sm:text-3xl uppercase text-[#F5F2EA] mb-3">
            Ongoing Masterclass Standards
          </h3>
          <p className="text-sm text-[#F5F2EA]/70 font-light max-w-2xl mx-auto leading-relaxed">
            Our team undergoes bi-monthly technical workshops on scalp ecology, skin health, precision shear sharpening, and international style trends to maintain world-class grooming excellence.
          </p>
        </div>

      </div>
    </div>
  );
};
