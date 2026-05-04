import type { Metadata } from 'next'
import { DM_Sans, Cormorant_Garamond } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({
  subsets:  ['latin'],
  weight:   ['300', '400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display:  'swap',
})

const cormorant = Cormorant_Garamond({
  subsets:  ['latin'],
  weight:   ['400', '500', '600', '700'],
  variable: '--font-cormorant',
  display:  'swap',
})

export const metadata: Metadata = {
  title:       'ORUN SPF 50+ | Sunscreen for African Skin — No White Cast',
  description: 'ORUN SPF 50+ is a lightweight, non-greasy broad spectrum sunscreen formulated for African skin. No white cast. Hydrating. PA+++. Order on WhatsApp — fast nationwide delivery across Nigeria.',
  keywords:    [
    'sunscreen Nigeria', 'SPF 50 for black skin', 'no white cast sunscreen Nigeria',
    'ORUN SPF', 'best sunscreen for African skin', 'sunscreen for dark skin',
    'ORUN SPF 50+', 'buy sunscreen Nigeria WhatsApp',
  ],
  openGraph: {
    title:       'ORUN SPF 50+ | Protect. Glow. Thrive.',
    description: 'Premium broad spectrum sun protection formulated for African skin. No white cast. Lightweight. Hydrating. Order via WhatsApp.',
    type:        'website',
    locale:      'en_NG',
    images: [{ url: '/images/hero-product.jpg', width: 1200, height: 630, alt: 'ORUN SPF 50+' }],
  },
  twitter: {
    card:  'summary_large_image',
    title: 'ORUN SPF 50+ | Protect. Glow. Thrive.',
    images:['/images/hero-product.jpg'],
  },
  robots: {
    index:  true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${dmSans.variable} ${cormorant.variable}`}>
        {children}
      </body>
    </html>
  )
}