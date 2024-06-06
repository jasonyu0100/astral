import { GlassAreaContainer } from '@/(components)/(glass)/area/main';

import { useContext } from 'react';
import { SpaceChapterContext } from '@/(model)/space/chapter/main';
import { ChaptersHandlerContext } from '@/(controller)/(archive)/chapters/main';
import { StormChapterTitle } from './title/main';

export function StormChapterHeader() {
  const chapter = useContext(SpaceChapterContext);
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
