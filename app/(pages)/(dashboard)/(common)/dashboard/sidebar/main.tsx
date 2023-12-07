"use client";
import { useRouter } from "next/navigation";
import BrandSwitcher from "./brand/main";

export interface SidebarProps {
  active?: string;
}

export function Sidebar({ active } : SidebarProps) {
  return (
    <aside
      id="cta-button-sidebar"
      className="flex w-[15rem] h-full shadow-md flex-shrink-0"
      aria-label="Sidebar"
    >
      <div className="w-full h-full flex flex-col justify-between py-[2.5rem] px-[2rem] overflow-y-auto relative bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="flex-col items-start gap-[2rem] inline-flex">
          <a
            href="/gallery/now"
            className="self-stretch justify-start items-center gap-[1rem] inline-flex h-[3rem]"
          >
            <div className="w-[2.5rem] h-[2.5rem] bg-gradient-to-br from-cyan-500 to-violet-500 rounded-full" />
            <div className="text-center text-white text-2xl font-bold leading-9">
              Gallery
            </div>
          </a>
          <a
            href="/sail/inspire"
            className="self-stretch justify-start items-center gap-[1rem] inline-flex h-[3rem]"
          >
            <div className="w-[2.5rem] h-[2.5rem] bg-gradient-to-br from-red-500 to-amber-300 rounded-full" />
            <div className="text-center text-white text-2xl font-bold leading-9">
              Sail
            </div>
          </a>
          <a
            href="/craft/speech"
            className="self-stretch justify-start items-center gap-[1rem] inline-flex h-[3rem]"
          >
            <div className="w-[2.5rem] h-[2.5rem] bg-gradient-to-br from-amber-300 to-emerald-400 rounded-full" />
            <div className="text-center text-white text-2xl font-bold leading-9">
              Craft
            </div>
          </a>
          <a
            href="/quest/apollo"
            className="self-stretch justify-start items-center gap-[1rem] inline-flex h-[3rem]"
          >
            <div className="w-[2.5rem] h-[2.5rem] bg-gradient-to-br from-purple-900 to-fuchsia-900 rounded-full" />
            <div className="text-center text-white text-2xl font-bold leading-9">
              Quest
            </div>
          </a>
          <a
            href="/store/visual"
            className="self-stretch justify-start items-center gap-[1rem] inline-flex h-[3rem]"
          >
            <div className="w-[2.5rem] h-[2.5rem] bg-gradient-to-br from-fuchsia-700 to-fuchsia-900 rounded-full" />
            <div className="text-center text-white text-2xl font-bold leading-9">
              Store
            </div>
          </a>
        </div>
        <div className="w-full">
          <a
            href="/collection"
            className="self-stretch justify-start items-center gap-[1rem] inline-flex h-[3rem]"
          >
            <BrandSwitcher />
            <div className="w-[180px] h-[50px] flex-col justify-center items-start inline-flex">
              <div className="w-[180px] h-[25px] text-slate-300 text-lg font-bold font-['Creato Display'] leading-7">
                Cosmos
              </div>
              <div className="w-[180px] h-[25px] text-slate-300 text-base font-normal font-['Creato Display'] leading-normal">
                J22
              </div>
            </div>
          </a>
        </div>
      </div>
    </aside>
  );
}
