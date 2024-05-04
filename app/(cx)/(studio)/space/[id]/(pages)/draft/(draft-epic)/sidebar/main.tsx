import { GlassAreaContainer } from '@/(lib)/(glass)/area/main';
import { glassFx, containerFx } from '@/(fx)/data';
import { DraftSidebarColumn } from './column/main';
import { DraftSidebarHeader } from './header/main';

export function DraftSidebar() {
  return (
    <GlassAreaContainer
      name={DraftSidebar.name}
      sizeFx='max-w-[500px] min-w-[250px] w-1/4 h-full'
      className={`${containerFx['col']} space-y-[1rem] p-[1rem]`}
      glassFx={glassFx['glass-10']}
    >
      <DraftSidebarColumn />
    </GlassAreaContainer>
  );
}
