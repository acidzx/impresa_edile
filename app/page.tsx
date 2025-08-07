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

      <div className="flex flex-col lg:flex-row w-full items-center justify-center py-12 max-w-screen-2xl mx-auto gap-8 px-4">
        <div className="w-full lg:w-1/2 ">
          <div className="flex flex-col gap-y-4">
            <h1 className="text-2xl font-black underline decoration-2 underline-offset-4 decoration-[rgb(118,255,0)] tracking-tighter">
              STED <span className="font-semibold">srl</span>
            </h1>
            <h2 className="text-lg uppercase font-semibold">
              etica e professionalità nella costruzione
            </h2>
            <p>Oltre 1.200 opere edilizie eseguite a Milano e provincia.</p>
            <p>
              Da oltre 90 anni costruiamo il territorio milanese: passione,
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

      <div className="flex flex-col w-full bg-black min-h-96 py-12 px-4">
        <div className="w-full max-w-screen-2xl mx-auto">
          <h1 className="text-2xl text-white font-black underline decoration-2 underline-offset-4 decoration-[rgb(118,255,0)] tracking-tighter">
            STED <span className="font-semibold">srl</span>
          </h1>
          <p className="px-4 py-2 bg-lime-200 w-fit mt-4 font-semibold">
            ESPERIENZA CONSOLIDATA
          </p>
          <p className="text-2xl uppercase text-white mt-4">
            in diversi settori di costruzione
          </p>
          <p className="mt-4 text-white max-w-4xl">
            In quasi un secolo di storia l'impresa ha dimostrato di saper
            affrontare lavori con problematiche progettuali e realizzative molto
            diverse fra loro sia nei lavori pubblici che nell'ambito di
            iniziative immobiliari private promosse da clienti nazionali ed
            internazionali.
          </p>
          <p className="bg-[rgb(118,255,0)] px-4 py-2 w-fit font-medium text-sm mt-6">
            SCOPRI OPERE E SETTORI
          </p>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 mt-12 text-white">
            <div className="border-x-2 border-[rgb(118,255,0)] p-4">
              FEATURE 1
            </div>
            <div className="border-r-2 border-[rgb(118,255,0)] p-4">
              FEATURE 2
            </div>
            <div className="border-x-2 lg:border-r-2 border-[rgb(118,255,0)] p-4">
              FEATURE 3
            </div>
            <div className="border-r-2 border-[rgb(118,255,0)] p-4">
              FEATURE 4
            </div>
          </div>

          <div>
            <section className="mt-12">
              <ImageGrid images={images} />
            </section>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row-reverse w-full items-center justify-center py-12 max-w-screen-2xl mx-auto gap-8 px-4">
        <div className="w-full lg:w-1/2 ">
          <div className="flex flex-col gap-y-4">
            <h1 className="text-2xl font-black underline decoration-2 underline-offset-4 decoration-[rgb(118,255,0)] tracking-tighter">
              STED <span className="font-semibold">srl</span>
            </h1>
            <h2 className="text-lg uppercase font-semibold">
              etica e professionalità nella costruzione
            </h2>
            <p>Oltre 1.200 opere edilizie eseguite a Milano e provincia.</p>
            <p>
              Da oltre 90 anni costruiamo il territorio milanese: passione,
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
      <div className="flex flex-col lg:flex-row w-full items-center justify-center py-12 max-w-screen-2xl mx-auto gap-8 px-4">
        <div className="w-full lg:w-1/2 ">
          <div className="flex flex-col gap-y-4">
            <h1 className="text-2xl font-black underline decoration-2 underline-offset-4 decoration-[rgb(118,255,0)] tracking-tighter">
              STED <span className="font-semibold">srl</span>
            </h1>
            <h2 className="text-lg uppercase font-semibold">
              etica e professionalità nella costruzione
            </h2>
            <p>Oltre 1.200 opere edilizie eseguite a Milano e provincia.</p>
            <p>
              Da oltre 90 anni costruiamo il territorio milanese: passione,
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
