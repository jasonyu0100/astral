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
import { HomeCreateRowVisibility } from './activity/main';
import { HomeCreateRowCategory } from './category/main';
import { HomeCreateRowInfo } from './info/main';
import { HomeCreateRowMore } from './more/main';
import { HomeCreateRowNumber } from './number/main';
import { HomeCreateRowProgress } from './progress/main';

export function HomeCreateRow() {
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
          <HomeCreateRowNumber />
          <HomeCreateRowInfo />
          <HomeCreateRowCategory />
          <HomeCreateRowVisibility />
          <HomeCreateRowProgress />
          <HomeCreateRowMore />
        </div>
      </ContextForUserActivityListFromSpace.Provider>
    </ContextForTaskListFromSpace.Provider>
  );
}
