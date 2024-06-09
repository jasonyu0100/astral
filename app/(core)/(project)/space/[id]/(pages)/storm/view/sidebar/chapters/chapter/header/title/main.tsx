import { ContextForChapterChatList } from '@/(model)/(controller)/space/chapter/chat/list';
import { ContextForSpaceChapterList } from '@/(model)/(controller)/space/chapter/list';
import { ContextForSpaceChapterObj } from '@/(model)/space/chapter/main';
import { cn } from '@/(utils)/cn';
import React, { useContext } from 'react';

export function StormChapterTitle() {
  const chapter = useContext(ContextForSpaceChapterObj);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const active =
    chapterListController.actions.stateActions.checkActive(chapter);

  return (
    <p
      className={cn('font-extraBold text-xl text-slate-500', {
        'animate-pulse-slow text-slate-400': active,
      })}
    >
      {chapter.title}
    </p>
  );
}
