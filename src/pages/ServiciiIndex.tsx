import { Link } from 'react-router-dom'
import { Phone } from 'lucide-react'
import { services, site } from '../lib/site'
import { usePageMeta } from '../lib/seo'
import CTABand from '../components/CTABand'
import Reveal from '../components/Reveal'
import ServiceCard from '../components/ServiceCard'

export default function ServiciiIndex() {
  usePageMeta(
    'Servicii stomatologice Galați — DentaLine Clinic',
    'Toate serviciile DentaLine Galați: implant dentar, fațete, coroane zirconiu, endodonție la microscop, stomatologie pentru copii, aligneri, igienizare și diagnostic digital.',
  )

  return (
    <>
      {/* Hero index servicii */}
      <section className="bg-plum-50">
        <div className="container-site hero-pad text-center">
          <Reveal>
            <p className="eyebrow">DentaLine Clinic — Estetică dentară și Implantologie</p>
            <h1 className="h-display mx-auto mt-4 max-w-3xl text-4xl md:text-[52px]">
              Serviciile noastre
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-plum-900/75">
              De la prevenție și igienizare până la implanturi și reabilitări complete ale
              zâmbetului: nouă servicii, sub același acoperiș, cu o echipă care te cunoaște de la
              prima vizită. Alege serviciul care te interesează sau sună-ne și te îndrumăm noi.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <a href={site.phoneHref} className="btn-primary">
                <Phone className="h-4 w-4" aria-hidden="true" /> Programează-te: {site.phone}
              </a>
              <Link to="/contact#formular" className="btn-secondary">
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
              <ServiceCard key={service.slug} service={service} delay={(i % 3) * 0.08} />
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
                <h2 className="h-display text-3xl md:text-4xl">Îți facem tratamentul accesibil</h2>
                <p className="max-w-xl leading-relaxed text-plum-900/70">
                  Primești planul complet înainte să începem: etape, costuri și opțiuni de plată.
                  Abonații MedLife au reduceri dedicate, iar lucrările ample se pot achita în rate
                  prin tbi bank.
                </p>
                <div className="mt-2 flex flex-wrap gap-3.5">
                  <a href={site.phoneHref} className="btn-primary">
                    <Phone className="h-4 w-4" aria-hidden="true" /> Întreabă-ne de oferte
                  </a>
                  <Link to="/oferte" className="btn-secondary">
                    Vezi ofertele și facilitățile
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
