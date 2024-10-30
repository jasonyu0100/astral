import { ContextForUserPostListFromChapter } from '@/server/controller/post/list-from-chapter';
import { ContextForUserMain } from '@/server/controller/user/main';
import { exampleFileElement } from '@/server/model/elements/file/main';
import { getFormattedDate } from '@/utils/dateFormat';
import { useContext } from 'react';
import { PublicSpacePageKarma } from './karma/main';

export function PublicSpaceDescription() {
  const userMainController = useContext(ContextForUserMain);
  const postListController = useContext(ContextForUserPostListFromChapter);

  return (
    <>
      <div className='flex w-full flex-row items-center space-x-[1rem]'>
        <div className='flex w-full flex-col space-y-[1rem]'>
          <div className='flex w-full flex-col justify-between space-y-[1rem] px-[1rem]'>
            <div className='flex flex-row items-center space-x-[1rem]'>
              <img
                className='aspect-square h-[3rem] rounded-full'
                src={
                  userMainController.state.obj?.dp?.src ||
                  exampleFileElement.src
                }
              />
              <div className='flex flex-col'>
                <p className='text-2xl font-bold text-slate-300'>
                  {postListController.state.currentObj?.title?.trim() ||
                    'Untitled'}
                </p>
                <div className='space-y-[0.5rem]'>
                  <p className=' text-sm font-light text-white'>
                    {getFormattedDate(
                      new Date(
                        postListController.state.currentObj?.created ?? '',
                      ),
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p className='text-lg font-bold text-slate-300'>
            {postListController.state.currentObj?.description}
          </p>
        </div>
        <PublicSpacePageKarma />
      </div>
    </>
  );
}
