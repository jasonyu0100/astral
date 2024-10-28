import { ContextForUserPostListFromChapter } from '@/server/controller/post/list-from-chapter';
import { getFormattedDate } from '@/utils/dateFormat';
import { useContext } from 'react';
import { SpacesPostKarma } from './karma/main';

export function SpacesPostDescription() {
  const postListController = useContext(ContextForUserPostListFromChapter);

  return (
    <div className='flex w-full  flex-row justify-between space-x-[1rem]'>
      <div className='flex flex-col justify-between space-y-[1rem] p-[1rem]'>
        <p className='text-xl text-slate-300'>
          {postListController.state.currentObj?.description || 'No description'}
        </p>
        <div className='space-y-[0.5rem]'>
          <p className=' text-sm font-light text-white'>
            {getFormattedDate(
              new Date(postListController.state.currentObj?.created ?? ''),
            )}
          </p>
        </div>
      </div>
      <SpacesPostKarma />
    </div>
  );
}
