import Icon from '@/lib/icons'
import { TRUST_BAR } from '@/lib/content'

export default function TrustBar({ content = { items: TRUST_BAR } }: { content?: { items: typeof TRUST_BAR } }) {
  const doubled = [...content.items, ...content.items]

  return (
    <section id="trust" className="bg-[#FEF9F2] border-y border-[var(--color-brand-cream-2)] py-5 overflow-hidden">

      {/* Desktop: static row */}
      <div className="hidden lg:block">
        <div className="container-xl flex items-center justify-between">
          {content.items.map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full border-2 border-[var(--color-brand-orange)] flex items-center justify-center shrink-0">
                <Icon
                  name={item.icon}
                  size={22}
                  className="text-[var(--color-brand-orange)]"
                  strokeWidth={1.6}
                />
              </div>
              <div>
                <p className="text-[11px] font-extrabold tracking-widest text-[var(--color-brand-dark)] leading-tight uppercase">{item.label}</p>
                <p className="text-[10px] font-semibold tracking-wider text-[var(--color-brand-orange)] uppercase">{item.note}</p>
              </div>
              {i < content.items.length - 1 && (
                <div className="w-px h-9 bg-[var(--color-brand-cream-2)] mx-5" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile: marquee */}
      <div className="lg:hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {doubled.map((item, i) => (
            <div key={i} className="inline-flex items-center gap-2.5 mx-6 shrink-0">
              <div className="w-9 h-9 rounded-full border-2 border-[var(--color-brand-orange)] flex items-center justify-center shrink-0">
                <Icon name={item.icon} size={16} className="text-[var(--color-brand-orange)]" strokeWidth={1.6} />
              </div>
              <div>
                <p className="text-[10px] font-extrabold tracking-widest text-[var(--color-brand-dark)] uppercase">{item.label}</p>
                <p className="text-[9px] font-semibold tracking-wider text-[var(--color-brand-orange)] uppercase">{item.note}</p>
              </div>
              <div className="w-px h-6 bg-[var(--color-brand-cream-2)] ml-6" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}