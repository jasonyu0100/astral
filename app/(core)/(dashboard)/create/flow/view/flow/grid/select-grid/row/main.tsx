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
import { CreateFlowRowVisibility } from '../../common/activity/main';
import { CreateFlowRowCategory } from '../../common/category/main';
import { CreateFlowRowCheckbox } from '../../common/checkbox/main';
import { CreateFlowRowInfo } from '../../common/info/main';
import { CreateFlowRowMore } from '../../common/more/main';
import { CreateFlowRowProgress } from '../../common/progress/main';

export function CreateFlowInactiveSelectRow() {
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
          <CreateFlowRowCheckbox />
          <CreateFlowRowInfo />
          <CreateFlowRowCategory />
          <CreateFlowRowVisibility />
          <CreateFlowRowProgress />
          <CreateFlowRowMore />
        </div>
      </ContextForUserActivityListFromSpace.Provider>
    </ContextForTaskListFromSpace.Provider>
  );
}
