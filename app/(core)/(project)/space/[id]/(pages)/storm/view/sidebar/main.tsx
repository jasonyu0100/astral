import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { glassFx } from '@/(style)/data';
import { SpaceStormSidebarChapters } from './chapters/main';

export function SpaceStormSidebar() {
  return (
    <GlassAreaContainer
      name={SpaceStormSidebar.name}
      sizeFx='max-w-[300px] min-w-[200px] w-1/4 h-full'
      glassFx={glassFx['glass-5']}
      className={`flex flex-col items-center p-[1rem]`}
    >
      <SpaceStormSidebarChapters />
    </GlassAreaContainer>
  );
}
