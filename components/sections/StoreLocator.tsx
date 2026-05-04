'use client'
import { MapPin, Phone, Navigation, Store, PackageOpen } from 'lucide-react'
import { motion } from 'framer-motion'
import WAButton from '@/components/ui/WAButton'
import { STORES } from '@/lib/content'

export default function StoreLocator() {
  return (
    <section id="stores" style={{ padding: '5rem 0 6rem', background: '#FEF9F2' }}>
      <div className="container-xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
        >
          <p className="label-tag" style={{ marginBottom: '0.75rem' }}>{STORES.tag}</p>
          <h2 className="display-title" style={{ fontSize: 'clamp(32px, 5vw, 54px)', marginBottom: '1rem' }}>
            {STORES.title}
          </h2>
          <p style={{ color: '#7A5C3A', fontSize: '1rem', maxWidth: '500px', margin: '0 auto', lineHeight: 1.75 }}>
            {STORES.desc}
          </p>
        </motion.div>

        {/* Store cards */}
        <div style={{
          display:             'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap:                 '1.25rem',
          marginBottom:        '3rem',
        }}>
          {STORES.items.map((store, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              style={{
                background:   'white',
                borderRadius: '1.25rem',
                border:       '1px solid rgba(237,221,190,0.6)',
                boxShadow:    '0 2px 12px rgba(0,0,0,0.04)',
                padding:      '1.5rem',
                display:      'flex',
                flexDirection:'column',
                transition:   'box-shadow 0.3s, transform 0.3s',
              }}
              whileHover={{ y: -3, boxShadow: '0 8px 28px rgba(0,0,0,0.09)' }}
            >
              {/* Store icon */}
              <div style={{
                width:        '44px', height: '44px',
                borderRadius: '12px',
                background:   'rgba(200,84,31,0.08)',
                display:      'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '1rem',
              }}>
                <Store size={20} color="#C8541F" strokeWidth={1.8} />
              </div>

              <h3 style={{ fontWeight: 700, color: '#1A0E04', fontSize: '14px', lineHeight: 1.35, marginBottom: '0.875rem', marginTop: 0 }}>
                {store.name}
              </h3>

              <div style={{ display: 'flex', gap: '8px', marginBottom: '0.6rem', flex: 1 }}>
                <MapPin size={12} color="#C8541F" strokeWidth={2} style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontSize: '12.5px', color: '#7A5C3A', lineHeight: 1.55 }}>
                  {store.address}, {store.city}, {store.state}
                </span>
              </div>

              {store.phone && (
                <div style={{ display: 'flex', gap: '8px', marginBottom: '1rem' }}>
                  <Phone size={12} color="#C8541F" strokeWidth={2} style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ fontSize: '12.5px', color: '#7A5C3A' }}>{store.phone}</span>
                </div>
              )}

              {store.mapUrl && (
                <a
                  href={store.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display:        'inline-flex',
                    alignItems:     'center',
                    gap:            '6px',
                    fontSize:       '12px',
                    fontWeight:     700,
                    color:          '#C8541F',
                    textDecoration: 'none',
                    marginTop:      'auto',
                  }}
                >
                  <Navigation size={12} strokeWidth={2} />
                  Open in Maps
                </a>
              )}
            </motion.div>
          ))}
        </div>

        {/* Nationwide delivery block — NO emoji, Lucide icon instead */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.2 }}
          style={{
            background:   'white',
            borderRadius: '1.5rem',
            border:       '1px solid rgba(237,221,190,0.7)',
            boxShadow:    '0 2px 16px rgba(0,0,0,0.05)',
            padding:      '2rem 2rem',
            textAlign:    'center',
            maxWidth:     '560px',
            margin:       '0 auto',
          }}
        >
          {/* Lucide icon replacing the 📦 emoji */}
          <div style={{
            width:        '52px', height: '52px',
            borderRadius: '50%',
            background:   'rgba(200,84,31,0.08)',
            display:      'flex', alignItems: 'center', justifyContent: 'center',
            margin:       '0 auto 1rem',
          }}>
            <PackageOpen size={24} color="#C8541F" strokeWidth={1.8} />
          </div>

          <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '1.3rem', fontWeight: 700, color: '#1A0E04', marginBottom: '6px', marginTop: 0 }}>
            Not near a stockist?
          </h3>
          <p style={{ color: '#7A5C3A', fontSize: '14px', lineHeight: 1.65, marginBottom: '1.5rem', marginTop: 0 }}>
            Order directly on WhatsApp — fast nationwide delivery across all states in Nigeria.
          </p>
          <WAButton label="Order via WhatsApp — We Deliver Nationwide" size="md" />
        </motion.div>

      </div>
    </section>
  )
}