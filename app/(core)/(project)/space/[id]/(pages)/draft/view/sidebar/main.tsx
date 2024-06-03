import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { glassFx } from '@/(style)/data';
import { DraftSidebarPoint } from './point/main';

export function DraftSidebar() {
  return (
    <GlassAreaContainer
      name={DraftSidebar.name}
      sizeFx='max-w-[360px] min-w-[240px] w-1/4 h-full'
      className={`flex flex-col space-y-[1rem] p-[1rem]`}
      glassFx={glassFx['glass-5']}
    >
      <div className='flex flex-col overflow-auto pr-[1rem]'>
        <div className='flex flex-col'>
          <DraftSidebarPoint>Verse 1.0</DraftSidebarPoint>
          <DraftSidebarPoint>Verse 1.1</DraftSidebarPoint>
          <DraftSidebarPoint>Verse 1.2</DraftSidebarPoint>
        </div>
        <div className='flex flex-col pl-[1rem]'>
          <DraftSidebarPoint>Verse 2.0</DraftSidebarPoint>
        </div>
        <div className='flex flex-col pl-[1rem]'>
          <DraftSidebarPoint>Verse 3.0</DraftSidebarPoint>
          <DraftSidebarPoint>Verse 3.1</DraftSidebarPoint>
          <div className='flex flex-col pl-[1rem]'>
            <DraftSidebarPoint>Verse 4.0</DraftSidebarPoint>
            <div className='flex flex-col pl-[1rem]'>
              <DraftSidebarPoint>Verse 5.0</DraftSidebarPoint>
            </div>
          </div>
          <DraftSidebarPoint>Verse 3.2</DraftSidebarPoint>
        </div>
        <div className='flex flex-col'>
          <DraftSidebarPoint>Verse 1.4</DraftSidebarPoint>
        </div>
      </div>
    </GlassAreaContainer>
  );
}
