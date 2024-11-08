import {
  ContextForUserActivityListFromSpace,
  useControllerForUserActivityListFromSpace,
} from '@/architecture/controller/activity/list-from-space';
import { ContextForSpaceObj } from '@/architecture/model/space/main';
import { useContext } from 'react';
import { HomeSharedRowActivity } from './activity/main';
import { HomeSharedRowCategory } from './category/main';
import { HomeSharedRowInfo } from './info/main';
import { HomeSharedRowNumber } from './number/main';
import { HomeSharedRowDays } from './stat/day/main';
import { HomeSharedRowIdeas } from './stat/ideas/main';
import { HomeSharedRowPosts } from './stat/posts/main';
import { HomeSharedRowLogs } from './stat/tasks/main';

export function HomeSharedRow() {
  const spaceObj = useContext(ContextForSpaceObj);
  const spaceActivityListController = useControllerForUserActivityListFromSpace(
    spaceObj.id,
  );

  return (
    <ContextForUserActivityListFromSpace.Provider
      value={spaceActivityListController}
    >
      <div className='grid w-full grid-cols-7 py-[2rem]'>
        <HomeSharedRowNumber />
        <HomeSharedRowInfo />
        <HomeSharedRowCategory />
        <HomeSharedRowActivity />
        <div className='col-span-2 grid grid-cols-4'>
          <HomeSharedRowDays />
          <HomeSharedRowIdeas />
          <HomeSharedRowLogs />
          <HomeSharedRowPosts />
        </div>
      </div>
    </ContextForUserActivityListFromSpace.Provider>
  );
}
