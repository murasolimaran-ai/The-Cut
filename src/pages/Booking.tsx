import React, { useState } from 'react';
import { PageId, BookingFormData } from '../types';
import { siteConfig } from '../data/siteConfig';
import { teamData } from '../data/team';
import { SectionHeader } from '../components/SectionHeader';
import {
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  CheckCircle2,
  MessageSquare,
  Sparkles,
  ArrowRight,
  RefreshCw,
  Home as HomeIcon,
} from 'lucide-react';

interface BookingProps {
  onNavigate: (page: PageId) => void;
  preselectedService?: string;
  preselectedStylist?: string;
}

export const Booking: React.FC<BookingProps> = ({
  onNavigate,
  preselectedService = '',
  preselectedStylist = '',
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phone: '',
    email: '',
    service: preselectedService || 'Classic Haircut',
    stylist: preselectedStylist || 'Any Available Master Stylist',
    date: '',
    time: '',
    specialRequest: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof BookingFormData, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<BookingFormData | null>(null);

  const serviceOptions = [
    'Classic Haircut (₹299)',
    'Hair Wash & Cut (₹349)',
    'Hair Styling (₹399)',
    'Kids Haircut (₹249)',
    'Hair Colour (₹799)',
    'Beard Trim (₹199)',
    'Beard Styling (₹249)',
    'Beard Colour (₹499)',
    'Basic Facial (₹499)',
    'Premium Facial (₹699)',
    'De-Tan Treatment (₹599)',
    'Head Massage (₹399)',
    'Hair Spa (₹599)',
    'Premium Hair Spa (₹899)',
    'Scalp Treatment (₹699)',
    'Haircut + Beard Trim Package (₹449)',
    'Haircut + Facial Package (₹699)',
    'Premium Grooming Pack (₹999)',
    'Wedding Grooming Package (₹1499)',
    'First Visit Special (10% Off)',
  ];

  const stylistOptions = [
    'Any Available Master Stylist',
    ...teamData.map((t) => `${t.name} (${t.role})`),
  ];

  const timeSlots = [
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '01:00 PM',
    '02:00 PM',
    '03:00 PM',
    '04:00 PM',
    '05:00 PM',
    '06:00 PM',
    '07:00 PM',
    '08:00 PM',
  ];

  // Validation logic
  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof BookingFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required.';
    } else {
      // Allow phone with digits, dashes, spaces, min 8 digits
      const cleaned = formData.phone.replace(/\D/g, '');
      if (cleaned.length < 8 || cleaned.length > 15) {
        newErrors.phone = 'Please enter a valid phone number (8–15 digits).';
      }
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service.';
    }

    if (!formData.date) {
      newErrors.date = 'Please select your preferred date.';
    }

    if (!formData.time) {
      newErrors.time = 'Please select your preferred time slot.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmittedData({ ...formData });
      setIsSubmitted(true);
      window.scrollTo({ top: 120, behavior: 'smooth' });
    }
  };

  const handleWhatsAppBooking = () => {
    const name = formData.fullName || 'Guest';
    const service = formData.service || 'Classic Haircut';
    const date = formData.date || 'Earliest available date';
    const time = formData.time || 'Earliest available time';
    const stylist = formData.stylist || 'Any stylist';

    const message = encodeURIComponent(
      `Hello ${siteConfig.salonName},\n\nI would like to book an appointment:\n• Name: ${name}\n• Service: ${service}\n• Stylist: ${stylist}\n• Preferred Date: ${date}\n• Preferred Time: ${time}\n\nPlease confirm availability. Thank you!`
    );

    window.open(`https://wa.me/${siteConfig.whatsapp.number}?text=${message}`, '_blank');
  };

  const handleResetBooking = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      service: 'Classic Haircut',
      stylist: 'Any Available Master Stylist',
      date: '',
      time: '',
      specialRequest: '',
    });
    setErrors({});
  };

  return (
    <div className="bg-[#0B0B0B] text-[#F5F2EA] min-h-screen pt-24 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="pt-12 sm:pt-16 pb-10 border-b border-[#1C1C1C] text-center">
          <SectionHeader
            label="RESERVATIONS"
            title="YOUR NEXT LOOK IS JUST A CLICK AWAY."
            subtitle="Select your grooming treatment, chosen stylist, and preferred slot. We respect your schedule with zero wait time."
            align="center"
          />
        </div>

        {/* 40. SUCCESS STATE */}
        {isSubmitted && submittedData ? (
          <div className="my-12 p-8 sm:p-14 border border-[#D6A85F] bg-[#111111] shadow-2xl relative animate-in fade-in zoom-in-95 duration-300">
            <div className="text-center max-w-xl mx-auto space-y-6">
              <div className="w-16 h-16 rounded-full border-2 border-[#D6A85F] flex items-center justify-center text-[#D6A85F] mx-auto">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div>
                <span className="text-xs uppercase tracking-[0.3em] text-[#D6A85F] font-semibold block mb-2">
                  ✓ APPOINTMENT REQUEST RECEIVED
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl uppercase text-[#F5F2EA]">
                  Thank you, {submittedData.fullName}
                </h3>
                <p className="text-sm text-[#F5F2EA]/70 font-light mt-2">
                  Your appointment request has been submitted to {siteConfig.salonName}. Our reception concierge will send an SMS &amp; WhatsApp confirmation shortly.
                </p>
              </div>

              {/* Reservation Receipt Details */}
              <div className="p-6 bg-[#0B0B0B] border border-[#222222] text-left space-y-3 font-light text-sm">
                <div className="flex items-center justify-between pb-2 border-b border-[#1C1C1C]">
                  <span className="text-xs uppercase tracking-wider text-[#F5F2EA]/50">Service</span>
                  <span className="font-medium text-[#F5F2EA] text-right">{submittedData.service}</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-[#1C1C1C]">
                  <span className="text-xs uppercase tracking-wider text-[#F5F2EA]/50">Stylist</span>
                  <span className="font-medium text-[#F5F2EA]">{submittedData.stylist}</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-[#1C1C1C]">
                  <span className="text-xs uppercase tracking-wider text-[#F5F2EA]/50">Date</span>
                  <span className="font-medium text-[#D6A85F] font-mono">{submittedData.date}</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-[#1C1C1C]">
                  <span className="text-xs uppercase tracking-wider text-[#F5F2EA]/50">Time Slot</span>
                  <span className="font-medium text-[#D6A85F] font-mono">{submittedData.time}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider text-[#F5F2EA]/50">Phone</span>
                  <span className="font-medium text-[#F5F2EA] font-mono">{submittedData.phone}</span>
                </div>
              </div>

              {/* Instant WhatsApp Confirmation */}
              <div className="pt-2">
                <button
                  onClick={handleWhatsAppBooking}
                  className="w-full py-4 px-6 bg-[#181818] border border-[#2e2e2e] text-[#D6A85F] hover:bg-[#D6A85F] hover:text-[#0B0B0B] text-xs font-bold uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>SYNC VIA WHATSAPP ({siteConfig.whatsapp.display})</span>
                </button>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <button
                  onClick={() => {
                    onNavigate('home');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto px-8 py-3.5 bg-[#D6A85F] text-[#0B0B0B] text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#e4ba72] flex items-center justify-center gap-2"
                >
                  <HomeIcon className="w-3.5 h-3.5" />
                  <span>BACK TO HOME</span>
                </button>

                <button
                  onClick={handleResetBooking}
                  className="w-full sm:w-auto px-8 py-3.5 border border-[#333333] text-[#F5F2EA] hover:border-[#D6A85F] hover:text-[#D6A85F] text-xs font-semibold uppercase tracking-[0.2em] flex items-center justify-center gap-2"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>BOOK ANOTHER</span>
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* 37 - 39. THE APPOINTMENT FORM */
          <div className="mt-12">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="p-8 sm:p-12 border border-[#222222] bg-[#111111] space-y-8"
            >
              <div className="flex items-center justify-between pb-4 border-b border-[#1C1C1C]">
                <div>
                  <h3 className="font-serif text-2xl text-[#F5F2EA] uppercase">
                    CLIENT APPOINTMENT DETAILS
                  </h3>
                  <p className="text-xs text-[#F5F2EA]/50 font-light mt-0.5">
                    Fields marked with <span className="text-[#D6A85F]">*</span> are required.
                  </p>
                </div>
                <Sparkles className="w-5 h-5 text-[#D6A85F]" />
              </div>

              {/* Grid 1: Personal Contact */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <label
                    htmlFor="fullName"
                    className="block text-xs uppercase tracking-[0.2em] font-medium text-[#F5F2EA]"
                  >
                    FULL NAME <span className="text-[#D6A85F]">*</span>
                  </label>
                  <div className="relative">
                    <input
                      id="fullName"
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      value={formData.fullName}
                      onChange={(e) => {
                        setFormData({ ...formData, fullName: e.target.value });
                        if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                      }}
                      className={`w-full bg-[#0B0B0B] border ${
                        errors.fullName ? 'border-red-500' : 'border-[#262626]'
                      } focus:border-[#D6A85F] text-[#F5F2EA] text-sm px-4 py-3.5 outline-none placeholder:text-[#F5F2EA]/30 transition-colors`}
                    />
                    <User className="w-4 h-4 text-[#F5F2EA]/30 absolute right-3.5 top-1/2 -translate-y-1/2" />
                  </div>
                  {errors.fullName && (
                    <p className="text-xs text-red-400 mt-1">{errors.fullName}</p>
                  )}
                </div>

                {/* Phone Number */}
                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="block text-xs uppercase tracking-[0.2em] font-medium text-[#F5F2EA]"
                  >
                    PHONE NUMBER <span className="text-[#D6A85F]">*</span>
                  </label>
                  <div className="relative">
                    <input
                      id="phone"
                      type="tel"
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: undefined });
                      }}
                      className={`w-full bg-[#0B0B0B] border ${
                        errors.phone ? 'border-red-500' : 'border-[#262626]'
                      } focus:border-[#D6A85F] text-[#F5F2EA] text-sm px-4 py-3.5 outline-none placeholder:text-[#F5F2EA]/30 transition-colors font-mono`}
                    />
                    <Phone className="w-4 h-4 text-[#F5F2EA]/30 absolute right-3.5 top-1/2 -translate-y-1/2" />
                  </div>
                  {errors.phone && (
                    <p className="text-xs text-red-400 mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>

              {/* Email (Optional) */}
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-xs uppercase tracking-[0.2em] font-medium text-[#F5F2EA]"
                >
                  EMAIL ADDRESS <span className="text-[#F5F2EA]/40 text-[10px] lowercase">(optional)</span>
                </label>
                <div className="relative">
                  <input
                    id="email"
                    type="email"
                    placeholder="e.g. rahul@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#0B0B0B] border border-[#262626] focus:border-[#D6A85F] text-[#F5F2EA] text-sm px-4 py-3.5 outline-none placeholder:text-[#F5F2EA]/30 transition-colors"
                  />
                  <Mail className="w-4 h-4 text-[#F5F2EA]/30 absolute right-3.5 top-1/2 -translate-y-1/2" />
                </div>
              </div>

              {/* Grid 2: Service and Stylist */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                {/* Select Service */}
                <div className="space-y-2">
                  <label
                    htmlFor="service"
                    className="block text-xs uppercase tracking-[0.2em] font-medium text-[#F5F2EA]"
                  >
                    SELECT SERVICE <span className="text-[#D6A85F]">*</span>
                  </label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) => {
                      setFormData({ ...formData, service: e.target.value });
                      if (errors.service) setErrors({ ...errors, service: undefined });
                    }}
                    className={`w-full bg-[#0B0B0B] border ${
                      errors.service ? 'border-red-500' : 'border-[#262626]'
                    } focus:border-[#D6A85F] text-[#F5F2EA] text-sm px-4 py-3.5 outline-none transition-colors appearance-none cursor-pointer`}
                  >
                    {serviceOptions.map((opt, i) => (
                      <option key={i} value={opt} className="bg-[#111111] text-[#F5F2EA]">
                        {opt}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="text-xs text-red-400 mt-1">{errors.service}</p>
                  )}
                </div>

                {/* Select Stylist */}
                <div className="space-y-2">
                  <label
                    htmlFor="stylist"
                    className="block text-xs uppercase tracking-[0.2em] font-medium text-[#F5F2EA]"
                  >
                    SELECT STYLIST
                  </label>
                  <select
                    id="stylist"
                    value={formData.stylist}
                    onChange={(e) => setFormData({ ...formData, stylist: e.target.value })}
                    className="w-full bg-[#0B0B0B] border border-[#262626] focus:border-[#D6A85F] text-[#F5F2EA] text-sm px-4 py-3.5 outline-none transition-colors appearance-none cursor-pointer"
                  >
                    {stylistOptions.map((opt, i) => (
                      <option key={i} value={opt} className="bg-[#111111] text-[#F5F2EA]">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Grid 3: Date & Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                {/* Select Date */}
                <div className="space-y-2">
                  <label
                    htmlFor="date"
                    className="block text-xs uppercase tracking-[0.2em] font-medium text-[#F5F2EA]"
                  >
                    SELECT DATE <span className="text-[#D6A85F]">*</span>
                  </label>
                  <div className="relative">
                    <input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => {
                        setFormData({ ...formData, date: e.target.value });
                        if (errors.date) setErrors({ ...errors, date: undefined });
                      }}
                      className={`w-full bg-[#0B0B0B] border ${
                        errors.date ? 'border-red-500' : 'border-[#262626]'
                      } focus:border-[#D6A85F] text-[#F5F2EA] text-sm px-4 py-3.5 outline-none transition-colors font-mono cursor-pointer`}
                    />
                    <Calendar className="w-4 h-4 text-[#F5F2EA]/30 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                  {errors.date && (
                    <p className="text-xs text-red-400 mt-1">{errors.date}</p>
                  )}
                </div>

                {/* Select Time */}
                <div className="space-y-2">
                  <label
                    htmlFor="time"
                    className="block text-xs uppercase tracking-[0.2em] font-medium text-[#F5F2EA]"
                  >
                    SELECT TIME <span className="text-[#D6A85F]">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="time"
                      value={formData.time}
                      onChange={(e) => {
                        setFormData({ ...formData, time: e.target.value });
                        if (errors.time) setErrors({ ...errors, time: undefined });
                      }}
                      className={`w-full bg-[#0B0B0B] border ${
                        errors.time ? 'border-red-500' : 'border-[#262626]'
                      } focus:border-[#D6A85F] text-[#F5F2EA] text-sm px-4 py-3.5 outline-none transition-colors appearance-none cursor-pointer font-mono`}
                    >
                      <option value="">-- Select Preferred Slot --</option>
                      {timeSlots.map((slot, i) => (
                        <option key={i} value={slot} className="bg-[#111111] text-[#F5F2EA]">
                          {slot}
                        </option>
                      ))}
                    </select>
                    <Clock className="w-4 h-4 text-[#F5F2EA]/30 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                  {errors.time && (
                    <p className="text-xs text-red-400 mt-1">{errors.time}</p>
                  )}
                </div>
              </div>

              {/* Special Request */}
              <div className="space-y-2 pt-2">
                <label
                  htmlFor="specialRequest"
                  className="block text-xs uppercase tracking-[0.2em] font-medium text-[#F5F2EA]"
                >
                  SPECIAL REQUEST / PREFERENCES <span className="text-[#F5F2EA]/40 text-[10px] lowercase">(optional)</span>
                </label>
                <textarea
                  id="specialRequest"
                  rows={3}
                  placeholder="e.g. Sensitive scalp, preparing for photoshoot, espresso on arrival..."
                  value={formData.specialRequest}
                  onChange={(e) => setFormData({ ...formData, specialRequest: e.target.value })}
                  className="w-full bg-[#0B0B0B] border border-[#262626] focus:border-[#D6A85F] text-[#F5F2EA] text-sm p-4 outline-none placeholder:text-[#F5F2EA]/30 transition-colors"
                />
              </div>

              {/* Buttons: Submit & WhatsApp Option */}
              <div className="pt-6 space-y-4">
                <button
                  type="submit"
                  id="submit-booking-btn"
                  className="w-full py-4 bg-[#D6A85F] text-[#0B0B0B] font-bold text-xs uppercase tracking-[0.22em] hover:bg-[#e4ba72] active:scale-[0.99] transition-all flex items-center justify-center gap-2 shadow-xl"
                >
                  <span>CONFIRM APPOINTMENT</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {/* 41. WHATSAPP BOOKING */}
                <div className="flex items-center justify-center pt-2">
                  <button
                    type="button"
                    onClick={handleWhatsAppBooking}
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#D6A85F] hover:text-[#e4ba72] transition-colors py-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>PREFER TO BOOK VIA WHATSAPP? CLICK HERE</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
