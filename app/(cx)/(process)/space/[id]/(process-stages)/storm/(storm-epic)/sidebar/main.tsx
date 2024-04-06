import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { glassFx, containerFx } from '@/(design)/(fx)/data';
import { StormSidebarChapters } from './chapters/main';
import { StormSidebarHeader } from './header/main';

export function StormSidebar() {
  return (
    <GlassAreaContainer
      name={StormSidebar.name}
      sizeFx='max-w-[500px] min-w-[250px] w-1/4 h-full'
      glassFx={glassFx['glass-10']}
      className={`${containerFx['col-center']} space-y-[0.5rem] px-[1rem]`}
    >
      <StormSidebarChapters />
    </GlassAreaContainer>
  );
}
