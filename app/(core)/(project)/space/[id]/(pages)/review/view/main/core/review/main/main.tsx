import { ContextForChapterReviewList } from '@/(server)/controller/space/chapter/review/list';
import { ContextForLoggedInUserObj } from '@/(server)/model/user/main';
import { AstralChevronDownIcon } from '@/icons/chevron-down/main';
import { AstralChevronUpIcon } from '@/icons/chevron-up/main';
import { getFormattedDate } from '@/utils/dateFormat';
import { useContext } from 'react';

export function SpaceReviewReviewMain() {
  const reviewListController = useContext(ContextForChapterReviewList);
  const loggedInUser = useContext(ContextForLoggedInUserObj);

  return (
    <div className='flex flex-col space-y-[1rem]'>
      <div className='flex w-full flex-row justify-between'>
        <div className='space-y-[0.5rem] px-[1rem]'>
          <p className=' text-sm font-light text-white'>
            {getFormattedDate(
              new Date(reviewListController.state.currentObj?.created ?? ''),
            )}
          </p>
          <div className='flex flex-row items-center space-x-[1rem]'>
            <img
              className='aspect-square h-[3rem] rounded-full'
              src={loggedInUser.dp.src}
            />
            <p className='text-xl font-bold text-white'>
              Review - {reviewListController.state.currentObj?.title}
            </p>
          </div>
        </div>
      </div>
      <div className='flex flex-row items-center space-x-[4rem]'>
        <div className='flex flex-col space-y-[2rem]'>
          <div className='flex flex-row space-x-[2rem]'>
            <img
              className='h-full w-full max-w-[600px] object-contain'
              src={reviewListController.state.currentObj?.fileElem?.src}
            />
            <div className='flex flex-col items-center justify-center'>
              <AstralChevronUpIcon className='h-[3rem] w-[3rem]' />
              <p className='text-xl font-bold text-slate-500'>100</p>
              <AstralChevronDownIcon className='h-[3rem] w-[3rem]' />
            </div>
          </div>
        </div>
        <div className='flex flex-col'>
          <ul className='list-disc px-[1rem] text-slate-500'>
            <li>test</li>
            <li>test</li>
            <li>test</li>
            <li>test</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
