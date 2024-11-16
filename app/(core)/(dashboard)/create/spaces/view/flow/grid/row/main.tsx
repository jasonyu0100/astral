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
import { CreateSpacesRowVisibility } from './activity/main';
import { CreateSpacesRowCategory } from './category/main';
import { CreateSpacesRowInfo } from './info/main';
import { CreateSpacesRowMore } from './more/main';
import { CreateSpacesRowNumber } from './number/main';
import { CreateSpacesRowProgress } from './progress/main';

export function CreateSpacesRow() {
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
          <CreateSpacesRowNumber />
          <CreateSpacesRowInfo />
          <CreateSpacesRowCategory />
          <CreateSpacesRowVisibility />
          <CreateSpacesRowProgress />
          <CreateSpacesRowMore />
        </div>
      </ContextForUserActivityListFromSpace.Provider>
    </ContextForTaskListFromSpace.Provider>
  );
}
