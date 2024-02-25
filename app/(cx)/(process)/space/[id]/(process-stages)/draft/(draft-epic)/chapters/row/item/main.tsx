import { Glass } from '@/(components)/(basic)/glass/main';
import { backgroundStyles, borderStyles } from '@/(design)/(styles)/data';
import { useContext } from 'react';
import { DraftContext } from '../../../../page';
import { ChapterContext } from '@/(logic)/internal/data/infra/model/space/chapter/main';

export function DraftChapter() {
  const chapter = useContext(ChapterContext);
  const { chapterId, chapterHandler } = useContext(DraftContext);
  const active = chapter.id === chapterId;

  return (
    <button onClick={() => chapterHandler.goToChapter(chapter)}>
      <Glass
        displayName={DraftChapter.name}
        sizeStyle='w-[200px] h-[40px]'
        backgroundStyle={backgroundStyles['glass-5']}
        borderStyle={borderStyles['rounded-full']}
      >
        <div className='flex h-full w-full items-center justify-center'>
          {active ? (
            <div className='font-bold text-white'>{chapter.title}</div>
          ) : (
            <div className='font-bold text-slate-500'>{chapter.title}</div>
          )}
        </div>
      </Glass>
    </button>
  );
}
