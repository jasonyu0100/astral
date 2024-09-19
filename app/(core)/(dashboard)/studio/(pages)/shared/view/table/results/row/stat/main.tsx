import { useControllerForReviewUpdateListFromSpace } from '@/(server)/controller/space/chapter/session/update/list-from-space';
import { ChapterReviewUpdateVariant } from '@/(server)/model/space/chapter/review/update/main';
import { ContextForSpaceObj } from '@/(server)/model/space/main';
import { useContext } from 'react';

export function StudioSpacesRowStat() {
  const spaceObj = useContext(ContextForSpaceObj);
  const reviewreviewUpdateListController =
    useControllerForReviewUpdateListFromSpace(spaceObj.id);
  const chapters = reviewreviewUpdateListController.state.objs.filter(
    (update) => update.variant === ChapterReviewUpdateVariant.CHAPTER,
  );
  const scenes = reviewreviewUpdateListController.state.objs.filter(
    (update) => update.variant === ChapterReviewUpdateVariant.SCENE,
  );
  const spotlighs = reviewreviewUpdateListController.state.objs.filter(
    (update) => update.variant === ChapterReviewUpdateVariant.SPOTLIGHT,
  );

  return (
    <div className='flex flex-row items-center justify-center'>
      <p className='text-sm font-bold text-slate-300'>
        {chapters.length} / {scenes.length} / {spotlighs.length}
      </p>
    </div>
  );
}
