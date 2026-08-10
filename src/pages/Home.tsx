import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Award,
  Check,
  CreditCard,
  Handshake,
  HeartHandshake,
  Microscope,
  Phone,
  ShieldCheck,
  Star,
  Trophy,
} from 'lucide-react'
import { articles } from '../lib/articles'
import { services, site, testimonials } from '../lib/site'
import { usePageMeta } from '../lib/seo'
import ArticleCard from '../components/articole/ArticleCard'
import CTABand from '../components/CTABand'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import ServiceCard from '../components/ServiceCard'
import Stars from '../components/Stars'

/* ─────────────────────────── Date locale secțiuni ─────────────────────────── */

const whyCards = [
  {
    icon: Award,
    title: 'Experiență dovedită',
    text: 'Clinica fondată de Dr. Camelia Vasiliu, medic stomatolog cu aproape două decenii de experiență și peste un deceniu dedicat implantologiei dentare.',
    iconClass: 'bg-plum-100 text-plum-700',
    span: 'lg:col-span-3',
  },
  {
    icon: Microscope,
    title: 'Tehnologie care face diferența',
    text: 'Endodonție la microscop Zumax, amprentă digitală cu scaner 3D și radiologie digitală în cabinet, pentru diagnostic precis și tratamente minim invazive.',
    iconClass: 'bg-teal-100 text-teal-700',
    span: 'lg:col-span-3',
  },
  {
    icon: HeartHandshake,
    title: 'O echipă care pune suflet',
    text: 'Dr. Vasiliu, Dr. Șerban, Dr. Barbu și Dr. Sacara, fiecare cu propriile recenzii de 5 stele de la pacienții ei.',
    iconClass: 'bg-coral-100 text-coral-600',
    span: 'lg:col-span-2',
  },
  {
    icon: ShieldCheck,
    title: 'Prevenție înainte de toate',
    text: 'Evaluăm și tratăm problemele dentare și gingivale în stadii incipiente, prevenind complicații mai grave în viitor.',
    iconClass: 'bg-teal-100 text-teal-700',
    span: 'lg:col-span-2',
  },
  {
    icon: CreditCard,
    title: 'Transparență și acces',
    text: 'Planuri de tratament în scris, fără termeni complicați, reduceri MedLife și plata în rate prin tbi bank.',
    iconClass: 'bg-plum-100 text-plum-700',
    span: 'md:col-span-2 lg:col-span-2',
  },
]

/* ─────────────────────────────────── Pagina ─────────────────────────────────── */

export default function Home() {
  const heroVideoRef = useRef<HTMLVideoElement>(null)

  // nu pornim videoclipul de fundal pentru utilizatorii cu prefers-reduced-motion
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      heroVideoRef.current?.pause()
    }
  }, [])

  usePageMeta(
    'DentaLine Clinic — Dentist Galați · Implant & Estetică dentară',
    'Clinică stomatologică în Galați: implant dentar, coroane zirconiu, fațete, endodonție la microscop. 4,8★ din 129 de recenzii. ☎ 0742 038 270',
  )

  return (
    <>
      {/* ── 1. HERO cu video de fundal ─────────────────────────────────────── */}
      <section className="relative flex min-h-[calc(100svh-76px)] items-center overflow-hidden bg-plum-950 lg:min-h-[88svh]">
        {/* Cadru static afișat imediat, sub video, până când acesta începe redarea */}
        <img
          src="/media/clinic/hero-poster.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <video
          ref={heroVideoRef}
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/media/clinic/hero-poster.jpg"
          aria-hidden="true"
        >
          <source src="/media/videos/hero-echipa.mp4" type="video/mp4" />
        </video>
        {/* Overlay pentru lizibilitate (contrast AA pe text alb) */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-plum-950/85 via-plum-950/60 to-plum-950/30"
          aria-hidden="true"
        />
        <div
          className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-plum-950/80 to-transparent"
          aria-hidden="true"
        />

        <div className="container-site relative hero-pad">
          <Reveal initialVisible>
            <p className="eyebrow !text-teal-300">Estetică dentară & Implantologie · Galați</p>
            <h1 className="h-display mt-3 max-w-3xl text-[40px] !text-white sm:text-5xl md:mt-4 md:text-6xl lg:text-7xl">
              Zâmbetul tău începe aici.
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/85 md:mt-6 md:text-xl">
              Estetică dentară și implantologie în Galați. O echipă de doamne doctor dedicate,
              cu tehnologie digitală de ultimă generație și grijă reală la fiecare vizită.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3 md:mt-9 md:gap-4">
              <a href={site.phoneHref} className="btn-primary">
                <Phone className="h-4 w-4" aria-hidden="true" /> Programează-te: {site.phone}
              </a>
              <Link to="/contact#formular" className="btn-ghost-light">
                Cere o programare online <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>

          {/* Trust bar */}
          <Reveal delay={0.2}>
            <ul className="mt-8 flex max-w-4xl flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/15 pt-5 text-xs font-semibold text-white/85 md:mt-14 md:gap-x-10 md:gap-y-4 md:pt-7 md:text-sm">
              <li className="inline-flex items-center gap-2.5">
                <Star className="h-5 w-5 fill-gold-400 text-gold-400" aria-hidden="true" />
                {site.rating}/5 din {site.reviewCount} de recenzii Google
              </li>
              <li className="inline-flex items-center gap-2.5">
                <Trophy className="h-5 w-5 text-gold-400" aria-hidden="true" />
                Medalia de Aur „Șoimii Stomatologiei” 2026
              </li>
              <li className="inline-flex items-center gap-2.5">
                <Handshake className="h-5 w-5 text-teal-300" aria-hidden="true" />
                Partener MedLife & tbi bank
              </li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ── 2. Preview servicii ────────────────────────────────────────────── */}
      <section className="section-pad bg-plum-50">
        <div className="container-site">
          <SectionHeading
            eyebrow="Serviciile noastre"
            title="Ce facem cel mai bine"
            intro="Implanturi, coroane din zirconiu, endodonție la microscop, prima vizită a celui mic: nouă servicii sub același acoperiș, pe Bulevardul Brăilei."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3 md:mt-16 lg:gap-8">
            {services.slice(0, 6).map((service, i) => (
              <ServiceCard key={service.slug} service={service} delay={(i % 3) * 0.08} />
            ))}
          </div>
          <Reveal className="mt-12 text-center">
            <Link to="/servicii" className="btn-secondary">
              Vezi toate serviciile <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── 3. Preview „Despre” ────────────────────────────────────────────── */}
      <section className="section-pad">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="aspect-[4/3] overflow-hidden rounded-3xl shadow-lift">
              <img
                src="/media/team/echipa-medici-magenta.jpg"
                alt="Cele patru doamne doctor de la DentaLine Clinic Galați, zâmbind în cabinet"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="card-surface absolute -bottom-6 -right-4 flex items-center gap-3.5 p-5 sm:-right-8">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gold-400/20 text-gold-500">
                <Trophy className="h-6 w-6" aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm font-bold text-plum-950">Medalia de Aur — 9,8/10</p>
                <p className="text-xs font-medium text-plum-900/70">
                  „Șoimii Stomatologiei” 2026
                </p>
              </div>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              align="left"
              eyebrow="Despre noi"
              title="Bine ai venit la DentaLine"
            />
            <Reveal delay={0.1}>
              <blockquote className="mt-7 border-l-2 border-coral-400 pl-6">
                <p className="font-display text-2xl font-medium leading-snug text-plum-900 md:text-[1.7rem]">
                  „Sunt Dr. Vasiliu Camelia, medic stomatolog, și împreună cu echipa mea te invit
                  să descoperi experiența de a avea un zâmbet sănătos și frumos.”
                </p>
              </blockquote>
              <p className="mt-6 text-lg leading-relaxed text-plum-900/70">
                De aproape 20 de ani, tratăm pacienții din Galați cu aceeași convingere: un zâmbet
                sănătos se construiește cu grijă, tehnologie modernă și încredere reciprocă.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/echipa" className="btn-secondary">
                  Cunoaște-ne echipa <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 4. Testimoniale preview ────────────────────────────────────────── */}
      <section className="section-pad bg-plum-50">
        <div className="container-site">
          <SectionHeading
            eyebrow="Testimoniale"
            title="Ce spun pacienții noștri"
            intro={`${site.rating} din 5 stele, din ${site.reviewCount} de recenzii pe Google. Multe recenzii pomenesc medicul pe nume — semn că oamenii țin minte cine i-a tratat.`}
          />
          <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-3 lg:gap-8">
            {testimonials.slice(0, 3).map((t, i) => (
              <Reveal key={t.author} delay={i * 0.08} className="h-full">
                <figure className="card-surface relative flex h-full flex-col p-7 pt-9 md:p-8 md:pt-10">
                  <span
                    className="pointer-events-none absolute -top-1 left-6 select-none font-display text-[5.5rem] leading-none text-plum-200"
                    aria-hidden="true"
                  >
                    „
                  </span>
                  {/* Stelele stau în dreapta, ghilimeaua decorativă în stânga — nu se ating nici pe mobil */}
                  <Stars className="justify-end" />
                  <blockquote className="mt-4 flex-1">
                    <p className="leading-relaxed text-plum-900/80">{t.text}</p>
                  </blockquote>
                  <figcaption className="mt-6 border-t border-plum-100 pt-4 text-sm">
                    <span className="font-bold text-plum-950">{t.author}</span>
                    <span className="text-plum-900/70"> · recenzie {t.source}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12 text-center">
            <Link to="/testimoniale" className="btn-secondary">
              Vezi toate recenziile <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── 5. De ce DentaLine ─────────────────────────────────────────────── */}
      <section className="section-pad">
        <div className="container-site">
          <SectionHeading
            eyebrow="De ce DentaLine"
            title="De ce pacienții ne aleg — și rămân alături de noi"
          />
          <div className="mt-12 grid gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-6 md:mt-16">
            {whyCards.map((card, i) => (
              <Reveal key={card.title} delay={i * 0.06} className={card.span}>
                <article className="card-surface card-pad-lg h-full transition hover:border-plum-200">
                  <div
                    className={`grid h-12 w-12 place-items-center rounded-2xl ${card.iconClass}`}
                  >
                    <card.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="card-title mt-5">{card.title}</h3>
                  <p className="mt-3 leading-relaxed text-plum-900/70">{card.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Banda MedLife & tbi bank ────────────────────────────────────── */}
      <section className="section-pad">
        <div className="container-site">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-plum-50 via-white to-teal-50/60 shadow-soft ring-1 ring-plum-100">
              <div className="relative grid gap-10 px-7 py-12 md:px-12 md:py-16 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:gap-16 lg:px-16">
                <div>
                  <p className="eyebrow !text-teal-600">Oferte & facilități</p>
                  <h2 className="h-display mt-3 text-4xl md:text-5xl">
                    Ai abonament MedLife?
                  </h2>
                  <p className="mt-5 max-w-xl text-lg leading-relaxed text-plum-900/70">
                    La DentaLine beneficiezi de avantaje dedicate abonaților — iar dacă ai nevoie
                    de un tratament amplu, îl poți achita în rate, prin tbi bank.
                  </p>
                  <ul className="mt-7 space-y-3.5">
                    {[
                      '20% reducere la tratamentele dentare',
                      'Detartraj și AirFlow gratuit',
                      'Consultație gratuită',
                    ].map((benefit) => (
                      <li key={benefit} className="flex items-center gap-3 font-semibold text-plum-950">
                        <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-teal-100 text-teal-600">
                          <Check className="h-4 w-4" aria-hidden="true" />
                        </span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 text-sm text-plum-500">(condiții în clinică)</p>
                </div>

                <div className="flex flex-col gap-6">
                  <div className="rounded-3xl border border-plum-100 bg-white card-pad shadow-hair">
                    <div className="flex items-center gap-3.5">
                      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-plum-100 text-plum-700">
                        <CreditCard className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <p className="font-bold text-plum-950">Plata în rate prin tbi bank</p>
                    </div>
                    <p className="mt-3.5 leading-relaxed text-plum-900/70">
                      Un implant, o reabilitare protetică sau un smile makeover se pot plăti și în
                      rate lunare, prin tbi bank. Cererea se completează la noi în clinică, iar
                      răspunsul ajunge rapid.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <a href={site.phoneHref} className="btn-primary">
                      <Phone className="h-4 w-4" aria-hidden="true" /> Întreabă-ne de oferte
                    </a>
                    <Link to="/oferte" className="btn-secondary">
                      Vezi toate ofertele
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 7. De pe blog ──────────────────────────────────────────────────── */}
      <section className="border-t border-plum-100 bg-plum-50/40 section-pad">
        <div className="container-site">
          <SectionHeading
            eyebrow="De pe blog"
            title="Întrebările din cabinet, explicate pe îndelete"
            intro="Frica de dentist, durerea care apare noaptea, prima vizită a copilului — le răspundem pe larg, chiar medicii care se ocupă de ele."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 md:mt-16">
            {articles.slice(0, 3).map((a, i) => (
              <ArticleCard key={a.slug} article={a} delay={i * 0.08} />
            ))}
          </div>
          <Reveal className="mt-12 text-center">
            <Link to="/articole" className="btn-secondary">
              Vezi toate articolele <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── 8. CTA final ───────────────────────────────────────────────────── */}
      <CTABand />
    </>
  )
}
