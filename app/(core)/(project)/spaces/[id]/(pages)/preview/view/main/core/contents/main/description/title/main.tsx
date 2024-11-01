import { ContextForUserPostListFromChapter } from '@/server/controller/post/list-from-chapter';
import { exampleFileElement } from '@/server/model/elements/file/main';
import { ContextForUserObj } from '@/server/model/user/main';
import { getFormattedDate } from '@/utils/dateFormat';
import { useContext } from 'react';

export function SpacesPreviewTitle() {
  const postListController = useContext(ContextForUserPostListFromChapter);
  const userObj = useContext(ContextForUserObj);
  console.log(postListController.state.currentObj?.userId);

  return (
    <div className='flex w-full flex-col justify-between space-y-[1rem]'>
      <div className='flex flex-row items-center space-x-[1rem]'>
        <img
          className='aspect-square h-[3rem] rounded-full'
          src={userObj?.dp?.src || exampleFileElement.src}
        />
        <div className='flex flex-col'>
          <p className='text-2xl font-bold text-slate-300'>
            {postListController.state.currentObj?.title?.trim() || 'Untitled'}
          </p>
          <p className=' text-sm font-light text-white'>
            {getFormattedDate(
              new Date(postListController.state.currentObj?.created ?? ''),
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
