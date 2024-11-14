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
import { FlowCurrentRowVisibility } from '../../common/activity/main';
import { FlowCurrentRowCategory } from '../../common/category/main';
import { FlowCurrentRowCheckbox } from '../../common/checkbox/main';
import { FlowCurrentRowInfo } from '../../common/info/main';
import { FlowCurrentRowMore } from '../../common/more/main';
import { FlowCurrentRowProgress } from '../../common/progress/main';

export function FlowCurrentInactiveSelectRow() {
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
          <FlowCurrentRowCheckbox />
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
