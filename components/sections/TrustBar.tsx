import Icon from '@/lib/icons'
import { TRUST_BAR } from '@/lib/content'

export default function TrustBar() {
  const doubled = [...TRUST_BAR, ...TRUST_BAR]

  return (
    <section id="trust" className="bg-white border-y border-[var(--color-brand-cream-2)] py-4 overflow-hidden">

      {/* Desktop: static row */}
      <div className="hidden lg:block">
        <div className="container-xl flex items-center justify-between">
          {TRUST_BAR.map((item, i) => (
            <div key={i} className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[var(--color-brand-cream)] flex items-center justify-center shrink-0">
                <Icon
                  name={item.icon}
                  size={16}
                  className="text-[var(--color-brand-orange)]"
                  strokeWidth={1.8}
                />
              </div>
              <div>
                <p className="text-xs font-bold text-[var(--color-brand-dark)] leading-tight">{item.label}</p>
                <p className="text-[10px] text-[var(--color-brand-muted)]">{item.note}</p>
              </div>
              {i < TRUST_BAR.length - 1 && (
                <div className="w-px h-8 bg-[var(--color-brand-cream-2)] mx-4" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile: marquee */}
      <div className="lg:hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {doubled.map((item, i) => (
            <div key={i} className="inline-flex items-center gap-2 mx-6 shrink-0">
              <div className="w-7 h-7 rounded-full bg-[var(--color-brand-cream)] flex items-center justify-center shrink-0">
                <Icon name={item.icon} size={13} className="text-[var(--color-brand-orange)]" strokeWidth={1.8} />
              </div>
              <div>
                <p className="text-xs font-bold text-[var(--color-brand-dark)]">{item.label}</p>
                <p className="text-[10px] text-[var(--color-brand-muted)]">{item.note}</p>
              </div>
              <div className="w-px h-6 bg-[var(--color-brand-cream-2)] ml-6" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}