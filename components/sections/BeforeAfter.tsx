'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import WAButton from '@/components/ui/WAButton'

export default function BeforeAfter() {
  return (
    <section id="results" style={{ padding: '5rem 0', background: '#F7EDD8' }}>
      <div className="container-xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <p className="label-tag" style={{ marginBottom: '0.75rem' }}>See the Difference</p>
          <h2
            className="display-title"
            style={{ fontSize: 'clamp(32px, 5vw, 56px)', marginBottom: '1rem' }}
          >
            Real Results.{' '}
            <em style={{ color: '#C8541F', fontStyle: 'normal' }}>Real Skin.</em>
          </h2>
          <p style={{ color: '#7A5C3A', fontSize: '1rem', maxWidth: '480px', margin: '0 auto', lineHeight: 1.75 }}>
            ORUN SPF 50+ delivers visible improvement in skin protection and tone
            within weeks of consistent daily use.
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            position:    'relative',
            maxWidth:    '900px',
            margin:      '0 auto',
            borderRadius:'1.5rem',
            overflow:    'hidden',
            boxShadow:   '0 24px 64px rgba(0,0,0,0.14)',
            aspectRatio: '16/9',
          }}
        >
          <Image
            src="/images/b45ter.png"
            alt="Before and after ORUN SPF 50+ — real skin results"
            fill
            priority
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            sizes="900px"
          />

          {/* Without label */}
          <div style={{
            position: 'absolute', bottom: '1.5rem', left: '1.5rem',
            background: 'rgba(42,24,8,0.78)', backdropFilter: 'blur(8px)',
            color: 'white', borderRadius: '9999px', padding: '8px 18px',
            fontSize: '13px', fontWeight: 700, letterSpacing: '0.08em',
            textTransform: 'uppercase', pointerEvents: 'none',
          }}>Without</div>

          {/* With label */}
          <div style={{
            position: 'absolute', bottom: '1.5rem', right: '1.5rem',
            background: '#C8541F', color: 'white',
            borderRadius: '9999px', padding: '8px 18px',
            fontSize: '13px', fontWeight: 700, letterSpacing: '0.08em',
            textTransform: 'uppercase', pointerEvents: 'none',
          }}>With</div>
        </motion.div>

        {/* CTA block */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.3 }}
          style={{
            marginTop:    '3rem',
            background:   'white',
            borderRadius: '1.5rem',
            padding:      '2rem',
            textAlign:    'center',
            border:       '1px solid rgba(237,221,190,0.7)',
            boxShadow:    '0 2px 12px rgba(0,0,0,0.04)',
            maxWidth:     '520px',
            marginLeft:   'auto',
            marginRight:  'auto',
          }}
        >
          <p style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1A0E04', marginBottom: '6px', marginTop: 0 }}>
            Ready to see your own results?
          </p>
          <p style={{ color: '#7A5C3A', fontSize: '14px', marginBottom: '1.5rem', marginTop: 0, lineHeight: 1.6 }}>
            Join hundreds of women across Nigeria who have made ORUN SPF their daily essential.
          </p>
          <WAButton label="Start Your Glow Journey" size="md" />
        </motion.div>

      </div>
    </section>
  )
}
