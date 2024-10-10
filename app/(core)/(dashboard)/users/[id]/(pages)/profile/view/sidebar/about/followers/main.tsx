import { ContextForUserConnectionList } from '@/(server)/controller/user/connection/list';
import { useContext } from 'react';
import {
  ContextForUserProfile,
  UserProfilePage,
} from '../../../../controller/main';

export function UserProfileAboutFollowers() {
  const {
    actions: { updatePage },
  } = useContext(ContextForUserProfile);
  const connectionListController = useContext(ContextForUserConnectionList);

  return (
    <div className='justify- flex w-full flex-row items-center justify-center space-x-[1rem]'>
      <p
        className='cursor-pointer text-lg font-bold text-white'
        onClick={() => {
          updatePage(UserProfilePage.Connections);
        }}
      >
        {connectionListController.state.objs.length} Followers
      </p>
    </div>
  );
}
