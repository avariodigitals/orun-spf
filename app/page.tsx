// app/page.tsx
// Each section imported ONCE. Ingredients appears exactly once at position 5.

import Navbar          from '@/components/layout/Navbar'
import FloatingWA      from '@/components/layout/FloatingWA'
import MobileStickyBar from '@/components/layout/MobileStickyBar'
import Footer          from '@/components/layout/Footer'

import Hero            from '@/components/sections/Hero'
import TrustBar        from '@/components/sections/TrustBar'
import Benefits        from '@/components/sections/Benefits'
import WhyOrun         from '@/components/sections/WhyOrun'
import Ingredients     from '@/components/sections/Ingredients'
import Texture         from '@/components/sections/Texture'
import BeforeAfter     from '@/components/sections/BeforeAfter'
import Testimonials    from '@/components/sections/Testimonials'
import StoreLocator    from '@/components/sections/StoreLocator'
import FAQ             from '@/components/sections/FAQ'
import FinalCTA        from '@/components/sections/FinalCTA'
import { getHomepageContent } from '@/lib/content-store'

export const dynamic = 'force-dynamic'

export default async function Home() {
  const content = await getHomepageContent()

  return (
    <main>
      <Navbar />

      <Hero content={content.hero} />
      <TrustBar content={content.trustBar} />
      <Benefits content={content.benefits} />
      <WhyOrun content={content.whyOrun} />
      <Ingredients content={content.ingredients} />
      <Texture content={content.texture} />
      <BeforeAfter content={content.beforeAfter} />
      <Testimonials content={content.testimonials} />
      <StoreLocator content={content.stores} />
      <FAQ content={content.faq} />
      <FinalCTA content={content.finalCta} />

      <Footer />
      <FloatingWA />
      <MobileStickyBar />
    </main>
  )
}