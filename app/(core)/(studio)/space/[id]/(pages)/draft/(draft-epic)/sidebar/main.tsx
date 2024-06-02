import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { glassFx, containerFx } from '@/(style)/data';
import { DraftSidebarColumn } from './column/main';
import { DraftSidebarPoint } from './point/main';

export function DraftSidebar() {
  return (
    <GlassAreaContainer
      name={DraftSidebar.name}
      sizeFx='max-w-[360px] min-w-[240px] w-1/4 h-full'
      className={`${containerFx['col']} space-y-[1rem] p-[1rem]`}
      glassFx={glassFx['glass-5']}
    >
      <DraftSidebarPoint/>
      <DraftSidebarPoint/>
      <DraftSidebarPoint/>
      <DraftSidebarPoint/>
      <DraftSidebarPoint/>
      
    </GlassAreaContainer>
  );
}
