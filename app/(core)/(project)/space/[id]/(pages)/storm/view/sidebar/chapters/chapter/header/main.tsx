import { GlassAreaContainer } from '@/(components)/(glass)/area/main';

import { useContext } from 'react';
import { ContextForSpaceChapterObj } from '@/(model)/space/chapter/main';
import { ChaptersHandlerContext } from '@/(model)/(controller)/(archive)/chapters/main';
import { StormChapterTitle } from './title/main';

export function StormChapterHeader() {
  const chapter = useContext(ContextForSpaceChapterObj);
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
