import { ContextForIdeaSceneList } from '@/(server)/controller/scene/list';
import { AstralChevronUpIcon } from '@/icons/chevron-up/main';
import { cn } from '@/utils/cn';
import { useContext } from 'react';

export function SpacesMapNavigationUp() {
  const sceneListController = useContext(ContextForIdeaSceneList);

  return (
    <div className='absolute right-[2rem] top-[2rem] z-30 flex h-[4rem] w-[4rem] flex-col items-center justify-center'>
      <AstralChevronUpIcon
        className={cn('h-[3rem] w-[3rem] cursor-pointer fill-slate-500', {
          'fill-slate-700':
            sceneListController.state.index === 0 ||
            sceneListController.state.objs.length === 0,
        })}
        onClick={() => {
          if (sceneListController.state.index === 0) {
            alert('Cannot go up');
          } else {
            sceneListController.actions.stateActions.goPrev();
          }
        }}
      />
    </div>
  );
}
