import { ChaptersHandlerContext } from '@/(lgx)/internal/handler/chapters/main';
import { ChatsHandlerContext } from '@/(lgx)/internal/handler/storm/chats/main';
import { ChapterContext } from '@/(types)/model/space/chapter/main';
import { cn } from '@/(lgx)/utils/cn';
import React, { useContext } from 'react';

export function StormChapterTitle() {
  const chapter = useContext(ChapterContext);
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
