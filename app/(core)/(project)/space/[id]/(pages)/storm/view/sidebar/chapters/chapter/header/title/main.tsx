import { ChaptersHandlerContext } from '@/(model)/(controller)/(archive)/chapters/main';
import { ChatsHandlerContext } from '@/(model)/(controller)/(archive)/storm/chats/main';
import { ContextForSpaceChapterObj } from '@/(model)/space/chapter/main';
import { cn } from '@/(utils)/cn';
import React, { useContext } from 'react';

export function StormChapterTitle() {
  const chapter = useContext(ContextForSpaceChapterObj);
  const chatsHandler = useContext(ChatsHandlerContext);
  const chaptersHandler = useContext(ChaptersHandlerContext);
  const active = chapter.id === chaptersHandler.chapterId;

  return (
    <p className={cn('font-extraBold text-xl text-slate-500', {
      'text-slate-400 animate-pulse-slow': active,
    })}>
      {chapter.title}
    </p>
  );
}
