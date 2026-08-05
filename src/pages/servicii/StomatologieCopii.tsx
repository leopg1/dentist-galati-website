import { Baby, GraduationCap, Heart, ShieldCheck, Smile, Sparkles } from 'lucide-react'
import ServiceLayout from '../../components/ServiceLayout'
import VideoLoop from '../../components/VideoLoop'
import Reveal from '../../components/Reveal'
import MedicServiciu from '../../components/servicii/MedicServiciu'
import { doctors, testimonials } from '../../lib/site'

const servicii = [
  {
    icon: Smile,
    title: 'Consultații și acomodare',
    text: 'Obișnuim copilul cu cabinetul, în ritmul lui, fără grabă și fără presiune.',
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
    text: 'Îi învățăm pe cei mici cum să se spele pe dinți corect, chiar cu plăcere.',
  },
]

export default function StomatologieCopii() {
  const drSerban = doctors.find((d) => d.slug === 'dr-diana-serban')!
  const recenzieTincuta = testimonials.find((t) => t.author === 'Tincuța T.')!

  return (
    <ServiceLayout
      slug="stomatologie-copii"
      metaTitle="Dentist copii Galați — Pedodonție DentaLine"
      metaDescription="Stomatologie pentru copii cu blândețe și răbdare: sigilări, tratamente carii, vizite de acomodare. Dr. Diana Șerban, Galați."
      eyebrow="Stomatologie pentru copii"
      title={
        <>
          Stomatologie pentru copii — <span className="text-coral-600">prima vizită, fără lacrimi</span>
        </>
      }
      intro="La DentaLine, cei mici sunt pacienți cu drepturi depline: au medicul lor blând (Dr. Diana Șerban), timpul lor și chiar o mascotă-dinte care îi așteaptă în cabinet."
      heroImage="/media/services/copii-consult-serban.jpg"
      heroImageAlt="Dr. Diana Șerban consultând un copil relaxat, pe scaunul stomatologic din clinica DentaLine"
      badge="Medicul celor mici: Dr. Diana Șerban"
      highlights={[
        'Prima vizită: acomodare și joacă, nu tratament',
        'Răbdare și explicații pe limba copilului',
        'Prevenție: sigilări, fluorizări, educație pentru periaj',
      ]}
      ctaTitle="Programează-i celui mic o vizită de acomodare"
    >
      {/* Servicii pentru copii */}
      <div>
        <Reveal>
          <h2 className="h-display text-3xl md:text-4xl">Ce facem pentru cei mici</h2>
        </Reveal>
        <div className="mt-7 grid gap-6 sm:grid-cols-2 lg:gap-8">
          {servicii.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06} className={i === servicii.length - 1 ? 'sm:col-span-2' : ''}>
              <div className="card-surface h-full card-pad transition hover:border-plum-200">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-coral-100 text-coral-600">
                  <s.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 card-title">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-plum-900/70">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Medicul care se ocupă de cei mici */}
      <Reveal>
        <MedicServiciu
          name="Dr. Diana Șerban"
          role="Medic stomatolog · Stomatologia copiilor"
          photo={drSerban.photo}
          photoAlt="Dr. Diana Șerban, medicul dedicat copiilor la DentaLine"
          quote={recenzieTincuta.text}
          quoteAuthor={`${recenzieTincuta.author}, recenzie ${recenzieTincuta.source}`}
        >
          <p>
            Dacă întrebi părinții din sala de așteptare, ți-o descriu la fel: medicul care nu grăbește
            niciun copil. Blândă și răbdătoare, cu o atenție la detalii pe care pacienții o laudă
            constant în recenzii.
          </p>
        </MedicServiciu>
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
          <p className="mt-4 text-base leading-relaxed text-plum-900/75">
            Fără grabă, fără instrumente înfricoșătoare scoase brusc, fără presiune. Dr. Diana Șerban transformă
            fiecare vizită într-o experiență blândă, pe ritmul copilului, iar cei mici pleacă din cabinet cu
            zâmbetul pe buze.
          </p>
          <figure className="mt-6">
            <img
              src="/media/clinic/salon-usa-sticla.jpg"
              alt="Salonul clinicii DentaLine, văzut prin ușa de sticlă"
              className="aspect-[4/3] w-full rounded-3xl object-cover shadow-soft"
              loading="lazy"
            />
            <figcaption className="mt-2.5 text-xs font-medium text-plum-900/60">
              În salon îi așteaptă pe cei mici și mascota-dinte a clinicii.
            </figcaption>
          </figure>
        </Reveal>
      </div>

      {/* Sfat pentru părinți */}
      <Reveal>
        <div className="flex flex-col gap-5 rounded-3xl bg-teal-50 card-pad-lg sm:flex-row sm:items-start">
          <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-teal-600 shadow-soft">
            <Baby className="h-6 w-6" aria-hidden="true" />
          </span>
          <div>
            <h2 className="card-title">Sfatul nostru pentru părinți</h2>
            <p className="mt-2.5 text-base leading-relaxed text-plum-900/75">
              Prima vizită e bine să aibă loc <strong className="font-semibold text-plum-950">în jurul vârstei de
              2–3 ani</strong> sau la erupția primilor dinți — ca o „vizită de cunoaștere”, nu de urgență. Așa,
              cabinetul devine un loc familiar, iar copilul învață de mic că dentistul e un prieten.
            </p>
          </div>
        </div>
      </Reveal>
    </ServiceLayout>
  )
}
