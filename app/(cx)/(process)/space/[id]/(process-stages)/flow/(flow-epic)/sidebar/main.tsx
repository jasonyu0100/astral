import { GlassContainer } from '@/(components)/(basic)/glass/container/main';
import { glassStyles, containerStyles } from '@/(design)/(styles)/data';
import { FlowSidebarColumn } from './column/main';
import { FlowSidebarHeader } from './header/main';

export function FlowSidebar() {
  return (
    <GlassContainer
      displayName={FlowSidebar.name}
      sizeStyle='max-w-[500px] min-w-[250px] w-1/4 h-full'
      className={`${containerStyles['col']} space-y-[1rem] px-[1rem]`}
      glassStyle={glassStyles['glass-10']}
    >
      <FlowSidebarHeader />
      <FlowSidebarColumn />
    </GlassContainer>
  );
}
