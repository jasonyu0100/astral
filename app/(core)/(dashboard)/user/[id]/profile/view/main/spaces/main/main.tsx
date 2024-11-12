import {
  ContextForSpaceList,
  useControllerForSpaceList,
} from '@/architecture/controller/space/list';
import { ContextForProfileUserObj } from '@/architecture/model/user/main';
import { useContext } from 'react';
import { ContextForUserProfileSpaces, ProfilePage } from '../controller/main';
import { UserProfileSpaces } from './table/main';

export function UserProfilePages() {
  const profileController = useContext(ContextForUserProfileSpaces);
  const profileUser = useContext(ContextForProfileUserObj);
  const spaceListController = useControllerForSpaceList(profileUser?.id);

  return (
    <div className='h-full w-full p-[1rem]'>
      <div className='h-full w-full overflow-auto pr-[2rem]'>
        <div className='flex w-full flex-col'>
          {profileController.state.page === ProfilePage.Spaces && (
            <ContextForSpaceList.Provider value={spaceListController}>
              <div className='flex w-full flex-col space-y-[2rem]'>
                <UserProfileSpaces />
              </div>
            </ContextForSpaceList.Provider>
          )}
        </div>
      </div>
    </div>
  );
}
