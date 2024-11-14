import { ContextForFlowCurrent } from '@/(core)/(dashboard)/flow/current/controller/main';
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
import { FlowCurrentRowInfo } from '../../common/info/main';
import { FlowCurrentRowMore } from '../../common/more/main';
import { FlowCurrentRowProgress } from '../../common/progress/main';

export function FlowCurrentInactiveFlowRow() {
  const spaceObj = useContext(ContextForSpaceObj);
  const flowCurrentController = useContext(ContextForFlowCurrent);
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
          <div className='flex items-center justify-center'>
            <input
              type='checkbox'
              value={flowCurrentController.state.selectedSpaces.includes(
                spaceObj.id,
              )}
              onChange={() => {
                console.log(flowCurrentController.state.selectedSpaces);
                if (
                  flowCurrentController.state.selectedSpaces.includes(
                    spaceObj.id,
                  )
                ) {
                  flowCurrentController.actions.updateSelectedSpaces(
                    flowCurrentController.state.selectedSpaces.filter(
                      (id) => id !== spaceObj.id,
                    ),
                  );
                } else {
                  flowCurrentController.actions.updateSelectedSpaces([
                    ...flowCurrentController.state.selectedSpaces,
                    spaceObj.id,
                  ]);
                }
              }}
            />
          </div>
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
