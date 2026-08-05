import { Link } from 'react-router-dom'
import {
  ArrowRight,
  GraduationCap,
  Handshake,
  MessagesSquare,
  Microscope,
  Phone,
  ScanLine,
  ShieldCheck,
  Star,
  Trophy,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { site } from '../lib/site'
import { usePageMeta } from '../lib/seo'
import CTABand from '../components/CTABand'
import Reveal from '../components/Reveal'
import VideoLoop from '../components/VideoLoop'
import SectionHeading from '../components/SectionHeading'

type Principle = { icon: LucideIcon; title: string; text: string }

const principles: Principle[] = [
  {
    icon: MessagesSquare,
    title: 'Întâi înțelegem, apoi tratăm.',
    text: 'Fiecare plan de tratament începe cu o consultație amănunțită și cu explicații pe înțelesul tău. Vei ști întotdeauna ce facem, de ce și cât costă.',
  },
  {
    icon: Microscope,
    title: 'Minim invaziv, maxim precis.',
    text: 'Folosim microscopul operator, lupe cu mărire și radiologia digitală ca să conservăm cât mai mult din structura naturală a dintelui.',
  },
  {
    icon: ScanLine,
    title: 'Digital de la amprentă la lucrare.',
    text: 'Scanerul intraoral 3D înlocuiește amprenta clasică: mai confortabil pentru tine, mai precis pentru laborator.',
  },
  {
    icon: ShieldCheck,
    title: 'Sterilizare fără compromis.',
    text: 'Protocoale stricte de igienă și sterilizare, pentru siguranța fiecărui pacient, la fiecare vizită.',
  },
  {
    icon: GraduationCap,
    title: 'Învățăm continuu.',
    text: 'Echipa participă constant la cursuri și congrese de specialitate, pentru că stomatologia evoluează, iar noi ținem pasul cu ea.',
  },
]

const consultSteps = [
  {
    title: 'Ne cunoaștem, fără grabă',
    text: 'Discutăm ce te aduce la noi și îți examinăm amănunțit dinții și gingiile.',
  },
  {
    title: 'Vedem exact situația',
    text: 'Radiografia digitală se face pe loc, în cabinet, iar la nevoie adăugăm scanarea intraorală 3D.',
  },
  {
    title: 'Pleci cu planul complet',
    text: 'Îți explicăm opțiunile fără jargon medical și primești planul de tratament, cu etape și costuri clare.',
  },
]

const recognition = [
  {
    icon: Star,
    iconClass: 'bg-gold-400/15 text-gold-500',
    value: `${site.rating}/5`,
    text: `din ${site.reviewCount} de recenzii pe Google, majoritatea cu medicul menționat pe nume.`,
  },
  {
    icon: Trophy,
    iconClass: 'bg-coral-50 text-coral-600',
    value: 'Medalia de Aur',
    text: 'Laureat al proiectului „Șoimii Stomatologiei” 2026, cu scorul 9,8/10.',
  },
  {
    icon: Handshake,
    iconClass: 'bg-teal-50 text-teal-600',
    value: 'MedLife & tbi bank',
    text: 'Partener MedLife pentru abonații rețelei și tbi bank pentru plata tratamentelor în rate.',
  },
]

const gallery = [
  {
    src: '/media/clinic/salon-turcoaz.jpg',
    alt: 'Salon de tratament DentaLine cu unit stomatologic modern, cu tapițerie turcoaz',
  },
  {
    src: '/media/clinic/salon-usa-sticla.jpg',
    alt: 'Salonul clinicii DentaLine văzut prin ușa de sticlă sablată cu logo',
  },
  {
    src: '/media/clinic/tablou-pepene.jpg',
    alt: 'Tabloul-decor cu pepene din clinica DentaLine, un strop de personalitate',
  },
  {
    src: '/media/clinic/grija-varstnici.jpg',
    alt: 'Medic DentaLine ținând de mână un pacient vârstnic, cu grijă și empatie',
  },
]

export default function Despre() {
  usePageMeta(
    'Despre noi — DentaLine Clinic Galați',
    'Echipă de 4 medici, tehnologie digitală și aproape 20 de ani de experiență. Descoperă clinica DentaLine din Galați, la Ultimul Leu.'
  )

  return (
    <>
      {/* Hero: text + imagine cabinet */}
      <section className="bg-plum-50">
        <div className="container-site hero-pad grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow">Despre noi</p>
            <h1 className="h-display mt-3 text-4xl md:text-[52px]">Despre DentaLine Clinic</h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-plum-900/75">
              DentaLine este o clinică de estetică dentară și implantologie din Galați, construită
              în jurul unei idei simple: fiecare pacient merită să fie tratat cu grijă și
              onestitate, cu cea mai bună tehnologie disponibilă.
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-plum-900/70">
              Clinica a fost fondată de <strong className="font-bold">Dr. Camelia Vasiliu</strong>,
              medic stomatolog cu aproape 20 de ani de experiență în stomatologie generală și peste
              un deceniu dedicat implantologiei dentare. În timp, în jurul ei s-a format o echipă de
              patru doamne doctor cu specializări complementare, de la estetică dentară și
              protetică la endodonție la microscop și stomatologie pentru copii, astfel încât
              întreaga familie își găsește aici medicul potrivit.
            </p>
            <div className="mt-8 flex flex-wrap gap-3.5">
              <Link to="/echipa" className="btn-primary">
                Cunoaște echipa <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a href={site.phoneHref} className="btn-secondary">
                <Phone className="h-4 w-4" aria-hidden="true" /> Programează-te: {site.phone}
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.15} className="relative">
            <img
              src="/media/clinic/cabinet-larg.jpg"
              alt="Cabinetul stomatologic DentaLine din Galați, în cadru de ansamblu, luminos și modern"
              className="aspect-[4/5] w-full rounded-3xl object-cover shadow-lift"
              loading="eager"
            />
            <div className="card-surface absolute -bottom-5 left-5 hidden items-center gap-3 px-5 py-3.5 sm:flex">
              <span
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gold-400/15 text-gold-500"
                aria-hidden="true"
              >
                <Trophy className="h-4.5 w-4.5" />
              </span>
              <p className="text-xs font-bold text-plum-900">
                Medalia de Aur · „Șoimii Stomatologiei” 2026
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Cum lucrăm: imagine + 5 principii */}
      <section className="section-pad">
        <div className="container-site grid items-center gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          <Reveal className="order-last lg:order-first">
            <img
              src="/media/clinic/colaj-echipa-lucru.jpg"
              alt="Colaj cu echipa DentaLine în timpul tratamentelor, cu lucru în echipă, la patru mâini"
              className="aspect-[4/5] w-full rounded-3xl object-cover shadow-lift"
              loading="lazy"
            />
          </Reveal>
          <div>
            <SectionHeading
              align="left"
              eyebrow="Principiile noastre"
              title="Cum lucrăm"
              intro="Cinci principii pe care le respectăm la fiecare tratament, de la prima consultație până la ultimul control."
            />
            <ul className="mt-8 space-y-7">
              {principles.map((p, i) => (
                <Reveal key={p.title} delay={0.05 * i}>
                  <li className="flex items-start gap-4">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-plum-50 text-plum-600">
                      <p.icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-plum-950">{p.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-plum-900/70">{p.text}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Consultația la DentaLine: video vertical + pași */}
      <section className="section-pad">
        <div className="container-site">
          <div className="overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-plum-50 via-white to-teal-50/60 shadow-soft ring-1 ring-plum-100">
            <div className="grid items-center gap-12 px-7 py-12 md:px-12 md:py-16 lg:grid-cols-[minmax(0,360px)_1fr] lg:gap-20 lg:px-16">
              <Reveal className="mx-auto w-full max-w-[315px]">
                <VideoLoop
                  src="/media/videos/dr-vasiliu-consultatie.mp4"
                  ariaLabel="Video: Dr. Camelia Vasiliu prezintă cum decurge o consultație la DentaLine"
                  poster="/media/videos/posters/dr-vasiliu-consultatie.jpg"
                  className="aspect-[9/16] max-h-[560px] rounded-3xl shadow-lift ring-1 ring-plum-100"
                />
              </Reveal>
              <div>
                <SectionHeading
                  align="left"
                  eyebrow="Prima vizită"
                  title="Consultația la DentaLine"
                  intro="Dr. Camelia Vasiliu îți arată, pas cu pas, cum decurge prima vizită: fără grabă, fără termeni complicați. Iată la ce să te aștepți:"
                />
                <ol className="mt-8 space-y-6">
                  {consultSteps.map((step, i) => (
                    <Reveal key={step.title} delay={0.08 * i}>
                      <li className="flex items-start gap-5">
                        <span
                          className="font-display inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-plum-200 bg-white text-lg font-semibold text-teal-600"
                          aria-hidden="true"
                        >
                          {i + 1}
                        </span>
                        <div>
                          <h3 className="text-lg font-bold text-plum-950">{step.title}</h3>
                          <p className="mt-1 text-sm leading-relaxed text-plum-900/70">
                            {step.text}
                          </p>
                        </div>
                      </li>
                    </Reveal>
                  ))}
                </ol>
                <Reveal delay={0.25}>
                  <div className="mt-10 flex flex-wrap gap-3.5">
                    <a href={site.phoneHref} className="btn-primary">
                      <Phone className="h-4 w-4" aria-hidden="true" /> Programează-te: {site.phone}
                    </a>
                    <Link to="/contact#formular" className="btn-secondary">
                      Cere o programare online
                    </Link>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recunoaștere */}
      <section className="section-pad">
        <div className="container-site">
          <SectionHeading
            eyebrow="Dovezi, nu promisiuni"
            title="Recunoaștere"
            intro="Nu ne lăudăm singuri — o fac pacienții, juriile de specialitate și partenerii noștri."
          />
          <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-3 lg:gap-8">
            {recognition.map((item, i) => (
              <Reveal key={item.value} delay={0.08 * i} className="h-full">
                <div className="card-surface card-pad-lg flex h-full flex-col items-center text-center transition hover:border-plum-200">
                  <span
                    className={`inline-flex h-14 w-14 items-center justify-center rounded-full ${item.iconClass}`}
                  >
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="font-display mt-5 text-3xl font-semibold text-plum-950">
                    {item.value}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-plum-900/70">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Galerie clinică */}
      <section className="section-pad bg-plum-50">
        <div className="container-site grid items-center gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Clinica noastră"
              title="Un loc în care vii cu drag, nu cu teamă"
              intro="Saloane luminoase și echipamente moderne, plus mici detalii care îți aduc zâmbetul pe buze încă din sala de așteptare. Așa arată DentaLine pe dinăuntru."
            />
            <Reveal delay={0.15}>
              <Link to="/contact" className="btn-secondary mt-8">
                Vino să ne vizitezi <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-4 sm:gap-5">
              {gallery.map((img) => (
                <div key={img.src} className="overflow-hidden rounded-3xl shadow-soft">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="aspect-square w-full object-cover transition duration-500 hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand
        title="Ne-ai citit povestea. Scrie-o și pe a ta."
        text="O programare telefonică durează un minut. De restul ne ocupăm noi."
      />
    </>
  )
}
