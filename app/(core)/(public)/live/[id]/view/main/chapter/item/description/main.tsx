import {
  ContextForPublicSpace,
  PublicSpaceFeedView,
} from '@/(core)/(public)/live/[id]/controller/main';
import { ContextForUserMain } from '@/server/controller/user/main';
import { exampleFileElement } from '@/server/model/elements/file/main';
import { ContextForUserPostObj } from '@/server/model/post/main';
import { getFormattedAMPM, getFormattedDate } from '@/utils/dateFormat';
import { useContext } from 'react';
import { PublicSpaceChapterPostKarma } from './karma/main';

export function PublicSpaceChapterPostDescription() {
  const userMainController = useContext(ContextForUserMain);
  const publicSpaceController = useContext(ContextForPublicSpace);
  const postObj = useContext(ContextForUserPostObj);

  return (
    <div className='flex w-full flex-row items-center space-x-[1rem]'>
      <div
        className='flex w-full cursor-pointer flex-col space-y-[1rem]'
        onClick={() => {
          publicSpaceController.actions.updateFeedView(
            PublicSpaceFeedView.POST,
          );
        }}
      >
        <div className='flex w-full flex-col justify-between space-y-[1rem]'>
          <div className='flex flex-row items-center space-x-[1rem]'>
            <img
              className='aspect-square h-[3rem] rounded-full'
              src={
                userMainController.state.obj?.dp?.src || exampleFileElement.src
              }
            />
            <div className='flex flex-col'>
              <p className='text-2xl font-bold text-slate-300'>
                {postObj?.title?.trim() || 'Untitled'}
              </p>
              <div className='flex flex-row'>
                <p className=' text-sm font-light text-white'>
                  {getFormattedAMPM(new Date(postObj?.created ?? ''))}
                </p>
                <span>,</span>
                <p className=' text-sm font-light text-white'>
                  {getFormattedDate(new Date(postObj?.created ?? ''))}
                </p>
              </div>
            </div>
          </div>
        </div>
        <p className='text-lg text-slate-500'>{postObj?.description}</p>
      </div>
      <PublicSpaceChapterPostKarma />
    </div>
  );
}
