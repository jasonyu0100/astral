import { SidebarWorkCover } from "./current-work/cover/main";
import { SidebarIndicators } from "./indicators/main";
import { SpacesIndicator } from "./indicators/space-indicator/main";
import { BoardIndicator } from "./indicators/market-indicator/main";
import { DriveIndicator } from "./indicators/drive-indicator/main";
import { FeedIndicator } from "./indicators/feed-indicator/main";
import { RecordIndicator } from "./indicators/record-indicator/main";
import { SidebarCurrentWork } from "./current-work/main";
import { SidebarWorkInfo } from "./current-work/info/main";
import { spaceMap } from "../../(apollo)/space/[id]/map";
import { SidebarBack } from "./back/main";
import { spacesMap } from "../../(voyager)/spaces/map";

export enum SidebarIndicatorType {
  Spaces = "Spaces",
  Drive = "Drive",
  Market = "Market",
  Feed = "Feed",
  Label = "Label",
}

export interface SidebarProps {
  indicator?: string;
  minimised?: boolean;
}

export function DashboardSidebar({ indicator, minimised }: SidebarProps) {
  return (
    <>
      {minimised ? (
        <div className="w-[4.5rem] h-full flex flex-col flex-shrink-0 px-[1rem] py-[1rem] overflow-y-auto relative bg-slate-900">
          <SidebarBack href={spacesMap.spaces.now.link} />
          <div className="w-full h-[1rem] mb-[2rem] border-b border-slate-500 border-opacity-30"></div>
          <SidebarIndicators>
            <SpacesIndicator indicator={indicator} minimised />
            <DriveIndicator indicator={indicator} minimised />
            <FeedIndicator indicator={indicator} minimised />
            <BoardIndicator indicator={indicator} minimised />
            <RecordIndicator indicator={indicator} minimised />
          </SidebarIndicators>
        </div>
      ) : (
        <div className="w-[15rem] h-full flex flex-col flex-shrink-0 px-[1rem] py-[1rem] overflow-y-auto relative bg-slate-900">
          <SidebarCurrentWork href={spaceMap.space.id.storm.link("1")}>
            <SidebarWorkCover active={!indicator} />
            <SidebarWorkInfo active={!indicator} />
          </SidebarCurrentWork>
          <div className="w-full h-[1rem] mb-[2rem] border-b border-slate-500 border-opacity-30"></div>
          <SidebarIndicators>
            <SpacesIndicator indicator={indicator} minimised={minimised} />
            <DriveIndicator indicator={indicator} />
            <FeedIndicator indicator={indicator} />
            <BoardIndicator indicator={indicator} />
            <RecordIndicator indicator={indicator} />
          </SidebarIndicators>
        </div>
      )}
    </>
  );
}
