import { ContextForUserPostListFromChapter } from '@/architecture/controller/post/list-from-chapter';
import { ContextForUserMain } from '@/architecture/controller/user/main';
import { useContext } from 'react';
import { PublicSpacePostDescriptionDetails } from './details/main';
import { PublicSpacesSpacePostKarma } from './karma/main';

export function PublicSpacePostDescription() {
  const userMainController = useContext(ContextForUserMain);
  const postListController = useContext(ContextForUserPostListFromChapter);

  return (
    <>
      <div className='flex w-full flex-row items-center space-x-[1rem]'>
        <PublicSpacePostDescriptionDetails />
        <PublicSpacesSpacePostKarma />
      </div>
    </>
  );
}
