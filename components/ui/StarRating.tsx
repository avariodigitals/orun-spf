import { Star } from 'lucide-react'

export default function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={13}
          className={i < rating
            ? 'fill-brand-gold text-brand-gold'
            : 'fill-brand-cream-3 text-brand-cream-3'}
        />
      ))}
    </div>
  )
}
