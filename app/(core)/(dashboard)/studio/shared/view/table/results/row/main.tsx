import {
  ContextForUserActivityListFromSpace,
  useControllerForUserActivityListFromSpace,
} from '@/server/controller/activity/list-from-space';
import { ContextForSpaceObj } from '@/server/model/space/main';
import { useContext } from 'react';
import { StudioSharedRowActivity } from './activity/main';
import { StudioSharedRowCategory } from './category/main';
import { StudioSharedRowInfo } from './info/main';
import { StudioSharedRowNumber } from './number/main';
import { StudioSharedRowDays } from './stat/day/main';
import { StudioSharedRowIdeas } from './stat/ideas/main';
import { StudioSharedRowPosts } from './stat/posts/main';
import { StudioSharedRowLogs } from './stat/tasks/main';

export function StudioSharedRow() {
  const spaceObj = useContext(ContextForSpaceObj);
  const spaceActivityListController = useControllerForUserActivityListFromSpace(
    spaceObj.id,
  );

  return (
    <ContextForUserActivityListFromSpace.Provider
      value={spaceActivityListController}
    >
      <div className='grid w-full grid-cols-7 py-[2rem]'>
        <StudioSharedRowNumber />
        <StudioSharedRowInfo />
        <StudioSharedRowCategory />
        <StudioSharedRowActivity />
        <div className='col-span-2 grid grid-cols-4'>
          <StudioSharedRowDays />
          <StudioSharedRowIdeas />
          <StudioSharedRowLogs />
          <StudioSharedRowPosts />
        </div>
      </div>
    </ContextForUserActivityListFromSpace.Provider>
  );
}
