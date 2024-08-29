import { ContextForChapterSceneList } from '@/(server)/controller/space/chapter/scene/list';
import { useContext } from 'react';

export function SpaceMapStatusBody() {
  const sceneListController = useContext(ContextForChapterSceneList);

  return (
    <div className='flex h-full w-full flex-col justify-center space-y-[0.5rem]'>
      <p className='text-lg font-bold text-slate-300'>
        Objective:{' '}
        {sceneListController.state.currentObj?.description || 'Open-ended'}
      </p>
      <p className='text-sm font-light text-slate-300'>
        {sceneListController.state.currentObj?.summary || '...'}
      </p>
    </div>
  );
}
