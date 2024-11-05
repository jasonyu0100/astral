import { ContextForSpaceChapterList } from '@/architecture/controller/space/chapter/list';
import { ContextForSpaceChapterObj } from '@/architecture/model/space/chapter/main';
import { HorizontalDivider } from '@/components/indicator/divider/horizontal/main';
import { useContext } from 'react';
import { SpacesChannelSidebarChaptersAdd } from './add/main';
import { SpacesChannelSidebarChapter } from './item/main';

export function SpacesChannelSidebarChaptersList() {
  const chapterListController = useContext(ContextForSpaceChapterList);

  return (
    <div className='flex w-full flex-col space-y-[1rem]'>
      {chapterListController.state.more.queryResults.map((chapter) => (
        <ContextForSpaceChapterObj.Provider value={chapter} key={chapter.id}>
          <SpacesChannelSidebarChapter key={chapter.id} />
        </ContextForSpaceChapterObj.Provider>
      ))}
      <HorizontalDivider />
      <SpacesChannelSidebarChaptersAdd />
    </div>
  );
}
