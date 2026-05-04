'use client'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionHeader from '@/components/ui/SectionHeader'
import Icon from '@/lib/icons'
import { INGREDIENTS } from '@/lib/content'

export default function Ingredients() {
  return (
    <section id="ingredients" className="py-20 lg:py-28 bg-white">
      <div className="container-xl">
        <AnimatedSection>
          <SectionHeader tag={INGREDIENTS.tag} title={INGREDIENTS.title} />
        </AnimatedSection>

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {INGREDIENTS.items.map((item, i) => (
            <AnimatedSection key={item.name} delay={i * 0.08}>
              <div
                className="card group p-5 text-center cursor-default"
                style={{ backgroundColor: item.bg + '55' }}
              >
                <div
                  className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-sm"
                  style={{ backgroundColor: item.bg }}
                >
                  <Icon
                    name={item.icon}
                    size={24}
                    className="text-[var(--color-brand-dark)]"
                    strokeWidth={1.6}
                  />
                </div>
                <h3 className="font-semibold text-[var(--color-brand-dark)] text-sm mb-1">{item.name}</h3>
                <p className="text-[11px] text-[var(--color-brand-muted)] leading-relaxed">{item.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}