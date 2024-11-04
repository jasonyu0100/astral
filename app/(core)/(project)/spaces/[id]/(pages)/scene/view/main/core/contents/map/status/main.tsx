import { ContextForSceneIdeaList } from '@/architecture/controller/idea/list';
import { useContext } from 'react';

export function SpacesSceneStatus() {
  const ideaListController = useContext(ContextForSceneIdeaList);

  return (
    <div className='absolute left-[2rem] top-[2rem] flex flex-shrink-0 flex-col items-center justify-center'>
      <div className='flex flex-row items-center space-x-[1rem]'>
        <div className='flex h-[3rem] w-[3rem] items-center justify-center rounded-full bg-blue-500'>
          <p className='text-lg font-bold text-slate-300'>
            {ideaListController.state.objs.length}
          </p>
        </div>
        <p className='text-lg font-bold text-slate-300'>ideas</p>
      </div>
    </div>
  );
}
