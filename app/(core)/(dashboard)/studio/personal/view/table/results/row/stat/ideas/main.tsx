import { ContextForUserActivityListFromSpace } from '@/server/controller/activity/list-from-space';
import { UserActivityVariant } from '@/server/model/activity/main';
import { useContext } from 'react';

export function StudioPersonalRowIdeas() {
  const spaceActivityListController = useContext(
    ContextForUserActivityListFromSpace,
  );
  const ideas = spaceActivityListController.state.objs.filter(
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
