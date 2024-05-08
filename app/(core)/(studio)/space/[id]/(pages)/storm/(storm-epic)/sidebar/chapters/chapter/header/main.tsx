import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { containerFx } from '@/(style)/data';
import { useContext } from 'react';
import { ChapterContext } from '@/(types)/model/space/chapter/main';
import { ChaptersHandlerContext } from '@/(logic)/internal/handler/chapters/main';
import { StormChapterTitle } from './title/main';

export function StormChapterHeader() {
  const chapter = useContext(ChapterContext);
  const chaptersHandler = useContext(ChaptersHandlerContext);

  return (
    <button onClick={() => chaptersHandler.chapterActions.goToChapter(chapter)}>
      <GlassAreaContainer
        name={StormChapterHeader.name}
        sizeFx='w-full py-[0.5rem]'
        className={`${containerFx['row-center']} justify-between`}
      >
        <StormChapterTitle />
      </GlassAreaContainer>
    </button>
  );
}
