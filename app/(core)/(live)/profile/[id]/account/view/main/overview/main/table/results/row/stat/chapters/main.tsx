import { useControllerForUserActivityListFromSpace } from '@/architecture/controller/activity/list-from-space';
import { UserActivityVariant } from '@/architecture/model/activity/main';
import { ContextForSpaceObj } from '@/architecture/model/space/main';
import { useContext } from 'react';

export function StudioSpacesRowChapters() {
  const spaceObj = useContext(ContextForSpaceObj);
  const reviewactivityListController =
    useControllerForUserActivityListFromSpace(spaceObj.id);
  const chapters = reviewactivityListController.state.objs.filter(
    (update) => update.variant === UserActivityVariant.CHAPTER,
  );

  return (
    <div className='flex flex-row items-center justify-center'>
      <p className='text-center text-sm font-bold text-slate-300'>
        {chapters.length}
      </p>
    </div>
  );
}
