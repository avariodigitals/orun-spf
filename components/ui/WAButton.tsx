'use client'
import { MessageCircle } from 'lucide-react'
import { SITE } from '@/lib/content'

type Variant = 'green' | 'white' | 'dark'
type Size    = 'sm' | 'md' | 'lg'

interface Props {
  label?:    string
  size?:     Size
  variant?:  Variant
  fullWidth?: boolean
  className?: string
}

const sizes: Record<Size, string> = {
  sm: 'text-sm px-5 py-2.5 gap-1.5',
  md: 'text-[15px] px-7 py-3.5 gap-2',
  lg: 'text-base px-8 py-4 gap-2.5',
}

const variants: Record<Variant, string> = {
  green: 'bg-[#0d5c2e] hover:bg-[#0a4620] text-white',
  white: 'bg-white hover:bg-brand-cream text-brand-orange',
  dark:  'bg-brand-dark hover:bg-brand-body text-white',
}

const iconSize: Record<Size, number> = { sm: 15, md: 18, lg: 20 }

export default function WAButton({
  label = 'Order on WhatsApp',
  size = 'md',
  variant = 'green',
  fullWidth = false,
  className = '',
}: Props) {
  return (
    <a
      href={SITE.waLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        btn-wa rounded-full font-semibold
        ${sizes[size]} ${variants[variant]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
    >
      <MessageCircle size={iconSize[size]} strokeWidth={2.2} />
      {label}
    </a>
  )
}
