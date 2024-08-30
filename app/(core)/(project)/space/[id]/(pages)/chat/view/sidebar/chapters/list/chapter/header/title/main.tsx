import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { ContextForSpaceChapterObj } from '@/(server)/model/space/chapter/main';
import { cn } from '@/utils/cn';
import { useContext } from 'react';

export function SpaceChatHeaderTitle() {
  const chapter = useContext(ContextForSpaceChapterObj);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const active =
    chapterListController.actions.stateActions.checkActive(chapter);

  return (
    <p
      className={cn('font-extraBold text-xl text-slate-500', {
        'animate-pulse-slow text-white': active,
      })}
    >
      {chapter.title}
    </p>
  );
}
