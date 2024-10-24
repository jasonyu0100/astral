import { ContextForIdeaSceneList } from '@/(server)/controller/scene/list';
import { AstralChevronDownIcon } from '@/icons/chevron-down/main';
import { ctwn } from '@/utils/cn';
import { useContext } from 'react';

export function SpacesMapNavigationDown() {
  const sceneListController = useContext(ContextForIdeaSceneList);

  return (
    <div className='absolute bottom-[2rem] right-[2rem] z-40 flex h-[4rem] w-[4rem] flex-col items-center justify-center'>
      <AstralChevronDownIcon
        className={ctwn(
          'h-[3rem] w-[3rem] animate-pulse-slow cursor-pointer fill-slate-500',
          {
            'fill-slate-700':
              sceneListController.state.index ===
                sceneListController.state.objs.length - 1 ||
              sceneListController.state.objs.length === 0,
          },
        )}
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
