'use client'
import Image from 'next/image'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionHeader from '@/components/ui/SectionHeader'

const STEPS = [
  { step: '01', title: 'Cleanse', desc: 'Start with a clean, dry face. Pat gently — do not rub.' },
  { step: '02', title: 'Apply', desc: 'Dispense a pea-sized amount and spread evenly across face and neck.' },
  { step: '03', title: 'Blend', desc: 'Massage in circular motions until fully absorbed. No white cast.' },
  { step: '04', title: 'Reapply', desc: 'Reapply every 2 hours under direct sun exposure for full protection.' },
]

export default function Texture() {
  return (
    <section id="texture" className="py-20 lg:py-28 bg-[#FEF9F2]">
      <div className="container-xl">
        <AnimatedSection>
          <SectionHeader
            tag="Feels as good as it works"
            title={'Lightweight.\nInvisible. Done.'}
            desc="No greasiness. No white cast. Just clean, invisible protection that lets your skin breathe all day."
          />
        </AnimatedSection>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Steps */}
          <AnimatedSection direction="left" className="space-y-6">
            {STEPS.map((s, i) => (
              <div key={s.step} className="flex gap-5 items-start">
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-sm"
                  style={{ background: '#C8541F18', color: '#C8541F', border: '1.5px solid #C8541F33' }}
                >
                  {s.step}
                </div>
                <div>
                  <h3 className="font-semibold text-[#1A0E04] mb-1">{s.title}</h3>
                  <p className="text-sm text-[#7A5C3A] leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </AnimatedSection>

          {/* Product image */}
          <AnimatedSection direction="right">
            <div
              className="relative mx-auto"
              style={{ maxWidth: '400px', aspectRatio: '3/4', borderRadius: '2rem', overflow: 'hidden',
                boxShadow: '0 24px 64px rgba(200,84,31,0.15)' }}
            >
              <Image
                src="/images/logo-spf.png"
                alt="ORUN SPF 50+ texture — lightweight, no white cast"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center top' }}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(200,84,31,0.15) 0%, transparent 50%)',
              }} />

              {/* Floating badge */}
              <div style={{
                position: 'absolute', bottom: '1.5rem', left: '50%', transform: 'translateX(-50%)',
                background: 'white', borderRadius: '1rem', padding: '0.75rem 1.25rem',
                boxShadow: '0 8px 32px rgba(0,0,0,0.12)', border: '1px solid #F7EDD8',
                textAlign: 'center', whiteSpace: 'nowrap',
              }}>
                <p style={{ fontWeight: 700, color: '#C8541F', fontSize: '13px', margin: 0 }}>
                  Zero White Cast
                </p>
                <p style={{ fontSize: '11px', color: '#7A5C3A', margin: '2px 0 0' }}>
                  Works on all skin tones
                </p>
              </div>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  )
}