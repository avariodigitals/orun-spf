'use client'
import { useState } from 'react'
import { Plus, Minus, Sun } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionHeader from '@/components/ui/SectionHeader'
import { FAQ_ITEMS } from '@/lib/content'
import { motion, AnimatePresence } from 'framer-motion'

export default function FAQ({ content = FAQ_ITEMS }: { content?: typeof FAQ_ITEMS }) {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white">
      <div className="container-xl">
        <div
          style={{
            display:             'grid',
            gridTemplateColumns: '1fr',
            gap:                 '3rem',
          }}
          className="lg:grid-cols-[1fr_1.4fr]"
        >

          {/* ── Left panel ── */}
          <AnimatedSection direction="right">
            <div style={{ position: 'sticky', top: '7rem' }}>
              <SectionHeader
                tag={content.tag}
                title={content.title}
                centered={false}
              />

              {/* Brand visual — no emoji, just styled product card */}
              <div style={{
                marginTop:    '2rem',
                borderRadius: '1.5rem',
                overflow:     'hidden',
                background:   'linear-gradient(145deg, #F7EDD8 0%, #EDDDBE 100%)',
                padding:      '2.5rem',
                display:      'flex',
                flexDirection:'column',
                alignItems:   'center',
                justifyContent:'center',
                minHeight:    '220px',
                border:       '1px solid rgba(237,221,190,0.8)',
                gap:          '1rem',
                textAlign:    'center',
              }}>
                {/* Lucide sun icon in branded circle */}
                <div style={{
                  width:        '64px', height: '64px',
                  borderRadius: '50%',
                  background:   '#C8541F',
                  display:      'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow:    '0 8px 24px rgba(200,84,31,0.3)',
                }}>
                  <Sun size={30} color="white" strokeWidth={1.6} />
                </div>

                <div>
                  <p style={{
                    fontFamily: 'Georgia, serif', fontWeight: 700,
                    fontSize:   '1.4rem', color: '#1A0E04', lineHeight: 1,
                  }}>
                    ORUN SPF 50+
                  </p>
                  <p style={{ color: '#C8541F', fontSize: '13px', fontWeight: 600, marginTop: '4px' }}>
                    Premium Sun Protection
                  </p>
                  <p style={{ color: '#7A5C3A', fontSize: '12px', marginTop: '6px', lineHeight: 1.5 }}>
                    Sunscreen for African Skin
                  </p>
                </div>

                <div style={{
                  background:   'white', borderRadius: '9999px',
                  padding:      '6px 18px', marginTop: '4px',
                  border:       '1px solid rgba(200,84,31,0.2)',
                }}>
                  <p style={{ fontSize: '11px', fontWeight: 700, color: '#C8541F', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                    Broad Spectrum PA+++
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* ── Accordion ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {content.items.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div
                  style={{
                    border:       `1px solid ${open === i ? 'rgba(200,84,31,0.3)' : '#EDDDBE'}`,
                    borderRadius: '1rem',
                    overflow:     'hidden',
                    background:   open === i ? '#FFFAF5' : '#FEF9F2',
                    transition:   'border-color 0.2s, background 0.2s',
                  }}
                >
                  <button
                    style={{
                      width:      '100%',
                      display:    'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding:    '1.25rem 1.5rem',
                      gap:        '1rem',
                      textAlign:  'left',
                      background: 'transparent',
                      border:     'none',
                      cursor:     'pointer',
                    }}
                    onClick={() => setOpen(open === i ? null : i)}
                    aria-expanded={open === i}
                  >
                    <span style={{
                      fontWeight: 600, color: '#1A0E04',
                      fontSize: '14.5px', lineHeight: 1.45,
                    }}>
                      {item.q}
                    </span>

                    <div style={{
                      width:        '28px', height: '28px', flexShrink: 0,
                      borderRadius: '50%',
                      border:       '1px solid #EDDDBE',
                      display:      'flex', alignItems: 'center', justifyContent: 'center',
                      background:   open === i ? '#C8541F' : 'white',
                      transition:   'background 0.2s, border-color 0.2s',
                    }}>
                      {open === i
                        ? <Minus size={12} color="white" />
                        : <Plus  size={12} color="#C8541F" />
                      }
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {open === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: 'easeInOut' }}
                        style={{ overflow: 'hidden' }}
                      >
                        <p style={{
                          padding:    '0 1.5rem 1.25rem',
                          color:      '#7A5C3A',
                          fontSize:   '14px',
                          lineHeight: 1.7,
                        }}>
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </AnimatedSection>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}