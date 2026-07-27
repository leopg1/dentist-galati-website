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
      <section className="bg-plum-50">
        <div className="container-site hero-pad text-center">
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
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={(i % 3) * 0.08} className="h-full">
                <Link
                  to={`/servicii/${service.slug}`}
                  className="group card-surface card-hover flex h-full flex-col overflow-hidden"
                >
                  <div className="overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.imageAlt}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col card-pad">
                    <h2 className="card-title leading-snug">{service.title}</h2>
                    <p className="mt-2.5 flex-1 text-base leading-relaxed text-plum-900/70">
                      {service.short}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-coral-600 transition-all group-hover:gap-3">
                      Află mai mult <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          {/* Bandă oferte & facilități */}
          <Reveal className="mt-16">
            <div className="grid overflow-hidden rounded-3xl bg-white shadow-soft ring-1 ring-plum-100 lg:grid-cols-[1fr_1.25fr]">
              <img
                src="/media/team/dr-vasiliu-birou.jpg"
                alt="Dr. Camelia Vasiliu discutând planul de tratament cu un pacient, la biroul din clinică"
                loading="lazy"
                className="aspect-[4/3] h-full w-full object-cover lg:aspect-auto"
              />
              <div className="flex flex-col items-start justify-center gap-5 card-pad-lg">
                <p className="eyebrow !text-teal-600">Oferte &amp; facilități</p>
                <h2 className="h-display text-3xl md:text-4xl">
                  Tratamente accesibile, fără compromisuri
                </h2>
                <p className="max-w-xl leading-relaxed text-plum-900/70">
                  Abonații MedLife beneficiază de reduceri la tratamentele dentare, iar lucrările ample pot
                  fi achitate în rate, prin partenerul nostru tbi bank. Înainte de orice tratament primești
                  planul complet, cu etape și costuri — fără surprize pe parcurs.
                </p>
                <div className="mt-2 flex flex-wrap gap-3.5">
                  <a href={site.phoneHref} className="btn-primary">
                    <Phone className="h-4 w-4" aria-hidden="true" /> Întreabă-ne de oferte
                  </a>
                  <Link to="/oferte" className="btn-secondary">
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
