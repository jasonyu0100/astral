import { ContextForSpaceChapterList } from '@/(server)/(controller)/space/chapter/list';
import { ContextForSpaceChapterObj } from '@/(server)/(model)/space/chapter/main';
import { useContext } from 'react';
import { SpaceSessionsRowContainer } from './container/main';
import { SpaceSessionsRowElement } from './element/main';

export function SpaceSessionsNavigationRow() {
  const chapterListController = useContext(ContextForSpaceChapterList);

  return (
    <>
      <SpaceSessionsRowContainer>
        {chapterListController.state.objs.map((chapter, index) => (
          <ContextForSpaceChapterObj.Provider value={chapter} key={chapter.id}>
            <SpaceSessionsRowElement index={index} key={chapter.id} />
          </ContextForSpaceChapterObj.Provider>
        ))}
      </SpaceSessionsRowContainer>
    </>
  );
}
