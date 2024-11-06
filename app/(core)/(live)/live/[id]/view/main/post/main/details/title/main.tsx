import { ContextForUserPostListFromChapter } from '@/architecture/controller/post/list-from-chapter';
import { ContextForUserMain } from '@/architecture/controller/user/main';
import { exampleFileElement } from '@/architecture/model/elements/file/main';
import { getFormattedAMPM, getFormattedDate } from '@/utils/dateFormat';
import { useContext } from 'react';

export function PublicSpacePostDescriptionDetailsTitle() {
  const userMainController = useContext(ContextForUserMain);
  const postListController = useContext(ContextForUserPostListFromChapter);

  return (
    <div className='flex flex-row items-center space-x-[1rem]'>
      <img
        className='aspect-square h-[3rem] rounded-full'
        src={userMainController.state.obj?.dp?.src || exampleFileElement.src}
      />
      <div className='flex flex-col'>
        <p className='text-2xl font-bold text-slate-300'>
          {postListController.state.currentObj?.title?.trim() || 'Untitled'}
        </p>
        <div className='flex flex-row'>
          <p className=' text-sm font-light text-white'>
            {getFormattedAMPM(
              new Date(postListController.state.currentObj?.created ?? ''),
            )}
          </p>
          <span>,</span>
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
