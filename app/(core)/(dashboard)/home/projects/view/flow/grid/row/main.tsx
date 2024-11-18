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
import { HomeProjectsRowVisibility } from './activity/main';
import { HomeProjectsRowCategory } from './category/main';
import { HomeProjectsRowInfo } from './info/main';
import { HomeProjectsRowMore } from './more/main';
import { HomeProjectsRowNumber } from './number/main';
import { HomeProjectsRowProgress } from './progress/main';
import { HomeProjectsRowShare } from './share/main';

export function HomeProjectsRow() {
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
        <div className='grid w-full grid-cols-10 py-[1rem]'>
          <HomeProjectsRowNumber />
          <HomeProjectsRowInfo />
          <HomeProjectsRowCategory />
          <HomeProjectsRowVisibility />
          <HomeProjectsRowProgress />
          <HomeProjectsRowMore />
          <HomeProjectsRowShare />
        </div>
      </ContextForUserActivityListFromSpace.Provider>
    </ContextForTaskListFromSpace.Provider>
  );
}
