import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { ContextForSpaceChapterObj } from '@/(server)/model/space/chapter/main';
import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { useContext } from 'react';
import { SpacesPostRowContainer } from './container/main';
import { SpacesPostRowElement } from './element/main';

export function SpacesPostNavigationRow() {
  const chapterListController = useContext(ContextForSpaceChapterList);

  return (
    <>
      <SpacesPostRowContainer>
        {chapterListController.state.objs.map((chapter, index) => (
          <ContextForIndexable.Provider value={index} key={chapter.id}>
            <ContextForSpaceChapterObj.Provider
              value={chapter}
              key={chapter.id}
            >
              <SpacesPostRowElement />
            </ContextForSpaceChapterObj.Provider>
          </ContextForIndexable.Provider>
        ))}
      </SpacesPostRowContainer>
    </>
  );
}
