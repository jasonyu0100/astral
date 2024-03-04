import { GlassContainer } from '@/(components)/(basic)/glass/container/main';
import { backgroundStyles, borderStyles } from '@/(design)/(styles)/data';
import { useContext } from 'react';
import { DraftContext } from '../../../../page';
import { ChapterContext } from '@/(logic)/internal/data/infra/model/space/chapter/main';
import { WrapperTooltip } from '@/(components)/(basic)/tooltip/main';

export function DraftChapter({ index }: { index: number }) {
  const chapter = useContext(ChapterContext);
  const { chapterId, chapterHandler } = useContext(DraftContext);
  const active = chapter.id === chapterId;

  return (
    <WrapperTooltip text={`#${index+1} - ${chapter.title}`}>
      <button onClick={() => chapterHandler.goToChapter(chapter)}>
        <GlassContainer
          displayName={DraftChapter.name}
          sizeStyle='w-[200px] h-[40px]'
          glassStyle={backgroundStyles['glass-5']}
          borderStyle={borderStyles['rounded-full']}
        >
          <div className='flex h-full w-full items-center justify-center'>
            {active ? (
              <div className='font-bold text-white'>{chapter.title}</div>
            ) : (
              <div className='font-bold text-slate-500'>{chapter.title}</div>
            )}
          </div>
        </GlassContainer>
      </button>
    </WrapperTooltip>
  );
}
