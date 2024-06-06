import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { glassFx, borderFx, roundedFx } from '@/(style)/data';
import { useContext } from 'react';
import { SpaceChapterContext } from '@/(model)/space/chapter/main';
import { WrapperTooltip } from '@/(components)/(basic)/tooltip/main';
import { ChaptersHandlerContext } from '@/(model)/(controller)/(archive)/chapters/main';
import { cn } from '@/(utils)/cn';
import { ChapterActiveText } from './active/main';
import { ChapterInactiveText } from './inactive/main';

export function ChapterContainer({
  children,
  index,
}: {
  children?: React.ReactNode;
  index: number;
}) {
  const chapter = useContext(SpaceChapterContext);
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
          glassFx={active ? glassFx['glass-10'] : glassFx['glass-5']}
          roundedFx={roundedFx['rounded-full']}
          className='flex items-center justify-center'
        >
          <p className='text-white font-bold'>{children}</p>
          {/* {active ? <ChapterActiveText /> : <ChapterInactiveText />} */}
        </GlassAreaContainer>
      </button>
    </WrapperTooltip>
  );
}
