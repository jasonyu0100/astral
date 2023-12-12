"use client";
import { useRouter } from "next/navigation";
import BrandCover from "./brand-switcher/cover/main";
import SidebarIndicators from "./indicators/main";
import SidebarIndicatorBrand from "./indicators/1-brand/main";
import SidebarIndicatorColor from "./indicators/2-color/main";
import SidebarIndicatorLayer from "./indicators/3-layer/main";
import SidebarIndicatorFont from "./indicators/4-font/main";
import SidebarIndicatorUnits from "./indicators/5-units/main";
import BrandSwitcher from "./brand-switcher/main";
import BrandInfo from "./brand-switcher/info/main";

export interface SidebarProps {
  active?: string;
}

export function DevSidebar({ active }: SidebarProps) {
  return (
    <div className="w-[15rem] h-full flex flex-col flex-shrink-0 justify-between px-[2rem] pt-[2rem] pb-[1rem] overflow-y-auto relative bg-gradient-to-br from-slate-800 to-slate-900">
      <SidebarIndicators>
        <SidebarIndicatorBrand />
        <SidebarIndicatorColor />
        <SidebarIndicatorLayer />
        <SidebarIndicatorFont />
        <SidebarIndicatorUnits />
      </SidebarIndicators>
      <BrandSwitcher>
        <BrandCover />
        <BrandInfo />
      </BrandSwitcher>
    </div>
  );
}