import { useControllerForReviewUpdateListFromSpace } from '@/(server)/controller/space/chapter/session/update/list-from-space';
import { ChapterReviewUpdateVariant } from '@/(server)/model/space/chapter/review/update/main';
import { ContextForSpaceObj } from '@/(server)/model/space/main';
import { useContext } from 'react';

export function StudioSpacesRowSpotlights() {
  const spaceObj = useContext(ContextForSpaceObj);
  const reviewreviewUpdateListController =
    useControllerForReviewUpdateListFromSpace(spaceObj.id);
  const spotlights = reviewreviewUpdateListController.state.objs.filter(
    (update) => update.variant === ChapterReviewUpdateVariant.SPOTLIGHT,
  );

  return (
    <div className='flex flex-row items-center justify-center'>
      <p className='text-sm font-bold text-slate-300'>{spotlights.length}</p>
    </div>
  );
}
