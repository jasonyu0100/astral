import { BarDividerIndicator } from '@/components/indicator/bar/main';
import { ContextForUserConnectionListFromDestination } from '@/server/controller/user/connection/list-from-destination';
import { ContextForUserConnectionListFromSource } from '@/server/controller/user/connection/list-from-source';
import { useContext } from 'react';
import {
  ContextForUserProfile,
  UserProfilePage,
} from '../../../../controller/main';

export function UserProfileAboutConnections() {
  const {
    actions: { updatePage },
  } = useContext(ContextForUserProfile);
  const fromSourceConnectionListController = useContext(
    ContextForUserConnectionListFromSource,
  );
  const fromDestinationConnectionListController = useContext(
    ContextForUserConnectionListFromDestination,
  );
  const profileFollowers = fromDestinationConnectionListController.state.objs;
  const profileFollowing = fromSourceConnectionListController.state.objs;

  return (
    <div className='flex w-full flex-row items-center justify-between space-x-[1rem]'>
      <p
        className='cursor-pointer text-lg font-bold text-white'
        onClick={() => {
          updatePage(UserProfilePage.Connections);
        }}
      >
        {profileFollowing.length} Following
      </p>
      <BarDividerIndicator />
      <p
        className='cursor-pointer text-lg font-bold text-white'
        onClick={() => {
          updatePage(UserProfilePage.Connections);
        }}
      >
        {profileFollowers.length} Followers
      </p>
    </div>
  );
}
