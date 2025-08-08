import Header from "@/components/header";
import ImageGrid from "@/components/imageGrid";
import Image from "next/image";

const images = [
  "https://grassiecrespi.it/images/1_PANORAMICAL_VISTA01-REV00.jpg",
  "https://grassiecrespi.it/images/05_Bocconi_Isonzo.jpg",
  "https://grassiecrespi.it/images/5d1971e5-0a97-4278-ac37-4e4f41c2196a.JPG",
  "https://grassiecrespi.it/images/Horti-3.jpg",
  "https://grassiecrespi.it/images/IMG_2895_l.jpg",
  "https://grassiecrespi.it/images/IMG_9634.png",
  "https://grassiecrespi.it/images/PIRELLONE-1.jpg",
  "https://grassiecrespi.it/images/VIA-PALERMO-2.jpg",
  "https://grassiecrespi.it/images/_MG_1324-1.jpg",
  "https://grassiecrespi.it/images/_MG_1380-1.jpg",
  "https://grassiecrespi.it/images/_MG_7820-1.jpg",
];

export default function Home() {
  return (
    <div className="font-sans">
      <Header />

      <div className="flex flex-col lg:flex-row-reverse w-full items-center justify-center py-12 max-w-screen-2xl mx-auto gap-8 px-4">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col gap-y-4">
            <h1 className="text-2xl font-black underline decoration-2 underline-offset-4 decoration-[rgb(118,255,0)] tracking-tighter">
              STED <span className="font-semibold">srl</span>
            </h1>
            <h2 className="text-lg uppercase font-semibold bg-lime-200 w-fit px-2">
              chi siamo
            </h2>
            <p>Centinaia di opere edilizie eseguite a Napoli e provincia.</p>
            <p>
              La STED Srl nasce dall’esperienza e dalla passione per l’edilizia
              del Geometra Antonio Lanzano, che nel 1990 ha scelto di
              raccogliere e proseguire l’eredità professionale del padre, il
              Geometra Gioacchino Lanzano, figura storica e stimata nel panorama
              edilizio di Arzano.
            </p>
            <p>
              In oltre trent’anni di attività, l’azienda ha saputo evolversi e
              consolidarsi, sviluppando competenze trasversali in diversi
              settori dell’edilizia. Oggi STED è un punto di riferimento per:
            </p>
            <ul className="list list-disc list-outside pl-6">
              <li>Costruzioni industriali</li>
              <li>Costruzioni civili</li>
              <li>Ristrutturazione di appartamenti</li>
              <li>Rifacimento facciate di fabbricati</li>
            </ul>
            <p>
              Serietà, competenza e attenzione al cliente sono i valori che
              guidano ogni nostro progetto, con l’obiettivo di garantire
              soluzioni affidabili e di qualità nel rispetto dei tempi e delle
              esigenze specifiche di ogni committente.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <Image
            src="https://grassiecrespi.it/images/_MG_1205.png"
            alt="logo"
            width={1000}
            height={1000}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row w-full items-center justify-center py-12 max-w-screen-2xl mx-auto gap-8 px-4">
        <div className="w-full lg:w-1/2 ">
          <div className="flex flex-col gap-y-4">
            <h1 className="text-2xl font-black underline decoration-2 underline-offset-4 decoration-[rgb(118,255,0)] tracking-tighter">
              STED <span className="font-semibold">srl</span>
            </h1>
            <h2 className="text-lg uppercase font-semibold bg-lime-200 w-fit px-2">
              etica e serietà nella costruzione
            </h2>
            <p className="font-semibold">La nostra impresa edile a Napoli.</p>
            <p>
              Con oltre 50 anni di esperienza nel settore delle costruzioni a
              Napoli e provincia, la nostra impresa edile si distingue per
              l’eccellenza, la serietà e la competenza. Abbiamo realizzato
              centinaia di opere edilizie, contribuendo attivamente allo
              sviluppo del territorio napoletano.
            </p>
            <p>
              Passione, impegno, responsabilità e professionalità sono i valori
              che guidano ogni nostro progetto, tramandati da due generazioni e
              radicati nella nostra cultura aziendale. Scegliere la nostra
              impresa significa affidarsi a un team con una lunga tradizione
              nella costruzione e ristrutturazione di edifici civili e
              industriali, capace di offrire soluzioni su misura con la massima
              qualità e attenzione al cliente.
            </p>
            <p className="bg-[rgb(118,255,0)] px-4 py-2 w-fit font-medium text-sm">
              CONTATTACI
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <Image
            src="https://grassiecrespi.it/images/_MG_1205.png"
            alt="logo"
            width={1000}
            height={1000}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row-reverse w-full items-center justify-center py-12 max-w-screen-2xl mx-auto gap-8 px-4">
        <div className="w-full lg:w-1/2 ">
          <div className="flex flex-col gap-y-4">
            <h1 className="text-2xl font-black underline decoration-2 underline-offset-4 decoration-[rgb(118,255,0)] tracking-tighter">
              STED <span className="font-semibold">srl</span>
            </h1>
            <h2 className="text-lg uppercase font-semibold bg-lime-200 w-fit px-2">
              professionalità e cura nella costruzione
            </h2>
            <p className="font-semibold">La nostra impresa edile a Napoli.</p>
            <p>
              Da oltre 50 anni operiamo nel settore dell’edilizia a Napoli e
              provincia, realizzando centinaia di opere edilizie con competenza,
              affidabilità e un forte senso di responsabilità. Siamo un’impresa
              a conduzione familiare, giunta alla seconda generazione, che ha
              fatto della qualità costruttiva e della cura del cliente i propri
              punti di forza. Siamo specializzati nella ristrutturazione di
              condomini, con interventi mirati che rispettano le normative
              vigenti, migliorano l’efficienza energetica e valorizzano l’intero
              edificio. Offriamo un servizio completo: dalla progettazione alla
              gestione dei cantieri, fino alla consegna finale, con attenzione a
              tempistiche, costi e risultati.
            </p>
            <p>
              Etica professionale, passione, impegno e serietà sono i valori che
              ci contraddistinguono. Affidati a noi per costruzioni edili,
              ristrutturazioni condominiali, manutenzioni straordinarie e
              interventi di riqualificazione nel territorio napoletano.
            </p>
            <p className="bg-[rgb(118,255,0)] px-4 py-2 w-fit font-medium text-sm">
              CONTATTACI
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <Image
            src="https://grassiecrespi.it/images/_MG_1205.png"
            alt="logo"
            width={1000}
            height={1000}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col w-full bg-black min-h-96 py-12 px-4">
        <div className="w-full max-w-screen-2xl mx-auto">
          <h1 className="text-2xl text-white font-black underline decoration-2 underline-offset-4 decoration-[rgb(118,255,0)] tracking-tighter">
            STED <span className="font-semibold">srl</span>
          </h1>
          <p className="p-2 bg-lime-200 w-fit mt-4 font-semibold">
            ESPERIENZA CONSOLIDATA
          </p>
          <p className="text-2xl uppercase text-white mt-4">
            in diversi settori di costruzione
          </p>
          <p className="mt-4 text-white max-w-4xl">
            Con oltre mezzo secolo di attività, la nostra impresa edile a Napoli
            vanta un&apos;esperienza solida e trasversale in diversi ambiti
            della costruzione e ristrutturazione, sia nel settore pubblico che
            in quello privato. Abbiamo affrontato con successo progetti
            complessi, caratterizzati da sfide progettuali e realizzative di
            varia natura, operando con la stessa professionalità sia nei lavori
            pubblici che in iniziative immobiliari private, promosse da clienti
            nazionali e internazionali. La nostra competenza spazia dalle
            costruzioni civili e industriali alle riqualificazioni urbane,
            offrendo soluzioni su misura per ogni esigenza costruttiva.
          </p>
          <p className="mt-4 text-white max-w-4xl">
            Contattaci oggi stesso per una consulenza personalizzata o un
            preventivo gratuito: il nostro team sarà lieto di ascoltare le tue
            esigenze e offrirti la migliore soluzione per i tuoi progetti edili
            a Napoli e provincia.
          </p>
          <p className="bg-[rgb(118,255,0)] px-4 py-2 w-fit font-medium text-sm mt-6">
            CONTATTACI
          </p>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 mt-12 text-white">
            <div className="border-x-2 border-[rgb(118,255,0)] p-4">
              Costruzioni industriali
            </div>
            <div className="border-r-2 border-[rgb(118,255,0)] p-4">
              Costruzioni civili
            </div>
            <div className="border-x-2 lg:border-r-2 border-[rgb(118,255,0)] p-4">
              Ristrutturazione di appartamenti
            </div>
            <div className="border-r-2 border-[rgb(118,255,0)] p-4">
              Rifacimento facciate di fabbricati
            </div>
          </div>

          <div>
            <section className="mt-12">
              <ImageGrid images={images} />
            </section>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row w-full items-center justify-center py-12 max-w-screen-2xl mx-auto gap-8 px-4">
        <div className="w-full lg:w-1/2 ">
          <div className="flex flex-col gap-y-4">
            <h1 className="text-2xl font-black underline decoration-2 underline-offset-4 decoration-[rgb(118,255,0)] tracking-tighter">
              STED <span className="font-semibold">srl</span>
            </h1>
            <h2 className="text-lg uppercase font-semibold bg-lime-200 w-fit px-2">
              COSTRUZIONI INDUSTRIALI
            </h2>
            <p>
              La nostra impresa edile vanta una consolidata esperienza nel
              settore delle costruzioni a Napoli e provincia, con interventi
              specializzati che spaziano dagli scavi e fondazioni fino alla
              realizzazione di strutture di supporto per impianti industriali ad
              alta tecnologia. Nel corso degli anni abbiamo eseguito opere edili
              complesse, distinguendoci per l&apos;affidabilità e l’attenzione
              ai dettagli in ogni fase del progetto. In particolare, siamo
              specializzati nella costruzione di basi, platee e fondazioni
              armate per macchinari industriali a controllo numerico (CNC),
              garantendo la massima precisione, stabilità e durata nel tempo.
            </p>
            <p>
              Da oltre 90 anni costruiamo il territorio napoletano: passione,
              entusiasmo, impegno e forte senso di responsabilità. Valori e
              principi che si tramandano da tre generazioni. I nostri interventi
              includono:
            </p>
            <ul className="list list-disc list-outside pl-6">
              <li>Scavi e movimento terra per opere civili e industriali</li>
              <li>Fondazioni speciali e strutture in cemento armato</li>
              <li>
                Realizzazione di strutture di servizio e supporto tecnico per
                macchine CNC
              </li>
              <li>Costruzioni edili residenziali, commerciali e industriali</li>
            </ul>
            <p>
              Grazie a un team qualificato e a mezzi propri all’avanguardia,
              offriamo un servizio completo, puntuale e conforme alle normative
              vigenti in materia di sicurezza e qualità. Contattaci per una
              consulenza o un preventivo gratuito: saremo lieti di mettere la
              nostra esperienza al servizio del tuo progetto.
            </p>
            <p className="bg-[rgb(118,255,0)] px-4 py-2 w-fit font-medium text-sm">
              SCOPRI CHI SIAMO
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <Image
            src="https://grassiecrespi.it/images/_MG_1205.png"
            alt="logo"
            width={1000}
            height={1000}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row-reverse w-full items-center justify-center py-12 max-w-screen-2xl mx-auto gap-8 px-4">
        <div className="w-full lg:w-1/2 ">
          <div className="flex flex-col gap-y-4">
            <h1 className="text-2xl font-black underline decoration-2 underline-offset-4 decoration-[rgb(118,255,0)] tracking-tighter">
              STED <span className="font-semibold">srl</span>
            </h1>
            <h2 className="text-lg uppercase font-semibold bg-lime-200 w-fit px-2">
              COSTRUZIONI CIVILI
            </h2>
            <p>
              La nostra impresa è specializzata nella realizzazione di
              costruzioni civili di ogni tipologia, con oltre 50 anni di
              esperienza nel settore edile a Napoli e in tutta la Campania.
              Operiamo con competenza e precisione nella costruzione di edifici
              residenziali, commerciali e pubblici, offrendo soluzioni su
              misura, materiali di qualità e una gestione tecnica completa del
              cantiere.
            </p>
            <p>
              Ogni progetto viene seguito in tutte le sue fasi, dalla
              progettazione esecutiva alla consegna finale, con particolare
              attenzione a:
            </p>
            <ul className="list list-disc list-outside pl-6">
              <li>Opere strutturali in cemento armato o muratura</li>
              <li>Scavi, fondazioni e impermeabilizzazioni</li>
              <li>Murature, intonaci, tramezzi e massetti</li>
              <li>Impiantistica certificata (elettrica, idraulica, termica)</li>
              <li>Finiture interne ed esterne di alto livello</li>
            </ul>
            <p>
              Grazie a uno staff tecnico qualificato e all’utilizzo di
              tecnologie e attrezzature moderne, realizziamo nuove costruzioni
              conformi alle normative antisismiche, con elevate prestazioni
              energetiche e ottimo comfort abitativo. Siamo il partner ideale
              per:
            </p>
            <ul className="list list-disc list-outside pl-6">
              <li>Privati che desiderano costruire la propria casa</li>
              <li>Imprese e professionisti del settore immobiliare</li>
              <li>Enti pubblici che richiedono affidabilità e puntualità</li>
              <p>
                Contattaci per maggiori informazioni o per richiedere un
                preventivo gratuito: saremo lieti di accompagnarti nella
                realizzazione della tua prossima costruzione civile con serietà,
                trasparenza e qualità certificata.
              </p>
            </ul>
            <p className="bg-[rgb(118,255,0)] px-4 py-2 w-fit font-medium text-sm">
              SCOPRI CHI SIAMO
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <Image
            src="https://grassiecrespi.it/images/_MG_1205.png"
            alt="logo"
            width={1000}
            height={1000}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row w-full items-center justify-center py-12 max-w-screen-2xl mx-auto gap-8 px-4">
        <div className="w-full lg:w-1/2 ">
          <div className="flex flex-col gap-y-4">
            <h1 className="text-2xl font-black underline decoration-2 underline-offset-4 decoration-[rgb(118,255,0)] tracking-tighter">
              STED <span className="font-semibold">srl</span>
            </h1>
            <h2 className="text-lg uppercase font-semibold bg-lime-200 w-fit px-2">
              RISTRUTTURAZIONE DI APPARTAMENTI
            </h2>
            <p>
              Offriamo un servizio specializzato nella ristrutturazione chiavi
              in mano di appartamenti a Napoli e provincia, curando ogni fase
              dell’intervento con materiali di pregio, soluzioni tecniche
              moderne e una manodopera altamente qualificata.
            </p>
            <p>
              La nostra impresa edile garantisce risultati di alta qualità, sia
              dal punto di vista estetico che funzionale, grazie a una gestione
              integrata dei lavori, che comprende:
            </p>
            <ul className="list list-disc list-outside pl-6">
              <li>Demolizioni e opere murarie</li>
              <li>
                Impianti idraulici e termo-sanitari a norma e ad alta efficienza
              </li>
              <li>
                Impianti elettrici certificati con predisposizione per domotica
              </li>
              <li>
                Pavimentazioni, rivestimenti, infissi e finiture di pregio
              </li>
              <li>Tinteggiature, controsoffitti e illuminazione integrata</li>
            </ul>
            <p>
              Ogni progetto viene sviluppato su misura, con soluzioni
              personalizzate che uniscono comfort, design e risparmio
              energetico, nel pieno rispetto dei tempi e del budget concordato.
              Collaboriamo con architetti, interior designer e fornitori
              selezionati per offrire un risultato finale all’altezza delle
              aspettative, valorizzando ogni spazio con attenzione ai dettagli e
              alle esigenze del cliente. Contattaci per un sopralluogo e un
              preventivo gratuito: siamo pronti ad accompagnarti in ogni fase
              della ristrutturazione del tuo appartamento, con serietà,
              competenza e qualità superiore.
            </p>
            <p className="bg-[rgb(118,255,0)] px-4 py-2 w-fit font-medium text-sm">
              SCOPRI CHI SIAMO
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <Image
            src="https://grassiecrespi.it/images/_MG_1205.png"
            alt="logo"
            width={1000}
            height={1000}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row-reverse w-full items-center justify-center py-12 max-w-screen-2xl mx-auto gap-8 px-4">
        <div className="w-full lg:w-1/2 ">
          <div className="flex flex-col gap-y-4">
            <h1 className="text-2xl font-black underline decoration-2 underline-offset-4 decoration-[rgb(118,255,0)] tracking-tighter">
              STED <span className="font-semibold">srl</span>
            </h1>
            <h2 className="text-lg uppercase font-semibold bg-lime-200 w-fit px-2">
              LIFTING FABBRICATI
            </h2>
            <p>
              La nostra impresa edile vanta una consolidata esperienza nel
              settore delle costruzioni a Napoli e provincia, con interventi
              specializzati che spaziano dagli scavi e fondazioni fino alla
              realizzazione di strutture di supporto per impianti industriali ad
              alta tecnologia. Nel corso degli anni abbiamo eseguito opere edili
              complesse, distinguendoci per l&apos;affidabilità e l’attenzione
              ai dettagli in ogni fase del progetto. In particolare, siamo
              specializzati nella costruzione di basi, platee e fondazioni
              armate per macchinari industriali a controllo numerico (CNC),
              garantendo la massima precisione, stabilità e durata nel tempo.
            </p>
            <p>
              Da oltre 90 anni costruiamo il territorio napoletano: passione,
              entusiasmo, impegno e forte senso di responsabilità. Valori e
              principi che si tramandano da tre generazioni.
            </p>
            <p className="bg-[rgb(118,255,0)] px-4 py-2 w-fit font-medium text-sm">
              SCOPRI CHI SIAMO
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <Image
            src="https://grassiecrespi.it/images/_MG_1205.png"
            alt="logo"
            width={1000}
            height={1000}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
