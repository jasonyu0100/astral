"use client";
import SidebarWorkCover from "./current-work/cover/main";
import SidebarIndicators from "./indicators/main";
import SidebarWorksIndicator from "./indicators/1-works-indicator/main";
import SidebarGalleryIndicator from "./indicators/3-gallery-indicator/main";
import SidebarCraftIndicator from "./indicators/2-craft-indicator/main";
import SidebarStoryIndicator from "./indicators/4-story-indicator/main";
import SidebarRecordIndicator from "./indicators/5-release-indicator/main";
import SidebarCurrentWork from "./current-work/main";
import SidebarWorkInfo from "./current-work/info/main";

export interface SidebarProps {
  indicator?: string;
}

export function DashboardSidebar({ indicator }: SidebarProps) {

  return (
    <div className="w-[15rem] h-full flex flex-col flex-shrink-0 justify-between px-[2rem] pt-[2rem] pb-[1rem] overflow-y-auto relative bg-gradient-to-br from-slate-800 to-slate-900">
      <SidebarIndicators>
        <SidebarWorksIndicator indicator={indicator} />
        <SidebarCraftIndicator indicator={indicator} />
        <SidebarGalleryIndicator indicator={indicator} />
        <SidebarStoryIndicator indicator={indicator} />
        <SidebarRecordIndicator indicator={indicator} />
      </SidebarIndicators>
      <SidebarCurrentWork>
        <SidebarWorkCover active={!indicator}/>
        <SidebarWorkInfo active={!indicator}/>
      </SidebarCurrentWork>
    </div>
  );
}
