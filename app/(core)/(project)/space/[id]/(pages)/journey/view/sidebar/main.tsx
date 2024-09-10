import { glassFx } from '@/style/data';
import { GlassAreaContainer } from '@/ui/glass/area/main';
import { SpaceJourneySidebarIdeas } from './links/main';

export function SpaceJourneySidebar() {
  return (
    <GlassAreaContainer
      name={SpaceJourneySidebar.name}
      sizeFx='w-[360px] h-full'
      glassFx={glassFx['glass-10']}
      className={`flex flex-col items-center overflow-hidden`}
    >
      <SpaceJourneySidebarIdeas />
    </GlassAreaContainer>
  );
}
