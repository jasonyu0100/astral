import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { ContextForChapterLogList } from '@/(server)/controller/space/chapter/log/list';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { useContext, useEffect } from 'react';
import {
  ContextForSpacesJourney,
  SpacesJourneyDataMode,
} from '../../controller/main';
import { SpacesJourneyEmpty } from './core/empty/main';
import { SpacesJourneyKanban } from './core/kanban/main';
import { SpacesJourneyLogTable } from './core/table/main';
import { SpacesJourneyHeader } from './header/main';
import { SpacesJourneyChapterNavigation } from './navigation/main';

export function SpacesJourneyMain() {
  const {
    state: { dataMode },
    actions: { updateDataMode },
  } = useContext(ContextForSpacesJourney);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const logListController = useContext(ContextForChapterLogList);

  useEffect(() => {
    updateDataMode(SpacesJourneyDataMode.TABLE);
  }, [chapterListController.state.objId]);

  return (
    <GlassWindowFrame
      name={SpacesJourneyMain.name}
      className={`flex h-full flex-grow flex-col`}
    >
      <SpacesJourneyHeader />

      {logListController.state.objId ? (
        <>
          {dataMode === SpacesJourneyDataMode.TABLE && (
            <SpacesJourneyLogTable />
          )}
          {dataMode === SpacesJourneyDataMode.COLUMNS && (
            <SpacesJourneyKanban key={chapterListController.state.objId} />
          )}
        </>
      ) : (
        <SpacesJourneyEmpty />
      )}
      <SpacesJourneyChapterNavigation />
    </GlassWindowFrame>
  );
}
