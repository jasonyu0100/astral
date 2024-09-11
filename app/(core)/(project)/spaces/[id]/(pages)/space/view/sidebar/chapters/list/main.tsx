import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { ContextForSpaceChapterObj } from '@/(server)/model/space/chapter/main';
import { useContext } from 'react';
import { SpacesSpaceSidebarChapter } from './chapter/main';

export function SpacesSpaceSidebarChaptersList() {
  const chapterListController = useContext(ContextForSpaceChapterList);

  return (
    <>
      {chapterListController.state.more.queryResults.map((chapter) => (
        <ContextForSpaceChapterObj.Provider value={chapter} key={chapter.id}>
          <SpacesSpaceSidebarChapter key={chapter.id} />
        </ContextForSpaceChapterObj.Provider>
      ))}
    </>
  );
}
