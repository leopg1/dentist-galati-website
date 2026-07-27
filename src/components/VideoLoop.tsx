import { useEffect, useRef, useState } from 'react'
import { Volume2, VolumeX } from 'lucide-react'

type Props = {
  src: string
  ariaLabel: string
  /** Primul cadru al videoclipului — afișat mereu până pornește redarea. */
  poster: string
  /** Clase pentru containerul exterior (aspect ratio, rounded, shadow etc.). */
  className?: string
}

/**
 * Player video de brand: pornește singur (fără sunet), rulează în buclă,
 * fără controale native și fără pauză — singurul buton este cel de sunet.
 * Posterul (primul cadru) e afișat până când videoclipul e gata de redare,
 * deci zona nu apare niciodată goală. Redarea pornește când intră în viewport.
 */
export default function VideoLoop({ src, ariaLabel, poster, className = '' }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const wrapRef = useRef<HTMLDivElement>(null)
  const [muted, setMuted] = useState(true)
  // calculăm o singură dată dacă utilizatorul cere mai puțină mișcare
  const [reduce] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

  useEffect(() => {
    const wrap = wrapRef.current
    if (!wrap) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const io = new IntersectionObserver(
      ([entry]) => {
        const v = videoRef.current
        if (!v) return
        if (entry.isIntersecting) {
          // pornim (sau reluăm) automat; dacă nu e încărcat încă, posterul rămâne vizibil
          void v.play().catch(() => {})
        } else if (!v.paused) {
          v.pause()
        }
      },
      { threshold: 0.2 },
    )
    io.observe(wrap)
    return () => io.disconnect()
  }, [])

  const toggleMute = () => {
    const v = videoRef.current
    if (!v) return
    v.muted = !v.muted
    setMuted(v.muted)
    // politica de autoplay a browserului poate opri redarea la unmute — reluăm explicit
    void v.play().catch(() => {})
  }

  return (
    <div ref={wrapRef} className={`relative overflow-hidden ${className}`}>
      {/* posterul stă permanent sub video: până la primul cadru redat, se vede el */}
      <img
        src={poster}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        autoPlay={!reduce}
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={ariaLabel}
        className="relative h-full w-full object-cover"
      />

      {/* Singurul control: sunet pornit/oprit */}
      <button
        type="button"
        onClick={toggleMute}
        aria-label={muted ? 'Pornește sunetul' : 'Oprește sunetul'}
        className="absolute bottom-3.5 right-3.5 z-20 inline-flex h-11 w-11 items-center justify-center rounded-full bg-plum-950/60 text-white backdrop-blur-sm transition hover:bg-plum-950/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        {muted ? <VolumeX className="h-5 w-5" aria-hidden="true" /> : <Volume2 className="h-5 w-5" aria-hidden="true" />}
      </button>
    </div>
  )
}
