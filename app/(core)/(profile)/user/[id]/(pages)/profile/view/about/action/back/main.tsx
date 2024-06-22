import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { ContextForUserBackerList } from '@/(server)/(controller)/user/backer/list';
import {
  ContextForCurrentUserObj,
  ContextForUserObj,
} from '@/(server)/(model)/user/main';
import { borderFx, glassFx, roundedFx } from '@/(style)/data';
import { useContext } from 'react';

export function ProfileAboutBackAction() {
  const currentUser = useContext(ContextForCurrentUserObj);
  const user = useContext(ContextForUserObj);
  const backerListController = useContext(ContextForUserBackerList);
  const connected =
    backerListController.state.objs.filter(
      (backer) => backer.backerId === user.id,
    ).length > 0;

  async function addBacker() {
    const invitation =
      await backerListController.actions.createActions.createConnection(
        currentUser.id,
        user.id,
      );
    const acceptance =
      await backerListController.actions.createActions.createConnection(
        user.id,
        currentUser.id,
      );
  }

  async function removeBacker() {
    const ids = backerListController.state.objs
      .filter(
        (backer) => backer.backerId === user.id || backer.userId === user.id,
      )
      .map((backer) => backer.id);
    const invitation =
      await backerListController.actions.deleteActions.deleteMany(ids);
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
            removeBacker();
          } else {
            addBacker();
          }
        }}
      >
        <p className='font-bold text-slate-300'>
          {connected ? 'Backed' : 'Back'}
        </p>
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-10']} />
    </GlassWindowFrame>
  );
}
