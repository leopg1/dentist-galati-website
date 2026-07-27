import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

import Home from './pages/Home'

const Despre = lazy(() => import('./pages/Despre'))
const Echipa = lazy(() => import('./pages/Echipa'))
const ServiciiIndex = lazy(() => import('./pages/ServiciiIndex'))
const Implantologie = lazy(() => import('./pages/servicii/Implantologie'))
const EsteticaDentara = lazy(() => import('./pages/servicii/EsteticaDentara'))
const CoroaneZirconiu = lazy(() => import('./pages/servicii/CoroaneZirconiu'))
const EndodontieMicroscop = lazy(() => import('./pages/servicii/EndodontieMicroscop'))
const StomatologieCopii = lazy(() => import('./pages/servicii/StomatologieCopii'))
const Aligneri = lazy(() => import('./pages/servicii/Aligneri'))
const Igienizare = lazy(() => import('./pages/servicii/Igienizare'))
const StomatologieGenerala = lazy(() => import('./pages/servicii/StomatologieGenerala'))
const RadiologieDigitala = lazy(() => import('./pages/servicii/RadiologieDigitala'))
const Cazuri = lazy(() => import('./pages/Cazuri'))
const Testimoniale = lazy(() => import('./pages/Testimoniale'))
const Oferte = lazy(() => import('./pages/Oferte'))
const Contact = lazy(() => import('./pages/Contact'))
const Confidentialitate = lazy(() => import('./pages/Confidentialitate'))
const NotFound = lazy(() => import('./pages/NotFound'))

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <a
        href="#continut"
        className="btn-primary sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100]"
      >
        Sari la conținut
      </a>
      <Header />
      <main id="continut" tabIndex={-1} className="flex-1">
        <Suspense fallback={<div className="section-pad container-site" aria-busy="true" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/despre" element={<Despre />} />
            <Route path="/echipa" element={<Echipa />} />
            <Route path="/servicii" element={<ServiciiIndex />} />
            <Route path="/servicii/implantologie" element={<Implantologie />} />
            <Route path="/servicii/estetica-dentara" element={<EsteticaDentara />} />
            <Route path="/servicii/coroane-zirconiu" element={<CoroaneZirconiu />} />
            <Route path="/servicii/endodontie-microscop" element={<EndodontieMicroscop />} />
            <Route path="/servicii/stomatologie-copii" element={<StomatologieCopii />} />
            <Route path="/servicii/aligneri" element={<Aligneri />} />
            <Route path="/servicii/igienizare" element={<Igienizare />} />
            <Route path="/servicii/stomatologie-generala" element={<StomatologieGenerala />} />
            <Route path="/servicii/radiologie-digitala" element={<RadiologieDigitala />} />
            <Route path="/cazuri" element={<Cazuri />} />
            <Route path="/testimoniale" element={<Testimoniale />} />
            <Route path="/oferte" element={<Oferte />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/confidentialitate" element={<Confidentialitate />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
