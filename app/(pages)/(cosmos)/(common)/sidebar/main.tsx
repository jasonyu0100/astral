"use client";
import { SidebarWorkCover } from "./current-work/cover/main";
import { SidebarIndicators } from "./indicators/main";
import { IndicatorOne } from "./indicators/indicator-1/main";
import { IndicatorThree } from "./indicators/indicator-3/main";
import { IndicatorTwo } from "./indicators/indicator-2/main";
import { IndicatorFour } from "./indicators/indicator-4/main";
import { IndicatorFive } from "./indicators/indicator-5/main";
import { SidebarCurrentWork } from "./current-work/main";
import { SidebarWorkInfo } from "./current-work/info/main";
import { processMap } from "../../(apollo)/process/[id]/map";
import { SidebarBack } from "./back/main";
import { worksMap } from "../../(voyager)/works/map";

export enum SidebarIndicatorType {
  Works = "Works",
  Craft = "Craft",
  Board = "Board",
  Link = "Link",
  Record = "Record",
}

export interface SidebarProps {
  indicator?: string;
  minimised?: boolean;
}

export function DashboardSidebar({ indicator, minimised }: SidebarProps) {
  return (
    <>
      {minimised ? (
        <div className="w-[6.5rem] h-full flex flex-col flex-shrink-0 space-y-[1rem] px-[2rem] py-[1rem] overflow-y-auto relative bg-gradient-to-br from-slate-800 to-slate-900">
          <SidebarBack href={worksMap.works.now.link} />
          <div className="w-full h-[1rem] border-t border-slate-300 border-opacity-30"></div>
          <SidebarIndicators>
            <IndicatorOne indicator={indicator} minimised />
            <IndicatorTwo indicator={indicator} minimised />
            <IndicatorThree indicator={indicator} minimised />
            <IndicatorFour indicator={indicator} minimised />
            <IndicatorFive indicator={indicator} minimised />
          </SidebarIndicators>
        </div>
      ) : (
        <div className="w-[16rem] h-full flex flex-col flex-shrink-0 space-y-[1rem] px-[2rem] py-[1rem] overflow-y-auto relative bg-gradient-to-br from-slate-800 to-slate-900">
          <SidebarCurrentWork href={processMap.process.id.storm.link("1")}>
            <SidebarWorkCover active={!indicator} />
            <SidebarWorkInfo active={!indicator} />
          </SidebarCurrentWork>
          <div className="w-full h-[1rem] border-t border-slate-300 border-opacity-30"></div>
          <SidebarIndicators>
            <IndicatorOne indicator={indicator} minimised={minimised} />
            <IndicatorTwo indicator={indicator} />
            <IndicatorThree indicator={indicator} />
            <IndicatorFour indicator={indicator} />
            <IndicatorFive indicator={indicator} />
          </SidebarIndicators>
        </div>
      )}
    </>
  );
}
