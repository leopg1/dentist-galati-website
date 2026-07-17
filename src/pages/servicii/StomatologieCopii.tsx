import { Baby, GraduationCap, Heart, ShieldCheck, Smile, Sparkles } from 'lucide-react'
import ServiceLayout from '../../components/ServiceLayout'
import VideoLoop from '../../components/VideoLoop'
import Reveal from '../../components/Reveal'
import { doctors } from '../../lib/site'

const servicii = [
  {
    icon: Smile,
    title: 'Consultații și acomodare',
    text: 'Obișnuim copilul cu cabinetul, în ritmul lui — fără grabă și fără presiune.',
  },
  {
    icon: ShieldCheck,
    title: 'Tratamentul cariilor',
    text: 'Tratăm cariile dinților de lapte și ale celor permanenți, cu blândețe.',
  },
  {
    icon: Sparkles,
    title: 'Sigilări și fluorizări',
    text: 'Prevenție eficientă: protejăm dinții sănătoși înainte să apară problemele.',
  },
  {
    icon: Heart,
    title: 'Igienizare adaptată vârstei',
    text: 'Curățare profesională delicată, potrivită pentru dinții celor mici.',
  },
  {
    icon: GraduationCap,
    title: 'Educație pentru periaj corect',
    text: 'Îi învățăm pe cei mici cum să se spele pe dinți corect — și cu plăcere.',
  },
]

export default function StomatologieCopii() {
  const drSerban = doctors.find((d) => d.slug === 'dr-diana-serban')!

  return (
    <ServiceLayout
      slug="stomatologie-copii"
      metaTitle="Dentist copii Galați — Pedodonție DentaLine"
      metaDescription="Stomatologie pentru copii cu blândețe și răbdare: sigilări, tratamente carii, vizite de acomodare. Dr. Diana Șerban, Galați."
      eyebrow="Pedodonție"
      title={
        <>
          Stomatologie pentru copii — <span className="text-coral-600">prima vizită, fără lacrimi</span>
        </>
      }
      intro="La DentaLine, cei mici sunt pacienți cu drepturi depline: au medicul lor blând (Dr. Diana Șerban), timpul lor, ritmul lor — și chiar și o mascotă-dinte care îi așteaptă în cabinet."
      heroImage="/media/services/copil-tratament.jpg"
      heroImageAlt="Copil zâmbind în timpul unui tratament stomatologic blând la DentaLine"
      badge="Medicul celor mici: Dr. Diana Șerban"
      highlights={[
        'Medic dedicat celor mici: Dr. Diana Șerban',
        'Vizite de acomodare, în ritmul copilului',
        'Prevenție: sigilări, fluorizări, educație pentru periaj',
      ]}
      ctaTitle="Programează-i celui mic o vizită de acomodare"
    >
      {/* Servicii pentru copii */}
      <div>
        <Reveal>
          <h2 className="h-display text-3xl md:text-4xl">Ce facem pentru cei mici</h2>
        </Reveal>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {servicii.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06} className={i === servicii.length - 1 ? 'sm:col-span-2' : ''}>
              <div className="card-surface h-full p-6 transition hover:-translate-y-1">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-coral-100 text-coral-600">
                  <s.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold text-plum-950">{s.title}</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-plum-900/70">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Dr. Diana Șerban */}
      <Reveal>
        <div className="overflow-hidden rounded-3xl bg-plum-50">
          <div className="grid gap-0 sm:grid-cols-[240px_1fr]">
            <img
              src={drSerban.photo}
              alt="Dr. Diana Șerban, medicul dedicat copiilor la DentaLine"
              className="aspect-[3/4] h-full w-full object-cover object-top"
              loading="lazy"
            />
            <div className="flex flex-col justify-center p-7 md:p-9">
              <h2 className="h-display text-3xl">Dr. Diana Șerban</h2>
              <p className="mt-1 text-[13.5px] font-semibold uppercase tracking-wide text-plum-900/50">
                Medic stomatolog · Stomatologie pediatrică
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-plum-900/75">
                Dacă întrebi părinții din sala de așteptare, ți-o descriu la fel: medicul care nu grăbește
                niciun copil. Blândă și răbdătoare, cu o atenție la detalii pe care pacienții o laudă
                constant în recenzii.
              </p>
              <blockquote className="mt-5 border-l-2 border-coral-300 pl-4 text-[14px] italic leading-relaxed text-plum-900/65">
                „{drSerban.quote}"
                <footer className="mt-2 not-italic text-[13px] font-semibold text-plum-900/50">
                  — {drSerban.quoteAuthor}
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Video pedodonție */}
      <div className="grid items-center gap-8 md:grid-cols-[minmax(0,300px)_1fr]">
        <Reveal>
          <VideoLoop
            src="/media/videos/copii-tratament.mp4"
            poster="/media/videos/posters/copii-tratament.jpg"
            ariaLabel="Videoclip: tratament stomatologic pentru copii în cabinetul DentaLine"
            className="mx-auto aspect-[9/16] max-h-[560px] w-full rounded-3xl shadow-lift"
          />
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="h-display text-3xl md:text-4xl">Vezi cum lucrăm cu cei mici</h2>
          <p className="mt-4 text-[15.5px] leading-relaxed text-plum-900/75">
            Fără grabă, fără instrumente înfricoșătoare scoase brusc, fără presiune. Dr. Diana Șerban transformă
            fiecare vizită într-o experiență blândă, pe ritmul copilului — iar cei mici pleacă din cabinet cu
            zâmbetul pe buze.
          </p>
          <figure className="mt-6">
            <img
              src="/media/clinic/salon-usa-sticla.jpg"
              alt="Salonul clinicii DentaLine, văzut prin ușa de sticlă"
              className="aspect-[4/3] w-full rounded-3xl object-cover shadow-soft"
              loading="lazy"
            />
            <figcaption className="mt-2.5 text-[13px] font-medium text-plum-900/60">
              În salon îi așteaptă pe cei mici și mascota-dinte a clinicii.
            </figcaption>
          </figure>
        </Reveal>
      </div>

      {/* Sfat pentru părinți */}
      <Reveal>
        <div className="flex flex-col gap-5 rounded-3xl bg-teal-50 p-7 sm:flex-row sm:items-start md:p-9">
          <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-teal-600 shadow-soft">
            <Baby className="h-6 w-6" aria-hidden="true" />
          </span>
          <div>
            <h2 className="font-display text-2xl font-semibold text-plum-950">Sfatul nostru pentru părinți</h2>
            <p className="mt-2.5 text-[15.5px] leading-relaxed text-plum-900/75">
              Prima vizită e bine să aibă loc <strong className="font-semibold text-plum-950">în jurul vârstei de
              2–3 ani</strong> sau la erupția primilor dinți — ca o „vizită de cunoaștere", nu de urgență. Așa,
              cabinetul devine un loc familiar, iar copilul învață de mic că dentistul e un prieten.
            </p>
          </div>
        </div>
      </Reveal>
    </ServiceLayout>
  )
}
