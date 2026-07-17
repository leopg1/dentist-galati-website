# DentaLine Clinic — Site de prezentare

Site de prezentare pentru **DentaLine Clinic** (Cabinet Stomatologic Dr. Vasiliu Camelia), clinică de estetică dentară și implantologie din Galați.

## Stack

- **React 19 + TypeScript + Vite** (rolldown)
- **Tailwind CSS v4** — design system propriu (paletă plum/coral/teal, serif Cormorant Garamond + Manrope, self-hosted prin Fontsource)
- **react-router-dom** — 18 rute cu code-splitting (`React.lazy`)
- **lucide-react** — iconografie
- Fără alte dependențe runtime: animațiile de scroll, playerul video custom și sliderul Înainte/După sunt implementate nativ (IntersectionObserver + CSS)

## Rulare locală

```bash
npm install
npm run dev        # dezvoltare — http://localhost:5173
npm run build      # build de producție în dist/
npm run preview    # servește build-ul local
```

## Structură

```
src/
├── lib/site.ts        # datele centrale: contact, servicii, echipă, testimoniale
├── lib/faq.ts         # întrebări frecvente (Oferte + Contact)
├── components/        # Header, Footer, CTABand, VideoLoop, BeforeAfter, Reveal…
└── pages/             # Acasă, Despre, Echipa, Cazuri, Testimoniale, Oferte,
    └── servicii/      # 9 pagini de servicii pe ServiceLayout comun
public/media/          # foto/video optimizate (H.264, max 1280px)
docs/                  # documentul de conținut & cercetare al proiectului
```

## Caracteristici

- Player video custom: redare continuă în buclă, buton de sunet/pauză, pornire doar în viewport, `prefers-reduced-motion` respectat
- Slider interactiv Înainte/După pe pagina de Cazuri (drag / touch / tastatură)
- Formular de programare cu preluarea serviciului din pagina sursă (`/contact?serviciu=…#formular`)
- SEO: meta + canonical + Open Graph per pagină, JSON-LD `Dentist`, sitemap, robots
- Accesibilitate: contrast AA, ierarhie de titluri, `aria-label`-uri, focus vizibil
- Responsive verificat pe toate rutele (fără overflow orizontal la 390px)

## Înainte de lansarea publică

Vezi lista „De confirmat cu clienta" din `docs/continut-site.md` (program de weekend, oferta MedLife, specializările medicilor, WhatsApp, prețuri orientative) și recuperarea domeniului `drvasiliucamelia.ro`.
