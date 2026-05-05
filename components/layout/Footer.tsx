'use client'
import WAButton from '@/components/ui/WAButton'
import OrunLogo from '@/components/ui/OrunLogo'
import { ShieldCheck, Sun, Feather, EyeOff, MapPin, MessageCircle } from 'lucide-react'

const BADGES = [
  { Icon: ShieldCheck, text: 'High Protection SPF 50+ PA+++' },
  { Icon: Sun,         text: 'Made for Tropical Sun'         },
  { Icon: Feather,     text: 'Lightweight. Non-Greasy.'      },
  { Icon: EyeOff,      text: 'No White Cast. Ever.'          },
]

const QUICK_LINKS = [
  { label: 'Benefits',    href: '#benefits'     },
  { label: 'Ingredients', href: '#ingredients'  },
  { label: 'Reviews',     href: '#testimonials' },
  { label: 'Find Us',     href: '#stores'       },
  { label: 'FAQ',         href: '#faq'          },
]

export default function Footer() {
  return (
    <footer id="site-footer" style={{ background: '#FEF9F2', color: '#1A0E04', overflowX: 'clip' }}>

      {/* ── Inline CSS for hover states (no JS event handlers needed) ── */}
      <style>{`
        .footer-link {
          font-size: 13px;
          font-weight: 600;
          color: #7A5C3A;
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-link:hover { color: #C8541F; }

        .footer-wa-link {
          font-size: 13px;
          color: #0d5c2e;
          text-decoration: none;
          font-weight: 600;
          transition: opacity 0.2s;
        }
        .footer-wa-link:hover { opacity: 0.8; }

        .footer-loc-link {
          font-size: 12px;
          font-weight: 600;
          color: #C8541F;
          text-decoration: none;
          transition: opacity 0.2s;
        }
        .footer-loc-link:hover { opacity: 0.75; }

        .avario-link {
          color: #C8541F;
          font-weight: 600;
          text-decoration: underline;
          text-underline-offset: 2px;
          transition: opacity 0.2s;
        }
        .avario-link:hover { opacity: 0.75; }
      `}</style>

      {/* ── Main footer body ── */}
      <div className="container-xl" style={{ paddingTop: '4rem', paddingBottom: '3rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))',
          gap: '2.5rem',
        }}>

          {/* Brand col */}
          <div>
            <div style={{ marginBottom: '1rem' }}>
              <OrunLogo size={42} dark={true} />
            </div>
            <p style={{ color: '#7A5C3A', fontSize: '13px', fontWeight: 600, lineHeight: 1.7, maxWidth: '220px' }}>
              Premium broad spectrum sunscreen crafted for African skin. Protect. Glow. Thrive.
            </p>
            <div style={{ marginTop: '1.5rem' }}>
              <WAButton size="sm" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#C8541F', marginBottom: '1.25rem' }}>
              Quick Links
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {QUICK_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="footer-link">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#C8541F', marginBottom: '1.25rem' }}>
              Order & Enquiries
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <MessageCircle size={16} strokeWidth={2.5} style={{ color: '#0d5c2e', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <p style={{ fontSize: '12px', fontWeight: 600, color: '#7A5C3A', marginBottom: '2px' }}>WhatsApp Orders</p>
                  <a href="https://wa.me/2347072387362" target="_blank" rel="noopener noreferrer" className="footer-wa-link">
                    +234 707 238 7362
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <MapPin size={16} strokeWidth={2.5} style={{ color: '#C8541F', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <p style={{ fontSize: '12px', fontWeight: 600, color: '#7A5C3A', marginBottom: '2px' }}>Available In</p>
                  <p style={{ fontSize: '13px', fontWeight: 600, color: '#3D2B14', marginBottom: '4px' }}>Lagos · Abuja · Port Harcourt</p>
                  <a href="#stores" className="footer-loc-link">View all locations →</a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* ── Trust strip ── */}
      <div style={{ borderTop: '1px solid rgba(122,92,58,0.18)', padding: '1.25rem 0' }}>
        <div className="container-xl">
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem 2.5rem' }}>
            {BADGES.map(({ Icon, text }) => (
              <div
                key={text}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: '#7A5C3A',
                  fontSize: '12px',
                  fontWeight: 600,
                  minWidth: 0,
                  flex: '1 1 220px',
                  maxWidth: '320px',
                  whiteSpace: 'normal',
                }}
              >
                <Icon size={14} strokeWidth={2.5} />
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Legal bar ── */}
      <div style={{ borderTop: '1px solid rgba(122,92,58,0.16)', padding: '1rem 0' }}>
        <div className="container-xl" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem' }}>
          <p style={{ fontSize: '12px', fontWeight: 600, color: '#7A5C3A', margin: 0 }}>
            © {new Date().getFullYear()} ORUN SPF. All rights reserved.
          </p>
          <p style={{ fontSize: '12px', fontWeight: 600, color: '#7A5C3A', margin: 0 }}>
            Created by{' '}
            <a href="https://avariodigitals.com" target="_blank" rel="noopener noreferrer" className="avario-link">
              Avario Digitals
            </a>
          </p>
          <p style={{ fontSize: '12px', fontWeight: 600, color: '#7A5C3A', margin: 0 }}>
            Protect. Glow. Thrive.
          </p>
        </div>
      </div>

    </footer>
  )
}