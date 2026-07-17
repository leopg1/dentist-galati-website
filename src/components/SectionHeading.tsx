import type { ReactNode } from 'react'
import Reveal from './Reveal'

type Props = {
  eyebrow?: string
  title: ReactNode
  intro?: ReactNode
  align?: 'left' | 'center'
  light?: boolean
}

export default function SectionHeading({ eyebrow, title, intro, align = 'center', light = false }: Props) {
  return (
    <Reveal className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      {eyebrow && <p className={`eyebrow ${light ? '!text-teal-300' : ''}`}>{eyebrow}</p>}
      <h2 className={`h-display mt-3 text-4xl md:text-5xl ${light ? '!text-white' : ''}`}>{title}</h2>
      {intro && (
        <p className={`mt-5 text-lg leading-relaxed ${light ? 'text-white/75' : 'text-plum-900/70'}`}>{intro}</p>
      )}
    </Reveal>
  )
}
