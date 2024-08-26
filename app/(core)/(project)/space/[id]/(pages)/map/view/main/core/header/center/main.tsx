import { ContextForChapterSceneList } from '@/(server)/controller/space/chapter/scene/list';
import { useContext } from 'react';
import { SpaceMapExpandIcon } from './expand/main';

export function SpaceMapHeaderCenter() {
  const sceneListController = useContext(ContextForChapterSceneList);

  return (
    <div className='flex w-1/3 flex-row items-center justify-center space-x-[1rem]'>
      <p className='text-lg font-light text-slate-300'>
        scene - {sceneListController.state.currentObj?.title || 'untitled'}
      </p>
      <SpaceMapExpandIcon />
    </div>
  );
}
