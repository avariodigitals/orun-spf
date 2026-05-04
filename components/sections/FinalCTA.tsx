'use client'
import AnimatedSection from '@/components/ui/AnimatedSection'
import WAButton from '@/components/ui/WAButton'
import { FINAL_CTA } from '@/lib/content'

export default function FinalCTA() {
  return (
    <section
      id="order"
      className="relative py-24 lg:py-32 overflow-hidden noise-overlay"
      style={{ background: 'linear-gradient(135deg, #C8541F 0%, #D9702E 40%, #E8943A 100%)' }}
    >
      {/* Decorative circles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -right-24 w-[400px] h-[400px] rounded-full bg-white/10" />
        <div className="absolute -bottom-16 -left-16 w-[320px] h-[320px] rounded-full bg-black/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/10" />
      </div>

      <div className="container-xl relative z-10 text-center text-white">
        <AnimatedSection>
          <h2
            className="font-display font-bold text-white whitespace-pre-line leading-tight mb-5"
            style={{ fontSize: 'clamp(40px, 6vw, 72px)' }}
          >
            {FINAL_CTA.title}
          </h2>
          <p className="text-white/70 text-lg max-w-md mx-auto mb-10 leading-relaxed">
            {FINAL_CTA.sub}
          </p>

          <WAButton
            label={FINAL_CTA.cta}
            size="lg"
            variant="white"
            className="mx-auto text-brand-orange font-bold shadow-xl hover:shadow-2xl"
          />
        </AnimatedSection>

        {/* Trust strip */}
        <div className="mt-16 flex flex-wrap justify-center gap-x-8 gap-y-4 text-white/50 text-xs">
          {[
            '🛡 High Protection SPF 50+ PA+++',
            '👁 No White Cast. Ever.',
            '🪶 Lightweight & Non-Greasy',
            '💧 Hydrating Formula',
          ].map((t) => (
            <span key={t} className="flex items-center gap-1.5">{t}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
