import { ContextForUserActivityListFromSpace } from '@/server/controller/activity/list-from-space';
import { UserActivityVariant } from '@/server/model/activity/main';
import { useContext } from 'react';

export function StudioPersonalRowTasks() {
  const spaceActivityListController = useContext(
    ContextForUserActivityListFromSpace,
  );
  const logs = spaceActivityListController.state.objs.filter(
    (update) => update.variant === UserActivityVariant.TASK,
  );

  return (
    <div className='flex flex-row items-center justify-center'>
      <p className='text-center text-sm font-bold text-slate-300'>
        {logs.length}
      </p>
    </div>
  );
}
