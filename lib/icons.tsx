// lib/icons.tsx
// ──────────────────────────────────────────────────────────────
//  Central icon registry — maps string name → Lucide component.
//  Used by sections that read icon names from content.ts.
//  Add any new Lucide icon here as needed.
// ──────────────────────────────────────────────────────────────

import {
  Award,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Droplets,
  EyeOff,
  Feather,
  Hand,
  HeartPulse,
  Layers,
  Leaf,
  MapPin,
  Menu,
  MessageCircle,
  Minus,
  Navigation,
  Phone,
  Plus,
  ScanEye,
  ShieldCheck,
  Sparkles,
  Star,
  Store,
  Sun,
  Wind,
  X,
  Zap,
  type LucideIcon,
} from 'lucide-react'

export const ICON_MAP: Record<string, LucideIcon> = {
  Award,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Droplets,
  EyeOff,
  Feather,
  Hand,
  HeartPulse,
  Layers,
  Leaf,
  MapPin,
  Menu,
  MessageCircle,
  Minus,
  Navigation,
  Phone,
  Plus,
  ScanEye,
  ShieldCheck,
  Sparkles,
  Star,
  Store,
  Sun,
  Wind,
  X,
  Zap,
}

interface IconProps {
  name:       string
  size?:      number
  className?: string
  strokeWidth?: number
}

/**
 * <Icon name="ShieldCheck" size={20} className="text-brand-orange" />
 * Renders the Lucide icon matching `name`. Falls back to a dot if not found.
 */
export default function Icon({ name, size = 18, className = '', strokeWidth = 2 }: IconProps) {
  const Component = ICON_MAP[name]
  if (!Component) {
    // graceful fallback — never crash on a missing icon name
    return <span className={`inline-block w-[${size}px] h-[${size}px] rounded-full bg-brand-orange/30 ${className}`} />
  }
  return <Component size={size} className={className} strokeWidth={strokeWidth} />
}