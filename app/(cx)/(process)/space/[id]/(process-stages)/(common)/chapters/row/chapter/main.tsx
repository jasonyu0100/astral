import { GlassContainer } from '@/(components)/(basic)/glass/container/main';
import { glassStyles, borderStyles, roundedStyles } from '@/(design)/(styles)/data';
import { useContext } from 'react';
import { ChapterContext } from '@/(logic)/internal/model/space/chapter/main';
import { WrapperTooltip } from '@/(components)/(basic)/tooltip/main';
import { ChaptersHandlerContext } from '@/(logic)/internal/handler/chapters/main';
import { cn } from '@/(logic)/utils/cn';
import { ChapterActiveText } from './active/main';
import { ChapterInactiveText } from './inactive/main';

export function ChapterContainer({ index }: { index: number }) {
  const chapter = useContext(ChapterContext);
  const chaptersHandler = useContext(ChaptersHandlerContext);
  const active = chapter.id === chaptersHandler.chapterId;

  return (
    <WrapperTooltip text={`#${index + 1} - ${chapter.title}`}>
      <button
        onClick={() => chaptersHandler.chapterActions.goToChapter(chapter)}
        className={cn({
          'animate-pulse-slow': active,
        })}
      >
        <GlassContainer
          displayName={ChapterContainer.name}
          sizeStyle='w-[200px] h-[40px]'
          glassStyle={
            active ? glassStyles['glass-10'] : glassStyles['glass-5']
          }
          roundedStyle={roundedStyles['rounded-full']}
          className='flex items-center justify-center'
        >
          {active ? <ChapterActiveText /> : <ChapterInactiveText />}
        </GlassContainer>
      </button>
    </WrapperTooltip>
  );
}
