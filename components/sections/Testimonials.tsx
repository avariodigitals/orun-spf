'use client'
import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionHeader from '@/components/ui/SectionHeader'
import StarRating from '@/components/ui/StarRating'
import { TESTIMONIALS } from '@/lib/content'

const VISIBLE = 3

export default function Testimonials() {
  const [start, setStart] = useState(0)
  const items = TESTIMONIALS.items

  const prev = () => setStart(s => Math.max(0, s - 1))
  const next = () => setStart(s => Math.min(items.length - VISIBLE, s + 1))

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-white">
      <div className="container-xl">
        <AnimatedSection>
          <div className="flex items-end justify-between">
            <SectionHeader tag={TESTIMONIALS.tag} title={TESTIMONIALS.title} centered={false} />
            <div className="flex gap-2 mb-4">
              {[prev, next].map((fn, i) => (
                <button
                  key={i}
                  onClick={fn}
                  disabled={i === 0 ? start === 0 : start >= items.length - VISIBLE}
                  className="w-9 h-9 rounded-full border border-brand-cream-3 flex items-center justify-center text-brand-body hover:bg-brand-orange hover:text-white hover:border-brand-orange disabled:opacity-25 transition-all"
                >
                  {i === 0 ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
                </button>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.slice(start, start + VISIBLE).map((r, i) => (
            <AnimatedSection key={`${start}-${i}`} delay={i * 0.1}>
              <div className="card p-6 flex flex-col h-full bg-brand-cream">
                <StarRating rating={r.rating} />
                <blockquote className="mt-4 text-brand-body text-[15px] leading-relaxed flex-1">
                  "{r.text}"
                </blockquote>
                <div className="mt-5 pt-4 border-t border-brand-cream-3 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-brand-orange/15 flex items-center justify-center text-brand-orange font-bold text-sm">
                    {r.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-brand-dark text-sm">— {r.name}</p>
                    <p className="text-[11px] text-brand-muted">{r.location}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
