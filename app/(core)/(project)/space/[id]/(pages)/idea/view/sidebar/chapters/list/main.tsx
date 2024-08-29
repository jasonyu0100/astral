import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { ContextForSpaceChapterObj } from '@/(server)/model/space/chapter/main';
import { useContext } from 'react';
import { SpaceIdeaSidebarChapter } from './chapter/main';

export function SpaceIdeaSidebarChaptersList() {
  const chapterListController = useContext(ContextForSpaceChapterList);

  return (
    <>
      {chapterListController.state.more.queryResults.map((chapter) => (
        <ContextForSpaceChapterObj.Provider value={chapter} key={chapter.id}>
          <SpaceIdeaSidebarChapter key={chapter.id} />
        </ContextForSpaceChapterObj.Provider>
      ))}
    </>
  );
}
