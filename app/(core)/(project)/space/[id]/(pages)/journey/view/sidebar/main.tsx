import { glassFx } from '@/style/data';
import { GlassAreaContainer } from '@/ui/glass/area/main';
import { SpaceJourneySidebarIdeas } from './links/main';

export function SpaceJourneySidebar() {
  return (
    <GlassAreaContainer
      name={SpaceJourneySidebar.name}
      sizeFx='w-[400px] h-full'
      glassFx={glassFx['glass-5']}
      className={`flex flex-col items-center overflow-hidden`}
    >
      <SpaceJourneySidebarIdeas />
    </GlassAreaContainer>
  );
}
