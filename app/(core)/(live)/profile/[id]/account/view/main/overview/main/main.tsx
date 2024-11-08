import {
  ContextForSpaceList,
  useControllerForSpaceList,
} from '@/architecture/controller/space/list';
import { ContextForProfileUserObj } from '@/architecture/model/user/main';
import { useContext } from 'react';
import { ContextForProfile, ProfilePage } from '../controller/main';
import { UserProfileSpacesLive } from './table/main';

export function UserProfileOverviewPages() {
  const profileController = useContext(ContextForProfile);
  const profileUser = useContext(ContextForProfileUserObj);
  const spaceListController = useControllerForSpaceList(profileUser?.id);

  return (
    <div className='h-full w-full p-[2rem]'>
      <div className='h-full w-full overflow-auto pr-[2rem]'>
        <div className='flex w-full flex-col'>
          {profileController.state.page === ProfilePage.Spaces && (
            <ContextForSpaceList.Provider value={spaceListController}>
              <div className='flex w-full flex-col space-y-[2rem]'>
                <UserProfileSpacesLive />
              </div>
            </ContextForSpaceList.Provider>
          )}
        </div>
      </div>
    </div>
  );
}
