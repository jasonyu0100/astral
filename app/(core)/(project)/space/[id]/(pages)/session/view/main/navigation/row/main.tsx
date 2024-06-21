import { ContextForSpaceChapterList } from '@/(server)/(controller)/space/chapter/list';
import { ContextForSpaceChapterObj } from '@/(server)/(model)/space/chapter/main';
import { useContext } from 'react';
import { SpaceSessionRowContainer } from './container/main';
import { SpaceSessionRowElement } from './element/main';

export function SpaceSessionNavigationRow() {
  const chapterListController = useContext(ContextForSpaceChapterList);

  return (
    <>
      <SpaceSessionRowContainer>
        {chapterListController.state.objs.map((chapter, index) => (
          <ContextForSpaceChapterObj.Provider value={chapter} key={chapter.id}>
            <SpaceSessionRowElement index={index} key={chapter.id} />
          </ContextForSpaceChapterObj.Provider>
        ))}
      </SpaceSessionRowContainer>
    </>
  );
}
