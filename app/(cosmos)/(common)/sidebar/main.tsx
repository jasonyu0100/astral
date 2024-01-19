import { SidebarWorkCover } from './current-work/cover/main';
import { SidebarIndicators } from './indicators/main';
import { SpacesIndicator } from './indicators/space-indicator/main';
import { DriveIndicator } from './indicators/drive-indicator/main';
import { FeedIndicator } from './indicators/feed-indicator/main';
import { SidebarCurrentWork } from './current-work/main';
import { SidebarWorkInfo } from './current-work/info/main';
import { spaceMap } from '../../(apollo)/space/[id]/map';
import { SidebarBack } from './back/main';
import { spacesMap } from '../../(voyager)/spaces/map';
import { useGlobalSpace } from '@/state/space/main';

export interface SidebarProps {
  indicator?: string;
  minimised?: boolean;
  backUrl?: string;
}

export function DashboardSidebar({
  indicator,
  minimised,
  backUrl,
}: SidebarProps) {

  return (
    <>
      {minimised ? (
        <div className='w-[4.5rem] h-full flex flex-col flex-shrink-0 px-[1rem] py-[1rem] overflow-y-auto relative bg-slate-900'>
          <SidebarBack href={backUrl || spacesMap.spaces.now.link} />
          <div className='w-full h-[1rem] mb-[2rem] border-b border-slate-500 border-opacity-30'></div>
          <SidebarIndicators>
            <SpacesIndicator indicator={indicator} minimised />
            <DriveIndicator indicator={indicator} minimised />
            <FeedIndicator indicator={indicator} minimised />
            {/* <BoardIndicator indicator={indicator} minimised />
            <RecordIndicator indicator={indicator} minimised /> */}
          </SidebarIndicators>
        </div>
      ) : (
        <div className='w-[15rem] h-full flex flex-col flex-shrink-0 px-[1rem] py-[1rem] overflow-y-auto relative bg-slate-900'>
          <SidebarCurrentWork>
            <SidebarWorkCover active={!indicator} />
            <SidebarWorkInfo active={!indicator} />
          </SidebarCurrentWork>
          <div className='w-full h-[1rem] mb-[2rem] border-b border-slate-500 border-opacity-30'></div>
          <SidebarIndicators>
            <SpacesIndicator indicator={indicator} />
            <DriveIndicator indicator={indicator} />
            <FeedIndicator indicator={indicator} />
            {/* <BoardIndicator indicator={indicator} />
            <RecordIndicator indicator={indicator} /> */}
          </SidebarIndicators>
        </div>
      )}
    </>
  );
}
