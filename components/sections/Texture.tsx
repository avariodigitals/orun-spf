'use client'
import Image from 'next/image'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionHeader from '@/components/ui/SectionHeader'
import { TEXTURE } from '@/lib/content'

export default function Texture({ content = TEXTURE }: { content?: typeof TEXTURE }) {
  return (
    <section id="texture" className="py-20 lg:py-28 bg-[#FEF9F2]">
      <div className="container-xl">
        <AnimatedSection>
          <SectionHeader
            tag={content.tag}
            title={content.title}
            desc={content.desc}
          />
        </AnimatedSection>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Steps */}
          <AnimatedSection direction="left" className="space-y-6">
            {content.steps.map((s) => (
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
                src="/images/litemage.png"
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
                  {content.badgeTitle}
                </p>
                <p style={{ fontSize: '11px', color: '#7A5C3A', margin: '2px 0 0' }}>
                  {content.badgeSub}
                </p>
              </div>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  )
}