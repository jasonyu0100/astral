import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { borderFx, glassFx } from '@/(style)/data';
import { SpaceFlowSidebarEntry } from './entry/main';

export function SpaceFlowSidebar() {
  return (
    <GlassAreaContainer
      name={SpaceFlowSidebar.name}
      sizeFx='max-w-[300px] min-w-[200px] w-1/4 h-full'
      className={`flex flex-col space-y-[1rem] p-[1rem] `}
      glassFx={glassFx['glass-5']}
      borderFx={borderFx['border-l']}
    >
      <div className='h-full w-full overflow-auto  pr-[1rem]'>
        <div className='flex flex-col space-y-[1rem]'>
          <SpaceFlowSidebarEntry>Idea A</SpaceFlowSidebarEntry>
          <SpaceFlowSidebarEntry>Idea B</SpaceFlowSidebarEntry>
          <SpaceFlowSidebarEntry>Idea C</SpaceFlowSidebarEntry>
          <SpaceFlowSidebarEntry>Idea C</SpaceFlowSidebarEntry>
          <SpaceFlowSidebarEntry>Idea C</SpaceFlowSidebarEntry>
        </div>
      </div>
    </GlassAreaContainer>
  );
}
