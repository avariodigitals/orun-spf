'use client'
import { useState, useEffect, useCallback } from 'react'
import { Menu, X } from 'lucide-react'
import WAButton from '@/components/ui/WAButton'
import OrunLogo from '@/components/ui/OrunLogo'
import { motion, AnimatePresence } from 'framer-motion'

const NAV = [
  { label: 'Home',        href: 'hero'         },
  { label: 'About',       href: 'why-orun'     },
  { label: 'Benefits',    href: 'benefits'     },
  { label: 'Ingredients', href: 'ingredients'  },
  { label: 'Reviews',     href: 'testimonials' },
  { label: 'Find Us',     href: 'stores'       },
  { label: 'FAQ',         href: 'faq'          },
]

// Drawer close animation takes 250ms — we wait 300ms before scrolling
const DRAWER_CLOSE_DELAY = 300

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false)
  const [stickyBar,  setStickyBar]  = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [active,     setActive]     = useState('Home')

  /* Scroll state */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
      setStickyBar(window.scrollY > 500)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Active section highlight */
  useEffect(() => {
    const observers = NAV.map(({ label, href }) => {
      const el = document.getElementById(href)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(label) },
        { rootMargin: '-30% 0px -60% 0px' }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach(o => o?.disconnect())
  }, [])

  /* 
   * scrollToSection — the key mobile fix.
   * On mobile we MUST:
   *   1. Close the drawer first
   *   2. Wait for the close animation (250ms) to finish
   *   3. Only THEN scroll — otherwise the layout shift from the
   *      drawer collapsing throws the scroll position off.
   * On desktop the drawer is never open so we just scroll immediately.
   */
  const scrollToSection = useCallback((label: string, sectionId: string, isMobile: boolean) => {
    setActive(label)

    const doScroll = () => {
      const el = document.getElementById(sectionId)
      if (!el) return
      const navHeight = 80 // matches scroll-padding-top in globals.css
      const top = el.getBoundingClientRect().top + window.scrollY - navHeight
      window.scrollTo({ top, behavior: 'smooth' })
    }

    if (isMobile && mobileOpen) {
      setMobileOpen(false)
      setTimeout(doScroll, DRAWER_CLOSE_DELAY)
    } else {
      doScroll()
    }
  }, [mobileOpen])

  return (
    <>
      {/* ══ Main Navbar ══ */}
      <nav
        style={{
          position:       'fixed',
          top: 0, left: 0, right: 0,
          zIndex:         50,
          background:     scrolled ? 'rgba(254,249,242,0.94)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)'             : 'none',
          borderBottom:   scrolled ? '1px solid rgba(247,237,216,0.9)' : 'none',
          boxShadow:      scrolled ? '0 1px 12px rgba(200,84,31,0.06)' : 'none',
          transition:     'background 0.35s, box-shadow 0.35s, border 0.35s',
        }}
      >
        <div
          className="container-xl"
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}
        >
          {/* Logo */}
          <button
            onClick={() => scrollToSection('Home', 'hero', false)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
            aria-label="Go to top"
          >
            <OrunLogo size={38} dark={true} />
          </button>

          {/* Desktop links */}
          <div className="desktop-nav">
            {NAV.map(({ label, href }) => (
              <button
                key={label}
                onClick={() => scrollToSection(label, href, false)}
                style={{
                  background:   'none',
                  border:       'none',
                  cursor:       'pointer',
                  fontSize:     '13px',
                  fontWeight:   500,
                  color:        active === label ? '#C8541F' : '#3D2B14',
                  position:     'relative',
                  paddingBottom:'4px',
                  transition:   'color 0.2s',
                  fontFamily:   'inherit',
                }}
              >
                {label}
                {active === label && (
                  <span style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0,
                    height: '2px', background: '#C8541F', borderRadius: '2px',
                  }} />
                )}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="desktop-cta">
            <WAButton size="sm" />
          </div>

          {/* Mobile hamburger */}
          <button
            className="mobile-burger"
            onClick={() => setMobileOpen(v => !v)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              padding: '8px', color: '#1A0E04',
            }}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Responsive styles */}
        <style>{`
          .desktop-nav  { display: none; align-items: center; gap: 1.75rem; }
          .desktop-cta  { display: none; }
          .mobile-burger { display: flex; align-items: center; justify-content: center; }

          @media (min-width: 1024px) {
            .desktop-nav  { display: flex !important; }
            .desktop-cta  { display: block !important; }
            .mobile-burger { display: none !important; }
          }
        `}</style>

        {/* Mobile drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              key="mobile-drawer"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              style={{ overflow: 'hidden', background: '#FEF9F2', borderTop: '1px solid #F7EDD8' }}
            >
              <div
                className="container-xl"
                style={{ paddingTop: '0.875rem', paddingBottom: '1.25rem', display: 'flex', flexDirection: 'column', gap: '4px' }}
              >
                {NAV.map(({ label, href }) => (
                  <button
                    key={label}
                    onClick={() => scrollToSection(label, href, true)}
                    style={{
                      display:     'block',
                      width:       '100%',
                      textAlign:   'left',
                      padding:     '0.8rem 0.875rem',
                      borderRadius:'10px',
                      fontWeight:  500,
                      fontSize:    '15px',
                      color:       active === label ? '#C8541F' : '#3D2B14',
                      background:  active === label ? 'rgba(200,84,31,0.07)' : 'transparent',
                      border:      'none',
                      cursor:      'pointer',
                      transition:  'color 0.2s, background 0.2s',
                      fontFamily:  'inherit',
                    }}
                  >
                    {label}
                  </button>
                ))}

                <div style={{ paddingTop: '0.75rem' }}>
                  <WAButton fullWidth size="sm" />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ══ Sticky announcement bar ══ */}
      <AnimatePresence>
        {stickyBar && (
          <motion.div
            key="sticky-bar"
            initial={{ y: -56 }}
            animate={{ y: 0 }}
            exit={{ y: -56 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            style={{
              position:   'fixed', top: 0, left: 0, right: 0, zIndex: 40,
              background: '#1A0E04',
              display:    'flex', alignItems: 'center',
              height:     '48px',
            }}
          >
            <div
              className="container-xl"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}
            >
              <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', margin: 0 }}>
                <span className="bar-full">ORUN SPF 50+ — Premium Sun Protection for Every Skin</span>
                <span className="bar-short">ORUN SPF 50+</span>
              </p>
              <WAButton size="sm" label="Order Now" />
            </div>
            <style>{`
              .bar-full  { display: none; }
              .bar-short { display: inline; }
              @media (min-width: 640px) {
                .bar-full  { display: inline; }
                .bar-short { display: none; }
              }
            `}</style>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}