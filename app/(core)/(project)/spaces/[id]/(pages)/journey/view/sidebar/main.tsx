import { glassFx } from '@/style/data';
import { GlassAreaContainer } from '@/ui/glass/area/main';
import { SpacesJourneySidebarIdeas } from './links/main';

export function SpacesJourneySidebar() {
  return (
    <GlassAreaContainer
      name={SpacesJourneySidebar.name}
      sizeFx='w-[360px] h-full'
      glassFx={glassFx['glass-10']}
      className={`flex flex-col items-center overflow-hidden`}
    >
      <SpacesJourneySidebarIdeas />
    </GlassAreaContainer>
  );
}
