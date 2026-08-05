import { Check, Layers, ShieldCheck, Sun } from 'lucide-react'
import ServiceLayout from '../../components/ServiceLayout'
import Reveal from '../../components/Reveal'
import MedicServiciu from '../../components/servicii/MedicServiciu'
import FaqItem from '../../components/contact/FaqItem'

const oferim = [
  'Coroane și punți din zirconiu',
  'Coroane integral ceramice',
  'Lucrări protetice fixe pe implanturi',
  'Reabilitări orale complete',
  'Proteze moderne',
]

const atuuri = [
  {
    icon: ShieldCheck,
    title: 'Biocompatibil',
    text: 'Zirconiul este un material biocompatibil, bine tolerat de organism.',
  },
  {
    icon: Layers,
    title: 'Extrem de rezistent',
    text: 'Suportă forțele masticației ani la rând, inclusiv în zonele laterale, unde solicitarea este cea mai mare.',
  },
  {
    icon: Sun,
    title: 'Transluciditate naturală',
    text: 'Stratificat cu ceramică, imită jocul de lumină al dintelui natural și se integrează firesc între dinții vecini.',
  },
]

export default function CoroaneZirconiu() {
  return (
    <ServiceLayout
      slug="coroane-zirconiu"
      metaTitle="Coroane zirconiu Galați — DentaLine Clinic"
      metaDescription="Coroane din zirconiu stratificat cu ceramică, pe dinți naturali sau implanturi. Amprentă digitală 3D, confort la fiecare etapă."
      eyebrow="Coroane din zirconiu & Protetică"
      title={
        <>
          Coroane din zirconiu — <span className="text-coral-600">rezistență și estetică fără compromis</span>
        </>
      }
      intro="Zirconiul este „standardul de aur” al proteticii moderne: biocompatibil, extrem de rezistent și cu transluciditate apropiată de a dintelui natural. La DentaLine realizăm coroane din zirconiu stratificat cu ceramică, pe dinți naturali sau pe implanturi."
      heroImage="/media/cases/inainte-dupa-implant-2.jpg"
      heroImageAlt="Caz clinic înainte și după: lucrare protetică din zirconiu realizată la DentaLine"
      badge="Zirconiu stratificat cu ceramică"
      highlights={[
        'Coroane cu aspect natural, în armonie cu dinții vecini',
        'Pe dinți naturali sau pe implanturi',
        'Amprentă digitală 3D, rapidă și confortabilă',
        'Colaborare strânsă cu laboratorul de tehnică dentară partener',
      ]}
      ctaTitle="Află ce soluție protetică ți se potrivește"
    >
      {/* De ce zirconiu */}
      <Reveal>
        <section aria-labelledby="zirconiu-atuuri">
          <h2 id="zirconiu-atuuri" className="h-display text-3xl md:text-4xl">
            Trei motive pentru care îl recomandăm
          </h2>
          <div className="mt-7 grid gap-6 sm:grid-cols-3 lg:gap-8">
            {atuuri.map((atu) => (
              <div key={atu.title} className="card-surface card-pad transition hover:border-plum-200">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-plum-50 text-plum-600">
                  <atu.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 card-title">{atu.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-plum-900/70">{atu.text}</p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* Ce oferim */}
      <Reveal>
        <section aria-labelledby="zirconiu-oferim" className="rounded-3xl bg-plum-50 card-pad-lg">
          <h2 id="zirconiu-oferim" className="h-display text-3xl md:text-4xl">
            Soluții protetice pentru fiecare situație
          </h2>
          <ul className="mt-7 grid gap-3.5 sm:grid-cols-2">
            {oferim.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-soft"
              >
                <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal-100 text-teal-600">
                  <Check className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="text-base font-semibold text-plum-950">{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </Reveal>

      {/* Diferențiatorul digital */}
      <Reveal>
        <section aria-labelledby="zirconiu-digital" className="grid items-center gap-8 lg:grid-cols-2">
          <img
            src="/media/services/scanare-3d-larg.jpg"
            alt="Scanare intraorală 3D în clinica DentaLine, pentru amprenta digitală a lucrării protetice"
            loading="lazy"
            className="aspect-[4/3] w-full rounded-3xl object-cover shadow-lift"
          />
          <div>
            <h2 id="zirconiu-digital" className="h-display text-3xl md:text-4xl">
              Amprenta se ia digital, cu scanerul 3D
            </h2>
            <p className="mt-4 text-base leading-relaxed text-plum-900/75">
              Scanerul intraoral 3D înlocuiește pasta clasică de amprentă: fără senzația neplăcută, cu o
              scanare rapidă și confortabilă. Datele ajung digital la laboratorul de tehnică dentară
              partener, cu care lucrăm strâns la fiecare caz.
            </p>
            <ul className="mt-5 space-y-2.5">
              {['Precizie mai mare', 'Adaptare mai bună a lucrării', 'Mai puține ședințe'].map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-base font-medium text-plum-900/85">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-100 text-teal-600">
                    <Check className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </Reveal>

      {/* Medicul care se ocupă de protetică */}
      <Reveal>
        <MedicServiciu
          name="Dr. Camelia Vasiliu"
          role="Medic stomatolog · Protetică pe zirconiu"
          photo="/media/team/dr-camelia-vasiliu.jpg"
          photoAlt="Dr. Camelia Vasiliu, medic stomatolog și fondator DentaLine Clinic Galați"
          quote="Am lucrare de peste 10 ani la doamna doctor… nu am avut probleme niciodată. O persoană nemaipomenită!!"
          quoteAuthor="Daniela R., recenzie Google"
        >
          <p>
            Lucrările protetice din zirconiu sunt realizate de Dr. Camelia Vasiliu, împreună cu
            laboratorul de tehnică dentară partener: de la coroana pentru un singur dinte până la
            reabilitări complete, pe dinți naturali sau pe implanturi.
          </p>
          <p>
            Amprenta se ia cu scanerul intraoral 3D, iar forma și culoarea coroanei se aleg împreună
            cu tine, ca lucrarea finală să se așeze firesc în zâmbetul tău.
          </p>
        </MedicServiciu>
      </Reveal>

      {/* FAQ */}
      <Reveal>
        <section aria-labelledby="zirconiu-faq">
          <h2 id="zirconiu-faq" className="h-display text-3xl md:text-4xl">
            Întrebările pe care ni le pui cel mai des
          </h2>
          <div className="mt-7 space-y-4">
            <FaqItem question="Doare pregătirea dintelui pentru coroană?">
              Șlefuirea se face sub anestezie locală, așa că pe parcursul ei nu simți durere. O
              sensibilitate ușoară după ședință este normală și trece, de regulă, în câteva zile.
            </FaqItem>
            <FaqItem question="Cât durează până primesc coroana finală?">
              În funcție de caz, de la scanare până la lucrarea finală sunt necesare, de regulă,
              câteva ședințe: între ele, laboratorul partener execută coroana, iar tu porți o lucrare
              provizorie. Primești calendarul exact la consultație.
            </FaqItem>
            <FaqItem question="Cât rezistă o coroană din zirconiu?">
              Zirconiul este printre cele mai rezistente materiale protetice: cu igienă corectă și
              controale regulate, o coroană bine adaptată poate rezista mulți ani.
            </FaqItem>
          </div>
        </section>
      </Reveal>
    </ServiceLayout>
  )
}
