'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import WAButton from '@/components/ui/WAButton'
import Icon from '@/lib/icons'
import { HERO } from '@/lib/content'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden noise-overlay"
      style={{ background: `url('/images/myspf.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >

      {/* Ambient blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[700px] h-[700px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(232,148,58,0.14) 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 -left-20 w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(200,84,31,0.08) 0%, transparent 70%)' }} />
      </div>

      <div className="container-xl relative z-10 py-16 lg:py-0">
        <div className="flex items-center">

          {/* ── Copy ── */}
          <div>

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
              <br className="block md:hidden" />
              <span className="hidden md:inline"> </span>
              Made for{' '}
              <span style={{ color: '#C8541F', fontWeight: 600, fontStyle: 'italic' }}>every</span> skin.
            </motion.p>

            {/* Icon badges */}
            <motion.div
              style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '2rem' }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
            >
              {[
                { icon: 'ShieldCheck', label: 'High Protection', sub: 'UVA/UVB' },
                { icon: 'EyeOff',      label: 'No White Cast',   sub: 'All skin tones' },
                { icon: 'Feather',     label: 'Lightweight',     sub: '& Non-greasy' },
                { icon: 'Droplets',    label: 'Hydrating',       sub: 'Formula' },
              ].map(({ icon, label, sub }) => (
                <div key={label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', minWidth: '70px' }}>
                  <div style={{
                    width: '52px', height: '52px', borderRadius: '50%',
                    background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(6px)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: '0 2px 12px rgba(200,84,31,0.10)',
                  }}>
                    <Icon name={icon} size={22} className="text-[#C8541F]" />
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <p style={{ fontSize: '12px', fontWeight: 700, color: '#1A0E04', margin: 0, lineHeight: 1.3 }}>{label}</p>
                    <p style={{ fontSize: '11px', color: '#7A5C3A', margin: 0 }}>{sub}</p>
                  </div>
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



        </div>
      </div>

    </section>
  )
}