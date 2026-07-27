import { HeartHandshake, Sparkles, Star, Stethoscope } from 'lucide-react'
import { assistants, doctors, site } from '../lib/site'
import { usePageMeta } from '../lib/seo'
import CTABand from '../components/CTABand'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import DoctorCard from '../components/despre/DoctorCard'

const heroBadges = [
  { icon: Stethoscope, label: '4 doamne doctor' },
  { icon: HeartHandshake, label: 'Echipă 100% feminină' },
  { icon: Star, label: `${site.rating}/5 din ${site.reviewCount} de recenzii Google` },
]

export default function Echipa() {
  usePageMeta(
    'Echipa medicală — DentaLine Clinic Galați',
    'Dr. Camelia Vasiliu și echipa DentaLine: patru doamne doctor dedicate esteticii dentare, implantologiei și stomatologiei pentru copii, în Galați.'
  )

  return (
    <>
      {/* Hero */}
      <section className="bg-plum-50">
        <div className="container-site hero-pad text-center">
          <Reveal>
            <p className="eyebrow justify-center">Echipa</p>
            <h1 className="h-display mx-auto mt-3 max-w-3xl text-4xl md:text-[52px]">
              Echipa DentaLine
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-plum-900/75">
              Patru medici, o singură misiune: să îți redăm încrederea în zâmbetul tău.
            </p>
            <ul className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {heroBadges.map((badge) => (
                <li
                  key={badge.label}
                  className="inline-flex items-center gap-2 rounded-full border border-plum-100 bg-white px-4 py-2 text-xs font-bold text-plum-800 shadow-soft"
                >
                  <badge.icon className="h-4 w-4 text-coral-600" aria-hidden="true" />
                  {badge.label}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Medicii */}
      <section className="section-pad">
        <div className="container-site">
          <SectionHeading
            align="left"
            eyebrow="Specializări complementare"
            title="Medicii noștri"
            intro="Una pune implanturi de peste zece ani, alta e medicul preferat al copiilor — împreună acoperă tot ce are nevoie o familie."
          />
          <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-2 lg:gap-8">
            {doctors.map((doctor, i) => (
              <DoctorCard key={doctor.slug} doctor={doctor} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Asistentele */}
      <section className="section-pad bg-plum-50">
        <div className="container-site">
          <SectionHeading
            eyebrow="Sprijin la fiecare pas"
            title="Asistentele noastre"
            intro="Ele răspund la telefon, pregătesc cabinetele și au grijă să nu aștepți mai mult decât trebuie."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 md:mt-16 lg:grid-cols-3 lg:gap-8">
            {assistants.map((assistant, i) => (
              <Reveal key={assistant.slug} delay={0.08 * i} className="h-full">
                <article className="card-surface flex h-full flex-col transition hover:border-plum-200">
                  <div className="card-pad flex flex-1 flex-col">
                    <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-plum-100 ring-1 ring-plum-100">
                      <img
                        src={assistant.photo}
                        alt={`${assistant.name}, ${assistant.role.toLowerCase()} la clinica DentaLine din Galați`}
                        className="h-full w-full object-cover object-top"
                        loading="lazy"
                      />
                    </div>
                    <h3 className="card-title mt-5">{assistant.name}</h3>
                    <p className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-teal-700">
                      {assistant.role}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-plum-900/70">
                      {assistant.bio}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Echipa extinsă + laborator */}
      <section className="section-pad">
        <div className="container-site">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-coral-50 text-coral-600">
              <Sparkles className="h-6 w-6" aria-hidden="true" />
            </span>
            <h2 className="h-display mt-6 text-3xl md:text-4xl">Echipa din spatele echipei</h2>
            <p className="mx-auto mt-5 text-lg leading-relaxed text-plum-900/70">
              În spatele fiecărui zâmbet reușit stă și echipa extinsă: asistente, laboratorul
              partener de tehnică dentară și oamenii care au grijă ca totul să fie steril, curat și
              pregătit pentru tine.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="mx-auto mt-12 max-w-4xl md:mt-16">
            <img
              src="/media/team/echipa-completa.jpg"
              alt="Echipa completă DentaLine Clinic Galați — medici și asistente, în cabinet"
              loading="lazy"
              className="w-full rounded-3xl object-cover shadow-lift"
            />
          </Reveal>
        </div>
      </section>

      <CTABand
        title="Vino să ne cunoști personal"
        text="Programează o consultație — te întâmpinăm cu explicații clare, răbdare și un plan de tratament construit pentru tine."
      />
    </>
  )
}
