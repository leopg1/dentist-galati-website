# DentaLine — Brief pentru agenții de construcție

**Proiect:** site React (Vite + TS + Tailwind v4 + framer-motion + lucide-react + react-router-dom) pentru clinica stomatologică DentaLine (Galați).
**Sursa de conținut (OBLIGATORIU de citit):** `../DentaLine-Site-Continut.md` — textele per pagină sunt acolo, gata scrise. Folosiți-le fidel (adaptări ușoare de UI permise); NU inventați date noi (prețuri, nume, cifre).
**Datele centrale:** `src/lib/site.ts` — contact, servicii, echipă, testimoniale, statistici. Importați de aici, nu hardcodați telefonul/adresa.

## Estetică țintă
Premium medical, feminin, cald, luminos, mult spațiu alb. Fundal `bg-cream`. Serif elegant (Cormorant Garamond) pentru titluri prin utilitarul `h-display`; Manrope pentru corp. Colțuri mari (`rounded-3xl`), umbre moi (`shadow-soft`/`shadow-lift`), accente din paletă: `plum` (primar), `coral` (CTA/accente), `teal` (detalii), `gold` (rating). NU folosiți albastru "medical" generic, NU gri închis pur.

## Utilitare CSS predefinite (folosiți-le, nu reinventați)
- `container-site` — container max-w-7xl centrat
- `section-pad` — padding vertical standard secțiuni
- `eyebrow` — etichetă mică uppercase coral deasupra titlurilor
- `h-display` — titluri serif (adaugă mărimea: `text-4xl md:text-5xl`)
- `card-surface` — card alb rotunjit cu bordură + umbră
- `btn-primary` (coral), `btn-secondary` (contur), `btn-ghost-light` (pe fundal închis)
- `nav-link`

## Componente partajate (importați din `src/components/`)
- `Reveal` — wrapper animație la scroll: `<Reveal delay={0.1}>…</Reveal>`
- `SectionHeading` — `{eyebrow, title, intro, align, light}` — antetul standard al secțiunilor
- `CTABand` — banda finală de conversie (púneți-o la finalul fiecărei pagini care nu folosește ServiceLayout; acceptă `title`/`text`)
- `BeforeAfter` — slider interactiv `{beforeSrc, afterSrc, alt}` (imaginile trebuie să fie fișiere separate!)
- `ServiceLayout` — OBLIGATORIU pentru paginile de servicii: props `{slug, metaTitle, metaDescription, eyebrow, title, intro, heroImage, heroImageAlt, highlights?, ctaTitle?, children}`. Copiii = secțiunile de conținut.
- `usePageMeta(title, description)` din `src/lib/seo.ts` — apelați-l în FIECARE pagină care nu folosește ServiceLayout.

## Manifest media (public/media/…) — folosiți DOAR aceste fișiere
### Echipă (`/media/team/`)
- `dr-camelia-vasiliu.jpg`, `dr-diana-serban.jpg`, `dr-liliana-caraman.jpg`, `dr-mariana-sacara.jpg` — portrete oficiale (uniforme vișinii, au text cu numele ars în imagine în colțul de jos — încadrați object-cover top)
- `asist-diana-ciobotaru.jpg`, `asist-andreea-patriche.jpg`, `asist-oana-androne.jpg` — asistentele
- `echipa-lila.jpg` — grup 4 persoane în uniforme lila (portret vertical) — bun pentru Despre/hero secundar
- `echipa-colaj.jpg` — colaj 2×2 cu cele 4 doctorițe
- `dr-vasiliu-birou.jpg` — Dr. Vasiliu la birou (consultație/programare)
- `dr-serban-scanner.jpg` — Dr. Șerban cu scannerul 3D (portret editorial)
- `portret-masca.jpg` — portret concentrat cu mască (editorial, chirurgie/precizie)
### Clinică (`/media/clinic/`)
- `lucru-4-maini.jpg` — echipa lucrând la 4 mâini (candidat hero) 
- `brand-colaj.jpg` — colaj vertical cu branding DentaLine (șervețel cu logo)
- `cabinet-larg.jpg` — cel mai bun cadru de ansamblu al cabinetului
- `salon-turcoaz.jpg`, `salon-usa-sticla.jpg` — saloanele (galerie)
- `tablou-pepene.jpg` — tabloul-decor cu pepene (personalitate, Despre)
- `tratament-vertical.jpg` — tratament, compoziție verticală excelentă (are figurină Moș Crăciun pe blat — folosiți crop/object-cover ca să nu se vadă bltul)
- `grija-varstnici.jpg` — grijă pacient vârstnic (empatie)
- `colaj-echipa-lucru.jpg` — colaj 3×3 echipa la lucru
- `colaj-lucru-caricatura.jpg` — colaj cu caricatura de pe perete
### Cazuri (`/media/cases/`)
- `inainte-dupa-1.jpg` — before/after suprapus vertical (frontali restaurați)
- `inainte-dupa-2.jpg` — grafică polaroid înainte→după (estetică)
- `inainte-dupa-implant.jpg` — grafică polaroid caz implant/protetică totală
- `inainte-dupa-implant-2.jpg` — caz implant (colaj)
- `colaj-zambete-bw.jpg` — colaj alb-negru + zâmbete finale (excelent vizual)
⚠️ NU există perechi separate înainte/după — folosiți `BeforeAfter` DOAR dacă tăiați imaginea în două în prealabil NU e cazul aici; prezentați cazurile drept carduri cu imaginea colaj + descriere.
### Servicii (`/media/services/`)
- `microscop-zumax.jpg` — prim-plan microscop (endodonție/tehnologie)
- `microscop-lucru.jpg` — medic lucrând la microscop
- `copil-tratament.jpg` — pedodonție (foarte bună)
- `detartraj-macro.jpg` — macro detartraj pe fundal negru (dramatic, igienizare)
- `igienizare-2.jpg`, `igienizare-colaj.jpg` — igienizare suplimentare
- `tratament-lila.jpg` — tratament general/estetică
- `scanare-3d.jpg`, `scanare-3d-larg.jpg` — scanare intraorală (digital)
### Video (`/media/videos/`) — `<video autoPlay muted loop playsInline poster…>` pentru fundal; cu controls pentru restul
- `hero-echipa.mp4` — 25s LANDSCAPE — SINGURUL potrivit ca fundal hero
- `caz-implant.mp4` — 15s vertical — caz înainte/după implant (Cazuri)
- `dr-vasiliu-consultatie.mp4` — 74s vertical — profil Dr. Vasiliu (Echipa)
- `fatete-proba.mp4` — 14s vertical — proba fațetelor (Estetică)
- `copii-tratament.mp4` — 30s vertical — pedodonție (Dr. Șerban)
- `aligneri.mp4` — 19s vertical — aligneri
Videourile verticale: afișați-le în containere `aspect-[9/16] max-h-[560px] rounded-3xl` — nu full-width.

## Reguli
1. **Limba: română** (diacritice corecte) pentru TOT textul vizibil.
2. **Doar fișierele proprii**: modificați EXCLUSIV fișierele paginilor atribuite + componente noi în `src/components/<sectiunea-voastra>/`. NU atingeți `App.tsx`, `site.ts`, `index.css`, componentele partajate, paginile altora.
3. **Accesibilitate**: alt-uri descriptive în română, ierarhie H1→H2→H3 corectă (un singur H1/pagină), focus states (există în utilitare), contrast AA (text pe imagini doar cu overlay `bg-plum-950/60+`).
4. **Responsive mobile-first**: verificați mental 375px / 768px / 1280px; grid-uri `md:grid-cols-2 lg:grid-cols-3`; fără overflow orizontal.
5. **Animații**: doar `Reveal` + micro-hover (`hover:-translate-y-1 transition` pe carduri). Nu abuzați.
6. **Imagini**: `loading="lazy"` (except hero), `object-cover`, aspect ratios fixe ca să nu sară layoutul.
7. La final rulați `npx tsc -b --noEmit` (din dentaline-site/) pentru fișierele voastre — zero erori TS.
