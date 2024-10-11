import {
  ContextForSpaceList,
  useControllerForSpaceList,
} from '@/(server)/controller/space/list';
import { ContextForProfileUserObj } from '@/(server)/model/user/main';
import { HorizontalDivider } from '@/ui/indicator/divider/horizontal/main';
import { useContext } from 'react';
import { UserProfileSpacesTable } from './table/main';

export function UserProfileOverviewYour() {
  const profileUser = useContext(ContextForProfileUserObj);
  const spaceListController = useControllerForSpaceList(profileUser.id);

  return (
    <ContextForSpaceList.Provider value={spaceListController}>
      <div className='flex w-full flex-col space-y-[2rem]'>
        <p className='text-2xl font-bold text-slate-300'>Spaces</p>
        <HorizontalDivider />
        <UserProfileSpacesTable />
      </div>
    </ContextForSpaceList.Provider>
  );
}
