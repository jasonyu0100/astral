import { SidebarWorkCover } from './current-work/cover/main';
import { SidebarIndicators } from './indicators/main';
import { SpaceIndicator } from './indicators/space-indicator/main';
import { VaultIndicator } from './indicators/drive-indicator/main';
import { JournalIndicator } from './indicators/journal-indicator/main';
import { SidebarCurrentSpace } from './current-work/main';
import { SidebarWorkInfo } from './current-work/info/main';
import { SidebarBack } from './back/main';
import { ArtistsIndicator } from './indicators/market-indicator/main';
import { TracksIndicator } from './indicators/record-indicator/main';
import { studioMap } from '../(voyager)/studio/map';

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
          <SidebarBack href={backUrl || studioMap.studio.now.link} />
          <div className='mb-[2rem] h-[1rem] w-full border-b border-slate-500 border-opacity-30'></div>
          <SidebarIndicators>
            <SpaceIndicator indicator={indicator} minimised />
            <JournalIndicator indicator={indicator} minimised />
            <VaultIndicator indicator={indicator} minimised />
            <ArtistsIndicator indicator={indicator} minimised />
            <TracksIndicator indicator={indicator} minimised />
          </SidebarIndicators>
        </div>
      ) : (
        <div className='relative flex h-full w-[15rem] flex-shrink-0 flex-col overflow-y-auto bg-slate-900 px-[1rem] py-[1rem]'>
          <SidebarCurrentSpace>
            <SidebarWorkCover active={!indicator} />
            <SidebarWorkInfo active={!indicator} />
          </SidebarCurrentSpace>
          <div className='mb-[1rem] h-[1rem] w-full border-b border-slate-500 border-opacity-30'></div>
          <SidebarIndicators>
            <SpaceIndicator indicator={indicator} />
            <JournalIndicator indicator={indicator} />
            <VaultIndicator indicator={indicator} />
            <ArtistsIndicator indicator={indicator} />
            <TracksIndicator indicator={indicator} />
          </SidebarIndicators>
        </div>
      )}
    </>
  );
}
