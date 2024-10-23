import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { ContextForSpaceChapterObj } from '@/(server)/model/space/chapter/main';
import { useContext } from 'react';
import { SpacesConversationSidebarChaptersAdd } from './add/main';
import { SpacesConversationSidebarChapter } from './chapter/main';

export function SpacesConversationSidebarChaptersList() {
  const chapterListController = useContext(ContextForSpaceChapterList);

  return (
    <div className='flex w-full flex-col space-y-[1rem]'>
      {chapterListController.state.more.queryResults.map((chapter) => (
        <ContextForSpaceChapterObj.Provider value={chapter} key={chapter.id}>
          <SpacesConversationSidebarChapter key={chapter.id} />
        </ContextForSpaceChapterObj.Provider>
      ))}
      <SpacesConversationSidebarChaptersAdd />
    </div>
  );
}
