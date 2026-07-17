import VideoLoop from '../VideoLoop'

type Props = {
  src: string
  ariaLabel: string
  className?: string
  poster?: string
}

/**
 * Video vertical de caz clinic (9/16, max ~560px înălțime) — redare continuă
 * în buclă, fără sunet, cu buton custom de sunet/pauză (fără controale native).
 */
export default function CaseVideo({ src, ariaLabel, className = '', poster }: Props) {
  return (
    <VideoLoop
      src={src}
      poster={poster}
      ariaLabel={ariaLabel}
      className={`mx-auto aspect-[9/16] w-full max-w-[315px] rounded-3xl bg-plum-950 shadow-lift ${className}`}
    />
  )
}
