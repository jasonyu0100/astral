import { ContextForUserActivityListFromSpace } from '@/architecture/controller/activity/list-from-space';
import { UserActivityVariant } from '@/architecture/model/activity/main';
import { useContext } from 'react';

export function HomeSharedRowLogs() {
  const spaceActivityListController = useContext(
    ContextForUserActivityListFromSpace,
  );
  const tasks = spaceActivityListController.state.objs.filter(
    (update) => update.variant === UserActivityVariant.TASK,
  );

  return (
    <div className='flex flex-row items-center justify-center'>
      <p className='text-center text-sm font-bold text-slate-300'>
        {tasks.length}
      </p>
    </div>
  );
}
