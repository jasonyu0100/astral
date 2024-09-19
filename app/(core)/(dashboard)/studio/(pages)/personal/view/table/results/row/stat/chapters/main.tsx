import { useControllerForSessionUpdateOfSpaceList } from '@/(server)/controller/space/chapter/session/update/space-list';
import { ChapterReviewUpdateVariant } from '@/(server)/model/space/chapter/review/update/main';
import { ContextForSpaceObj } from '@/(server)/model/space/main';
import { useContext } from 'react';

export function StudioSpacesRowChapters() {
  const spaceObj = useContext(ContextForSpaceObj);
  const reviewreviewUpdateListController =
    useControllerForSessionUpdateOfSpaceList(spaceObj.id);
  const chapters = reviewreviewUpdateListController.state.objs.filter(
    (update) => update.variant === ChapterReviewUpdateVariant.CHAPTER,
  );

  return (
    <div className='flex flex-row items-center justify-center'>
      <p className='text-sm font-bold text-slate-300'>{chapters.length}</p>
    </div>
  );
}
