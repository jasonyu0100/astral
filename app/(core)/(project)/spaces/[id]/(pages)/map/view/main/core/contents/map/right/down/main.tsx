import { ContextForChapterSceneList } from '@/(server)/controller/space/chapter/scene/list';
import { AstralChevronDownIcon } from '@/icons/chevron-down/main';
import { cn } from '@/utils/cn';
import { useContext } from 'react';

export function SpacesMapNavigationDown() {
  const sceneListController = useContext(ContextForChapterSceneList);

  return (
    <div className='absolute bottom-[2rem] right-[2rem] z-30 flex h-[4rem] w-[4rem] flex-col items-center justify-center'>
      <AstralChevronDownIcon
        className={cn('h-[3rem] w-[3rem] animate-pulse-slow cursor-pointer', {
          'fill-slate-500':
            sceneListController.state.index ===
            sceneListController.state.objs.length - 1,
        })}
        onClick={() => {
          if (
            sceneListController.state.index ===
            sceneListController.state.objs.length - 1
          ) {
            alert('Cannot go down');
          } else {
            sceneListController.actions.stateActions.goNext();
          }
        }}
      />
    </div>
  );
}
