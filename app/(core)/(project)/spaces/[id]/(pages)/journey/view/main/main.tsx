import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { ContextForTaskList } from '@/(server)/controller/way/list';
import { ImageBackground } from '@/ui/background/img/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { AbsoluteHolder } from '@/ui/holder/main';
import { useContext, useEffect } from 'react';
import {
  ContextForSpacesJourney,
  SpacesJourneyDataMode,
} from '../../controller/main';
import { SpacesJourneyEmpty } from './core/empty/main';
import { SpacesJourneyKanban } from './core/kanban/main';
import { SpacesJourneyWayTable } from './core/table/main';
import { SpacesJourneyHeader } from './header/main';
import { SpacesJourneyChapterNavigation } from './navigation/main';

export function SpacesJourneyMain() {
  const {
    state: { dataMode },
    actions: { updateDataMode },
  } = useContext(ContextForSpacesJourney);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const wayListController = useContext(ContextForTaskList);

  useEffect(() => {
    updateDataMode(SpacesJourneyDataMode.TABLE);
  }, [chapterListController.state.objId]);

  return (
    <GlassWindowFrame
      name={SpacesJourneyMain.name}
      className={`flex h-full flex-grow flex-col`}
    >
      <SpacesJourneyHeader />
      <div className='relative h-full w-full'>
        <ImageBackground
          src={chapterListController.state.currentObj?.bg}
          active
        />
        <AbsoluteHolder>
          {wayListController.state.objId ? (
            <>
              {dataMode === SpacesJourneyDataMode.TABLE && (
                <SpacesJourneyWayTable />
              )}
              {dataMode === SpacesJourneyDataMode.ROWS && (
                <SpacesJourneyKanban key={chapterListController.state.objId} />
              )}
            </>
          ) : (
            <SpacesJourneyEmpty />
          )}
        </AbsoluteHolder>
      </div>
      <SpacesJourneyChapterNavigation />
    </GlassWindowFrame>
  );
}
