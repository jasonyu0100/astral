import { ContextForUserPostObj } from '@/server/model/post/main';
import { useContext } from 'react';
import { SpacesPreviewKarma } from './karma/main';
import { SpacesPreviewTitle } from './title/main';

export function SpacesPreviewPostDescription() {
  const postObj = useContext(ContextForUserPostObj);

  return (
    <div className='flex flex-row items-center justify-between space-x-[1rem]'>
      <div className='flex w-full flex-col'>
        <SpacesPreviewTitle />
        <div className='flex flex-col justify-between space-y-[1rem] py-[1rem]'>
          <p className='text-xl text-slate-300'>
            {postObj.description || 'No description'}
          </p>
        </div>
      </div>
      <SpacesPreviewKarma />
    </div>
  );
}
