import {
  ContextForSpaceList,
  useControllerForSpaceList,
} from '@/(server)/controller/space/list';
import { ContextForProfileUserObj } from '@/(server)/model/user/main';
import { HorizontalDivider } from '@/ui/indicator/divider/horizontal/main';
import { useContext } from 'react';
import { UserProfileSpacesTable } from './table/main';

export function UserProfileOverviewSpaces() {
  const profileUser = useContext(ContextForProfileUserObj);
  const spaceListController = useControllerForSpaceList(profileUser.id);
  console.log(spaceListController.state.objs);

  return (
    <ContextForSpaceList.Provider value={spaceListController}>
      <div className='flex flex-col space-y-[1rem]'>
        <p className='text-2xl font-bold text-slate-300'>Chart</p>
        <HorizontalDivider />
        <UserProfileSpacesTable />
      </div>
    </ContextForSpaceList.Provider>
  );
}
