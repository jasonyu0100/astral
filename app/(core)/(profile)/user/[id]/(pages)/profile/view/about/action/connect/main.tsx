import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { ContextForUserConnectionList } from '@/(server)/(controller)/user/connection/list';
import { useControllerForUserConnectionTermsList } from '@/(server)/(controller)/user/connection/terms/list';
import {
  ContextForCurrentUserObj,
  ContextForUserObj,
} from '@/(server)/(model)/user/main';
import { borderFx, glassFx, roundedFx } from '@/(style)/data';
import moment from 'moment';
import { useContext } from 'react';

export function ProfileAboutConnectAction() {
  const currentUser = useContext(ContextForCurrentUserObj);
  const user = useContext(ContextForUserObj);
  const connectionListController = useContext(ContextForUserConnectionList);
  const connectionTermsListController =
    useControllerForUserConnectionTermsList('');
  const connected =
    connectionListController.state.objs.filter(
      (connection) => connection.connectionId === user.id,
    ).length > 0;

  async function addConnection() {
    const terms =
      await connectionTermsListController.actions.createActions.createTerms(
        'Connection terms',
        '1 year',
        moment().add(1, 'year').toISOString(),
      );
    await connectionListController.actions.createActions.createConnection(
      currentUser.id,
      user.id,
      terms.id,
    );
    await connectionListController.actions.createActions.createConnection(
      user.id,
      currentUser.id,
      terms.id,
    );
  }

  async function removeConnection() {
    const ids = connectionListController.state.objs
      .filter(
        (connection) =>
          connection.connectionId === user.id || connection.userId === user.id,
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
          if (connected) {
            removeConnection();
          } else {
            addConnection();
          }
        }}
      >
        <p className='font-bold text-slate-300'>
          {connected ? 'Connected' : 'Connect'}
        </p>
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-10']} />
    </GlassWindowFrame>
  );
}
