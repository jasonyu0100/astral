import {
  ContextForUserActivityListFromSpace,
  useControllerForUserActivityListFromSpace,
} from '@/architecture/controller/activity/list-from-space';
import {
  ContextForTaskListFromSpace,
  useControllerForTaskListFromSpace,
} from '@/architecture/controller/task/list-from-space';
import { ContextForSpaceObj } from '@/architecture/model/space/main';
import { useContext } from 'react';
import { HomePersonalRowCategory } from './category/main';
import { HomePersonalRowDays } from './day/main';
import { HomePersonalRowInfo } from './info/main';
import { HomePersonalRowMore } from './more/main';
import { HomePersonalRowNumber } from './number/main';
import { HomePersonalRowProgress } from './progress/main';

export function HomePersonalRow() {
  const spaceObj = useContext(ContextForSpaceObj);
  const activityListController = useControllerForUserActivityListFromSpace(
    spaceObj.id,
  );
  const allTaskListFromController = useControllerForTaskListFromSpace(
    spaceObj.id,
  );

  return (
    <ContextForTaskListFromSpace.Provider value={allTaskListFromController}>
      <ContextForUserActivityListFromSpace.Provider
        value={activityListController}
      >
        <div className='grid w-full grid-cols-8 py-[1rem]'>
          <HomePersonalRowNumber />
          <HomePersonalRowInfo />
          <HomePersonalRowCategory />
          <HomePersonalRowDays />
          <HomePersonalRowProgress />
          <HomePersonalRowMore />
        </div>
      </ContextForUserActivityListFromSpace.Provider>
    </ContextForTaskListFromSpace.Provider>
  );
}
