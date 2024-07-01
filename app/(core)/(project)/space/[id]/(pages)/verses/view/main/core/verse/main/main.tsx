import { ContextForChapterVerseList } from '@/(server)/(controller)/space/chapter/verse/list';
import { getFormattedDate } from '@/(utils)/dateFormat';
import { useContext } from 'react';

export function SpaceVersesVerseMain() {
  const verseListController = useContext(ContextForChapterVerseList);

  return (
    <div className='flex h-full max-w-[800px] flex-col space-y-[2rem]'>
      <div className='flex aspect-[12/9] w-[800px] items-center justify-center rounded-[2rem] bg-black'>
        <img
          className='h-full flex-shrink-0 rounded-[2rem] object-contain'
          src={verseListController.state.currentObj?.fileElem?.src}
        />
      </div>
      <div className='space-y-[0.5rem] px-[0.5rem]'>
        <p className=' text-sm font-light text-white'>
          {getFormattedDate(
            new Date(verseListController.state.currentObj?.created ?? ''),
          )}
        </p>
        <p className='text-xl font-bold text-white'>
          Verse - {verseListController.state.currentObj?.title}
        </p>
        <p className=' text-white'>
          {verseListController.state.currentObj?.description}
        </p>
      </div>
    </div>
  );
}
