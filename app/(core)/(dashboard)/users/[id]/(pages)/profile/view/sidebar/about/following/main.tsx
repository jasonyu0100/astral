import { useControllerForUserConnectionListFromFollowing } from '@/(server)/controller/user/connection/list-from-following';
import { ContextForProfileUserObj } from '@/(server)/model/user/main';
import { useContext } from 'react';
import {
  ContextForUserProfile,
  UserProfilePage,
} from '../../../../controller/main';

export function UserProfileAboutFollowing() {
  const {
    actions: { updatePage },
  } = useContext(ContextForUserProfile);
  const profileUser = useContext(ContextForProfileUserObj);
  const connectionListController =
    useControllerForUserConnectionListFromFollowing(profileUser.id);

  return (
    <div className='justify- flex w-full flex-row items-center justify-center space-x-[1rem]'>
      <p
        className='cursor-pointer text-lg font-bold text-white'
        onClick={() => {
          updatePage(UserProfilePage.Connections);
        }}
      >
        {connectionListController.state.objs.length} Following
      </p>
    </div>
  );
}
