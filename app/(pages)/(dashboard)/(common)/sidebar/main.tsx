"use client";
import SidebarWorkCover from "./current-work/cover/main";
import SidebarIndicators from "./indicators/main";
import IndicatorOne from "./indicators/indicator-1/main";
import IndicatorThree from "./indicators/indicator-3/main";
import IndicatorTwo from "./indicators/indicator-2/main";
import IndicatorFour from "./indicators/indicator-4/main";
import SidebarRecordIndicator from "./indicators/indicator-5/main";
import SidebarCurrentWork from "./current-work/main";
import SidebarWorkInfo from "./current-work/info/main";

export interface SidebarProps {
  indicator?: string;
}

export function DashboardSidebar({ indicator }: SidebarProps) {
  return (
    <div className="w-[16rem] h-full flex flex-col flex-shrink-0 space-y-[1rem] px-[2rem] pt-[2rem] pb-[1rem] overflow-y-auto relative bg-gradient-to-br from-slate-800 to-slate-900">
      <SidebarCurrentWork>
        <SidebarWorkCover active={!indicator} />
        <SidebarWorkInfo active={!indicator} />
      </SidebarCurrentWork>
      <div className="w-full h-[1rem] border-t border-slate-400 border-opacity-30"></div>
      <SidebarIndicators>
        <IndicatorOne indicator={indicator} />
        <IndicatorTwo indicator={indicator} />
        <IndicatorThree indicator={indicator} />
        <IndicatorFour indicator={indicator} />
        <SidebarRecordIndicator indicator={indicator} />
      </SidebarIndicators>
    </div>
  );
}
