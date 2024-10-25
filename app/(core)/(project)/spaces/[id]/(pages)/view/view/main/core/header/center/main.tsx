import { ContextForIdeaSceneList } from '@/(server)/controller/scene/list';
import { AstralChevronRightIcon } from '@/icons/chevron-right/main';
import { useContext } from 'react';

export function SpacesViewHeaderCenter() {
  const sceneListController = useContext(ContextForIdeaSceneList);

  return (
    <div className='flex w-1/3 flex-row items-center justify-center space-x-[1rem]'>
      <p className='text-center text-lg font-light text-slate-300'>
        {sceneListController.state.currentObj?.title?.trim() || 'Untitled'}
      </p>
      <AstralChevronRightIcon />
    </div>
  );
}
