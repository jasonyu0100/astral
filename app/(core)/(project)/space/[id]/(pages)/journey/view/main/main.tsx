import { GlassWindowFrame } from '@/ui/glass/window/main';
import { useContext } from 'react';
import {
  ContextForSpaceJourney,
  SpaceJourneyDataMode,
} from '../../controller/main';
import { SpaceJourneyHeader } from './header/main';
import { SpaceJourneyKanban } from './kanban/main';
import { SpaceJourneyChapterNavigation } from './navigation/main';
import { SpaceJourneyLogTable } from './table/main';

export function SpaceJourneyMain() {
  const journeyController = useContext(ContextForSpaceJourney);

  return (
    <GlassWindowFrame
      name={SpaceJourneyMain.name}
      className={`flex h-full flex-grow flex-col`}
    >
      <SpaceJourneyHeader />
      {journeyController.dataMode === SpaceJourneyDataMode.TABLE && (
        <SpaceJourneyLogTable />
      )}
      {journeyController.dataMode === SpaceJourneyDataMode.COLUMNS && (
        <SpaceJourneyKanban />
      )}
      <SpaceJourneyChapterNavigation />
    </GlassWindowFrame>
  );
}
