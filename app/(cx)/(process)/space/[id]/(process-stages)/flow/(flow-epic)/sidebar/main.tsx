import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { glassFx, containerFx } from '@/(design)/(fx)/data';
import { FlowSidebarColumn } from './column/main';
import { FlowSidebarHeader } from './header/main';

export function FlowSidebar() {
  return (
    <GlassAreaContainer
      name={FlowSidebar.name}
      sizeFx='max-w-[500px] min-w-[250px] w-1/4 h-full'
      className={`${containerFx['col']} space-y-[1rem] p-[1rem]`}
      glassFx={glassFx['glass-10']}
    >
      <FlowSidebarColumn />
    </GlassAreaContainer>
  );
}
