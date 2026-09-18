export type PageId = 
  | 'home'
  | 'about'
  | 'services'
  | 'pricing'
  | 'gallery'
  | 'team'
  | 'booking'
  | 'contact';

export type ServiceCategory = 'HAIR' | 'BEARD' | 'SKIN' | 'COLOUR' | 'SPA';

export interface ServiceItem {
  id: string;
  category: ServiceCategory;
  name: string;
  description: string;
  price: number; // in ₹
  duration: string;
  image: string;
  featured?: boolean;
}

export interface PackageItem {
  id: string;
  name: string;
  price: number; // in ₹
  duration: string;
  description: string;
  servicesIncluded: string[];
  popular?: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  experience: string;
  specialization: string;
  image: string;
  bio?: string;
  socialLinks: {
    instagram?: string;
    linkedin?: string;
  };
}

export type GalleryCategory = 'ALL' | 'HAIRCUTS' | 'BEARD' | 'COLOUR' | 'INTERIOR';

export interface GalleryItem {
  id: string;
  image: string;
  category: 'HAIRCUTS' | 'BEARD' | 'COLOUR' | 'INTERIOR';
  title: string;
  alt: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  text: string;
  rating: number;
  service: string;
  verified?: boolean;
}

export interface BookingFormData {
  fullName: string;
  phone: string;
  email: string;
  service: string;
  stylist: string;
  date: string;
  time: string;
  specialRequest: string;
}

export interface SiteConfig {
  salonName: string;
  tagline: string;
  heroStatement: {
    line1: string;
    line2: string;
  };
  supportingMessage: string;
  address: {
    street: string;
    area: string;
    cityStatePin: string;
    full: string;
  };
  phone: {
    display: string;
    value: string;
  };
  email: string;
  workingHours: {
    days: string;
    time: string;
  };
  whatsapp: {
    display: string;
    number: string; // for wa.me URL
  };
  social: {
    instagram: string;
    facebook: string;
    youtube: string;
  };
  mapsUrl: string;
}
