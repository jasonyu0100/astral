import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { borderFx, glassFx } from '@/(style)/data';
import { SpaceStormSidebarChapters } from './chapters/main';

export function SpaceStormSidebar() {
  return (
    <GlassAreaContainer
      name={SpaceStormSidebar.name}
      sizeFx='max-w-[300px] min-w-[200px] w-1/4 h-full'
      glassFx={glassFx['glass-10']}
      className={`flex flex-col items-center p-[1rem]`}
      borderFx={borderFx['border-r']}
    >
      <SpaceStormSidebarChapters />
    </GlassAreaContainer>
  );
}
