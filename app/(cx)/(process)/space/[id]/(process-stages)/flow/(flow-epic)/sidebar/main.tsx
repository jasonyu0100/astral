import { GlassAreaContainer } from '@/(components)/(basic)/glass/area/main';
import { glassStyles, containerStyles } from '@/(design)/(styles)/data';
import { FlowSidebarColumn } from './column/main';
import { FlowSidebarHeader } from './header/main';

export function FlowSidebar() {
  return (
    <GlassAreaContainer
      name={FlowSidebar.name}
      size='max-w-[500px] min-w-[250px] w-1/4 h-full'
      className={`${containerStyles['col']} space-y-[1rem] px-[1rem]`}
      glass={glassStyles['glass-10']}
    >
      <FlowSidebarHeader />
      <FlowSidebarColumn />
    </GlassAreaContainer>
  );
}
