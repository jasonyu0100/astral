import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { HorizontalDivider } from '@/(components)/(indicator)/divider/horizontal/main';
import {
  ContextForOpenable,
  useControllerForOpenable,
} from '@/(logic)/contexts/openable/main';
import { ContextForChapterReviewList } from '@/(server)/(controller)/space/chapter/review/list';
import { ContextForChapterReviewObj } from '@/(server)/(model)/space/chapter/review/main';
import { useContext } from 'react';
import { SpaceReviewReviewModal } from '../../../(modal)/add/review/main';
import { SpaceReviewSidebarReview } from './review/main';

export function SpaceReviewSidebarList() {
  const reviewListController = useContext(ContextForChapterReviewList);
  const reviewOpenableController = useControllerForOpenable();
  return (
    <ContextForOpenable.Provider value={reviewOpenableController}>
      <div style={{ height: '100%', width: '100%' }}>
        <GlassAreaContainer
          sizeFx='h-full w-full'
          className='flex flex-col overflow-auto p-[1rem]'
          name={''}
        >
          <div className='h-full w-full overflow-auto  pr-[1rem]'>
            <div className='flex flex-col space-y-[1rem]'>
              <div className='flex flex-col space-y-[0.5rem]'>
                {reviewListController.state.objs.map((review) => (
                  <ContextForChapterReviewObj.Provider value={review}>
                    <SpaceReviewSidebarReview />
                  </ContextForChapterReviewObj.Provider>
                ))}
              </div>
              <div className='flex flex-col space-y-[0.5rem]'>
                <p className='font-bold text-slate-300'>Complete</p>
                <HorizontalDivider />
                {reviewListController.state.objs.map((review) => (
                  <ContextForChapterReviewObj.Provider value={review}>
                    <SpaceReviewSidebarReview />
                  </ContextForChapterReviewObj.Provider>
                ))}
              </div>
            </div>
          </div>
        </GlassAreaContainer>
      </div>
      <SpaceReviewReviewModal />
    </ContextForOpenable.Provider>
  );
}
