import { ContextForUserConnectionListFromDestination } from '@/(server)/controller/user/connection/list-from-destination';
import { ContextForUserConnectionListFromSource } from '@/(server)/controller/user/connection/list-from-source';
import {
  ContextForLoggedInUserObj,
  ContextForProfileUserObj,
} from '@/(server)/model/user/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import { useContext, useEffect, useState } from 'react';

export enum ConnectionStatus {
  FOLLOWING = 'FOLLOWING',
  FOLLOW = 'FOLLOW',
}

export function ProfileAboutConnectAction() {
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
    ConnectionStatus.FOLLOW,
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
      return ConnectionStatus.FOLLOWING;
    } else if (fromLoggedInFollows) {
      return ConnectionStatus.FOLLOWING;
    } else if (fromProfileFollows) {
      return ConnectionStatus.FOLLOW;
    } else {
      return ConnectionStatus.FOLLOW;
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
          if (connectionStatus === ConnectionStatus.FOLLOW) {
            followProfile();
          } else if (connectionStatus === ConnectionStatus.FOLLOWING) {
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
