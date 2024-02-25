import { Glass } from '@/(components)/glass/main';
import { backgroundStyles, borderStyles } from '@/(components)/styles/data';
import { useContext } from 'react';
import { FlowContext } from '../../../../page';
import { ChapterContext } from '@/(logic)/internal/data/infra/model/space/chapter/main';

export function FlowChapter() {
  const chapter = useContext(ChapterContext);
  const { chapterId, chapterHandler } = useContext(FlowContext);
  const active = chapter.id === chapterId;

  return (
    <button onClick={() => chapterHandler.goToChapter(chapter)}>
      <Glass
        displayName={FlowChapter.name}
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
