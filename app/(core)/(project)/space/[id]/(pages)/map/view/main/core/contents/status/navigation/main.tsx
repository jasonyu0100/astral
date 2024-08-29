import { ContextForChapterSceneList } from '@/(server)/controller/space/chapter/scene/list';
import { AstralChevronDownIcon } from '@/icons/chevron-down/main';
import { AstralChevronUpIcon } from '@/icons/chevron-up/main';
import { useContext } from 'react';
import { ContextForSpaceMapModals } from '../../../../../../modal/controller/main';

export function SpaceMapStatusSceneNavigation() {
  const sceneListController = useContext(ContextForChapterSceneList);
  const modalController = useContext(ContextForSpaceMapModals);

  return (
    <div className='flex flex-col items-center justify-center'>
      <AstralChevronUpIcon
        className='h-[2.5rem] w-[2.5rem] cursor-pointer'
        onClick={() => {
          if (sceneListController.state.index === 0) {
            alert('Cannot go back');
          } else {
            sceneListController.actions.stateActions.goPrev();
          }
        }}
      />
      <AstralChevronDownIcon
        className='h-[2.5rem] w-[2.5rem] cursor-pointer'
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
  );
}
