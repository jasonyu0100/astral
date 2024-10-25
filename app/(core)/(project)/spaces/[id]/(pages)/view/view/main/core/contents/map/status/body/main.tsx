import { ContextForSceneIdeaList } from '@/server/controller/idea/list';
import { ContextForIdeaSceneList } from '@/server/controller/scene/list';
import { useContext } from 'react';

export function SpacesViewStatusBody() {
  const sceneListController = useContext(ContextForIdeaSceneList);
  const ideaListController = useContext(ContextForSceneIdeaList);

  return (
    <div className='flex h-full w-full flex-col items-center justify-center'>
      <p className='text-xl font-light text-slate-300'>
        #{sceneListController.state.index + 1} -{' '}
        {sceneListController.state.currentObj?.title || 'Open-ended'} (
        {ideaListController.state.objs.length} ideas)
      </p>
      <div className='flex flex-row'>
        <p className='text-md text-center font-light text-slate-300'>
          Objective:{' '}
          {sceneListController.state.currentObj?.objective || 'Open-ended'}
        </p>
      </div>
    </div>
  );
}
