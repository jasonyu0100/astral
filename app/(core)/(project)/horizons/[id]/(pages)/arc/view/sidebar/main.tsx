import { glassFx } from '@/style/data';
import { GlassAreaContainer } from '@/ui/glass/area/main';
import { HorizonsArcSidebarHeader } from './header/main';
import { HorizonsArcSidebarTab } from './tab/main';

export function HorizonsArcSidebar() {
  return (
    <GlassAreaContainer
      name={HorizonsArcSidebar.name}
      sizeFx='w-[360px] h-full flex-shrink-0'
      className={`flex flex-col space-y-[1rem]`}
      glassFx={glassFx['glass-10']}
    >
      <HorizonsArcSidebarHeader />
      <div className='flex h-full w-full flex-col overflow-auto'>
        <div className='flex w-full flex-col space-y-[1rem] p-[1rem]'>
          <HorizonsArcSidebarTab>Ideas</HorizonsArcSidebarTab>
          <HorizonsArcSidebarTab>Ideas</HorizonsArcSidebarTab>
          <HorizonsArcSidebarTab>Ideas</HorizonsArcSidebarTab>
          <HorizonsArcSidebarTab>Ideas</HorizonsArcSidebarTab>
          <HorizonsArcSidebarTab>Ideas</HorizonsArcSidebarTab>
          <HorizonsArcSidebarTab>Ideas</HorizonsArcSidebarTab>
          <HorizonsArcSidebarTab>Ideas</HorizonsArcSidebarTab>
          <HorizonsArcSidebarTab>Ideas</HorizonsArcSidebarTab>
          <HorizonsArcSidebarTab>Ideas</HorizonsArcSidebarTab>
          <HorizonsArcSidebarTab>Ideas</HorizonsArcSidebarTab>
          <HorizonsArcSidebarTab>Ideas</HorizonsArcSidebarTab>
          <HorizonsArcSidebarTab>Ideas</HorizonsArcSidebarTab>
        </div>
      </div>
    </GlassAreaContainer>
  );
}
