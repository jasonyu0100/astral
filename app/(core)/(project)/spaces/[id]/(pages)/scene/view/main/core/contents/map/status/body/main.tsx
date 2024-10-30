import { ContextForSceneIdeaList } from '@/server/controller/idea/list';
import { ContextForIdeaSceneList } from '@/server/controller/scene/list';
import { useContext } from 'react';

export function SpacesSceneStatusBody() {
  const sceneListController = useContext(ContextForIdeaSceneList);
  const ideaListController = useContext(ContextForSceneIdeaList);

  return (
    <div className='flex h-full w-full flex-col space-y-[1rem] py-[1rem]'>
      <div className='flex flex-row items-center space-x-[1rem]'>
        <div className='flex h-[2rem] w-[2rem] items-center justify-center rounded-full bg-blue-500'>
          <p className='text-lg font-bold text-slate-300'>
            {ideaListController.state.objs.length}
          </p>
        </div>
        <p className='text-lg font-bold text-slate-300'>ideas</p>
      </div>
      {/* <p className='text-md font-light text-slate-300'>
        <span className='font-bold'>Objective: </span>
        {sceneListController.state.currentObj?.objective || 'Open-ended'}
      </p>
      <p className='text-md  font-light text-slate-300'>
        <span className='font-bold'>Summary: </span>
        {sceneListController.state.currentObj?.summary || 'Open-ended'}
      </p> */}
    </div>
  );
}
