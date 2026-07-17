import VideoLoop from '../VideoLoop'

type Props = {
  src: string
  ariaLabel: string
  poster: string
  className?: string
}

/**
 * Video vertical de caz clinic (9/16, max ~560px înălțime) — redare automată
 * în buclă, fără sunet, cu un singur buton (sunet). Posterul = primul cadru.
 */
export default function CaseVideo({ src, ariaLabel, poster, className = '' }: Props) {
  return (
    <VideoLoop
      src={src}
      poster={poster}
      ariaLabel={ariaLabel}
      className={`mx-auto aspect-[9/16] w-full max-w-[315px] rounded-3xl bg-plum-950 shadow-lift ${className}`}
    />
  )
}
