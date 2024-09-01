import { glassFx } from '@/style/data';
import { GlassAreaContainer } from '@/ui/glass/area/main';
import { useContext } from 'react';
import {
  ContextForSpaceJourney,
  SpaceJourneySidebarListMode,
} from '../../controller/main';
import { SpaceJourneySidebarIdeas } from './ideas/main';
import { SpaceJourneySidebarScenes } from './scenes/main';

export function SpaceJourneySidebar() {
  const journeyController = useContext(ContextForSpaceJourney);

  return (
    <GlassAreaContainer
      name={SpaceJourneySidebar.name}
      sizeFx='w-[300px] h-full'
      glassFx={glassFx['glass-5']}
      className={`flex flex-col items-center overflow-hidden`}
    >
      {journeyController.listSceneMode ===
        SpaceJourneySidebarListMode.DEFAULT && <SpaceJourneySidebarIdeas />}

      {journeyController.listSceneMode ===
        SpaceJourneySidebarListMode.SCENES && <SpaceJourneySidebarScenes />}
    </GlassAreaContainer>
  );
}
