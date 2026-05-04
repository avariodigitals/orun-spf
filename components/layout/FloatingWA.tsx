'use client'
import { useState, useEffect } from 'react'
import { MessageCircle, X } from 'lucide-react'
import { SITE } from '@/lib/content'
import { motion, AnimatePresence } from 'framer-motion'

export default function FloatingWA() {
  const [tip, setTip] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setTip(true), 3000)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="fixed bottom-24 right-4 sm:bottom-8 sm:right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {tip && (
          <motion.div
            className="relative bg-white rounded-2xl shadow-xl px-4 py-3 max-w-[190px]"
            initial={{ opacity: 0, scale: 0.8, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 8 }}
            transition={{ duration: 0.25 }}
          >
            <button
              onClick={() => setTip(false)}
              className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-brand-cream-3 flex items-center justify-center"
            >
              <X size={10} className="text-brand-muted" />
            </button>
            <p className="text-xs font-semibold text-brand-dark">Order ORUN SPF</p>
            <p className="text-[11px] text-brand-muted mt-0.5">Chat with us instantly!</p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={SITE.waLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Order on WhatsApp"
        className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg animation-wa-ping"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        style={{ animation: 'wa-ping 2s infinite' }}
      >
        <MessageCircle size={28} className="text-white fill-white" strokeWidth={1.5} />
      </motion.a>
    </div>
  )
}
