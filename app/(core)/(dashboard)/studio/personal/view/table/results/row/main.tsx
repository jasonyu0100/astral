import {
  ContextForUserActivityListFromSpace,
  useControllerForUserActivityListFromSpace,
} from '@/architecture/controller/activity/list-from-space';
import { ContextForSpaceObj } from '@/architecture/model/space/main';
import { useContext } from 'react';
import { StudioPersonalRowActivity } from './activity/main';
import { StudioPersonalRowCategory } from './category/main';
import { StudioPersonalRowInfo } from './info/main';
import { StudioPersonalRowMore } from './more/main';
import { StudioPersonalRowNumber } from './number/main';
import { StudioPersonalRowDays } from './stat/day/main';
import { StudioPersonalRowIdeas } from './stat/ideas/main';
import { StudioPersonalRowPosts } from './stat/posts/main';
import { StudioPersonalRowTasks } from './stat/tasks/main';

export function StudioPersonalRow() {
  const spaceObj = useContext(ContextForSpaceObj);
  const activityListController = useControllerForUserActivityListFromSpace(
    spaceObj.id,
  );

  return (
    <ContextForUserActivityListFromSpace.Provider
      value={activityListController}
    >
      <div className='grid w-full grid-cols-8 py-[2rem]'>
        <StudioPersonalRowNumber />
        <StudioPersonalRowInfo />
        <StudioPersonalRowCategory />
        <StudioPersonalRowActivity />
        <div className='col-span-2 grid grid-cols-4'>
          <StudioPersonalRowDays />
          <StudioPersonalRowIdeas />
          <StudioPersonalRowTasks />
          <StudioPersonalRowPosts />
        </div>
        <div className='flex items-center justify-center'>
          <StudioPersonalRowMore />
        </div>
      </div>
    </ContextForUserActivityListFromSpace.Provider>
  );
}
