import { ContextForUserPostListFromChapter } from '@/architecture/controller/post/list-from-chapter';
import { ContextForUserMain } from '@/architecture/controller/user/main';
import { useContext } from 'react';
import { PublicSpacePostDescriptionDetailsTitle } from './title/main';

export function PublicSpacePostDescriptionDetails() {
  const userMainController = useContext(ContextForUserMain);
  const postListController = useContext(ContextForUserPostListFromChapter);

  return (
    <div className='flex w-full flex-col space-y-[1rem]'>
      <PublicSpacePostDescriptionDetailsTitle />
      <p className='text-lg font-bold text-slate-300'>
        {postListController.state.currentObj?.description}
      </p>
    </div>
  );
}
