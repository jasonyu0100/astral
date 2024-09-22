import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { ContextForSpaceChapterObj } from '@/(server)/model/space/chapter/main';
import { ctwn } from '@/utils/cn';
import { useContext } from 'react';

export function SpacesSpaceChapterActiveHeader() {
  const chapter = useContext(ContextForSpaceChapterObj);
  const chapterListController = useContext(ContextForSpaceChapterList);

  return (
    <div
      className='flex w-full flex-col items-start'
      onClick={() => chapterListController.actions.stateActions.select(chapter)}
    >
      <p
        className={ctwn(
          'w-full animate-pulse-slow whitespace-nowrap text-start font-extraBold text-xl text-slate-300',
        )}
      >
        {chapter.title}
      </p>
      <p className='text-md font-md w-full text-start text-slate-300'>
        <span className='font-bold'>Chapter: </span>
        {chapterListController.state.currentObj?.objective || 'Open-ended'}
      </p>
      <p className='font-md w-full text-start text-sm text-slate-300'>
        {chapterListController.state.currentObj?.description || 'Open-ended'}
      </p>
    </div>
  );
}
