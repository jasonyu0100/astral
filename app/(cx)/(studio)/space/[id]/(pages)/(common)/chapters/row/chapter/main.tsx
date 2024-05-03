import { GlassAreaContainer } from '@/(pkgs)/(glass)/area/main';
import { glassFx, borderFx, roundedFx } from '@/(fx)/data';
import { useContext } from 'react';
import { ChapterContext } from '@/(lgx)/internal/model/space/chapter/main';
import { WrapperTooltip } from '@/(pkgs)/(basic)/tooltip/main';
import { ChaptersHandlerContext } from '@/(lgx)/internal/handler/chapters/main';
import { cn } from '@/(lgx)/utils/cn';
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
        <GlassAreaContainer
          name={ChapterContainer.name}
          sizeFx='w-[200px] h-[40px]'
          glassFx={
            active ? glassFx['glass-10'] : glassFx['glass-5']
          }
          roundedFx={roundedFx['rounded-full']}
          className='flex items-center justify-center'
        >
          {active ? <ChapterActiveText /> : <ChapterInactiveText />}
        </GlassAreaContainer>
      </button>
    </WrapperTooltip>
  );
}
