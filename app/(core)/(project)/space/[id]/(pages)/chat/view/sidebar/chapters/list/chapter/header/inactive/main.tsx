import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { ContextForSpaceChapterObj } from '@/(server)/model/space/chapter/main';
import { cn } from '@/lib/utils';
import { useContext } from 'react';

export function SpaceChatChapterInactiveHeader() {
  const chapter = useContext(ContextForSpaceChapterObj);
  const chaptersListController = useContext(ContextForSpaceChapterList);

  return (
    <button
      className='w-full'
      onClick={() =>
        chaptersListController.actions.stateActions.select(chapter)
      }
    >
      <div className='flex w-full'>
        <p className={cn('font-extraBold text-xl text-slate-300')}>
          {chapter.title}
        </p>
      </div>
    </button>
  );
}
