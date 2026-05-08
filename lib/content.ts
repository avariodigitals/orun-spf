// ══════════════════════════════════════════════════════════════
//  ORUN SPF — Content Configuration
//  ⚠  All page content is managed from this single file.
//  Future: swap static data for WordPress REST API calls here.
//
//  Icons: use Lucide icon names (string). Map them to components
//  via lib/icons.tsx — never raw emojis in production.
// ══════════════════════════════════════════════════════════════

export const SITE = {
  brand:    'ORUN',
  product:  'SPF 50+ Sunscreen',
  whatsapp: '2347072387362',
  message:  "Hello , I am interested in your product. I would like to order ORUN SPF 50+.",
  get waLink() {
    return `https://wa.me/${this.whatsapp}?text=${encodeURIComponent(this.message)}`
  },
}

// ── Hero ──────────────────────────────────────────────────────
export const HERO = {
  badge:   'Broad Spectrum SPF 50+ Sunscreen',
  lines:   ['Protect.', 'Glow.', 'Thrive.'],
  sub:     'Made for African sun. Made for every skin.',
  ctaMain: 'Order on WhatsApp',
  ctaSub:  'See Why It Works',
  benefits: [
    { icon: 'ShieldCheck', label: 'High Protection', note: 'UVA/UVB' },
    { icon: 'EyeOff',      label: 'No White Cast',   note: 'All skin tones' },
    { icon: 'Feather',     label: 'Lightweight',     note: '& Non-greasy' },
    { icon: 'Droplets',    label: 'Hydrating',       note: 'Formula' },
  ],
}

// ── Trust bar ─────────────────────────────────────────────────
export const TRUST_BAR = [
  { icon: 'ShieldCheck', label: 'HIGH PROTECTION',  note: 'SPF 50+ PA+++'     },
  { icon: 'Sun',         label: 'MADE FOR',         note: 'TROPICAL SUN'      },
  { icon: 'ScanEye',     label: 'NO WHITE CAST',    note: 'FOR ALL SKIN TONES'},
  { icon: 'Leaf',        label: 'CLEAN & SAFE',     note: 'INGREDIENTS'       },
  { icon: 'HeartPulse',  label: 'SAFE FOR ALL',     note: 'SKIN TYPES'        },
]

// ── Benefits ──────────────────────────────────────────────────
export const BENEFITS = {
  tag:   'Trusted Protection',
  title: 'Everyday Confidence',
  desc:  'ORUN SPF 50+ is a lightweight, non-greasy sunscreen that protects your skin from harsh UVA & UVB rays while keeping it hydrated, smooth and glowing all day.',
  list: [
    'Broad Spectrum UVA/UVB Protection',
    'Lightweight & Fast Absorbing',
    'No White Cast',
    'Hydrating & Skin-Nourishing',
    'Perfect for Daily Use',
  ],
  cards: [
    { icon: 'Droplets', title: 'Hydrating Formula',        body: 'Keeps your skin soft, fresh and radiant.' },
    { icon: 'Feather',  title: 'Lightweight & Non-Greasy', body: 'Feels like skincare, protects like SPF.'  },
  ],
}

// ── Why ORUN ──────────────────────────────────────────────────
export const WHY_ORUN = {
  tag: 'Why Choose ORUN',
  titleTop: 'Protection Made',
  titleAccent: 'For You.',
  titleBottom: 'Not Adapted For You.',
  desc: 'Most sunscreens were not formulated with African skin in mind. ORUN was built from the ground up to serve melanin-rich skin — delivering real protection with zero compromise on aesthetics or feel.',
  points: [
    {
      title: 'Made for African Skin',
      body: 'Formulated specifically for melanin-rich skin tones that are often ignored by mainstream SPF brands.',
    },
    {
      title: 'No White Cast. Guaranteed.',
      body: 'Our advanced filter blend disappears invisibly on all skin tones — from the lightest to the deepest.',
    },
    {
      title: 'Built for Nigerian Weather',
      body: 'Tropical-heat tested. Sweat-resistant. Designed to protect under the harshest sun conditions in Africa.',
    },
    {
      title: 'Skincare + Sun Protection',
      body: 'Niacinamide brightens. Hyaluronic Acid hydrates. You get SPF and a full skincare step in one product.',
    },
  ],
}

// ── Ingredients ───────────────────────────────────────────────
export const INGREDIENTS = {
  tag:   'Clean Ingredients. Powerful Results.',
  title: "What's Inside",
  items: [
    { icon: 'Sparkles',  name: 'Niacinamide',         bg: '#F9EFC7', desc: 'Brightens and evens skin tone.'   },
    { icon: 'Droplets',  name: 'Hyaluronic Acid',     bg: '#C9DEF5', desc: 'Deeply hydrates and plumps.'      },
    { icon: 'Leaf',      name: 'Vitamin E',            bg: '#F5D9B8', desc: 'Protects and nourishes skin.'     },
    { icon: 'Sun',       name: 'Advanced UV Filters',  bg: '#E8E8E8', desc: 'Broad spectrum protection.'       },
    { icon: 'Wind',      name: 'Aloe Vera Extract',    bg: '#C8E6C9', desc: 'Soothes and calms skin.'          },
  ],
}

// ── Texture ───────────────────────────────────────────────────
export const TEXTURE = {
  tag: 'Feels as good as it works',
  title: 'Lightweight.\nInvisible. Done.',
  desc: 'No greasiness. No white cast. Just clean, invisible protection that lets your skin breathe all day.',
  steps: [
    { step: '01', title: 'Cleanse', desc: 'Start with a clean, dry face. Pat gently — do not rub.' },
    { step: '02', title: 'Apply', desc: 'Dispense a pea-sized amount and spread evenly across face and neck.' },
    { step: '03', title: 'Blend', desc: 'Massage in circular motions until fully absorbed. No white cast.' },
    { step: '04', title: 'Reapply', desc: 'Reapply every 2 hours under direct sun exposure for full protection.' },
  ],
  badgeTitle: 'Zero White Cast',
  badgeSub: 'Works on all skin tones',
}

// ── Before & After ────────────────────────────────────────────
export const BEFORE_AFTER = {
  tag: 'See the Difference',
  titleTop: 'Real Results.',
  titleAccent: 'Real Skin.',
  description: 'ORUN SPF 50+ delivers visible improvement in skin protection and tone within weeks of consistent daily use.',
  withoutLabel: 'Without',
  withLabel: 'With',
  ctaHeading: 'Ready to see your own results?',
  ctaBody: 'Join hundreds of women across Nigeria who have made ORUN SPF their daily essential.',
  ctaButton: 'Start Your Glow Journey',
}

// ── Testimonials ──────────────────────────────────────────────
export const TESTIMONIALS = {
  tag:   'Loved by Real People',
  title: 'Real Results',
  items: [
    {
      text:     "Finally a sunscreen that doesn't leave me looking ghostly! Lightweight and perfect for everyday use.",
      name:     'Temi A.',
      location: 'Lagos, Nigeria',
      rating:   5,
    },
    {
      text:     'ORUN SPF keeps my skin hydrated and protected even under the harsh Nigerian sun.',
      name:     'Chioma E.',
      location: 'Abuja, Nigeria',
      rating:   5,
    },
    {
      text:     'My new holy grail. No white cast, no breakouts — just pure, protected glow every day.',
      name:     'Sandra O.',
      location: 'Port Harcourt, Nigeria',
      rating:   5,
    },
    {
      text:     'I wear this every morning under makeup. Sits perfectly and gives full protection all day.',
      name:     'Funmi B.',
      location: 'Ibadan, Nigeria',
      rating:   5,
    },
    {
      text:     'Best SPF I have tried in Nigeria. Actually designed for our skin tones and climate.',
      name:     'Adaeze M.',
      location: 'Enugu, Nigeria',
      rating:   5,
    },
  ],
}

// ── Store Locator ── editable from WordPress later ────────────
export const STORES = {
  tag:   'Find ORUN Near You',
  title: 'Available Near You',
  desc:  'Find ORUN SPF 50+ at these locations, or order via WhatsApp for fast nationwide delivery.',
  items: [
    {
      name:    'ORUN Beauty Hub — Lekki',
      address: '14B Admiralty Way, Lekki Phase 1',
      city:    'Lagos',
      state:   'Lagos',
      phone:   '+234 701 000 0001',
      mapUrl:  'https://maps.google.com/?q=Lekki+Phase+1+Lagos',
    },
    {
      name:    'Glam Studio — Victoria Island',
      address: '5 Adeola Odeku Street, Victoria Island',
      city:    'Lagos',
      state:   'Lagos',
      phone:   '+234 701 000 0002',
      mapUrl:  'https://maps.google.com/?q=Victoria+Island+Lagos',
    },
    {
      name:    'Skin Bar — Abuja',
      address: '12 Aminu Kano Crescent, Wuse 2',
      city:    'Abuja',
      state:   'FCT',
      phone:   '+234 701 000 0003',
      mapUrl:  'https://maps.google.com/?q=Wuse+2+Abuja',
    },
    {
      name:    'Glow Beauty — Port Harcourt',
      address: '8 Aba Road, Port Harcourt',
      city:    'Port Harcourt',
      state:   'Rivers',
      phone:   '+234 701 000 0004',
      mapUrl:  'https://maps.google.com/?q=Aba+Road+Port+Harcourt',
    },
  ],
  deliveryTitle: 'Not near a stockist?',
  deliveryBody: 'Order directly on WhatsApp — fast nationwide delivery across all states in Nigeria.',
  deliveryCta: 'Order via WhatsApp — We Deliver Nationwide',
}

// ── FAQ ───────────────────────────────────────────────────────
export const FAQ_ITEMS = {
  tag:   "Questions? We've Got Answers",
  title: 'Frequently Asked',
  items: [
    {
      q: 'Is ORUN SPF suitable for all skin types?',
      a: "Yes. ORUN SPF 50+ is formulated to work beautifully on all skin types — oily, dry, combination, and sensitive. It is dermatologist-inspired and tested on all Nigerian skin tones.",
    },
    {
      q: 'Does it leave a white cast?',
      a: 'Absolutely not. ORUN SPF 50+ is specifically formulated to be invisible on all skin tones. It blends seamlessly for a clean, natural finish with zero white cast.',
    },
    {
      q: 'Can I use it under makeup?',
      a: 'Yes. It works perfectly as a makeup primer. Its lightweight, non-greasy formula creates a smooth base for foundation and other products without pilling.',
    },
    {
      q: 'How often should I reapply?',
      a: 'For optimal protection, reapply every 2 hours when outdoors or after swimming and sweating. For everyday indoor use, once in the morning is sufficient.',
    },
    {
      q: 'Is it safe for sensitive skin?',
      a: 'Yes. ORUN SPF 50+ contains Aloe Vera Extract and is formulated to be gentle. If you have specific concerns, we recommend a patch test on a small area first.',
    },
    {
      q: 'How do I place an order?',
      a: 'Click any "Order on WhatsApp" button on this page to chat with us directly. We offer fast nationwide delivery across all states in Nigeria.',
    },
  ],
}

// ── Final CTA ─────────────────────────────────────────────────
export const FINAL_CTA = {
  title: 'Ready to Protect\nYour Glow?',
  sub:   'Join hundreds of women choosing smarter sun protection.',
  cta:   'Order ORUN SPF on WhatsApp',
  trustPoints: [
    'High Protection SPF 50+ PA+++',
    'No White Cast. Ever.',
    'Lightweight & Non-Greasy',
    'Hydrating Formula',
  ],
}

export const DEFAULT_CONTENT = {
  hero: HERO,
  'trust-bar': { items: TRUST_BAR },
  benefits: BENEFITS,
  'why-orun': WHY_ORUN,
  ingredients: INGREDIENTS,
  texture: TEXTURE,
  'before-after': BEFORE_AFTER,
  testimonials: TESTIMONIALS,
  stores: STORES,
  faq: FAQ_ITEMS,
  'final-cta': FINAL_CTA,
} as const

export type ContentSectionMap = typeof DEFAULT_CONTENT
export type ContentSectionKey = keyof ContentSectionMap