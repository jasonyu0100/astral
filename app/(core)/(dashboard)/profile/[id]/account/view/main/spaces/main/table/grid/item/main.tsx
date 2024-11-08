import {
  ContextForTaskListFromSpace,
  useControllerForTaskListFromSpace,
} from '@/architecture/controller/task/list-from-space';
import { ContextForSpaceObj } from '@/architecture/model/space/main';
import { useContext } from 'react';
import { ProfileSpacesRowCategory } from './category/main';
import { ProfileSpacesRowDays } from './day/main';
import { ProfileSpacesRowInfo } from './info/main';
import { ProfileSpacesRowNumber } from './number/main';
import { ProfileRowProgress } from './progress/main';

export function ProfileSpacesRow() {
  const spaceObj = useContext(ContextForSpaceObj);
  const allTaskListFromController = useControllerForTaskListFromSpace(
    spaceObj.id,
  );
  return (
    <ContextForTaskListFromSpace.Provider value={allTaskListFromController}>
      <div className='grid w-full grid-cols-7 p-[1rem]'>
        <ProfileSpacesRowNumber />
        <ProfileSpacesRowInfo />
        <ProfileSpacesRowCategory />
        <ProfileSpacesRowDays />
        <ProfileRowProgress />
      </div>
    </ContextForTaskListFromSpace.Provider>
  );
}
