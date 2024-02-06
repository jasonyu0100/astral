import { SidebarWorkCover } from './current-work/cover/main';
import { SidebarIndicators } from './indicators/main';
import { SpacesIndicator } from './indicators/space-indicator/main';
import { DriveIndicator } from './indicators/drive-indicator/main';
import { FeedIndicator } from './indicators/feed-indicator/main';
import { SidebarCurrentSpace } from './current-work/main';
import { SidebarWorkInfo } from './current-work/info/main';
import { SidebarBack } from './back/main';
import { spacesMap } from '../../(voyager)/spaces/map';
import { BoardIndicator } from './indicators/market-indicator/main';
import { RecordIndicator } from './indicators/record-indicator/main';

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
        <div className='relative flex h-full w-[4.5rem] flex-shrink-0 flex-col overflow-y-auto bg-slate-900 px-[1rem] py-[1rem]'>
          <SidebarBack href={backUrl || spacesMap.spaces.now.link} />
          <div className='mb-[2rem] h-[1rem] w-full border-b border-slate-500 border-opacity-30'></div>
          <SidebarIndicators>
            <SpacesIndicator indicator={indicator} minimised />
            <DriveIndicator indicator={indicator} minimised />
            <FeedIndicator indicator={indicator} minimised />
            <BoardIndicator indicator={indicator} minimised />
            <RecordIndicator indicator={indicator} minimised />
          </SidebarIndicators>
        </div>
      ) : (
        <div className='relative flex h-full w-[15rem] flex-shrink-0 flex-col overflow-y-auto bg-slate-900 px-[1rem] py-[1rem]'>
          <SidebarCurrentSpace>
            <SidebarWorkCover active={!indicator} />
            <SidebarWorkInfo active={!indicator} />
          </SidebarCurrentSpace>
          <div className='mb-[2rem] h-[1rem] w-full border-b border-slate-500 border-opacity-30'></div>
          <SidebarIndicators>
            <SpacesIndicator indicator={indicator} />
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
