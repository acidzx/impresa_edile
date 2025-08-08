import { ChevronDownIcon } from "lucide-react";

export default function Header() {
  return (
    <header
      className="relative bg-cover bg-center min-h-[90vh] flex items-center justify-end px-6"
      style={{
        backgroundImage: "url('/prova-gigapixel-standard v2-2x.jpg')",
      }}
    >
      <div>
        {" "}
        <div className="w-fit text-right bg-white/90 px-4 pb-8">
          <h2 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl px-4 py-2 inline bg-[rgb(118,255,0)] box-decoration-clone">
            STED s.r.l.
          </h2>
          <div>
            <p className="mt-8 text-3xl font-semibold text-gray-900">
              COSTRUIAMO LA STORIA DEL TERRITORIO{" "}
            </p>{" "}
          </div>
          <div className="flex justify-end mr-1">
            <div className="mt-8 flex items-center gap-4 pr-0.5  -skew-x-6 w-fit px-4  py-1">
              <span className="text-sm font-semibold skew-x-6">SCOPRI</span>{" "}
              <div className="h-7 w-7 bg-[rgb(118,255,0)] rounded-full border-2 border-black flex items-center justify-center skew-x-6">
                {" "}
                <ChevronDownIcon className="h-6 w-6 text-black" />{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>
      </div>
    </header>
  );
}
