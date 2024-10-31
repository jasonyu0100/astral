import { useControllerForUserActivityListFromSpace } from '@/server/controller/activity/list-from-space';
import { UserActivityVariant } from '@/server/model/activity/main';
import { ContextForSpaceObj } from '@/server/model/space/main';
import { useContext } from 'react';

export function StudioSharedRowIdeas() {
  const spaceObj = useContext(ContextForSpaceObj);
  const reviewactivityListController =
    useControllerForUserActivityListFromSpace(spaceObj.id);
  const ideas = reviewactivityListController.state.objs.filter(
    (update) => update.variant === UserActivityVariant.IDEA,
  );

  return (
    <div className='flex flex-row items-center justify-center'>
      <p className='text-center text-sm font-bold text-slate-300'>
        {ideas.length}
      </p>
    </div>
  );
}
