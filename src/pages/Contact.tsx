import React, { useState } from 'react';
import { PageId } from '../types';
import { siteConfig } from '../data/siteConfig';
import { SectionHeader } from '../components/SectionHeader';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Navigation,
  MessageSquare,
  Send,
  CheckCircle2,
} from 'lucide-react';

interface ContactProps {
  onNavigate: (page: PageId) => void;
}

export const Contact: React.FC<ContactProps> = ({ onNavigate }) => {
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquiryMessage, setInquiryMessage] = useState('');
  const [inquirySent, setInquirySent] = useState(false);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryName.trim() || !inquiryMessage.trim()) return;
    setInquirySent(true);
  };

  return (
    <div className="bg-[#0B0B0B] text-[#F5F2EA] min-h-screen pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 42. CONTACT HEADER */}
        <div className="pt-12 sm:pt-16 pb-12 border-b border-[#1C1C1C]">
          <SectionHeader
            label="GET IN TOUCH"
            title="WE'RE HERE TO HELP YOU LOOK BETTER."
            subtitle="Whether inquiring about bespoke wedding grooming, scheduling a consultation, or finding our Kelambakkam studio, we're at your service."
          />
        </div>

        {/* 42. CONTACT BLOCKS & QUICK MESSAGE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12">
          
          {/* Left: 4 Contact Information Cards */}
          <div className="lg:col-span-7 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Block 1: Location */}
              <div className="p-8 border border-[#222222] bg-[#111111] flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded border border-[#D6A85F]/40 flex items-center justify-center text-[#D6A85F] mb-6">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D6A85F] block mb-2">
                    OUR LOCATION
                  </span>
                  <p className="text-sm text-[#F5F2EA] leading-relaxed font-light">
                    {siteConfig.address.street}
                    <br />
                    {siteConfig.address.area}
                    <br />
                    {siteConfig.address.cityStatePin}
                  </p>
                </div>
                <div className="pt-6 mt-4 border-t border-[#1C1C1C]">
                  <a
                    href={siteConfig.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#D6A85F] hover:underline"
                  >
                    <span>OPEN MAPS</span>
                    <Navigation className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Block 2: Call Us */}
              <div className="p-8 border border-[#222222] bg-[#111111] flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded border border-[#D6A85F]/40 flex items-center justify-center text-[#D6A85F] mb-6">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D6A85F] block mb-2">
                    CALL US
                  </span>
                  <a
                    href={`tel:${siteConfig.phone.value}`}
                    className="text-lg font-mono text-[#F5F2EA] hover:text-[#D6A85F] transition-colors block"
                  >
                    {siteConfig.phone.display}
                  </a>
                  <p className="text-xs text-[#F5F2EA]/50 font-light mt-1">
                    Direct line for bookings &amp; directions
                  </p>
                </div>
                <div className="pt-6 mt-4 border-t border-[#1C1C1C]">
                  <a
                    href={`tel:${siteConfig.phone.value}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#D6A85F] hover:underline"
                  >
                    <span>CALL RECEPTION</span>
                  </a>
                </div>
              </div>

              {/* Block 3: Email */}
              <div className="p-8 border border-[#222222] bg-[#111111] flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded border border-[#D6A85F]/40 flex items-center justify-center text-[#D6A85F] mb-6">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D6A85F] block mb-2">
                    EMAIL
                  </span>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-base font-medium text-[#F5F2EA] hover:text-[#D6A85F] transition-colors block"
                  >
                    {siteConfig.email}
                  </a>
                  <p className="text-xs text-[#F5F2EA]/50 font-light mt-1">
                    Press, wedding inquiries &amp; feedback
                  </p>
                </div>
                <div className="pt-6 mt-4 border-t border-[#1C1C1C]">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#D6A85F] hover:underline"
                  >
                    <span>SEND AN EMAIL</span>
                  </a>
                </div>
              </div>

              {/* Block 4: Working Hours */}
              <div className="p-8 border border-[#222222] bg-[#111111] flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded border border-[#D6A85F]/40 flex items-center justify-center text-[#D6A85F] mb-6">
                    <Clock className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D6A85F] block mb-2">
                    WORKING HOURS
                  </span>
                  <p className="text-sm text-[#F5F2EA] font-medium">
                    {siteConfig.workingHours.days}
                  </p>
                  <p className="text-base text-[#D6A85F] font-mono mt-1">
                    {siteConfig.workingHours.time}
                  </p>
                  <p className="text-xs text-[#F5F2EA]/50 font-light mt-1">
                    Open all 7 days for your convenience
                  </p>
                </div>
                <div className="pt-6 mt-4 border-t border-[#1C1C1C]">
                  <span className="text-xs uppercase tracking-wider text-emerald-400 font-mono flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    OPEN TODAY
                  </span>
                </div>
              </div>

            </div>

            {/* 44. SOCIAL MEDIA CHANNELS */}
            <div className="p-6 border border-[#222222] bg-[#0E0E0E] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D6A85F]">
                  OFFICIAL SOCIAL MEDIA
                </h4>
                <p className="text-xs text-[#F5F2EA]/60 font-light">
                  Follow for daily cut showcases, grooming tutorials &amp; VIP announcements.
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 border border-[#262626] hover:border-[#D6A85F] text-xs font-semibold tracking-wider text-[#F5F2EA] hover:text-[#D6A85F] transition-colors"
                >
                  INSTAGRAM
                </a>
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 border border-[#262626] hover:border-[#D6A85F] text-xs font-semibold tracking-wider text-[#F5F2EA] hover:text-[#D6A85F] transition-colors"
                >
                  FACEBOOK
                </a>
                <a
                  href={siteConfig.social.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 border border-[#262626] hover:border-[#D6A85F] text-xs font-semibold tracking-wider text-[#F5F2EA] hover:text-[#D6A85F] transition-colors"
                >
                  YOUTUBE
                </a>
              </div>
            </div>
          </div>

          {/* Right: Quick Direct Inquiry Form */}
          <div className="lg:col-span-5">
            <div className="p-8 sm:p-10 border border-[#222222] bg-[#111111] h-full flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#D6A85F] font-semibold mb-2">
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>CONCIERGE INQUIRY</span>
                </div>
                <h3 className="font-serif text-3xl uppercase text-[#F5F2EA] mb-2">
                  SEND US A NOTE
                </h3>
                <p className="text-xs text-[#F5F2EA]/60 font-light mb-8">
                  Have a question about bridal group bookings, corporate memberships, or styling consultation? Drop us a note.
                </p>

                {inquirySent ? (
                  <div className="py-12 text-center space-y-4">
                    <CheckCircle2 className="w-12 h-12 text-[#D6A85F] mx-auto" />
                    <h4 className="font-serif text-2xl uppercase text-[#F5F2EA]">MESSAGE TRANSMITTED</h4>
                    <p className="text-sm text-[#F5F2EA]/70 font-light">
                      Thank you, {inquiryName}. Our salon director will reply to {inquiryEmail || 'your contact'} within 2 business hours.
                    </p>
                    <button
                      onClick={() => setInquirySent(false)}
                      className="text-xs uppercase tracking-widest text-[#D6A85F] underline pt-2"
                    >
                      SEND ANOTHER NOTE
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSendMessage} className="space-y-5">
                    <div>
                      <label className="block text-[11px] uppercase tracking-[0.2em] text-[#F5F2EA]/80 font-medium mb-1.5">
                        YOUR NAME *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={inquiryName}
                        onChange={(e) => setInquiryName(e.target.value)}
                        className="w-full bg-[#0B0B0B] border border-[#262626] focus:border-[#D6A85F] text-[#F5F2EA] text-sm px-4 py-3 outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-[0.2em] text-[#F5F2EA]/80 font-medium mb-1.5">
                        EMAIL OR PHONE NUMBER *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="john@example.com or +91..."
                        value={inquiryEmail}
                        onChange={(e) => setInquiryEmail(e.target.value)}
                        className="w-full bg-[#0B0B0B] border border-[#262626] focus:border-[#D6A85F] text-[#F5F2EA] text-sm px-4 py-3 outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-[0.2em] text-[#F5F2EA]/80 font-medium mb-1.5">
                        YOUR MESSAGE *
                      </label>
                      <textarea
                        rows={4}
                        required
                        placeholder="How can we assist you today?"
                        value={inquiryMessage}
                        onChange={(e) => setInquiryMessage(e.target.value)}
                        className="w-full bg-[#0B0B0B] border border-[#262626] focus:border-[#D6A85F] text-[#F5F2EA] text-sm p-4 outline-none transition-colors"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 bg-[#D6A85F] text-[#0B0B0B] font-bold text-xs uppercase tracking-[0.2em] hover:bg-[#e4ba72] transition-colors flex items-center justify-center gap-2"
                    >
                      <span>TRANSMIT INQUIRY</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

        </div>

        {/* 43. CONTACT MAP / STUDIO LOCATION VIEW */}
        <div className="mt-16 border border-[#222222] bg-[#0E0E0E] overflow-hidden">
          <div className="p-8 sm:p-10 border-b border-[#222222] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#D6A85F] font-semibold block mb-1">
                STUDIO ACCESS
              </span>
              <h3 className="font-serif text-3xl uppercase text-[#F5F2EA]">
                FINDING THE CUT
              </h3>
              <p className="text-sm text-[#F5F2EA]/70 font-light mt-1">
                Located on OMR Main Road with dedicated valet parking and private elevator access.
              </p>
            </div>

            <a
              href={siteConfig.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#D6A85F] text-[#0B0B0B] text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#e4ba72] transition-colors shrink-0"
            >
              <span>GET DIRECTIONS</span>
              <Navigation className="w-4 h-4" />
            </a>
          </div>

          {/* Map Preview Graphic */}
          <div className="relative h-72 sm:h-96 w-full bg-[#121212] flex items-center justify-center overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1600&q=80"
              alt="The Cut Studio Exterior and Map Area"
              className="w-full h-full object-cover filter brightness-[0.2] contrast-125"
            />
            
            {/* Minimal Grid & Coordinates Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-[#0B0B0B]" />
            
            <div className="relative z-10 text-center p-6 bg-[#0B0B0B]/90 border border-[#D6A85F]/40 max-w-md mx-4 shadow-2xl">
              <MapPin className="w-8 h-8 text-[#D6A85F] mx-auto mb-2" />
              <p className="font-serif text-xl uppercase tracking-wider text-[#F5F2EA]">
                {siteConfig.salonName} STUDIO
              </p>
              <p className="text-xs text-[#F5F2EA]/70 font-light mt-1 font-mono">
                {siteConfig.address.full}
              </p>
              <p className="text-[11px] text-[#D6A85F] font-mono mt-2">
                12.7844° N, 80.2201° E • Kelambakkam Junction
              </p>
              <div className="pt-4 mt-3 border-t border-[#222222]">
                <a
                  href={siteConfig.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs uppercase tracking-widest text-[#D6A85F] hover:underline font-semibold"
                >
                  LAUNCH IN GOOGLE MAPS →
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
