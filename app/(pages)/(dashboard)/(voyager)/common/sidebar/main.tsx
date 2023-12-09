"use client";
import { useRouter } from "next/navigation";
import BrandCover from "./brand-switcher/cover/main";
import SidebarIndicators from "./indicators/main";
import SidebarIndicatorGallery from "./indicators/1-gallery-indicator/main";
import SidebarIndicatorPillars from "./indicators/2-pillars-indicator/main";
import SidebarIndicatorCraft from "./indicators/3-craft-indicator/main";
import SidebarIndicatorStore from "./indicators/4-store-indicator/main";
import SidebarIndicatorQuest from "./indicators/5-quest-indicator/main";
import BrandSwitcher from "./brand-switcher/main";
import BrandInfo from "./brand-switcher/info/main";

export interface SidebarProps {
  active?: string;
}

export function VoyagerSidebar({ active }: SidebarProps) {
  return (
    <div className="w-[15rem] h-full flex flex-col flex-shrink-0 justify-between py-[2.5rem] px-[2rem] overflow-y-auto relative bg-gradient-to-br from-slate-800 to-slate-900">
      <SidebarIndicators>
        <SidebarIndicatorGallery />
        <SidebarIndicatorPillars />
        <SidebarIndicatorCraft />
        <SidebarIndicatorStore />
        <SidebarIndicatorQuest />
      </SidebarIndicators>
      <BrandSwitcher>
        <BrandCover />
        <BrandInfo />
      </BrandSwitcher>
    </div>
  );
}