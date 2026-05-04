'use client'
import Image from 'next/image'
import { CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'
import Icon from '@/lib/icons'
import { BENEFITS } from '@/lib/content'

export default function Benefits() {
  return (
    <section id="benefits" style={{ padding: '5rem 0 6rem', background: '#FEF9F2' }}>
      <div className="container-xl">
        <div style={{
          display:             'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap:                 '3.5rem 4rem',
          alignItems:          'center',
        }}>

          {/* ── Copy ── */}
          <motion.div
            initial={{ opacity: 0, x: 36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="label-tag" style={{ marginBottom: '0.75rem' }}>{BENEFITS.tag}</p>

            <h2
              className="display-title"
              style={{
                fontSize:     'clamp(34px, 5vw, 58px)',
                marginBottom: '1.25rem',
                whiteSpace:   'pre-line',
              }}
            >
              {BENEFITS.title}
            </h2>

            <p style={{ color: '#7A5C3A', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '2rem', maxWidth: '460px' }}>
              {BENEFITS.desc}
            </p>

            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem', display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              {BENEFITS.list.map((item) => (
                <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <CheckCircle2 size={18} strokeWidth={2.2} style={{ color: '#C8541F', flexShrink: 0 }} />
                  <span style={{ color: '#3D2B14', fontWeight: 500, fontSize: '15px' }}>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ── Visual — real product photo ── */}
          <motion.div
            initial={{ opacity: 0, x: -36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ position: 'relative' }}
          >
            {/* Main product image */}
            <div style={{
              position:     'relative',
              borderRadius: '2rem',
              overflow:     'hidden',
              aspectRatio:  '4/5',
              boxShadow:    '0 20px 60px rgba(200,84,31,0.16)',
            }}>
              <Image
                src="/images/logo-spf.png"
                alt="ORUN SPF 50+ — Lightweight broad spectrum sunscreen for all skin types"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center top' }}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Subtle warm overlay at bottom */}
              <div style={{
                position:   'absolute', bottom: 0, left: 0, right: 0, height: '40%',
                background: 'linear-gradient(to top, rgba(200,84,31,0.12), transparent)',
              }} />
            </div>

            {/* Floating benefit cards */}
            {BENEFITS.cards.map((card, i) => (
              <div
                key={card.title}
                style={{
                  position:     'absolute',
                  ...(i === 0
                    ? { right: '-1rem', top: '10%' }
                    : { left: '-1rem', bottom: '12%' }),
                  background:   'white',
                  borderRadius: '1.25rem',
                  boxShadow:    '0 8px 32px rgba(0,0,0,0.1)',
                  padding:      '1rem 1.25rem',
                  maxWidth:     '175px',
                  border:       '1px solid #F7EDD8',
                }}
              >
                <div style={{
                  width:        '38px', height: '38px',
                  borderRadius: '10px',
                  background:   '#FEF9F2',
                  display:      'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '8px',
                  border:       '1px solid #EDDDBE',
                }}>
                  <Icon name={card.icon} size={18} className="text-[#C8541F]" strokeWidth={1.8} />
                </div>
                <p style={{ fontWeight: 700, color: '#1A0E04', fontSize: '13px', lineHeight: 1.3, marginBottom: '4px', marginTop: 0 }}>
                  {card.title}
                </p>
                <p style={{ fontSize: '11px', color: '#7A5C3A', lineHeight: 1.55, margin: 0 }}>
                  {card.body}
                </p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}