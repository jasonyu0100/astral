import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { ContextForSpaceChapterObj } from '@/(server)/model/space/chapter/main';
import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { useContext } from 'react';
import { SpacesMapRowContainer } from './container/main';
import { SpacesMapRowElement } from './element/main';

export function SpacesMapNavigationRow() {
  const chapterListController = useContext(ContextForSpaceChapterList);

  return (
    <SpacesMapRowContainer>
      {chapterListController.state.objs.map((chapter, index) => (
        <ContextForSpaceChapterObj.Provider value={chapter} key={chapter.id}>
          <ContextForIndexable.Provider value={index} key={chapter.id}>
            <SpacesMapRowElement key={chapter.id} />
          </ContextForIndexable.Provider>
        </ContextForSpaceChapterObj.Provider>
      ))}
    </SpacesMapRowContainer>
  );
}
