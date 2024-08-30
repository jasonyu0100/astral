import { ContextForChapterSceneList } from '@/(server)/controller/space/chapter/scene/list';
import { useContext } from 'react';

export function SpaceMapStatusBody() {
  const sceneListController = useContext(ContextForChapterSceneList);

  return (
    <div className='flex h-full w-full flex-col items-center justify-center space-y-[0.5rem]'>
      <p className='text-xl font-bold text-slate-300'>
        Objective:{' '}
        {sceneListController.state.currentObj?.objective || 'Open-ended'}
      </p>
      <p className='text-md text-center font-light text-slate-300'>
        {sceneListController.state.currentObj?.summary || '...'}
      </p>
    </div>
  );
}
