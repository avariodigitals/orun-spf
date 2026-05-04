'use client'
import { CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'
import Icon from '@/lib/icons'
import { BENEFITS } from '@/lib/content'

export default function Benefits() {
  return (
    <section id="benefits" style={{ padding: '5rem 0 6rem', background: '#FEF9F2' }}>
      <div className="container-xl">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          style={{ maxWidth: '640px', marginBottom: '3rem' }}
        >
          <p className="label-tag" style={{ marginBottom: '0.75rem' }}>{BENEFITS.tag}</p>
          <h2
            className="display-title"
            style={{ fontSize: 'clamp(34px, 5vw, 58px)', marginBottom: '1.25rem', whiteSpace: 'pre-line' }}
          >
            {BENEFITS.title}
          </h2>
          <p style={{ color: '#7A5C3A', fontSize: '1.05rem', lineHeight: 1.8, maxWidth: '520px' }}>
            {BENEFITS.desc}
          </p>
        </motion.div>

        {/* Checklist + benefit cards row */}
        <div style={{
          display:             'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap:                 '2.5rem 4rem',
          alignItems:          'start',
        }}>

          {/* Checklist */}
          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, delay: 0.1 }}
            style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}
          >
            {BENEFITS.list.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.07 }}
                style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
              >
                <CheckCircle2 size={19} strokeWidth={2.2} style={{ color: '#C8541F', flexShrink: 0 }} />
                <span style={{ color: '#3D2B14', fontWeight: 500, fontSize: '15.5px' }}>{item}</span>
              </motion.li>
            ))}
          </motion.ul>

          {/* Benefit cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, delay: 0.2 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
          >
            {BENEFITS.cards.map((card) => (
              <div
                key={card.title}
                style={{
                  background:   'white',
                  borderRadius: '1.25rem',
                  border:       '1px solid #F7EDD8',
                  boxShadow:    '0 2px 12px rgba(0,0,0,0.05)',
                  padding:      '1.25rem 1.5rem',
                  display:      'flex',
                  gap:          '1rem',
                  alignItems:   'flex-start',
                  transition:   'box-shadow 0.3s, transform 0.3s',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = '0 6px 24px rgba(0,0,0,0.09)'
                  ;(e.currentTarget as HTMLDivElement).style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = '0 2px 12px rgba(0,0,0,0.05)'
                  ;(e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'
                }}
              >
                <div style={{
                  width:        '42px', height: '42px', flexShrink: 0,
                  borderRadius: '12px',
                  background:   'rgba(200,84,31,0.08)',
                  display:      'flex', alignItems: 'center', justifyContent: 'center',
                  border:       '1px solid rgba(200,84,31,0.12)',
                }}>
                  <Icon name={card.icon} size={19} className="text-[#C8541F]" strokeWidth={1.8} />
                </div>
                <div>
                  <p style={{ fontWeight: 700, color: '#1A0E04', fontSize: '14.5px', marginBottom: '4px', marginTop: 0 }}>
                    {card.title}
                  </p>
                  <p style={{ fontSize: '13px', color: '#7A5C3A', lineHeight: 1.6, margin: 0 }}>
                    {card.body}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}