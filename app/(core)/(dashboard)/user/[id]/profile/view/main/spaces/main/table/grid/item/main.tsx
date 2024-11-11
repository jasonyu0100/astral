import {
  ContextForTaskListFromSpace,
  useControllerForTaskListFromSpace,
} from '@/architecture/controller/task/list-from-space';
import { ContextForSpaceObj } from '@/architecture/model/space/main';
import { useContext } from 'react';
import { UserProfileSpacesRowCategory } from './category/main';
import { UserProfileSpacesRowDays } from './day/main';
import { UserProfileSpacesRowInfo } from './info/main';
import { UserProfileSpacesRowNumber } from './number/main';
import { UserProfileRowProgress } from './progress/main';

export function UserProfileSpacesRow() {
  const spaceObj = useContext(ContextForSpaceObj);
  const allTaskListFromController = useControllerForTaskListFromSpace(
    spaceObj.id,
  );
  return (
    <ContextForTaskListFromSpace.Provider value={allTaskListFromController}>
      <div className='grid w-full grid-cols-7 gap-[1rem] p-[1rem]'>
        <UserProfileSpacesRowNumber />
        <UserProfileSpacesRowInfo />
        <UserProfileSpacesRowCategory />
        <UserProfileSpacesRowDays />
        <UserProfileRowProgress />
      </div>
    </ContextForTaskListFromSpace.Provider>
  );
}
