import { PackageItem } from '../types';

export const packageData: PackageItem[] = [
  {
    id: 'pack-haircut-beard',
    name: 'Haircut + Beard Trim',
    price: 449,
    duration: '60 min',
    description: 'The definitive executive maintenance combo to sharpen hair profile and facial lines.',
    servicesIncluded: [
      'Precision Haircut tailored to face',
      'Beard Trim & Clean Line-up',
      'Hot Towel Conditioning',
      'Matte Clay Finish'
    ],
    popular: false,
  },
  {
    id: 'pack-haircut-facial',
    name: 'Haircut + Facial',
    price: 699,
    duration: '80 min',
    description: 'Comprehensive transformation reviving dull skin and elevating personal grooming.',
    servicesIncluded: [
      'Classic Precision Haircut',
      'Deep Cleansing Facial Treatment',
      'Exfoliating Steam & Pore Purify',
      'Hydrating Botanical Mask'
    ],
    popular: true,
  },
  {
    id: 'pack-premium-grooming',
    name: 'Premium Grooming Pack',
    price: 999,
    duration: '110 min',
    description: 'The complete luxury restorative session covering hair, facial architecture, and deep scalp relaxation.',
    servicesIncluded: [
      'Master Stylist Cut & Wash',
      'Artisanal Beard Sculpture / Shave',
      'Revitalizing Skin Facial',
      'Aromatherapy Head & Shoulder Massage'
    ],
    popular: false,
  },
  {
    id: 'pack-wedding-grooming',
    name: 'Wedding Grooming',
    price: 1499,
    duration: '150 min',
    description: 'A bespoke multi-stage VIP preparation tailored for the groom and formal ceremonies.',
    servicesIncluded: [
      'Bespoke Haircut & Profile Architecture',
      'Luxury Razor Shave & Beard Contouring',
      'Oxygen Radiant Facial & Eye De-Puffing',
      'Deep Hair Spa & Scalp Detox',
      'Hands & Nail Neat Detailing'
    ],
    popular: false,
  }
];
