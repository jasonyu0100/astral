import { ContextForIdeaSceneList } from '@/(server)/controller/scene/list';
import { useContext } from 'react';

export function SpacesMapStatusBody() {
  const sceneListController = useContext(ContextForIdeaSceneList);

  return (
    <div className='flex h-full w-full flex-col items-center justify-center'>
      <p className='text-xl font-light text-slate-300'>
        <span className='font-bold'>Scene:</span>{' '}
        {sceneListController.state.currentObj?.objective || 'Open-ended'}
      </p>
      <p className='text-md text-center font-light text-slate-300'>
        {sceneListController.state.currentObj?.summary || '...'}
      </p>
    </div>
  );
}
