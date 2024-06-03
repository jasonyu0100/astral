import { GlassAreaContainer } from '@/(components)/(glass)/area/main';

import { useContext } from 'react';
import { ChapterContext } from '@/(model)/chapter/main';
import { ChaptersHandlerContext } from '@/(controller)/chapters/main';
import { StormChapterTitle } from './title/main';

export function StormChapterHeader() {
  const chapter = useContext(ChapterContext);
  const chaptersHandler = useContext(ChaptersHandlerContext);

  return (
    <button onClick={() => chaptersHandler.chapterActions.goToChapter(chapter)}>
      <GlassAreaContainer
        name={StormChapterHeader.name}
        sizeFx='w-full py-[0.5rem]'
        className={`flex items-center justify-between`}
      >
        <StormChapterTitle />
      </GlassAreaContainer>
    </button>
  );
}
