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

export default function Home() {
  return (
    <main>
      <Navbar />

      <Hero />           {/* 1. Hero */}
      <TrustBar />       {/* 2. Trust bar */}
      <Benefits />       {/* 3. Product Benefits */}
      <WhyOrun />        {/* 4. Why ORUN / Brand Differentiation */}
      <Ingredients />    {/* 5. Ingredients — only here, nowhere else */}
      <Texture />        {/* 6. Texture / Application */}
      <BeforeAfter />    {/* 7. Before / After */}
      <Testimonials />   {/* 8. Testimonials */}
      <StoreLocator />   {/* 9. Store Locator */}
      <FAQ />            {/* 10. FAQ */}
      <FinalCTA />       {/* 11. Final CTA */}

      <Footer />
      <FloatingWA />
      <MobileStickyBar />
    </main>
  )
}