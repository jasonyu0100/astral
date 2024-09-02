import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { useContext, useEffect } from 'react';
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
  const chapterListController = useContext(ContextForSpaceChapterList);

  useEffect(() => {
    journeyController.updateDataMode(SpaceJourneyDataMode.TABLE);
  }, [chapterListController.state.objId]);

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
        <SpaceJourneyKanban key={chapterListController.state.objId} />
      )}
      <SpaceJourneyChapterNavigation />
    </GlassWindowFrame>
  );
}
