import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import {
  ContextForUserBackerList,
  useControllerForUserBackerList,
} from '@/(server)/(controller)/user/backer/list';
import { useControllerForUserBackerTermsList } from '@/(server)/(controller)/user/backer/terms/list';
import {
  ContextForLoggedInUserObj,
  ContextForProfileUserObj,
} from '@/(server)/(model)/user/main';
import { borderFx, glassFx, roundedFx } from '@/(style)/data';
import moment from 'moment';
import { useContext } from 'react';

export function ProfileAboutBackAction() {
  const profileUser = useContext(ContextForProfileUserObj);
  const loggedInUser = useContext(ContextForLoggedInUserObj);
  const profileBackerListController = useContext(ContextForUserBackerList);
  const loggedInBackerListController = useControllerForUserBackerList(
    loggedInUser.id,
  );
  const termsListController = useControllerForUserBackerTermsList('');
  const youBackThem = checkYouBackThem();
  const theyBackYou = checkTheyBackYou();

  // BACKING IS LIMITED BY MONEY AND IS LIMITED BY A TERMS BASIS
  // BACKING IS ONE WAY

  function checkYouBackThem() {
    const filtered =
      loggedInBackerListController.state.objs.filter(
        (link) => link.backedId === profileUser.id,
      ).length > 0;
    console.log(loggedInBackerListController.state.objs);
    return filtered;
  }

  function checkTheyBackYou() {
    const filtered =
      profileBackerListController.state.objs.filter(
        (link) => link.backedId === loggedInUser.id,
      ).length > 0;
    return filtered;
  }

  async function addOneWayBacking() {
    // NO PERMISSION NEEDED
    alert('One Way Backing');
    const terms = await termsListController.actions.createActions.createTerms(
      'Backer terms',
      '1 year',
      moment().add(1, 'year').toISOString(),
    );
    // ACTUAL
    const backing =
      await profileBackerListController.actions.createActions.createConnection(
        loggedInUser.id, // backer
        profileUser.id, // backed
        terms.id,
      );
    // VIRTUAL
    loggedInBackerListController.actions.stateActions.pushBack(backing);
  }

  async function removeOneWayBacking() {
    alert('Removing One Way Backing');

    const ids = profileBackerListController.state.objs
      .filter((obj) => obj.backedId === profileUser.id)
      .map((obj) => obj.id);

    const backings =
      await profileBackerListController.actions.deleteActions.deleteMany(ids);
    await loggedInBackerListController.actions.deleteActions.deleteMany(ids);

    backings.map(async (backing) => {
      await termsListController.actions.deleteActions.delete(backing.termsId);
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
          if (youBackThem) {
            removeOneWayBacking();
          } else {
            addOneWayBacking();
          }
        }}
      >
        <p className='font-bold text-slate-300'>
          {!youBackThem && 'Back'}
          {youBackThem && 'Backed'}
        </p>
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-10']} />
    </GlassWindowFrame>
  );
}
