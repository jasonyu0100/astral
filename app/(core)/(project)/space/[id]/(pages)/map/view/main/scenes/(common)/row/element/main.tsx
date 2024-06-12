import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { glassFx, borderFx, roundedFx } from '@/(style)/data';
import { useContext } from 'react';
import { ContextForSpaceChapterObj } from '@/(server)/(model)/space/chapter/main';
import { WrapperTooltip } from '@/(components)/(basic)/tooltip/main';
import { cn } from '@/(utils)/cn';
import { ElementActiveText } from './active/main';
import { ElementInactiveText } from './inactive/main';
import { ContextForSpaceChapterList } from '@/(server)/(controller)/space/chapter/list';

export function ElementContainer({ index, children }: { children?: React.ReactNode, index: number }) {
  const chapter = useContext(ContextForSpaceChapterObj);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const active = chapter.id === chapterListController.state.objId;

  return (
    <WrapperTooltip text={`#${index + 1} - ${chapter.title}`}>
      <button
        onClick={() => chapterListController.actions.stateActions.select(chapter)}
        className={cn({
          'animate-pulse-slow': active,
        })}
      >
        <GlassAreaContainer
          name={ElementContainer.name}
          sizeFx='w-[200px] h-[40px]'
          glassFx={
            active ? glassFx['glass-10'] : glassFx['glass-5']
          }
          roundedFx={roundedFx['rounded-full']}
          className='flex items-center justify-center'
        >
          {active ? <ElementActiveText /> : <ElementInactiveText />}
        </GlassAreaContainer>
      </button>
    </WrapperTooltip>
  );
}
