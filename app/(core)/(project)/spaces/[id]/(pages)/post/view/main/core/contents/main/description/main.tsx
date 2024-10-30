import { ContextForUserPostListFromChapter } from '@/server/controller/post/list-from-chapter';
import { useContext } from 'react';
import { SpacesPostKarma } from './karma/main';
import { SpacesPostTitle } from './title/main';

export function SpacesPostDescription() {
  const postListController = useContext(ContextForUserPostListFromChapter);

  return (
    <div className='flex flex-row items-center justify-between space-x-[1rem]'>
      <div className='flex w-full flex-col'>
        <SpacesPostTitle />
        <div className='flex flex-col justify-between space-y-[1rem] py-[1rem]'>
          <p className='text-xl text-slate-300'>
            {postListController.state.currentObj?.description ||
              'No description'}
          </p>
        </div>
      </div>
      <SpacesPostKarma />
    </div>
  );
}
