import { ContextForUserPostObj } from '@/server/model/post/main';
import { useContext } from 'react';
import { SpacesUpdatesKarma } from './karma/main';
import { SpacesUpdatesTitle } from './title/main';

export function SpacesUpdatesPostDescription() {
  const postObj = useContext(ContextForUserPostObj);

  return (
    <div className='flex flex-row items-center justify-between space-x-[1rem]'>
      <div className='flex w-full flex-col'>
        <SpacesUpdatesTitle />
        <div className='flex flex-col justify-between space-y-[1rem] py-[1rem]'>
          <p className='text-xl text-slate-300'>
            {postObj.description || 'No description'}
          </p>
        </div>
      </div>
      <SpacesUpdatesKarma />
    </div>
  );
}
