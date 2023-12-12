"use client";
import { useRouter } from "next/navigation";
import BrandCover from "./brand-switcher/cover/main";
import SidebarIndicators from "./indicators/main";
import SidebarWorksIndicator from "./indicators/1-works-indicator/main";
import SidebarGalleryIndicator from "./indicators/2-gallery-indicator/main";
import SidebarCraftIndicator from "./indicators/3-craft-indicator/main";
import SidebarStoryIndicator from "./indicators/4-story-indicator/main";
import SidebarRecordIndicator from "./indicators/5-record-indicator/main";
import BrandSwitcher from "./brand-switcher/main";
import BrandInfo from "./brand-switcher/info/main";
import { useState } from "react";

export interface SidebarProps {
  active?: string;
}

export function VoyagerSidebar({ active }: SidebarProps) {
  const [activeIndicator, changeActiveIndicator] = useState("Works");
  return (
    <div className="w-[15rem] h-full flex flex-col flex-shrink-0 justify-between px-[2rem] pt-[2rem] pb-[1rem] overflow-y-auto relative bg-gradient-to-br from-slate-800 to-slate-900">
      <SidebarIndicators>
        <SidebarWorksIndicator activeIndicator={activeIndicator} />
        <SidebarGalleryIndicator activeIndicator={activeIndicator} />
        <SidebarCraftIndicator activeIndicator={activeIndicator} />
        <SidebarStoryIndicator activeIndicator={activeIndicator} />
        <SidebarRecordIndicator activeIndicator={activeIndicator} />
      </SidebarIndicators>
      <BrandSwitcher>
        <BrandCover />
        <BrandInfo />
      </BrandSwitcher>
    </div>
  );
}
