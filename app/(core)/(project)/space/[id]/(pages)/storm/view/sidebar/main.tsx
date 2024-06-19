import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { glassFx } from '@/(style)/data';
import { SpaceStormSidebarChapters } from './chapters/main';
import { SpaceStormChatSearch } from './search/main';

export function SpaceStormSidebar() {
  return (
    <GlassAreaContainer
      name={SpaceStormSidebar.name}
      sizeFx='w-[300px] h-full'
      glassFx={glassFx['glass-5']}
      className={`flex flex-col items-center`}
    >
      <SpaceStormChatSearch />
      <SpaceStormSidebarChapters />
    </GlassAreaContainer>
  );
}
