'use client'
import Image from 'next/image'
import { CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'

const POINTS = [
  {
    title: 'Made for African Skin',
    body:  'Formulated specifically for melanin-rich skin tones that are often ignored by mainstream SPF brands.',
  },
  {
    title: 'No White Cast. Guaranteed.',
    body:  'Our advanced filter blend disappears invisibly on all skin tones — from the lightest to the deepest.',
  },
  {
    title: 'Built for Nigerian Weather',
    body:  'Tropical-heat tested. Sweat-resistant. Designed to protect under the harshest sun conditions in Africa.',
  },
  {
    title: 'Skincare + Sun Protection',
    body:  'Niacinamide brightens. Hyaluronic Acid hydrates. You get SPF and a full skincare step in one product.',
  },
]

export default function WhyOrun() {
  return (
    <section id="why-orun" style={{ padding: '5rem 0', background: 'white', overflow: 'hidden' }}>
      <div className="container-xl">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3.5rem',
          alignItems: 'center',
        }}>

          {/* ── Image side ── */}
          <motion.div
            initial={{ opacity: 0, x: 36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ position: 'relative' }}
          >
            {/* Main lifestyle photo */}
            <div style={{
              position:     'relative',
              borderRadius: '2rem',
              overflow:     'hidden',
              aspectRatio:  '4/5',
              boxShadow:    '0 24px 64px rgba(200,84,31,0.14)',
            }}>
              <Image
                src="/images/brand-story.jpg"
                alt="ORUN SPF 50+ — used in real Nigerian life"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Warm gradient overlay */}
              <div style={{
                position:   'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(200,84,31,0.18) 0%, transparent 55%)',
              }} />
            </div>

            {/* Floating stat card */}
            <div style={{
              position:     'absolute', bottom: '-1.25rem', right: '-0.75rem',
              background:   'white', borderRadius: '1.25rem',
              boxShadow:    '0 12px 40px rgba(0,0,0,0.1)',
              padding:      '1.25rem 1.5rem',
              border:       '1px solid #F7EDD8',
              textAlign:    'center',
            }}>
              <p style={{ fontFamily: 'Georgia, serif', fontWeight: 700, fontSize: '2.5rem', color: '#C8541F', lineHeight: 1, margin: 0 }}>
                50+
              </p>
              <p style={{ fontSize: '12px', color: '#7A5C3A', fontWeight: 600, marginTop: '4px', marginBottom: 0 }}>
                SPF Protection
              </p>
              <p style={{ fontSize: '10px', color: '#7A5C3A', marginTop: '2px', marginBottom: 0, opacity: 0.7 }}>
                PA+++ Broad Spectrum
              </p>
            </div>

            {/* "Sunscreen for African Skin" badge */}
            <div style={{
              position:     'absolute', top: '1.5rem', left: '-0.75rem',
              background:   '#C8541F', color: 'white',
              borderRadius: '0.875rem', padding: '8px 14px',
              boxShadow:    '0 6px 20px rgba(200,84,31,0.3)',
            }}>
              <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', margin: 0 }}>
                Sunscreen for
              </p>
              <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', margin: 0 }}>
                African Skin
              </p>
            </div>
          </motion.div>

          {/* ── Copy side ── */}
          <motion.div
            initial={{ opacity: 0, x: -36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="label-tag" style={{ marginBottom: '0.75rem' }}>Why Choose ORUN</p>

            <h2
              className="display-title"
              style={{ fontSize: 'clamp(32px, 4.5vw, 54px)', marginBottom: '1rem', lineHeight: 1.1 }}
            >
              Protection Made{' '}
              <em style={{ color: '#C8541F', fontStyle: 'normal' }}>For You.</em>
              <br />Not Adapted For You.
            </h2>

            <p style={{ color: '#7A5C3A', fontSize: '1rem', lineHeight: 1.8, marginBottom: '2rem', maxWidth: '480px' }}>
              Most sunscreens were not formulated with African skin in mind.
              ORUN was built from the ground up to serve melanin-rich skin — delivering
              real protection with zero compromise on aesthetics or feel.
            </p>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
              {POINTS.map((pt) => (
                <li key={pt.title} style={{ display: 'flex', gap: '0.875rem', alignItems: 'flex-start' }}>
                  <CheckCircle2
                    size={18}
                    strokeWidth={2.2}
                    style={{ color: '#C8541F', flexShrink: 0, marginTop: '3px' }}
                  />
                  <div>
                    <p style={{ fontWeight: 700, color: '#1A0E04', fontSize: '15px', marginBottom: '2px', marginTop: 0 }}>
                      {pt.title}
                    </p>
                    <p style={{ color: '#7A5C3A', fontSize: '13.5px', lineHeight: 1.65, margin: 0 }}>
                      {pt.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  )
}