import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { containerStyles } from '@/(design)/(styles)/data';
import { useContext } from 'react';
import { ChapterContext } from '@/(logic)/internal/model/space/chapter/main';
import { ChaptersHandlerContext } from '@/(logic)/internal/handler/chapters/main';

export function StormChapterHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  const chapter = useContext(ChapterContext);
  const chaptersHandler = useContext(ChaptersHandlerContext);
  
  return (
    <button onClick={() => chaptersHandler.chapterActions.goToChapter(chapter)}>
      <GlassAreaContainer
        name={StormChapterHeader.name}
        size='w-full py-[0.5rem]'
        className={`${containerStyles['row-center']} justify-between`}
      >
        {children}
      </GlassAreaContainer>
    </button>
  );
}
