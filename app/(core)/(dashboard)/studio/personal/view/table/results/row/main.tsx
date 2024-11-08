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
import { StudioPersonalRowActivity } from './activity/main';
import { StudioPersonalRowCategory } from './category/main';
import { StudioPersonalRowInfo } from './info/main';
import { StudioPersonalRowMore } from './more/main';
import { StudioPersonalRowNumber } from './number/main';
import { StudioPersonalRowProgress } from './progress/main';

export function StudioPersonalRow() {
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
        <div className='grid w-full grid-cols-8 py-[2rem]'>
          <StudioPersonalRowNumber />
          <StudioPersonalRowInfo />
          <StudioPersonalRowCategory />
          <StudioPersonalRowActivity />
          <StudioPersonalRowProgress />
          <StudioPersonalRowMore />
        </div>
      </ContextForUserActivityListFromSpace.Provider>
    </ContextForTaskListFromSpace.Provider>
  );
}
