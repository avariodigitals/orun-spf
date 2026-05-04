'use client'
import { useEffect, useState } from 'react'
import WAButton from '@/components/ui/WAButton'
import { motion, AnimatePresence } from 'framer-motion'

export default function MobileStickyBar() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 2500)
    return () => clearTimeout(t)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-brand-cream/95 backdrop-blur-lg border-t border-brand-cream-2 px-4 py-3 shadow-2xl"
          initial={{ y: 80 }}
          animate={{ y: 0 }}
          exit={{ y: 80 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        >
          <WAButton label="Order ORUN SPF on WhatsApp" fullWidth size="md" />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
