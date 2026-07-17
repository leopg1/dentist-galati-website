import { useEffect, useRef, useState } from 'react'
import { Pause, Play, Volume2, VolumeX } from 'lucide-react'

type Props = {
  src: string
  ariaLabel: string
  poster?: string
  /** Clase pentru containerul exterior (aspect ratio, rounded, shadow etc.). */
  className?: string
  /** false = pornește doar la click (pentru videouri lungi/grele). Implicit true. */
  autoplay?: boolean
}

/**
 * Player video de brand: redare continuă în buclă (fără sunet), cu buton de
 * sunet și pauză custom — fără controalele native ale browserului.
 * Nu descarcă nimic până nu intră în viewport (preload="none" + IO);
 * respectă prefers-reduced-motion.
 */
export default function VideoLoop({ src, ariaLabel, poster, className = '', autoplay = true }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const wrapRef = useRef<HTMLDivElement>(null)
  const [muted, setMuted] = useState(true)
  const [playing, setPlaying] = useState(false)

  // ref sincron pentru starea de redare (folosit în observer)
  const playingRef = useRef(false)
  useEffect(() => {
    playingRef.current = playing
  }, [playing])

  // dorința utilizatorului: a oprit explicit videoclipul? (nu-l repornim la re-intrare)
  const userPausedRef = useRef(false)

  useEffect(() => {
    const wrap = wrapRef.current
    if (!wrap || !autoplay) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const io = new IntersectionObserver(
      ([entry]) => {
        const v = videoRef.current
        if (!v) return
        if (entry.isIntersecting) {
          if (!userPausedRef.current) {
            void v.play().catch(() => {})
            setPlaying(true)
          }
        } else if (!v.paused) {
          v.pause()
          setPlaying(false)
        }
      },
      { threshold: 0.25 },
    )
    io.observe(wrap)
    return () => io.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoplay])

  const togglePlay = () => {
    const v = videoRef.current
    if (!v) return
    if (v.paused) {
      userPausedRef.current = false
      void v.play().catch(() => {})
      setPlaying(true)
    } else {
      userPausedRef.current = true
      v.pause()
      setPlaying(false)
    }
  }

  const toggleMute = () => {
    const v = videoRef.current
    if (!v) return
    v.muted = !v.muted
    setMuted(v.muted)
    // politica de autoplay a browserului poate opri redarea la unmute —
    // dacă videoclipul trebuia să ruleze, reluăm explicit redarea
    if (playingRef.current) {
      void v.play().catch(() => {})
      setPlaying(true)
    }
  }

  return (
    <div ref={wrapRef} className={`group relative overflow-hidden ${className}`}>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="none"
        aria-label={ariaLabel}
        className="h-full w-full object-cover"
        onClick={togglePlay}
      />

      {/* Overlay „redare" când videoclipul e oprit */}
      {!playing && (
        <button
          type="button"
          onClick={togglePlay}
          aria-label="Pornește videoclipul"
          className="absolute inset-0 z-10 flex items-center justify-center bg-plum-950/30 transition hover:bg-plum-950/40"
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 text-plum-800 shadow-lift transition group-hover:scale-105">
            <Play className="ml-1 h-6 w-6" aria-hidden="true" />
          </span>
        </button>
      )}

      {/* Controale custom: sunet + pauză */}
      <div className="absolute bottom-3.5 right-3.5 z-20 flex items-center gap-2">
        <button
          type="button"
          onClick={toggleMute}
          aria-label={muted ? 'Pornește sunetul' : 'Oprește sunetul'}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-plum-950/60 text-white backdrop-blur-sm transition hover:bg-plum-950/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          {muted ? <VolumeX className="h-4.5 w-4.5" aria-hidden="true" /> : <Volume2 className="h-4.5 w-4.5" aria-hidden="true" />}
        </button>
        {playing && (
          <button
            type="button"
            onClick={togglePlay}
            aria-label="Oprește videoclipul"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-plum-950/60 text-white backdrop-blur-sm transition hover:bg-plum-950/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <Pause className="h-4.5 w-4.5" aria-hidden="true" />
          </button>
        )}
      </div>
    </div>
  )
}
