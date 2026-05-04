'use client'
import { motion } from 'framer-motion'
import { ShieldOff, ShieldCheck } from 'lucide-react'
import WAButton from '@/components/ui/WAButton'

// ──────────────────────────────────────────────────────────────
//  BEFORE / AFTER — Results section, no emojis
//  Drop real before.jpg / after.jpg into public/images/ to
//  replace the styled placeholder cards below.
// ──────────────────────────────────────────────────────────────

const CARDS = [
  {
    tag:    'Before',
    tagBg:  '#7A5C3A',
    label:  'Unprotected Skin',
    sub:    'Without daily SPF',
    icon:   ShieldOff,
    iconBg: '#EDDDBE',
    iconColor: '#7A5C3A',
    cardBg: 'linear-gradient(145deg, #e8d5b4 0%, #d4bc90 100%)',
    accent: '#7A5C3A',
    points: [
      'Visible UV damage over time',
      'Uneven, patchy skin tone',
      'Dry and rough texture',
      'Risk of hyperpigmentation',
    ],
  },
  {
    tag:    'After',
    tagBg:  '#C8541F',
    label:  'With ORUN SPF 50+',
    sub:    '4 weeks of daily use',
    icon:   ShieldCheck,
    iconBg: 'rgba(200,84,31,0.12)',
    iconColor: '#C8541F',
    cardBg: 'linear-gradient(145deg, #F7EDD8 0%, #EDDDBE 100%)',
    accent: '#C8541F',
    points: [
      'Even, radiant skin tone',
      'Full UVA/UVB protection',
      'Smooth, hydrated finish',
      'Glowing, healthy complexion',
    ],
  },
]

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
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
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

        {/* Cards */}
        <div style={{
          display:             'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap:                 '1.5rem',
          maxWidth:            '780px',
          margin:              '0 auto',
        }}>
          {CARDS.map((card, i) => {
            const IconComp = card.icon
            return (
              <motion.div
                key={card.tag}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: i * 0.15 }}
                whileHover={{ scale: 1.015, boxShadow: '0 16px 48px rgba(0,0,0,0.1)' }}
                style={{
                  background:   'white',
                  borderRadius: '1.5rem',
                  overflow:     'hidden',
                  border:       '1px solid rgba(237,221,190,0.7)',
                  boxShadow:    '0 4px 20px rgba(0,0,0,0.06)',
                  transition:   'box-shadow 0.3s ease, transform 0.3s ease',
                }}
              >
                {/* Visual area */}
                <div style={{
                  height:         '200px',
                  background:     card.cardBg,
                  display:        'flex',
                  alignItems:     'center',
                  justifyContent: 'center',
                  position:       'relative',
                  overflow:       'hidden',
                }}>
                  {/* Decorative circle pattern */}
                  <div style={{
                    position:    'absolute',
                    width:       '200px', height: '200px',
                    borderRadius:'50%',
                    border:      `2px solid rgba(255,255,255,0.3)`,
                    top:         '-60px', right: '-60px',
                  }} />
                  <div style={{
                    position:    'absolute',
                    width:       '140px', height: '140px',
                    borderRadius:'50%',
                    border:      `2px solid rgba(255,255,255,0.2)`,
                    bottom:      '-40px', left: '-30px',
                  }} />

                  {/* Tag pill */}
                  <div style={{
                    position:     'absolute', top: '1rem', left: '1rem',
                    background:   card.tagBg, color: 'white',
                    borderRadius: '9999px', padding: '4px 14px',
                    fontSize:     '11px', fontWeight: 700,
                    letterSpacing:'0.12em', textTransform: 'uppercase',
                  }}>
                    {card.tag}
                  </div>

                  {/* Icon in circle — replaces emoji */}
                  <div style={{
                    width:           '80px', height: '80px',
                    borderRadius:    '50%',
                    background:      card.iconBg,
                    border:          `2px solid rgba(255,255,255,0.5)`,
                    display:         'flex',
                    alignItems:      'center',
                    justifyContent:  'center',
                    backdropFilter:  'blur(4px)',
                  }}>
                    <IconComp size={36} color={card.iconColor} strokeWidth={1.5} />
                  </div>

                  {/* Swap the div above for real photos when available:
                  <Image
                    src={`/images/${card.tag.toLowerCase()}.jpg`}
                    alt={card.label}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  */}
                </div>

                {/* Content */}
                <div style={{ padding: '1.5rem' }}>
                  <p style={{
                    fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em',
                    textTransform: 'uppercase', color: card.accent,
                    marginBottom: '6px', marginTop: 0,
                  }}>
                    {card.tag}
                  </p>
                  <h3 style={{
                    fontFamily: 'Georgia, serif', fontSize: '1.2rem',
                    fontWeight: 700, color: '#1A0E04',
                    marginBottom: '4px', marginTop: 0,
                  }}>
                    {card.label}
                  </h3>
                  <p style={{ fontSize: '12px', color: '#7A5C3A', marginBottom: '1.1rem', marginTop: 0 }}>
                    {card.sub}
                  </p>

                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {card.points.map((pt) => (
                      <li key={pt} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13.5px', color: '#3D2B14' }}>
                        <span style={{
                          width: '6px', height: '6px', borderRadius: '50%',
                          background: card.accent, flexShrink: 0,
                        }} />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </div>

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