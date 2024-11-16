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
import { HomeFlowRowVisibility } from '../../common/activity/main';
import { HomeFlowRowCategory } from '../../common/category/main';
import { HomeFlowRowInfo } from '../../common/info/main';
import { HomeFlowRowMore } from '../../common/more/main';
import { HomeFlowRowNumber } from '../../common/number/main';
import { HomeFlowRowProgress } from '../../common/progress/main';

export function HomeFlowActiveFlowRow() {
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
        <div className='grid w-full grid-cols-9 py-[1rem]'>
          <HomeFlowRowNumber />
          <HomeFlowRowInfo />
          <HomeFlowRowCategory />
          <HomeFlowRowVisibility />
          <HomeFlowRowProgress />
          <HomeFlowRowMore />
        </div>
      </ContextForUserActivityListFromSpace.Provider>
    </ContextForTaskListFromSpace.Provider>
  );
}
