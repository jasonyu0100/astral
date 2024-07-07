import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { ContextForSpaceChapterList } from '@/(server)/(controller)/space/chapter/list';
import { ContextForSpaceChapterObj } from '@/(server)/(model)/space/chapter/main';
import { borderFx, glassFx, roundedFx } from '@/(style)/data';
import { cn } from '@/(utils)/cn';
import { useContext } from 'react';

export function SpaceMapRowElement({
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
    <button
      onClick={() => chapterListController.actions.stateActions.select(chapter)}
      className={cn({
        'animate-pulse-slow': active,
      })}
    >
      <GlassAreaContainer
        name={SpaceMapRowElement.name}
        sizeFx='w-[200px] h-[40px]'
        glassFx={active ? glassFx['glass-20'] : glassFx['glass-5']}
        roundedFx={roundedFx['rounded-full']}
        borderFx={borderFx['border-all']}
        className='flex items-center justify-center'
      >
        {children}
        {active ? (
          <p className='font-bold text-slate-700'>{chapter.title}</p>
        ) : (
          <p className='font-bold text-slate-700'>{chapter.title}</p>
        )}
      </GlassAreaContainer>
    </button>
  );
}
