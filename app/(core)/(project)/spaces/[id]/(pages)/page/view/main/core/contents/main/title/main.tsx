import { ContextForUserPostListFromChapter } from '@/server/controller/post/list-from-chapter';
import { exampleFileElement } from '@/server/model/elements/file/main';
import { ContextForUserObj } from '@/server/model/user/main';
import { useContext } from 'react';

export function SpacesPageTitle() {
  const postListController = useContext(ContextForUserPostListFromChapter);
  const user = useContext(ContextForUserObj);

  return (
    <div className='flex w-full flex-col justify-between space-y-[1rem] px-[1rem]'>
      <div className='flex flex-row items-center space-x-[1rem]'>
        <img
          className='aspect-square h-[3rem] rounded-full'
          src={user?.dp?.src || exampleFileElement.src}
        />
        <p className='text-2xl font-bold text-slate-300'>
          {postListController.state.currentObj?.title?.trim() || 'Untitled'}
        </p>
      </div>
    </div>
  );
}
