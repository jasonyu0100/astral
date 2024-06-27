import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import {
  ContextForUserConnectionList,
  useControllerForUserConnectionList,
} from '@/(server)/(controller)/user/connection/list';
import { useControllerForUserConnectionTermsList } from '@/(server)/(controller)/user/connection/terms/list';
import {
  ContextForLoggedInUserObj,
  ContextForProfileUserObj,
} from '@/(server)/(model)/user/main';
import { borderFx, glassFx, roundedFx } from '@/(style)/data';
import moment from 'moment';
import { useContext } from 'react';

export function ProfileAboutConnectAction() {
  const loggedInUser = useContext(ContextForLoggedInUserObj);
  const profileUser = useContext(ContextForProfileUserObj);
  const profileConnectionListController = useContext(
    ContextForUserConnectionList,
  );
  const userConnectionListController = useControllerForUserConnectionList(
    loggedInUser.id,
  );
  const termsListController = useControllerForUserConnectionTermsList('');
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
    const terms = await termsListController.actions.createActions.createTerms(
      'Connection terms',
      '1 year',
      moment().add(1, 'year').toISOString(),
    );
    // LOGGED IN CONNECTS WITH PROFILE
    await userConnectionListController.actions.createActions.createConnection(
      loggedInUser.id, // initiator
      profileUser.id, // receiver
      terms.id,
    );
    // PROFILE RECEIVES INVITATION
    await profileConnectionListController.actions.createActions.createConnection(
      profileUser.id, // initiator
      loggedInUser.id, // receiver
      terms.id,
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

    const deletedConnectionsFromLoggedIn =
      await userConnectionListController.actions.deleteActions.deleteMany([
        ...fromLoggedInIds,
      ]);

    const deletedConnectionsFromProfile =
      await profileConnectionListController.actions.deleteActions.deleteMany([
        ...fromProfileIds,
      ]);

    [...deletedConnectionsFromLoggedIn, ...deletedConnectionsFromProfile].map(
      async (connection) => {
        await termsListController.actions.deleteActions.delete(
          connection.termsId,
        );
      },
    );
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
