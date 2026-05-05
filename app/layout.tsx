import type { Metadata } from 'next'
import { DM_Sans, Cormorant_Garamond } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { loadSettings } from './api/settings/route'
import RuntimeCustomScripts from '@/components/layout/RuntimeCustomScripts'

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

// ─── Change this to your real domain when deployed ───────────
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://orunspf.com'

export const metadata: Metadata = {
  // ── metadataBase is required for OG image URLs to resolve correctly ──
  metadataBase: new URL(BASE_URL),

  // ── Basic ──────────────────────────────────────────────────
  title:       'ORUN SPF 50+ | Sunscreen for African Skin — No White Cast',
  description: 'ORUN SPF 50+ is a lightweight, non-greasy broad spectrum sunscreen formulated specifically for African skin. No white cast. Hydrating. PA+++. Order on WhatsApp — fast nationwide delivery across Nigeria.',

  keywords: [
    'sunscreen Nigeria',
    'SPF 50 for black skin',
    'no white cast sunscreen',
    'ORUN SPF',
    'sunscreen for African skin',
    'sunscreen for dark skin',
    'ORUN SPF 50+',
    'buy sunscreen Nigeria WhatsApp',
    'broad spectrum sunscreen Nigeria',
  ],

  // ── Favicon / App icons ────────────────────────────────────
  // Next.js App Router also auto-detects app/icon.png alongside this.
  icons: {
    icon: [
      { url: '/icon.png',         type: 'image/png', sizes: 'any'     },
      { url: '/icon.png',         type: 'image/png', sizes: '32x32'   },
      { url: '/icon.png',         type: 'image/png', sizes: '192x192' },
    ],
    apple:    [{ url: '/icon.png', sizes: '180x180', type: 'image/png' }],
    shortcut:  '/icon.png',
  },

  // ── Open Graph (WhatsApp, Facebook, LinkedIn previews) ─────
  openGraph: {
    type:        'website',
    locale:      'en_NG',
    url:          BASE_URL,
    siteName:    'ORUN SPF',
    title:       'ORUN SPF 50+ | Protect. Glow. Thrive.',
    description: 'Premium broad spectrum sunscreen made for African skin. No white cast. Lightweight. Hydrating. PA+++. Order via WhatsApp — fast nationwide delivery.',
    images: [
      {
        url:    '/opengraph-image.jpg',   // app/opengraph-image.jpg
        width:  1200,
        height: 630,
        alt:    'ORUN SPF 50+ Sunscreen — Premium sun protection for African skin',
      },
    ],
  },

  // ── Twitter / X card ──────────────────────────────────────
  twitter: {
    card:        'summary_large_image',
    title:       'ORUN SPF 50+ | Protect. Glow. Thrive.',
    description: 'Premium broad spectrum sunscreen made for African skin. No white cast. Lightweight. Hydrating. Order via WhatsApp.',
    images:      ['/opengraph-image.jpg'],
  },

  // ── SEO ───────────────────────────────────────────────────
  robots: {
    index:               true,
    follow:              true,
    googleBot: {
      index:             true,
      follow:            true,
      'max-image-preview': 'large',
    },
  },

  // ── PWA / browser chrome ──────────────────────────────────
  manifest:   '/manifest.json',
  themeColor: '#C8541F',     // orange — shows in mobile browser tab bar
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const settings = loadSettings()
  const gaId = (settings.googleAnalyticsId || process.env.NEXT_PUBLIC_GA_ID || '').trim()
  const pixelId = (settings.metaPixelId || '').trim()
  const gscVerification = (settings.googleSiteVerification || '').trim()

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preconnect to Google Fonts for faster load */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Google Search Console verification */}
        {gscVerification && (
          <meta name="google-site-verification" content={gscVerification} />
        )}

        {/* Google Analytics (GA4) */}
        {gaId && (
          <>
            <Script
              id="ga4-loader"
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script
              id="ga4-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaId}');`,
              }}
            />
          </>
        )}

        {/* Meta Pixel */}
        {pixelId && (
          <Script
            id="meta-pixel-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${pixelId}');fbq('track','PageView');`,
            }}
          />
        )}

      </head>
      <body className={`${dmSans.variable} ${cormorant.variable}`}>
        {children}

        {/* Runtime loader ensures custom scripts execute reliably */}
        <RuntimeCustomScripts
          headScripts={settings.headScripts}
          bodyScripts={settings.bodyScripts}
        />

        {/* Meta Pixel noscript fallback */}
        {pixelId && (
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
              alt=""
            />
          </noscript>
        )}
      </body>
    </html>
  )
}