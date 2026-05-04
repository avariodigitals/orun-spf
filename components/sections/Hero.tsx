'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import WAButton from '@/components/ui/WAButton'
import Icon from '@/lib/icons'
import { HERO } from '@/lib/content'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden noise-overlay"
      style={{ background: 'linear-gradient(135deg, #FEF9F2 0%, #F7EDD8 45%, #EDDDBE 100%)' }}
    >
      {/* Ambient blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[700px] h-[700px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(232,148,58,0.14) 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 -left-20 w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(200,84,31,0.08) 0%, transparent 70%)' }} />
      </div>

      <div className="container-xl relative z-10 py-16 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-6 items-center">

          {/* ── Left: Copy ── */}
          <div className="order-2 lg:order-1">
            <motion.span
              style={{
                display:      'inline-block',
                fontSize:     '11px',
                fontWeight:   700,
                letterSpacing:'0.18em',
                textTransform:'uppercase',
                color:        '#C8541F',
                background:   'rgba(200,84,31,0.07)',
                border:       '1px solid rgba(200,84,31,0.22)',
                borderRadius: '9999px',
                padding:      '6px 16px',
                marginBottom: '1.25rem',
              }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {HERO.badge}
            </motion.span>

            <motion.h1
              style={{
                fontFamily:  'var(--font-cormorant), Georgia, serif',
                fontWeight:  700,
                lineHeight:  0.95,
                color:       '#1A0E04',
                marginBottom:'1.5rem',
                fontSize:    'clamp(54px, 7.5vw, 88px)',
              }}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
            >
              {HERO.lines[0]}
              <br />
              <em style={{ color: '#C8541F', fontStyle: 'normal' }}>{HERO.lines[1]}</em>
              <br />
              {HERO.lines[2]}
            </motion.h1>

            <motion.p
              style={{ color: '#7A5C3A', fontSize: '1.15rem', lineHeight: 1.7, marginBottom: '2rem' }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
            >
              Made for{' '}
              <span style={{ color: '#C8541F', fontWeight: 600, fontStyle: 'italic' }}>every</span> sun.
              {' '}Made for{' '}
              <span style={{ color: '#C8541F', fontWeight: 600, fontStyle: 'italic' }}>every</span> skin.
            </motion.p>

            {/* Benefit icons — Lucide */}
            <motion.div
              style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', marginBottom: '2.5rem' }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
            >
              {HERO.benefits.map((b) => (
                <div key={b.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', textAlign: 'center', minWidth: '64px' }}>
                  <div style={{
                    width: '48px', height: '48px', borderRadius: '50%',
                    background: 'white', boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    border: '1px solid #EDDDBE',
                  }}>
                    <Icon name={b.icon} size={20} className="text-[#C8541F]" strokeWidth={1.8} />
                  </div>
                  <span style={{ fontSize: '11px', fontWeight: 600, color: '#1A0E04', lineHeight: 1.2 }}>{b.label}</span>
                  <span style={{ fontSize: '10px', color: '#7A5C3A' }}>{b.note}</span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.4 }}
            >
              <WAButton size="lg" label={HERO.ctaMain} />
              <a href="#benefits" className="btn-outline">{HERO.ctaSub} →</a>
            </motion.div>
          </div>

          {/* ── Right: Actual product image ── */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <motion.div
              className="product-float"
              style={{ position: 'relative', width: '100%', maxWidth: '460px' }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.85, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {/* Product image */}
              <div style={{
                position:     'relative',
                borderRadius: '2rem',
                overflow:     'hidden',
                aspectRatio:  '3/4',
                boxShadow:    '0 32px 80px rgba(200,84,31,0.18), 0 8px 24px rgba(0,0,0,0.08)',
              }}>
                <Image
                  src="/images/hero-product.jpg"
                  alt="ORUN SPF 50+ Sunscreen — Premium sun protection for all skin types"
                  fill
                  priority
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                  sizes="(max-width: 768px) 100vw, 460px"
                />
                {/* Subtle gradient overlay at bottom */}
                <div style={{
                  position:   'absolute', bottom: 0, left: 0, right: 0, height: '35%',
                  background: 'linear-gradient(to top, rgba(200,84,31,0.15), transparent)',
                }} />
              </div>

              {/* Floating badge — No White Cast */}
              <motion.div
                style={{
                  position:     'absolute', left: '-1rem', top: '14%',
                  background:   'white', borderRadius: '1rem',
                  boxShadow:    '0 8px 32px rgba(0,0,0,0.12)',
                  padding:      '10px 14px',
                  display:      'flex', alignItems: 'center', gap: '10px',
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <div style={{
                  width: '32px', height: '32px', borderRadius: '50%',
                  background: '#f0fdf4', border: '1px solid #bbf7d0',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Icon name="CheckCircle2" size={16} className="text-green-600" strokeWidth={2} />
                </div>
                <div>
                  <p style={{ fontSize: '12px', fontWeight: 700, color: '#1A0E04', lineHeight: 1 }}>No White Cast</p>
                  <p style={{ fontSize: '10px', color: '#7A5C3A', marginTop: '2px' }}>All skin tones</p>
                </div>
              </motion.div>

              {/* Floating badge — SPF 50+ */}
              <motion.div
                style={{
                  position:  'absolute', right: '-0.75rem', bottom: '22%',
                  background:'#C8541F', borderRadius: '1rem',
                  boxShadow: '0 8px 24px rgba(200,84,31,0.35)',
                  padding:   '12px 16px', textAlign: 'center',
                  color:     'white',
                }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                <p style={{ fontFamily: 'Georgia, serif', fontWeight: 900, fontSize: '22px', lineHeight: 1 }}>SPF</p>
                <p style={{ fontFamily: 'Georgia, serif', fontWeight: 900, fontSize: '32px', lineHeight: 1 }}>50+</p>
                <p style={{ fontSize: '10px', opacity: 0.8, fontWeight: 500, marginTop: '2px' }}>PA+++</p>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#trust"
        style={{
          position:       'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
          display:        'flex', flexDirection: 'column', alignItems: 'center', gap: '4px',
          color:          '#7A5C3A', fontSize: '12px', textDecoration: 'none',
          transition:     'color 0.2s',
        }}
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span style={{ letterSpacing: '0.15em', fontSize: '10px', textTransform: 'uppercase' }}>Scroll</span>
        <ChevronDown size={16} />
      </motion.a>
    </section>
  )
}