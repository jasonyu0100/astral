import { ContextForChapterReviewList } from '@/(server)/controller/space/chapter/review/list';
import { exampleFileElem } from '@/(server)/model/elements/file/main';
import { ContextForLoggedInUserObj } from '@/(server)/model/user/main';
import { glassFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import { getFormattedDate } from '@/utils/dateFormat';
import { useContext } from 'react';
import { Carousel } from './carousel/main';

export function SpaceReviewReviewMain() {
  const reviewListController = useContext(ContextForChapterReviewList);
  const loggedInUser = useContext(ContextForLoggedInUserObj);

  return (
    <div className='flex flex-col space-y-[2rem] p-[2rem] px-[4rem] pb-[4rem]'>
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
              src={loggedInUser.dp?.src || exampleFileElem.src}
            />
            <p className='text-xl font-bold text-white'>
              Review - {reviewListController.state.currentObj?.title}
            </p>
          </div>
        </div>
      </div>
      <div className='flex w-full flex-row space-x-[4rem]'>
        <div className='flex w-full flex-col space-y-[2rem]'>
          <Carousel
            images={[
              reviewListController.state.currentObj?.fileElem?.src,
              reviewListController.state.currentObj?.fileElem?.src,
              reviewListController.state.currentObj?.fileElem?.src,
            ]}
          />

          {/* <div className='grid w-full'>
              <img
                className='h-full w-full object-contain'
                src={reviewListController.state.currentObj?.fileElem?.src}
              />
              <img
                className='h-full w-full object-contain'
                src={reviewListController.state.currentObj?.fileElem?.src}
              />
              <img
                className='h-full w-full object-contain'
                src={reviewListController.state.currentObj?.fileElem?.src}
              />
              <img
                className='h-full w-full object-contain'
                src={reviewListController.state.currentObj?.fileElem?.src}
              />
              <img
                className='h-full w-full object-contain'
                src={reviewListController.state.currentObj?.fileElem?.src}
              />
            </div> */}
          {/* <div className='flex flex-col items-center justify-center'>
              <AstralChevronUpIcon className='h-[3rem] w-[3rem]' />
              <p className='text-xl font-bold text-slate-500'>100</p>
              <AstralChevronDownIcon className='h-[3rem] w-[3rem]' />
            </div> */}
        </div>
        <div className='w-[600px]'>
          <GlassWindowFrame className='flex h-full w-full flex-col p-[2rem]'>
            <GlassWindowContents className='flex flex-col space-y-[1rem]'></GlassWindowContents>
            <GlassWindowPane glassFx={glassFx['glass-5']} />
          </GlassWindowFrame>
        </div>
      </div>
    </div>
  );
}
