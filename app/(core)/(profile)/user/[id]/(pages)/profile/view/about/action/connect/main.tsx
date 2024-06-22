import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { ContextForUserConnectionList } from '@/(server)/(controller)/user/connection/list';
import {
  ContextForCurrentUserObj,
  ContextForUserObj,
} from '@/(server)/(model)/user/main';
import { borderFx, glassFx, roundedFx } from '@/(style)/data';
import { useContext } from 'react';

export function ProfileAboutConnectAction() {
  const currentUser = useContext(ContextForCurrentUserObj);
  const user = useContext(ContextForUserObj);
  const connectionListController = useContext(ContextForUserConnectionList);
  const connected =
    connectionListController.state.objs.filter(
      (connection) => connection.connectionId === user.id,
    ).length > 0;

  async function addConnection() {
    const invitation =
      await connectionListController.actions.createActions.createConnection(
        currentUser.id,
        user.id,
      );
    const acceptance =
      await connectionListController.actions.createActions.createConnection(
        user.id,
        currentUser.id,
      );
  }

  async function removeConnection() {
    const ids = connectionListController.state.objs
      .filter(
        (connection) =>
          connection.connectionId === user.id || connection.userId === user.id,
      )
      .map((connection) => connection.id);
    const invitation =
      await connectionListController.actions.deleteActions.deleteMany(ids);
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
