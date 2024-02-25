import { Glass } from '@/(components)/(basic)/glass/main';
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
      <Glass
        displayName={StormChapterHeader.name}
        sizeStyle='w-full h-[50px]'
        className={`${containerStyles['row-center']} justify-between`}
      >
        {children}
      </Glass>
    </button>
  );
}
