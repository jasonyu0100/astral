import { GlassContainer } from '@/(components)/(basic)/glass/container/main';
import { glassStyles, containerStyles } from '@/(design)/(styles)/data';
import { StormSidebarChapters } from './chapters/main';
import { StormSidebarHeader } from './header/main';

export function StormSidebar() {
  return (
    <GlassContainer
      displayName={StormSidebar.name}
      sizeStyle='max-w-[500px] min-w-[250px] w-1/4 h-full'
      glassStyle={glassStyles['glass-10']}
      className={`${containerStyles['col-center']} space-y-[0.5rem] px-[1rem]`}
    >
      <StormSidebarHeader />
      <StormSidebarChapters />
    </GlassContainer>
  );
}
