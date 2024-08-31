import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { ContextForSpaceChapterObj } from '@/(server)/model/space/chapter/main';
import { cn } from '@/lib/utils';
import { useContext } from 'react';

export function SpaceChatChapterHeader() {
  const chapter = useContext(ContextForSpaceChapterObj);
  const chaptersListController = useContext(ContextForSpaceChapterList);
  const active =
    chaptersListController.actions.stateActions.checkActive(chapter);

  return (
    <button
      className='w-full'
      onClick={() =>
        chaptersListController.actions.stateActions.select(chapter)
      }
    >
      <div className='flex w-full'>
        <p
          className={cn(
            'w-full text-start font-extraBold text-xl text-slate-500',
            {
              'animate-pulse-slow text-slate-300': active,
            },
          )}
        >
          {chapter.title}
        </p>
      </div>
    </button>
  );
}
