// components/ui/OrunLogo.tsx

interface Props {
  size?:    number
  variant?: 'full' | 'mark-only' | 'text-only'   // ← all three variants declared
  dark?:    boolean
}

export default function OrunLogo({ size = 36, variant = 'full', dark = true }: Props) {
  const textColor = dark ? '#6B3A1F' : '#E8943A'
  const gold      = '#D4940A'

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>

      {/* Spiral-sun mark — hidden when variant is text-only */}
      {variant !== 'text-only' && (
        <svg
          width={size}
          height={size * 0.82}
          viewBox="0 0 120 98"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Sun rays */}
          <line x1="60" y1="6"   x2="60" y2="19" stroke={gold} strokeWidth="6" strokeLinecap="round" />
          <line x1="85" y1="13"  x2="78" y2="23" stroke={gold} strokeWidth="6" strokeLinecap="round" />
          <line x1="101" y1="29" x2="90" y2="35" stroke={gold} strokeWidth="6" strokeLinecap="round" />
          <line x1="104" y1="52" x2="92" y2="52" stroke={gold} strokeWidth="6" strokeLinecap="round" />
          <line x1="35" y1="13"  x2="42" y2="23" stroke={gold} strokeWidth="6" strokeLinecap="round" />
          <line x1="19" y1="29"  x2="30" y2="35" stroke={gold} strokeWidth="6" strokeLinecap="round" />
          <line x1="16" y1="52"  x2="28" y2="52" stroke={gold} strokeWidth="6" strokeLinecap="round" />

          {/* Spiral */}
          <path
            d="M60 26 C76 26 88 38 88 54 C88 67 78 77 65 79 C54 81 44 74 41 64 C38 55 43 47 52 45 C59 43 65 47 65 54 C65 60 61 63 57 61"
            stroke={gold}
            strokeWidth="5.5"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      )}

      {/* Word mark — hidden when variant is mark-only */}
      {variant !== 'mark-only' && (
        <span
          style={{
            fontFamily:    'Georgia, "Cormorant Garamond", serif',
            fontWeight:    700,
            fontSize:      size * 0.55,
            color:         textColor,
            letterSpacing: '0.06em',
            lineHeight:    1,
          }}
        >
          ORUN
        </span>
      )}
    </div>
  )
}