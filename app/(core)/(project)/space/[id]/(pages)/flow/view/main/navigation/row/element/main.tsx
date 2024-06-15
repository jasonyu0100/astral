import { WrapperTooltip } from '@/(components)/(basic)/tooltip/main';
import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { ContextForSpaceChapterList } from '@/(server)/(controller)/space/chapter/list';
import { ContextForSpaceChapterObj } from '@/(server)/(model)/space/chapter/main';
import { glassFx, roundedFx } from '@/(style)/data';
import { cn } from '@/(utils)/cn';
import { useContext } from 'react';

export function SpaceFlowRowElement({
  index,
  children,
}: {
  children?: React.ReactNode;
  index: number;
}) {
  const chapter = useContext(ContextForSpaceChapterObj);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const active = chapter.id === chapterListController.state.objId;

  return (
    <WrapperTooltip text={`#${index + 1} - ${chapter.title}`}>
      <button
        onClick={() =>
          chapterListController.actions.stateActions.select(chapter)
        }
        className={cn({
          'animate-pulse-slow': active,
        })}
      >
        <GlassAreaContainer
          name={SpaceFlowRowElement.name}
          sizeFx='w-[200px] h-[40px]'
          glassFx={active ? glassFx['glass-20'] : glassFx['glass-5']}
          roundedFx={roundedFx['rounded-full']}
          className='flex items-center justify-center'
        >
          {children}
          {active ? (
            <p className='font-bold text-slate-300'>{chapter.title}</p>
          ) : (
            <p className='font-bold text-slate-500'>{chapter.title}</p>
          )}
        </GlassAreaContainer>
      </button>
    </WrapperTooltip>
  );
}
