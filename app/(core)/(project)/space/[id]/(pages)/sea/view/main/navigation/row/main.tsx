import { ContextForSpaceChapterList } from '@/(server)/(controller)/space/chapter/list';
import { ContextForSpaceChapterObj } from '@/(server)/(model)/space/chapter/main';
import { useContext } from 'react';
import { SpaceSeaRowContainer } from './container/main';
import { SpaceSeaRowElement } from './element/main';

export function SpaceSeaNavigationRow() {
  const chapterListController = useContext(ContextForSpaceChapterList);

  return (
    <>
      <SpaceSeaRowContainer>
        {chapterListController.state.objs.map((chapter, index) => (
          <ContextForSpaceChapterObj.Provider value={chapter} key={chapter.id}>
            <SpaceSeaRowElement index={index} key={chapter.id} />
          </ContextForSpaceChapterObj.Provider>
        ))}
      </SpaceSeaRowContainer>
    </>
  );
}
