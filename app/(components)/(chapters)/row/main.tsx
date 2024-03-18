import { DraftModalContext } from '@/(modals)/(process)/draft-modal/main';
import { useContext } from 'react';
import { DraftChapter } from './item/main';
import DraftChaptersAdd from './add/main';
import { ChapterContext } from '@/(logic)/internal/data/infra/model/space/chapter/main';
import { ChaptersHandlerContext } from '@/(logic)/internal/handler/chapters/main';

export function ChaptersRow() {
  const chaptersHandler = useContext(ChaptersHandlerContext);
  const { addChapterModal } = useContext(DraftModalContext);

  return (
    <div className='flex h-full flex-grow flex-row items-center space-x-[3px] overflow-auto'>
      {chaptersHandler.chapters.map((chapter, index) => (
        <ChapterContext.Provider value={chapter} key={chapter.id}>
          <DraftChapter index={index} key={chapter.id}/>
        </ChapterContext.Provider>
      ))}
      <DraftChaptersAdd onClick={() => addChapterModal.open()} />
    </div>
  );
}
