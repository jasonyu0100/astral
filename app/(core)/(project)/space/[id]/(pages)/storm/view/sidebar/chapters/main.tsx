import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { useContext } from 'react';
import { StormChapterAdd } from './chapter/add/main';
import { StormChapter } from './chapter/main';
import { ContextForSpaceChapterObj } from '@/(server)/(model)/space/chapter/main';
import { ContextForSpaceChapterList } from '@/(server)/(controller)/space/chapter/list';
import { ContextForOpenable } from '@/(logic)/contexts/openable/main';
import { StormAddChapterModal } from '../../../(modal)/add/chapter/main';

export function StormSidebarChapters() {
  const chapterListController = useContext(ContextForSpaceChapterList);
  const openableController = useContext(ContextForOpenable);

  return (
    <>
      <ContextForOpenable.Provider value={openableController}>
        <StormAddChapterModal />
      </ContextForOpenable.Provider>
        <GlassAreaContainer
          name={StormSidebarChapters.name}
          sizeFx='h-full w-full'
          className='flex flex-col overflow-auto'
        >
          {chapterListController.state.objs.map((chapter) => (
            <ContextForSpaceChapterObj.Provider
              value={chapter}
              key={chapter.id}
            >
              <StormChapter key={chapter.id} />
            </ContextForSpaceChapterObj.Provider>
          ))}
          <StormChapterAdd onClick={openableController.open} />
        </GlassAreaContainer>
    </>
  );
}
