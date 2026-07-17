import { BadgePercent, HeartHandshake, Phone, Sparkles, Star, Waves, Wind } from 'lucide-react'
import { Link } from 'react-router-dom'
import ServiceLayout from '../../components/ServiceLayout'
import Reveal from '../../components/Reveal'
import { site } from '../../lib/site'

const include = [
  {
    icon: Waves,
    title: 'Detartraj cu ultrasunete',
    text: 'Îndepărtăm tartrul și placa bacteriană de pe dinți și de sub gingie, delicat și eficient.',
  },
  {
    icon: Wind,
    title: 'AirFlow',
    text: 'Jet cu pulbere fină care îndepărtează petele de cafea, ceai și tutun — dinții își recapătă culoarea.',
  },
  {
    icon: Sparkles,
    title: 'Periaj profesional',
    text: 'Lustruim suprafețele dentare, pentru un smalț neted pe care placa aderă mai greu.',
  },
  {
    icon: HeartHandshake,
    title: 'Consiliere de igienă personalizată',
    text: 'Îți arătăm tehnica de periaj și accesoriile potrivite pentru dinții tăi, nu sfaturi generice.',
  },
  {
    icon: Star,
    title: 'Albire profesională (opțional)',
    text: 'După igienizare, poți opta pentru albirea profesională — un zâmbet vizibil mai luminos.',
  },
]

export default function Igienizare() {
  return (
    <ServiceLayout
      slug="igienizare"
      metaTitle="Detartraj & AirFlow Galați — DentaLine Clinic"
      metaDescription="Igienizare profesională: detartraj, AirFlow, periaj profesional și albire. Gratuit pentru abonații MedLife. Programări: 0742 038 270"
      eyebrow="Igienizare & profilaxie"
      title={
        <>
          Igienizare profesională — <span className="text-coral-600">fundația oricărui zâmbet sănătos</span>
        </>
      }
      intro="Detartrajul și periajul profesional la 6 luni previn caria, boala parodontală și respirația neplăcută — și mențin rezultatele oricărui tratament. Este cea mai bună investiție pe care o poți face în dinții tăi."
      heroImage="/media/services/detartraj-macro.jpg"
      heroImageAlt="Detartraj profesional cu ultrasunete, prim-plan macro"
      badge="Detartraj + AirFlow gratuite pentru abonații MedLife"
      highlights={[
        'Detartraj cu ultrasunete + AirFlow',
        'Recomandată la fiecare 6 luni',
        'Îndepărtează petele de cafea, ceai și tutun',
      ]}
      ctaTitle="Programează-ți igienizarea semestrială"
    >
      {/* Ce include */}
      <div>
        <Reveal>
          <h2 className="h-display text-3xl md:text-4xl">O ședință completă, pas cu pas</h2>
        </Reveal>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {include.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06} className={i === include.length - 1 ? 'sm:col-span-2' : ''}>
              <div className="card-surface h-full p-6 transition hover:-translate-y-1">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-100 text-teal-600">
                  <s.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold text-plum-950">{s.title}</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-plum-900/70">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Galerie */}
      <div>
        <Reveal>
          <h2 className="h-display text-3xl md:text-4xl">Igienizarea, la DentaLine</h2>
          <p className="mt-4 max-w-2xl text-[15.5px] leading-relaxed text-plum-900/75">
            Instrumentar modern, mâini blânde și atenție la fiecare detaliu — igienizarea profesională nu doar
            curăță, ci și menține rezultatele tratamentelor tale pe termen lung.
          </p>
        </Reveal>
        <div className="mt-7 grid gap-5 sm:grid-cols-2">
          <Reveal>
            <img
              src="/media/services/igienizare-2.jpg"
              alt="Ședință de igienizare profesională în cabinetul DentaLine"
              className="aspect-[4/3] w-full rounded-3xl object-cover shadow-soft"
              loading="lazy"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <img
              src="/media/services/igienizare-colaj.jpg"
              alt="Colaj cu etapele igienizării profesionale la DentaLine"
              className="aspect-[4/3] w-full rounded-3xl object-cover shadow-soft"
              loading="lazy"
            />
          </Reveal>
        </div>
      </div>

      {/* Banda MedLife */}
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-plum-950 p-8 text-white md:p-10">
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-coral-600/25 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-teal-300">
              <BadgePercent className="h-6 w-6" aria-hidden="true" />
            </span>
            <h2 className="h-display mt-5 text-3xl !text-white md:text-4xl">Bonus MedLife</h2>
            <p className="mt-3 max-w-xl text-[15.5px] leading-relaxed text-white/80">
              Abonații MedLife beneficiază de <strong className="font-semibold text-white">detartraj și AirFlow
              gratuit</strong>. <span className="text-white/60">(condiții în clinică)</span>
            </p>
            <div className="mt-6 flex flex-wrap gap-3.5">
              <a href={site.phoneHref} className="btn-primary">
                <Phone className="h-4 w-4" aria-hidden="true" /> {site.phone}
              </a>
              <Link to="/oferte" className="btn-ghost-light">
                Vezi toate ofertele
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </ServiceLayout>
  )
}
