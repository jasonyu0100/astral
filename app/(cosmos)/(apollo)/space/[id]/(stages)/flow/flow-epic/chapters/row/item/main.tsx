import { Layer } from '@/(common)/layer/main';
import { backgroundStyles, borderStyles } from '@/(common)/styles/data';
import { ChapterObj } from '@/tables/space/chapter/main';
import { useContext } from 'react';
import { FlowContext } from '../../../../page';

export function FlowChapter({ chapter }: { chapter: ChapterObj }) {
  const { chapterId, chapterHandler } = useContext(FlowContext);
  const active = chapter.id === chapterId;

  return (
    <button onClick={() => chapterHandler.goToChapter(chapter)}>
      <Layer
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
      </Layer>
    </button>
  );
}
