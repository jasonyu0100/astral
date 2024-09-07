import { ContextForChapterSceneList } from '@/(server)/controller/space/chapter/scene/list';
import { AstralChevronDownIcon } from '@/icons/chevron-down/main';
import { AstralChevronUpIcon } from '@/icons/chevron-up/main';
import { cn } from '@/utils/cn';
import { useContext } from 'react';
import { ContextForSpaceMapModals } from '../../../../../../modal/controller/main';

export function SpaceMapNavigation() {
  const sceneListController = useContext(ContextForChapterSceneList);
  const modalController = useContext(ContextForSpaceMapModals);

  return (
    <div className='absolute right-[1rem] flex h-full flex-col items-center justify-center'>
      <div className='flex flex-col items-center justify-center'>
        <AstralChevronUpIcon
          className={cn('h-[3rem] w-[3rem] cursor-pointer', {
            'fill-slate-500': sceneListController.state.index === 0,
          })}
          onClick={() => {
            if (sceneListController.state.index === 0) {
              alert('Cannot go back');
            } else {
              sceneListController.actions.stateActions.goPrev();
            }
          }}
        />
        <p className='text-md font-bold text-slate-300'>
          {sceneListController.state.index + 1}
        </p>
        <AstralChevronDownIcon
          className={cn('h-[3rem] w-[3rem] cursor-pointer', {
            'fill-slate-500':
              sceneListController.state.index ===
              sceneListController.state.objs.length - 1,
          })}
          onClick={() => {
            if (
              sceneListController.state.index ===
              sceneListController.state.objs.length - 1
            ) {
              modalController.addSceneController.open();
            } else {
              sceneListController.actions.stateActions.goNext();
            }
          }}
        />
      </div>
    </div>
  );
}
