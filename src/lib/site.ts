/**
 * Datele centrale ale site-ului DentaLine Clinic.
 * Sursa de adevăr: DentaLine-Site-Continut.md (cercetare 17.07.2026).
 * NU inventați date noi — tot ce e marcat „de confirmat” rămâne formulat prudent.
 */

export const site = {
  name: 'DentaLine Clinic',
  tagline: 'Estetică dentară și Implantologie',
  legalName: 'DR. VASILIU CAMELIA MEDIC DENTIST SRL',
  cui: 'CUI 37983546',
  regCom: 'J17/1336/2017',
  phone: '0742 038 270',
  phoneHref: 'tel:+40742038270',
  email: 'vasiliu.camelia@yahoo.com',
  address: 'Strada Arad, Nr. 6, Bloc PS13B, Parter, Ap. 40, Galați 800323',
  addressShort: 'Bd. Brăilei, Bl. PS13B — „la Ultimul Leu”',
  addressHint: 'Pe Bulevardul Brăilei, zona „Ultimul Leu”, vizavi de Școala Gimnazială Nr. 7',
  schedule: 'Luni – Vineri: 8:00 – 20:00',
  scheduleNote: 'Sună-ne pentru confirmarea disponibilității',
  rating: '4,8',
  reviewCount: 129,
  googleReviewUrl: 'https://www.google.com/maps/search/?api=1&query=DentaLine+Clinic+Galati',
  facebook: 'https://www.facebook.com/DrVasiliuCamelia/',
  instagram: 'https://www.instagram.com/dentaline.clinic/',
  mapsQuery:
    'https://www.google.com/maps/search/?api=1&query=DentaLine+Clinic+Estetic%C4%83+dentar%C4%83+si+Implantologie+Galati',
  mapsEmbed:
    'https://www.google.com/maps?q=DentaLine+Clinic+Estetic%C4%83+dentar%C4%83+si+Implantologie+Galati&output=embed',
} as const

export type Service = {
  slug: string
  title: string
  menuTitle: string
  short: string
  image: string
  imageAlt: string
}

export const services: Service[] = [
  {
    slug: 'implantologie',
    title: 'Implantologie dentară',
    menuTitle: 'Implantologie',
    short:
      'Îți redăm dinții lipsă cu implanturi și lucrări protetice fixe — un singur dinte sau o arcadă întreagă.',
    image: '/media/cases/inainte-dupa-implant.jpg',
    imageAlt: 'Caz clinic înainte și după: lucrare protetică fixă pe implanturi',
  },
  {
    slug: 'estetica-dentara',
    title: 'Estetică dentară & Smile makeover',
    menuTitle: 'Estetică dentară',
    short:
      'Fațete ceramice, albire profesională și transformări complete, cu rezultate naturale planificate digital.',
    image: '/media/cases/colaj-zambete-bw.jpg',
    imageAlt: 'Colaj cu zâmbete transformate prin estetică dentară',
  },
  {
    slug: 'coroane-zirconiu',
    title: 'Coroane din zirconiu & Protetică',
    menuTitle: 'Coroane zirconiu',
    short:
      'Rezistență și estetică de top: coroane din zirconiu stratificat cu ceramică, realizate pe flux digital.',
    image: '/media/cases/inainte-dupa-implant-2.jpg',
    imageAlt: 'Lucrare protetică din zirconiu — înainte și după',
  },
  {
    slug: 'endodontie-microscop',
    title: 'Endodonție la microscop',
    menuTitle: 'Endodonție la microscop',
    short:
      'Salvăm dinți considerați pierduți, cu precizia pe care doar microscopul operator o oferă.',
    image: '/media/services/endodontie-dr-sacara.jpg',
    imageAlt:
      'Dr. Mariana Sacara, medicul care se ocupă de endodonție la DentaLine, lucrând la microscopul operator Zumax',
  },
  {
    slug: 'stomatologie-copii',
    title: 'Stomatologie pentru copii',
    menuTitle: 'Stomatologie copii',
    short: 'Primele vizite fără frică, cu răbdare, blândețe și medicul potrivit pentru cei mici.',
    image: '/media/services/copii-dr-serban.jpg',
    imageAlt:
      'Dr. Diana Șerban consultând cu blândețe un copil în clinica DentaLine din Galați',
  },
  {
    slug: 'aligneri',
    title: 'Ortodonție cu aligneri invizibili',
    menuTitle: 'Aligneri invizibili',
    short: 'Îndreptăm dinții discret, fără aparat metalic — cu gutiere transparente detașabile.',
    image: '/media/services/tratament-lila.jpg',
    imageAlt: 'Tratament stomatologic modern în clinica DentaLine',
  },
  {
    slug: 'igienizare',
    title: 'Igienizare & Profilaxie',
    menuTitle: 'Igienizare & AirFlow',
    short:
      'Detartraj, AirFlow și periaj profesional, o dată la șase luni. Restul stomatologiei devine mult mai simplu.',
    image: '/media/services/detartraj-macro.jpg',
    imageAlt: 'Detartraj profesional cu ultrasunete, prim-plan',
  },
  {
    slug: 'stomatologie-generala',
    title: 'Stomatologie generală',
    menuTitle: 'Stomatologie generală',
    short:
      'Carii, plombe, extracții, dureri apărute peste noapte — stomatologia de zi cu zi, făcută bine.',
    image: '/media/clinic/tratament-vertical.jpg',
    imageAlt: 'Medic stomatolog tratând un pacient în cabinet modern',
  },
  {
    slug: 'radiologie-digitala',
    title: 'Radiologie & Amprentă digitală 3D',
    menuTitle: 'Diagnostic digital',
    short:
      'Radiografie digitală pe loc și scanare intraorală 3D — diagnostic precis, fără drumuri în plus.',
    image: '/media/services/scanare-3d.jpg',
    imageAlt: 'Scanare intraorală 3D cu scaner digital',
  },
]

export type TeamMember = {
  slug: string
  name: string
  role: string
  photo: string
  bio: string
  areas: string[]
  quote?: string
  quoteAuthor?: string
}

export const doctors: TeamMember[] = [
  {
    slug: 'dr-camelia-vasiliu',
    name: 'Dr. Camelia Vasiliu',
    role: 'Medic stomatolog · Fondator & Director medical',
    photo: '/media/team/dr-camelia-vasiliu.jpg',
    bio: 'Absolventă a Universității de Medicină și Farmacie „Grigore T. Popa” din Iași (promoția 2006), Dr. Camelia Vasiliu practică stomatologia de aproape 20 de ani, dintre care peste un deceniu dedicat implantologiei și chirurgiei dentare avansate. Preia cazurile complexe — dinți lipsă, arcade întregi de refăcut — și le duce de la prima radiografie până la coroana finală. A fondat DentaLine pornind de la o convingere simplă: un cabinet stomatologic poate fi un loc în care vii cu drag, nu cu teamă. Recenziile pacienților îi dau dreptate.',
    areas: ['Implantologie dentară', 'Chirurgie dentară avansată', 'Coroane din zirconiu', 'Smile makeover'],
    quote:
      'Recomand cu mare încredere serviciile clinicii! Dr. Vasiliu Camelia și Dr. Sacara Mariana sunt minunate și foarte bune în ce fac.',
    quoteAuthor: 'Vasilica I., recenzie Google',
  },
  {
    slug: 'dr-diana-serban',
    name: 'Dr. Diana Șerban',
    role: 'Medic stomatolog',
    photo: '/media/team/dr-diana-serban.jpg',
    bio: 'Cu cei mici are un talent aparte: le explică pe limba lor, nu se grăbește niciodată și îi convinge să plece de la cabinet fără frică — de multe ori, cerând singuri să mai vină. Dr. Diana Șerban se ocupă de stomatologia pentru copii, de tratamentele cu aligneri — pentru copii și pentru adulți — și de fațetele dentare. Lucrează digital: scanarea intraorală 3D face parte din rutina ei, așa că vezi rezultatul înainte să înceapă tratamentul.',
    areas: [
      'Stomatologie pediatrică',
      'Aligneri — copii și adulți',
      'Fațete & estetică dentară',
      'Stomatologie digitală',
    ],
    quote:
      'Am avut onoarea de a fi pacientul dnei dr. Diana Șerban, fiind plăcut impresionat de profesionalismul, grija și empatia față de actul medical și pacient.',
    quoteAuthor: 'Daniel C., recenzie Google',
  },
  {
    // S-a căsătorit — numele actual este Barbu. Pe ecusoanele și în materialele mai
    // vechi ale clinicii apare numele de dinainte, Caraman.
    slug: 'dr-liliana-barbu',
    name: 'Dr. Liliana Barbu',
    role: 'Medic stomatolog',
    photo: '/media/team/dr-liliana-barbu.jpg',
    bio: 'Pacienții o descriu în recenzii drept „atentă, profesionistă și calmă” — medicul lângă care te relaxezi din prima consultație. Se ocupă de prevenție și igienizare profesională, de albirea dentară și de estetica din compozit: reconstrucții și fațete modelate direct pe dinte, strat cu strat, până când lucrarea nu se mai deosebește de dintele natural. Tot ea este medicul care îi preia pe pacienții cu abonament MedLife.',
    areas: [
      'Prevenție & igienizare profesională',
      'Albire dentară',
      'Reconstrucții estetice din compozit',
      'Fațete din compozit',
    ],
    quote:
      'Am simțit grijă și respect pe tot parcursul tratamentului, iar explicațiile au fost clare și liniștitoare!',
    quoteAuthor: 'Valentin C., recenzie Google',
  },
  {
    slug: 'dr-mariana-sacara',
    name: 'Dr. Mariana Sacara',
    role: 'Medic stomatolog',
    photo: '/media/team/dr-mariana-sacara.jpg',
    bio: 'Endodonția la microscop este specialitatea ei — și se vede. Dr. Mariana Sacara găsește și tratează canalele pe care ochiul liber pur și simplu nu le vede, lucrând la microscopul operator de la primul până la ultimul pas, cu răbdarea unui medic care știe că un dinte salvat corect ține zeci de ani. La ea ajung și cazurile dificile trimise de alți colegi: retratamente, canale calcificate, dinți dați deja la extracție. „Foarte bine pregătită”, spun pacienții în recenzii — iar familiile întregi îi trec pragul cu încredere.',
    areas: ['Endodonție la microscop', 'Tratamente de canal complexe'],
    quote: 'Recomand dr. Mariana Sacara pentru orice tratament! E foarte bine pregătită!',
    quoteAuthor: 'Ionica C., recenzie Google',
  },
]

export const assistants: TeamMember[] = [
  {
    slug: 'asist-diana-ciobotaru',
    name: 'Diana Ciobotaru',
    role: 'Asistentă medicală',
    photo: '/media/team/asist-diana-ciobotaru.jpg',
    bio: 'Prima voce pe care o auzi la telefon și mâna dreaptă a medicilor la fiecare tratament.',
    areas: [],
  },
  {
    slug: 'asist-andreea-patriche',
    name: 'Andreea Patriche',
    role: 'Asistentă medicală',
    photo: '/media/team/asist-andreea-patriche.jpg',
    bio: 'Grijulie și organizată — pregătește fiecare cabinet ca totul să decurgă perfect.',
    areas: [],
  },
  {
    slug: 'asist-oana-androne',
    name: 'Oana Androne',
    role: 'Asistentă medicală',
    photo: '/media/team/asist-oana-androne.jpg',
    bio: 'Ține evidența fiecărui pacient și are grijă ca nimeni să nu aștepte mai mult decât trebuie.',
    areas: [],
  },
  {
    slug: 'asist-anemona-antoneac',
    name: 'Anemona Antoneac',
    role: 'Asistentă medicală',
    photo: '/media/team/asist-anemona-antoneac-hd.jpg',
    bio: 'Calmă și atentă la fiecare detaliu — lângă ea, până și prima vizită pare simplă.',
    areas: [],
  },
  {
    slug: 'asist-cristina-jalba',
    name: 'Cristina Jalba',
    role: 'Asistentă medicală',
    photo: '/media/team/asist-cristina-jalba-hd.jpg',
    bio: 'Instrumentar, sterilizare, pregătirea fiecărei ședințe — nimic nu trece neverificat pe lângă ea.',
    areas: [],
  },
  {
    slug: 'asist-georgiana-andrei',
    name: 'Georgiana Andrei',
    role: 'Asistentă medicală',
    photo: '/media/team/asist-georgiana-andrei-hd.jpg',
    bio: 'Lucrează cot la cot cu Dr. Camelia Vasiliu, de la prima consultație până la lucrarea finală.',
    areas: [],
  },
]

export type Testimonial = {
  text: string
  author: string
  source: string
}

/** Recenzii reale Google/MedAtlas — diacritice normalizate, „…” = trunchiere Google. */
export const testimonials: Testimonial[] = [
  {
    text: 'Recomand cu mare încredere serviciile clinicii! Dr. Vasiliu Camelia și Dr. Sacara Mariana sunt minunate și foarte bune în ce fac. Clinica este foarte curată!',
    author: 'Vasilica I.',
    source: 'Google',
  },
  {
    text: 'Recomand cu mare încredere clinica stomatologică Dentaline! Am avut o experiență foarte bună alături de doamnele doctor Șerban Diana și Vasiliu Camelia, care lucrează cu mult profesionalism și atenție la detalii. Se vede că pun suflet…',
    author: 'Tincuța T.',
    source: 'Google',
  },
  {
    text: 'Dr. Barbu Liliana — foarte atentă, profesionistă și calmă. Am simțit grijă și respect pe tot parcursul tratamentului, iar explicațiile au fost clare și liniștitoare! Recomand dr. Barbu Liliana și echipa!',
    author: 'Valentin C.',
    source: 'Google',
  },
  {
    text: 'Am avut onoarea de a fi pacientul dnei dr. Diana Șerban, fiind plăcut impresionat de profesionalismul, grija și empatia față de actul medical și pacient. Recomand cu căldură serviciile clinicii și a angajatelor acesteia!',
    author: 'Daniel C.',
    source: 'Google',
  },
  {
    text: 'Profesionalism și empatie! Totul la superlativ! O echipă care face minuni!…',
    author: 'Florica I.',
    source: 'Google',
  },
  {
    text: 'Recomand dr. Mariana Sacara pentru orice tratament! E foarte bine pregătită!',
    author: 'Ionica C.',
    source: 'Google',
  },
  {
    text: 'O experiență unică și frumoasă cu doamna Dr. Barbu Liliana. Mulțumesc frumos pentru tot!',
    author: 'Andi A.',
    source: 'Google',
  },
  {
    text: 'Am lucrare de peste 10 ani la doamna doctor… nu am avut probleme niciodată. O persoană nemaipomenită!!',
    author: 'Daniela R.',
    source: 'Google',
  },
  {
    text: 'Super doamnele și domnișoarele. A mers și băiețelul la Dna Doctor Sacara, merge și mama mea și acum și eu.',
    author: 'Violeta G.',
    source: 'Google',
  },
]
