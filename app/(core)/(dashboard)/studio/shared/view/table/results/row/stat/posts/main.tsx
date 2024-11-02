import { ContextForUserActivityListFromSpace } from '@/architecture/controller/activity/list-from-space';
import { UserActivityVariant } from '@/architecture/model/activity/main';
import { useContext } from 'react';

export function StudioSharedRowPosts() {
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
