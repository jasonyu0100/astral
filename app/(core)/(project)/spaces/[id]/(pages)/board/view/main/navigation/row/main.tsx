import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { ContextForSpaceChapterObj } from '@/(server)/model/space/chapter/main';
import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { useContext } from 'react';
import { SpacesBoardRowContainer } from './container/main';
import { SpacesBoardRowElement } from './element/main';

export function SpacesBoardNavigationRow() {
  const chapterListController = useContext(ContextForSpaceChapterList);

  return (
    <>
      <SpacesBoardRowContainer>
        {chapterListController.state.objs.map((chapter, index) => (
          <ContextForIndexable.Provider value={index} key={chapter.id}>
            <ContextForSpaceChapterObj.Provider
              value={chapter}
              key={chapter.id}
            >
              <SpacesBoardRowElement key={chapter.id} />
            </ContextForSpaceChapterObj.Provider>
          </ContextForIndexable.Provider>
        ))}
      </SpacesBoardRowContainer>
    </>
  );
}
