import { useControllerForTaskMain } from '@/server/controller/way/main';
import { ContextForPostLinkObj } from '@/server/model/post/link/main';
import { useContext } from 'react';

export function SpacesPagesLog() {
  const link = useContext(ContextForPostLinkObj);
  const log = useControllerForTaskMain(link.logId);

  return (
    <div className='flex aspect-[3/2] w-full flex-shrink-0 flex-col bg-yellow-500 p-[1rem]'>
      <div className='flex flex-col space-y-[1rem]'>
        <p className='text-xl font-bold'>{log.state.obj.title}</p>
        <p className='text-lg'>{log.state.obj.description}</p>
      </div>
      <p className='text-md mt-auto'>{log.state.obj.created}</p>
    </div>
  );
}
