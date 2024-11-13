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
import { FlowCurrentRowVisibility } from './activity/main';
import { FlowCurrentRowCategory } from './category/main';
import { FlowCurrentRowInfo } from './info/main';
import { FlowCurrentRowMore } from './more/main';
import { FlowCurrentRowNumber } from './number/main';
import { FlowCurrentRowProgress } from './progress/main';

export function FlowCurrentRow() {
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
          <FlowCurrentRowNumber />
          <FlowCurrentRowInfo />
          <FlowCurrentRowCategory />
          <FlowCurrentRowVisibility />
          <FlowCurrentRowProgress />
          <FlowCurrentRowMore />
        </div>
      </ContextForUserActivityListFromSpace.Provider>
    </ContextForTaskListFromSpace.Provider>
  );
}
