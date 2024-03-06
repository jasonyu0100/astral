import { FlowModalContext } from '@/(modals)/(process)/flow-modal/main';
import { useContext } from 'react';
import FlowChaptersAdd from './add/main';
import { FlowChapter } from './item/main';
import { ChapterContext } from '@/(logic)/internal/data/infra/model/space/chapter/main';
import { ChaptersHandlerContext } from '@/(logic)/internal/handler/chapters/main';

export function FlowChaptersRow() {
  const chaptersHandler = useContext(ChaptersHandlerContext);
  const chapters = chaptersHandler.chapters;
  const modalContext = useContext(FlowModalContext);
  const { open } = modalContext.addChapterModal;

  return (
    <div className='flex h-full flex-grow flex-row items-center space-x-[3px] overflow-auto'>
      {chapters.map((chapter) => (
        <ChapterContext.Provider value={chapter} key={chapter.id}>
          <FlowChapter key={chapter.id}/>
        </ChapterContext.Provider>
      ))}
      <FlowChaptersAdd onClick={() => open()} />
    </div>
  );
}
