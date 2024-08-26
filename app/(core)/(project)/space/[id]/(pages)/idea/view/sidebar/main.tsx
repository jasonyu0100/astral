import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { glassFx } from '@/(style)/data';
import { SpaceIdeaSidebarChapters } from './chapters/main';
import { SpaceIdeaChatSearch } from './search/main';

export function SpaceIdeaSidebar() {
  return (
    <GlassAreaContainer
      name={SpaceIdeaSidebar.name}
      sizeFx='w-[300px] h-full'
      glassFx={glassFx['glass-5']}
      className={`flex flex-col items-center`}
    >
      <SpaceIdeaChatSearch />
      <SpaceIdeaSidebarChapters />
    </GlassAreaContainer>
  );
}
