import { ContextForUserConnectionListFromDestination } from '@/architecture/controller/user/connection/list-from-destination';
import { ContextForUserConnectionListFromSource } from '@/architecture/controller/user/connection/list-from-source';
import {
  ContextForLoggedInUserObj,
  ContextForProfileUserObj,
} from '@/architecture/model/user/main';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { useContext, useEffect, useState } from 'react';

export enum UserProfileConnectionStatus {
  FOLLOWING = 'FOLLOWING',
  FOLLOW = 'FOLLOW',
}

export function UserProfileAboutConnectAction() {
  const loggedInUser = useContext(ContextForLoggedInUserObj);
  const profileUser = useContext(ContextForProfileUserObj);
  const fromSourceFollowingController = useContext(
    ContextForUserConnectionListFromSource,
  );
  const fromDestinationFollowingController = useContext(
    ContextForUserConnectionListFromDestination,
  );
  const profileFollowing = fromSourceFollowingController.state.objs;
  const profileFollowers = fromDestinationFollowingController.state.objs;

  const [connectionStatus, setConnectionStatus] = useState(
    UserProfileConnectionStatus.FOLLOW,
  );

  useEffect(() => {
    setConnectionStatus(checkConnectionStatus());
  }, [profileFollowing, profileFollowers]);

  function checkConnectionStatus() {
    const fromLoggedInFollows = profileFollowers.some(
      (connection) => connection.sourceId === loggedInUser?.id,
    );
    const fromProfileFollows = profileFollowing.some(
      (connection) => connection.destinationId === loggedInUser?.id,
    );

    if (fromLoggedInFollows && fromProfileFollows) {
      return UserProfileConnectionStatus.FOLLOWING;
    } else if (fromLoggedInFollows) {
      return UserProfileConnectionStatus.FOLLOWING;
    } else if (fromProfileFollows) {
      return UserProfileConnectionStatus.FOLLOW;
    } else {
      return UserProfileConnectionStatus.FOLLOW;
    }
  }

  async function followProfile() {
    await fromDestinationFollowingController.actions.createActions.createConnection(
      loggedInUser?.id, // initiator
      profileUser.id, // receiver
    );

    alert('Following Profile');
  }

  async function unfollowProfile() {
    const fromProfileIds = fromDestinationFollowingController.state.objs
      .filter((connection) => connection.sourceId === loggedInUser?.id)
      .map((connection) => connection.id);

    await fromDestinationFollowingController.actions.deleteActions.deleteMany([
      ...fromProfileIds,
    ]);
    alert('Unfollowing Profile');
  }

  return (
    <GlassWindowFrame
      className='flex h-[3rem] w-full flex-shrink-0 flex-grow'
      roundedFx={roundedFx.rounded}
      borderFx={borderFx['border-around']}
    >
      <GlassWindowContents
        className='flex h-full w-full cursor-pointer items-center justify-center'
        onClick={() => {
          if (connectionStatus === UserProfileConnectionStatus.FOLLOW) {
            followProfile();
          } else if (
            connectionStatus === UserProfileConnectionStatus.FOLLOWING
          ) {
            unfollowProfile();
          } else {
            unfollowProfile();
          }
        }}
      >
        <p className='font-bold text-slate-300'>{connectionStatus}</p>
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-10']} />
    </GlassWindowFrame>
  );
}
