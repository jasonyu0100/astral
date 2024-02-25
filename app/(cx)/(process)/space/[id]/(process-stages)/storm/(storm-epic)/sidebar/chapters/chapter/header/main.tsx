import { GlassContainer } from '@/(components)/(basic)/glass/container/main';
import { containerStyles } from '@/(design)/(styles)/data';
import { useContext } from 'react';
import { StormContext } from '../../../../../page';
import { ChapterContext, ChapterObj } from '@/(logic)/internal/data/infra/model/space/chapter/main';

export function StormChapterHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  const chapter = useContext(ChapterContext);
  const { chapterHandler } = useContext(StormContext);
  return (
    <button onClick={() => chapterHandler.goToChapter(chapter)}>
      <GlassContainer
        displayName={StormChapterHeader.name}
        sizeStyle='w-full py-[0.5rem]'
        className={`${containerStyles['row-center']} justify-between`}
      >
        {children}
      </GlassContainer>
    </button>
  );
}
