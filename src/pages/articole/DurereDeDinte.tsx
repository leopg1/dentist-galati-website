import { Link } from 'react-router-dom'
import ArticleLayout from '../../components/articole/ArticleLayout'
import { ArticleFaq, ArticleImage, Callout, KeyTakeaways, PullQuote } from '../../components/articole/blocks'

export default function DurereDeDinte() {
  return (
    <ArticleLayout slug="durere-de-dinte-ce-faci">
      <p>
        E două noaptea, stai pe marginea patului cu telefonul într-o mână și cu cealaltă lipită de
        obraz, și încerci să calculezi dacă mai poți duce durerea până dimineață. Dacă asta faci chiar
        acum, sări peste teorie. Începem cu ce te ajută în următoarea oră.
      </p>

      <KeyTakeaways
        items={[
          'Rece pe obraz, niciodată cald. Când te întinzi, ține capul mai sus decât restul corpului.',
          'Nu pune pastile direct pe gingie și nu începe un antibiotic rămas de data trecută.',
          'Durerea care pulsează și ține minute întregi înseamnă, de obicei, nerv inflamat — acolo se ajunge la tratament de canal.',
          'Umflătură care crește, febră, greutate la înghițit sau gura care nu se mai deschide: mergi în aceeași zi.',
          'Dacă durerea a trecut singură, problema rareori a trecut cu ea. De multe ori înseamnă că nervul a murit.',
        ]}
      />

      <h2>Ce te ajută cu adevărat în următoarea oră</h2>
      <p>
        Lucrurile care funcționează acasă sunt mai puține decât ai vrea, dar chiar funcționează. Toate
        au același scop: să scadă presiunea din interiorul dintelui, pentru că presiunea e cea care
        doare.
      </p>
      <ul>
        <li>
          <strong>Rece pe obraz</strong>, pe dinafară, nu în gură. O pungă de gheață învelită într-un
          prosop subțire, cincisprezece minute, apoi pauză cincisprezece. Frigul strânge vasele și
          scade pulsul acela din dinte.
        </li>
        <li>
          <strong>Stai cu capul mai sus.</strong> Motivul pentru care durerea se înrăutățește exact
          când te culci nu e ghinion: întins, sângele ajunge mai ușor la cap și crește presiunea în
          camera dintelui. Două perne, sau chiar câteva ore pe fotoliu, fac o diferență pe care o simți.
        </li>
        <li>
          <strong>Clătit cu apă călduță și sare</strong> — o linguriță rasă la un pahar. Ține apa în
          gură fără să faci mișcări bruște, apoi scuip-o. Curăță zona și mai calmează puțin gingia.
        </li>
        <li>
          <strong>Ață dentară, cu blândețe</strong>, dacă bănuiești că ți-a intrat ceva între dinți.
          Se întâmplă mai des decât crezi ca toată drama să vină de la o coajă de floarea-soarelui.
        </li>
        <li>
          <strong>Un antiinflamator</strong> din cele pe care le iei de obicei, dacă nu ai
          contraindicații și dacă ești sigur că îl tolerezi. Mestecă pe partea cealaltă și ocolește
          deocamdată tot ce e foarte rece, foarte fierbinte sau foarte dulce.
        </li>
      </ul>
      <p>
        Atât. Nimic din lista asta nu vindecă nimic — toate cumpără timp până la consultație.
      </p>
      <p>
        Și încă ceva, de făcut înainte să adormi: pune-ți alarma la opt fără un sfert. Ferestrele
        pentru urgențe se ocupă în prima oră a dimineții, iar diferența dintre un telefon dat la 8 și
        unul dat la 11 e, de multe ori, diferența dintre azi și mâine.
      </p>

      <h2>Ce să nu faci, oricât de tentant pare</h2>
      <p>
        Jumătate din cazurile care ajung la mine dimineața au și o problemă în plus, făcută peste
        noapte cu cele mai bune intenții.
      </p>
      <ul>
        <li>
          <strong>Nu pune aspirină sau orice altă pastilă direct pe gingie.</strong> Pastilele nu
          acționează local, se dizolvă în stomac. Pusă pe mucoasă, aspirina o arde chimic, și pe lângă
          dintele care doare te trezești cu o zonă albă, ustorătoare, care mai are nevoie de câteva
          zile ca să se refacă.
        </li>
        <li>
          <strong>Nu pune căldură pe obraz.</strong> Sticla cu apă caldă și prosopul aburit ajută la o
          durere de ceafă. Aici fac fix invers: căldura aduce mai mult sânge într-o zonă deja sub
          presiune și, dacă există o infecție, o ajută să se întindă.
        </li>
        <li>
          <strong>Nu-ți începe singur un antibiotic</strong> rămas din cutia de anul trecut.
          Antibioticul nu e analgezic, nu oprește durerea și, luat aiurea, șterge semnele după care ne
          orientăm noi la consultație. Când e nevoie de el, se prescrie — și rareori singur.
        </li>
        <li>
          <strong>Nu turna alcool pe dinte.</strong> Amorțește treizeci de secunde și irită gingia
          câteva zile.
        </li>
      </ul>
      <p>
        Și, mai ales, nu aștepta să vezi dacă trece. O să treacă, de cele mai multe ori. Despre ce
        înseamnă asta, mai jos.
      </p>

      <h2>Ce îți spune, de fapt, tipul durerii</h2>
      <p>
        La telefon, prima mea întrebare nu e „cât de tare doare”, ci „cum doare”. Intensitatea spune
        cât ești tu de obosit. Tiparul spune unde e problema.
      </p>

      <h3>Un junghi scurt la rece sau la dulce, care se stinge imediat</h3>
      <p>
        Bei apă rece, sare un fulger prin dinte, iar în două-trei secunde s-a terminat. De obicei e
        vorba de o carie care a ajuns aproape de nerv, de o obturație veche cu fisură pe margine sau
        de o zonă de dinte rămasă fără smalț, la colet. Nervul e viu și reacționează normal. Nu e
        urgență de noapte, dar e programare în zilele următoare, cât încă se rezolvă cu o plombă
        obișnuită.
      </p>

      <h3>Durere pulsatilă, care ține minute și se agravează noaptea</h3>
      <p>
        Bate în ritmul inimii. Pornește singură, fără să mănânci nimic, ține un sfert de oră sau
        jumătate, apoi se retrage și revine. Se întinde spre ureche, spre tâmplă, uneori nici nu poți
        arăta cu degetul care dinte e. Ăsta e semnul clasic de nerv inflamat, iar de la stadiul ăsta
        drumul înapoi nu prea mai există: dintele are nevoie de{' '}
        <Link to="/servicii/endodontie-microscop">tratament de canal la microscop</Link>, nu de încă o
        noapte cu analgezice.
      </p>

      <h3>Durere la atins, la mușcat, la închis gura</h3>
      <p>
        Dintele pare mai lung decât ceilalți și te ferești să pui ceva pe el. Aici inflamația a trecut
        deja dincolo de vârful rădăcinii, în os. Adesea vine după o durere pulsatilă care „a trecut”
        acum câteva zile.
      </p>

      <h3>Umflătură pe gingie sau pe obraz</h3>
      <p>
        Un coș mic pe gingie, care uneori se sparge și lasă un gust sărat, înseamnă că infecția și-a
        găsit singură o cale de ieșire. Nu e vindecare, e doar supapă. Umflătura care schimbă forma
        obrazului e altă categorie și o discutăm imediat.
      </p>

      <Callout title="Mergi în aceeași zi, nu a doua zi" tone="coral">
        <p>
          Sună la clinică sau la camera de gardă fără să mai aștepți dacă apare oricare dintre astea:
          umflătură care crește vizibil de la oră la oră, care urcă spre ochi sau coboară spre gât;
          febră și frisoane; greutate la înghițit sau la respirat; gura care nu se mai deschide nici
          cât două degete; o durere apărută după o lovitură, cu dinte mișcat sau deplasat. Infecțiile
          dentare se opresc simplu dacă sunt prinse la timp și devin complicate dacă sunt lăsate să
          urce.
        </p>
      </Callout>

      <h2>De ce o durere de dinte care trece singură nu e o veste bună</h2>
      <p>
        Asta e partea pe care aproape nimeni nu o știe și care umple cabinetele cu cazuri complicate.
      </p>
      <p>
        Nervul dintelui stă închis într-un spațiu rigid, cu pereți de dentină care nu cedează. Când se
        inflamează, se umflă. Neavând unde, presiunea urcă și strânge chiar vasele care îl hrănesc. La
        un moment dat circulația se oprește, iar țesutul moare. Odată mort, nu mai transmite nimic:
        durerea dispare, uneori peste noapte, și te trezești dimineața convins că a fost o criză și
        gata.
      </p>
      <p>Nu a fost.</p>
      <p>
        În interiorul canalelor rămâne țesut necrozat, care se contaminează încet. Poate să treacă o
        săptămână, pot să treacă opt luni de liniște perfectă. Apoi, de regulă într-o perioadă în care
        ești răcit, obosit sau stresat, apare durerea la mușcat. Pe urmă umflătura. Iar dintele care
        se rezolva la început într-o singură ședință ajunge un caz cu os pierdut în jurul rădăcinii.
      </p>

      <PullQuote author="Dr. Mariana Sacara">
        Cel mai prost moment ca să te oprești din tratament e exact atunci când durerea a încetat.
      </PullQuote>

      <h2>Ce se întâmplă când ajungi la cabinet</h2>
      <p>
        Prima ședință are un singur obiectiv: să scoatem durerea. Diagnosticul complet și planul vin
        după ce poți sta liniștit pe scaun.
      </p>
      <p>
        Începem cu întrebări — de când, ce o declanșează, cât ține, dacă te trezește noaptea — și cu
        două-trei teste simple: rece pe dinte, o atingere ușoară pe fiecare dinte din zonă, verificarea
        felului în care muști. De multe ori pacientul indică un dinte, iar testul arată vecinul.
        Durerea de la nerv nu are simț al orientării.
      </p>
      <p>
        Urmează{' '}
        <Link to="/servicii/radiologie-digitala">radiografia digitală, pe care o facem pe loc</Link>,
        în clinică. Nu te trimitem în altă parte și nu aștepți rezultatul până mâine: imaginea apare pe
        ecran în câteva secunde și arată cât de adâncă e caria, dacă există o zonă de infecție la vârful
        rădăcinii și cum arată osul din jur.
      </p>

      <ArticleImage
        src="/media/services/endodontie-tratament-microscop.jpg"
        alt="Tratament endodontic realizat la microscopul operator, în clinica DentaLine din Galați"
        caption="Tratamentul de canal se face integral la microscopul operator Zumax — canalele subțiri se văd, nu se ghicesc."
      />

      <p>
        O paranteză cinstită despre anestezie, fiindcă e prima întrebare care vine pe scaun. Un dinte
        cu nervul inflamat se amorțește mai greu decât unul liniștit: mediul din jurul lui lucrează
        împotriva substanței. De aceea uneori completez anestezia, iar alteori o fac pe alt traseu
        decât cel obișnuit. Nu înseamnă că e ceva în neregulă cu tine și nici că „la mine nu ține
        anestezia”, cum aud des. Înseamnă că dintele e inflamat și că mai avem un pas de făcut până
        să începem.
      </p>

      <p>
        De aici, drumurile se despart. Dacă nervul e doar iritat de o carie profundă, curățăm caria și
        închidem dintele — o ședință obișnuită de{' '}
        <Link to="/servicii/stomatologie-generala">stomatologie generală</Link>. Dacă nervul e
        inflamat ireversibil sau deja mort, deschidem dintele, scădem presiunea, iar durerea cedează
        chiar acolo, pe scaun. Tratamentul de canal îl fac integral la microscopul operator Zumax, care
        mărește de zeci de ori: al patrulea canal al unui molar superior, cel pe care mulți nici nu-l
        caută, se vede pe ecran în loc să fie ghicit după senzație. Când există o umflătură, o drenăm
        întâi și lucrăm pe dinte după ce zona s-a liniștit.
      </p>
      <p>
        Suntem pe Bd. Brăilei, la Ultimul Leu, de luni până vineri, iar la urgențe încercăm mereu să
        găsim o fereastră în aceeași zi. Vin la noi și pacienți din județ, trimiși de colegi pentru
        retratamente sau pentru dinți dați deja la extracție. Dacă vrei să știi cine te tratează
        înainte să ajungi, <Link to="/echipa">echipa e aici, cu tot cu ce face fiecare</Link>. Pentru
        o programare, cel mai rapid rămâne telefonul, dar poți scrie și{' '}
        <Link to="/contact#formular">prin formularul de contact</Link>.
      </p>

      <h2>Dacă ai citit tot asta la trei dimineața</h2>
      <p>
        Durerea de dinte nu e o boală. E un semnal, iar un semnal poate fi dat mai încet pentru câteva
        ore. Exact asta faci acum și e complet în regulă.
      </p>
      <p>
        Doar nu confunda semnalul stins cu problema rezolvată. Dintele nu ține minte noaptea asta.
        Ține minte cât l-ai lăsat așa.
      </p>

      <ArticleFaq
        items={[
          {
            q: 'Ce calmează cel mai repede durerea de dinte noaptea?',
            a: 'Compresa rece pe obraz, aplicată cincisprezece minute cu pauze, poziția cu capul mai sus decât corpul și clătitul cu apă călduță cu sare. Un antiinflamator obișnuit, dacă nu ai contraindicații, ajută în plus. Toate sunt măsuri temporare, până la consultație.',
          },
          {
            q: 'Cât poate ține o durere de dinte dacă nu fac nimic?',
            a: 'De obicei se calmează în câteva zile, dar nu pentru că s-a vindecat ceva. Cel mai frecvent înseamnă că nervul a murit, iar infecția continuă tăcut în os. De aceea o durere care a trecut singură cere oricum o radiografie și o consultație.',
          },
          {
            q: 'Pot să iau antibiotic pentru durerea de dinte?',
            a: 'Nu de capul tău și nu din cutia rămasă de la un tratament anterior. Antibioticul nu calmează durerea și nu curăță interiorul dintelui, iar luat fără indicație maschează semnele după care punem diagnosticul. Se prescrie doar de medic, în situații precise, aproape întotdeauna alături de un tratament pe dinte.',
          },
          {
            q: 'E adevărat că nu trebuie să pun aspirină pe dinte?',
            a: 'Da. Aspirina și celelalte pastile acționează după ce ajung în stomac, nu local. Pusă pe gingie, aspirina produce o arsură chimică a mucoasei, care se vindecă în câteva zile și nu are niciun efect asupra dintelui.',
          },
          {
            q: 'Când trebuie să merg de urgență, în aceeași zi?',
            a: 'Dacă umflătura crește de la oră la oră sau se întinde spre ochi ori spre gât, dacă ai febră și frisoane, dacă înghiți sau respiri cu greutate, dacă nu poți deschide gura nici cât două degete sau dacă durerea a apărut după o lovitură, cu un dinte mișcat. În aceste situații nu se amână pe a doua zi.',
          },
          {
            q: 'De ce nu ține anestezia la un dinte care doare tare?',
            a: 'Un dinte cu nervul inflamat se amorțește mai greu decât unul sănătos, pentru că inflamația schimbă mediul din jurul lui și reduce efectul substanței. Nu este o particularitate a pacientului. Se rezolvă prin completarea anesteziei sau prin alegerea altei tehnici, iar medicul face asta pe loc, în aceeași ședință.',
          },
          {
            q: 'Tratamentul de canal doare?',
            a: 'Ședința se face sub anestezie, iar în majoritatea cazurilor cea mai mare parte a durerii dispare chiar în timpul primei ședințe, când scade presiunea din dinte. În zilele următoare dintele poate rămâne sensibil la mușcat, ceea ce este normal și se atenuează treptat.',
          },
        ]}
      />
    </ArticleLayout>
  )
}
