import { GlassAreaContainer } from '@/(components)/(basic)/glass/area/main';
import { glassStyles, containerStyles } from '@/(design)/(styles)/data';
import { StormSidebarChapters } from './chapters/main';
import { StormSidebarHeader } from './header/main';

export function StormSidebar() {
  return (
    <GlassAreaContainer
      name={StormSidebar.name}
      size='max-w-[500px] min-w-[250px] w-1/4 h-full'
      glass={glassStyles['glass-10']}
      className={`${containerStyles['col-center']} space-y-[0.5rem] px-[1rem]`}
    >
      <StormSidebarHeader />
      <StormSidebarChapters />
    </GlassAreaContainer>
  );
}
