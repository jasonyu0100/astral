import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { StormModalContext } from '@/(core)/(project)/space/[id]/(modals)/storm-modal/main';
import { useContext } from 'react';
import { StormChapterAdd } from './chapter/add/main';
import { StormChapter } from './chapter/main';
import { SpaceChapterContext } from '@/(model)/space/chapter/main';
import { ChaptersHandlerContext } from '@/(controller)/chapters/main';

export function StormSidebarChapters() {
  const chaptersHandler = useContext(ChaptersHandlerContext);
  const chapters = chaptersHandler.chapters;
  const modalContext = useContext(StormModalContext);

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <GlassAreaContainer
        name={StormSidebarChapters.name}
        sizeFx='h-full w-full'
        className='flex flex-col overflow-auto'
      >
        {chapters.map((chapter) => (
          <SpaceChapterContext.Provider value={chapter} key={chapter.id}>
            <StormChapter key={chapter.id}/>
          </SpaceChapterContext.Provider>
        ))}
        <StormChapterAdd onClick={() => modalContext.addChapterModal.open()} />
      </GlassAreaContainer>
    </div>
  );
}
