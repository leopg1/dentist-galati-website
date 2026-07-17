import { Quote } from 'lucide-react'
import type { TeamMember } from '../../lib/site'
import Reveal from '../Reveal'

type Props = {
  doctor: TeamMember
  index?: number
}

/** Card de medic pentru pagina Echipa: portret, bio, arii de expertiză și citat din recenzii. */
export default function DoctorCard({ doctor, index = 0 }: Props) {
  return (
    <Reveal delay={(index % 2) * 0.12} className="h-full">
      <article className="card-surface group flex h-full flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-lift">
        <div className="px-7 pt-7 md:px-8 md:pt-8">
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-full rounded-b-3xl bg-plum-100">
            {/* h-[122%] + object-top: taie zona de jos a fotografiei, unde e textul ars */}
            <img
              src={doctor.photo}
              alt={`${doctor.name} — portret oficial în clinica DentaLine din Galați`}
              className="h-[122%] w-full object-cover object-top"
              loading="lazy"
            />
            <div
              className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white/90 to-transparent"
              aria-hidden="true"
            />
          </div>
        </div>

        <div className="flex flex-1 flex-col p-7 md:p-8">
          <h3 className="font-display text-[28px] font-semibold leading-tight text-plum-950">
            {doctor.name}
          </h3>
          <p className="mt-1.5 text-[12.5px] font-bold uppercase tracking-[0.16em] text-coral-600">
            {doctor.role}
          </p>

          <p className="mt-4 text-[15px] leading-relaxed text-plum-900/75">{doctor.bio}</p>

          {doctor.areas.length > 0 && (
            <ul className="mt-5 flex flex-wrap gap-2" aria-label={`Arii de expertiză — ${doctor.name}`}>
              {doctor.areas.map((area) => (
                <li
                  key={area}
                  className="rounded-full bg-plum-50 px-3.5 py-1.5 text-[12.5px] font-bold text-plum-700"
                >
                  {area}
                </li>
              ))}
            </ul>
          )}

          {doctor.quote && (
            <figure className="mt-auto border-l-2 border-coral-300 pl-4 pt-6">
              <Quote className="h-4 w-4 text-coral-300" aria-hidden="true" />
              <blockquote className="quote-serif mt-1.5">
                „{doctor.quote}"
              </blockquote>
              {doctor.quoteAuthor && (
                <figcaption className="mt-2 text-[12px] font-semibold text-plum-900/70">
                  — {doctor.quoteAuthor}
                </figcaption>
              )}
            </figure>
          )}
        </div>
      </article>
    </Reveal>
  )
}
