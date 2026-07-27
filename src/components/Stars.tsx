import { Star } from 'lucide-react'

type Props = {
  /** Clase pentru fiecare stea (dimensiune). */
  starClassName?: string
  className?: string
}

/** Rând de 5 stele aurii — ratingul Google al clinicii. Sursa unică pentru stele. */
export default function Stars({ starClassName = 'h-4 w-4', className = '' }: Props) {
  return (
    <div className={`flex items-center gap-1 ${className}`} role="img" aria-label="5 din 5 stele">
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} className={`${starClassName} fill-gold-400 text-gold-400`} aria-hidden="true" />
      ))}
    </div>
  )
}
