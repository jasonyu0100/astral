import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { ContextForTaskList } from '@/(server)/controller/way/list';
import { ImageBackground } from '@/components/background/img/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { AbsoluteHolder } from '@/components/holder/main';
import { useContext, useEffect } from 'react';
import {
  ContextForSpacesBoard,
  SpacesBoardDataMode,
} from '../../controller/main';
import { SpacesBoardEmpty } from './core/empty/main';
import { SpacesBoardKanban } from './core/kanban/main';
import { SpacesBoardWayTable } from './core/table/main';
import { SpacesBoardHeader } from './header/main';
import { SpacesBoardNavigation } from './navigation/main';

export function SpacesBoardMain() {
  const {
    state: { dataMode },
    actions: { updateDataMode },
  } = useContext(ContextForSpacesBoard);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const wayListController = useContext(ContextForTaskList);

  useEffect(() => {
    updateDataMode(SpacesBoardDataMode.TABLE);
  }, [chapterListController.state.objId]);

  return (
    <GlassWindowFrame
      name={SpacesBoardMain.name}
      className={`flex h-full flex-grow flex-col`}
    >
      <SpacesBoardHeader />
      <div className='relative h-full w-full'>
        <ImageBackground
          src={chapterListController.state.currentObj?.bg}
          active
        />
        <AbsoluteHolder>
          {wayListController.state.objId ? (
            <>
              {dataMode === SpacesBoardDataMode.TABLE && (
                <SpacesBoardWayTable />
              )}
              {dataMode === SpacesBoardDataMode.ROWS && (
                <SpacesBoardKanban key={chapterListController.state.objId} />
              )}
            </>
          ) : (
            <SpacesBoardEmpty />
          )}
        </AbsoluteHolder>
      </div>
      <SpacesBoardNavigation />
    </GlassWindowFrame>
  );
}
