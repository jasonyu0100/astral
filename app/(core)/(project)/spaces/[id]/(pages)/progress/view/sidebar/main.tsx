import { GlassAreaContainer } from '@/components/glass/area/main';
import { glassFx } from '@/style/data';
import { SpacesProgressSidebarChapters } from './chapters/main';
import { SpacesProgressSidebarHeader } from './header/main';

export function SpacesProgressSidebar() {
  return (
    <GlassAreaContainer
      name={SpacesProgressSidebar.name}
      sizeFx='w-[360px] h-full'
      glassFx={glassFx['glass-10']}
      className={`flex flex-col items-center overflow-hidden`}
    >
      <SpacesProgressSidebarHeader />
      <SpacesProgressSidebarChapters />
    </GlassAreaContainer>
  );
}
