import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { ContextForChapterLogList } from '@/(server)/controller/space/chapter/log/list';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { useContext, useEffect } from 'react';
import {
  ContextForSpaceJourney,
  SpaceJourneyDataMode,
} from '../../controller/main';
import { SpaceJourneyEmpty } from './empty/main';
import { SpaceJourneyHeader } from './header/main';
import { SpaceJourneyKanban } from './kanban/main';
import { SpaceJourneyChapterNavigation } from './navigation/main';
import { SpaceJourneyLogTable } from './table/main';

export function SpaceJourneyMain() {
  const {
    state: { dataMode },
    actions: { updateDataMode },
  } = useContext(ContextForSpaceJourney);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const logListController = useContext(ContextForChapterLogList);

  useEffect(() => {
    updateDataMode(SpaceJourneyDataMode.TABLE);
  }, [chapterListController.state.objId]);

  return (
    <GlassWindowFrame
      name={SpaceJourneyMain.name}
      className={`flex h-full flex-grow flex-col`}
    >
      <SpaceJourneyHeader />

      {logListController.state.objId ? (
        <>
          {dataMode === SpaceJourneyDataMode.TABLE && <SpaceJourneyLogTable />}
          {dataMode === SpaceJourneyDataMode.COLUMNS && (
            <SpaceJourneyKanban key={chapterListController.state.objId} />
          )}
        </>
      ) : (
        <SpaceJourneyEmpty />
      )}
      <SpaceJourneyChapterNavigation />
    </GlassWindowFrame>
  );
}
