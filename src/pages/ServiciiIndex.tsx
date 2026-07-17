import { Link } from 'react-router-dom'
import { ArrowRight, Phone } from 'lucide-react'
import { services, site } from '../lib/site'
import { usePageMeta } from '../lib/seo'
import CTABand from '../components/CTABand'
import Reveal from '../components/Reveal'

export default function ServiciiIndex() {
  usePageMeta(
    'Servicii stomatologice Galați — DentaLine Clinic',
    'Toate serviciile DentaLine Galați: implant dentar, fațete, coroane zirconiu, endodonție la microscop, pedodonție, aligneri, igienizare și diagnostic digital.',
  )

  return (
    <>
      {/* Hero index servicii */}
      <section className="relative overflow-hidden bg-plum-50">
        <div
          className="pointer-events-none absolute -right-40 -top-40 h-[480px] w-[480px] rounded-full bg-plum-200/50 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-teal-100/60 blur-3xl"
          aria-hidden="true"
        />
        <div className="container-site relative py-16 text-center md:py-24">
          <Reveal>
            <p className="eyebrow">DentaLine Clinic — Estetică dentară și Implantologie</p>
            <h1 className="h-display mx-auto mt-4 max-w-3xl text-4xl md:text-6xl">Serviciile noastre</h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-plum-900/75">
              De la prevenție și igienizare până la implanturi și reabilitări complete ale zâmbetului: nouă
              servicii, o singură echipă și aceeași grijă la fiecare vizită. Alege serviciul care te
              interesează — sau sună-ne și te îndrumăm noi.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <a href={site.phoneHref} className="btn-primary">
                <Phone className="h-4 w-4" aria-hidden="true" /> Programează-te: {site.phone}
              </a>
              <Link to="/contact" className="btn-secondary">
                Cere o programare online
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Grila celor 9 servicii */}
      <section className="section-pad">
        <div className="container-site">
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={(i % 3) * 0.08} className="h-full">
                <Link
                  to={`/servicii/${service.slug}`}
                  className="group card-surface flex h-full flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-lift"
                >
                  <div className="overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.imageAlt}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6 md:p-7">
                    <h2 className="font-display text-2xl font-semibold leading-snug text-plum-950">
                      {service.title}
                    </h2>
                    <p className="mt-2.5 flex-1 text-[15px] leading-relaxed text-plum-900/70">
                      {service.short}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-[14.5px] font-bold text-coral-600 transition-all group-hover:gap-3">
                      Află mai mult <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          {/* Bandă oferte & facilități */}
          <Reveal className="mt-16">
            <div className="grid overflow-hidden rounded-3xl bg-plum-950 text-white shadow-lift lg:grid-cols-[1fr_1.25fr]">
              <img
                src="/media/team/dr-vasiliu-birou.jpg"
                alt="Dr. Camelia Vasiliu discutând planul de tratament cu un pacient, la biroul din clinică"
                loading="lazy"
                className="aspect-[4/3] h-full w-full object-cover lg:aspect-auto"
              />
              <div className="flex flex-col items-start justify-center gap-5 p-8 md:p-12">
                <p className="eyebrow !text-teal-300">Oferte &amp; facilități</p>
                <h2 className="h-display text-3xl !text-white md:text-4xl">
                  Tratamente accesibile, fără compromisuri
                </h2>
                <p className="max-w-xl leading-relaxed text-white/75">
                  Abonații MedLife beneficiază de reduceri la tratamentele dentare, iar lucrările ample pot
                  fi achitate în rate, prin partenerul nostru tbi bank. Înainte de orice tratament primești
                  planul complet, cu etape și costuri — fără surprize pe parcurs.
                </p>
                <div className="mt-2 flex flex-wrap gap-3.5">
                  <a href={site.phoneHref} className="btn-primary">
                    <Phone className="h-4 w-4" aria-hidden="true" /> Întreabă-ne de oferte
                  </a>
                  <Link to="/oferte" className="btn-ghost-light">
                    Vezi toate facilitățile
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand />
    </>
  )
}
