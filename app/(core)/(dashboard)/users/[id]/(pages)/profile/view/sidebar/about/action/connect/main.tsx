import {
  ContextForUserConnectionListFromFollowing,
  useControllerForUserConnectionListFromFollowing,
} from '@/(server)/controller/user/connection/list-from-following';
import {
  ContextForLoggedInUserObj,
  ContextForProfileUserObj,
} from '@/(server)/model/user/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import { useContext } from 'react';

export function ProfileAboutConnectAction() {
  const loggedInUser = useContext(ContextForLoggedInUserObj);
  const profileUser = useContext(ContextForProfileUserObj);
  const profileConnectionListController = useContext(
    ContextForUserConnectionListFromFollowing,
  );
  const userConnectionListController =
    useControllerForUserConnectionListFromFollowing(loggedInUser.id);
  const mutualConnected = checkMutualConnected();

  // CONNECTION IS LIMITED BY DUNBAR AND IS INITIATED ON A TERMS BASIS
  // CONNECTION IS TWO WAY

  function checkMutualConnected() {
    const fromLoggedIn =
      profileConnectionListController.state.objs.filter(
        (connection) => connection.connectedId === loggedInUser.id,
      ).length > 0;
    const fromProfile =
      userConnectionListController.state.objs.filter(
        (connection) => connection.connectedId === profileUser.id,
      ).length > 0;
    return fromLoggedIn && fromProfile;
  }

  async function addTwoWayConnection() {
    // PERMISSION NEEDED
    alert('Two Way Connnection');
    // LOGGED IN CONNECTS WITH PROFILE
    await userConnectionListController.actions.createActions.createConnection(
      loggedInUser.id, // initiator
      profileUser.id, // receiver
    );
    // PROFILE RECEIVES INVITATION
    await profileConnectionListController.actions.createActions.createConnection(
      profileUser.id, // initiator
      loggedInUser.id, // receiver
    );
  }

  async function removeTwoWayConnection() {
    alert('Removing Two Way Connection');
    const fromProfileIds = profileConnectionListController.state.objs
      .filter((connection) => connection.connectedId === loggedInUser.id)
      .map((connection) => connection.id);

    const fromLoggedInIds = userConnectionListController.state.objs
      .filter((connection) => connection.connectedId === profileUser.id)
      .map((connection) => connection.id);

    await userConnectionListController.actions.deleteActions.deleteMany([
      ...fromLoggedInIds,
    ]);

    await profileConnectionListController.actions.deleteActions.deleteMany([
      ...fromProfileIds,
    ]);
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
          if (mutualConnected) {
            removeTwoWayConnection();
          } else {
            addTwoWayConnection();
          }
        }}
      >
        <p className='font-bold text-slate-300'>
          {mutualConnected ? 'Connected' : 'Connect'}
        </p>
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-10']} />
    </GlassWindowFrame>
  );
}
