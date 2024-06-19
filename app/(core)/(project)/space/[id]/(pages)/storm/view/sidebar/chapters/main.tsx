import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import {
  ContextForOpenable,
  useControllerForOpenable,
} from '@/(logic)/contexts/openable/main';
import { ContextForSpaceChapterList } from '@/(server)/(controller)/space/chapter/list';
import { ContextForSpaceChapterObj } from '@/(server)/(model)/space/chapter/main';
import { useContext } from 'react';
import { StormAddChapterModal } from '../../../(modal)/add/chapter/main';
import { SpaceStormChapterAdd } from './add/main';
import { SpaceStormSidebarChapter } from './chapter/main';

export function SpaceStormSidebarChapters() {
  const chapterListController = useContext(ContextForSpaceChapterList);
  const openableController = useControllerForOpenable();

  return (
    <>
      <ContextForOpenable.Provider value={openableController}>
        <StormAddChapterModal />
      </ContextForOpenable.Provider>
      <GlassAreaContainer
        name={SpaceStormSidebarChapters.name}
        sizeFx='h-full w-full'
        className='flex flex-col overflow-auto p-[1rem]'
      >
        {chapterListController.state.objs.map((chapter) => (
          <ContextForSpaceChapterObj.Provider value={chapter} key={chapter.id}>
            <SpaceStormSidebarChapter key={chapter.id} />
          </ContextForSpaceChapterObj.Provider>
        ))}
        <SpaceStormChapterAdd
          onClick={() => {
            openableController.open();
          }}
        />
      </GlassAreaContainer>
    </>
  );
}
