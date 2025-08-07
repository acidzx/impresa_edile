import Image from "next/image";
import {
  ArrowDownIcon,
  ChevronDownIcon,
  CircleChevronDownIcon,
} from "lucide-react";

export default function Home() {
  return (
    <div className="font-sans">
      <header
        className="relative bg-cover bg-center min-h-[50vh] lg:min-h-[90vh] flex items-center justify-end px-6"
        style={{
          backgroundImage:
            "url('https://grassiecrespi.it/images/_MG_7921-12_1.jpg')",
        }}
      >
        <div className="w-fit text-right">
          <h2 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl px-4 py-2 inline bg-[rgb(118,255,0)] box-decoration-clone">
            STED srl
          </h2>
          <p className="mt-8 text-2xl font-medium text-gray-900">
            COSTRUIAMO LA STORIA DEL TERRITORIO
          </p>
          <div className="flex justify-end mr-1">
            <div className="mt-6 flex items-center gap-4 pr-0.5 bg-white -skew-x-6 w-fit px-4 border border-gray-200 shadow py-1">
              <span className="text-sm font-semibold skew-x-6">SCOPRI</span>{" "}
              <div className="h-9 w-9 bg-[rgb(118,255,0)] rounded-full border-4 border-white flex items-center justify-center skew-x-6">
                <ChevronDownIcon className="h-6 w-6 text-black" />
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
