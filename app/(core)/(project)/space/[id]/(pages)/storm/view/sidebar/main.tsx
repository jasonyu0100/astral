import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { glassFx, borderFx } from '@/(style)/data';
import { StormSidebarChapters } from './chapters/main';

export function StormSidebar() {
  return (
    <GlassAreaContainer
      name={StormSidebar.name}
      sizeFx='max-w-[300px] min-w-[200px] w-1/4 h-full'
      glassFx={glassFx['glass-5']}
      className={`flex flex-col items-center p-[1rem]`}
    >
      <StormSidebarChapters />
    </GlassAreaContainer>
  );
}
