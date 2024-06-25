import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { ContextForUserConnectionList } from '@/(server)/(controller)/user/connection/list';
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
  const connectionListController = useContext(ContextForUserConnectionList);
  const connectionTermsListController =
    useControllerForUserConnectionTermsList('');
  const mutualConnected = checkMutualConnected();

  function checkMutualConnected() {
    const fromLoggedIn =
      connectionListController.state.objs.filter(
        (connection) =>
          connection.userId === loggedInUser.id &&
          connection.connectionId === profileUser.id,
      ).length > 0;
    const fromProfile =
      connectionListController.state.objs.filter(
        (connection) =>
          connection.connectionId === profileUser.id &&
          connection.userId === loggedInUser.id,
      ).length > 0;
    return fromLoggedIn && fromProfile;
  }

  async function addTwoWayConnection() {
    // PERMISSION NEEDED
    alert('Two Way Connnection');
    const terms =
      await connectionTermsListController.actions.createActions.createTerms(
        'Connection terms',
        '1 year',
        moment().add(1, 'year').toISOString(),
      );
    await connectionListController.actions.createActions.createConnection(
      loggedInUser.id, // initiator
      profileUser.id, // receiver
      terms.id,
    );
    await connectionListController.actions.createActions.createConnection(
      profileUser.id, // initiator
      loggedInUser.id, // receiver
      terms.id,
    );
  }

  async function removeTwoWayConnection() {
    alert('Removing Two Way Connection');
    const ids = connectionListController.state.objs
      .filter(
        (connection) =>
          connection.connectionId === profileUser.id ||
          connection.userId === profileUser.id,
      )
      .map((connection) => connection.id);
    const connections =
      await connectionListController.actions.deleteActions.deleteMany(ids);

    connections.map(async (connection) => {
      await connectionTermsListController.actions.deleteActions.delete(
        connection.termsId,
      );
    });
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
