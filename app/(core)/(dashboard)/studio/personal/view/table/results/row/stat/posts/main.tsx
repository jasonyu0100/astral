import { ContextForUserActivityListFromSpace } from '@/server/controller/activity/list-from-space';
import { UserActivityVariant } from '@/server/model/activity/main';
import { useContext } from 'react';

export function StudioPersonalRowPosts() {
  const spaceActivityListController = useContext(
    ContextForUserActivityListFromSpace,
  );
  const posts = spaceActivityListController.state.objs.filter(
    (update) => update.variant === UserActivityVariant.POST,
  );

  return (
    <div className='flex flex-row items-center justify-center'>
      <p className='text-center text-sm font-bold text-slate-300'>
        {posts.length}
      </p>
    </div>
  );
}
