import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { StormModalContext } from '@/(core)/(project)/space/[id]/(modals)/storm-modal/main';
import { useContext } from 'react';
import { StormChapterAdd } from './chapter/add/main';
import { StormChapter } from './chapter/main';
import { ContextForSpaceChapterObj } from '@/(server)/(model)/space/chapter/main';
import { ContextForSpaceChapterList } from '@/(server)/(controller)/space/chapter/list';

export function StormSidebarChapters() {
  const chapterListController = useContext(ContextForSpaceChapterList);
  const modalContext = useContext(StormModalContext);

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <GlassAreaContainer
        name={StormSidebarChapters.name}
        sizeFx='h-full w-full'
        className='flex flex-col overflow-auto'
      >
        {chapterListController.state.objs.map((chapter) => (
          <ContextForSpaceChapterObj.Provider value={chapter} key={chapter.id}>
            <StormChapter key={chapter.id}/>
          </ContextForSpaceChapterObj.Provider>
        ))}
        <StormChapterAdd onClick={() => modalContext.addChapterModal.open()} />
      </GlassAreaContainer>
    </div>
  );
}
