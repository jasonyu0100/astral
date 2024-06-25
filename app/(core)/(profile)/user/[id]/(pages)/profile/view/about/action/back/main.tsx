import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { ContextForUserBackerList } from '@/(server)/(controller)/user/backer/list';
import { useControllerForUserBackerTermsList } from '@/(server)/(controller)/user/backer/terms/list';
import {
  ContextForLoggedInUserObj,
  ContextForProfileUserObj,
} from '@/(server)/(model)/user/main';
import { borderFx, glassFx, roundedFx } from '@/(style)/data';
import moment from 'moment';
import { useContext } from 'react';

export function ProfileAboutBackAction() {
  const loggedInUser = useContext(ContextForLoggedInUserObj);
  const profileUser = useContext(ContextForProfileUserObj);
  const backerListController = useContext(ContextForUserBackerList);
  const backerTermsListController = useControllerForUserBackerTermsList('');
  const userBacked = checkLoggedInBacking();
  const mutualBacking = checkMutualBacking();

  function checkLoggedInBacking() {
    const fromLoggedIn =
      backerListController.state.objs.filter(
        (link) =>
          link.userId === loggedInUser.id && link.backerId === profileUser.id,
      ).length > 0;
    return fromLoggedIn;
  }

  function checkMutualBacking() {
    const fromLoggedIn =
      backerListController.state.objs.filter(
        (link) =>
          link.userId === loggedInUser.id && link.backerId === profileUser.id,
      ).length > 0;
    const fromProfile =
      backerListController.state.objs.filter(
        (link) =>
          link.userId === profileUser.id && link.backerId === loggedInUser.id,
      ).length > 0;
    return fromLoggedIn && fromProfile;
  }

  async function addOneWayBacking() {
    // NO PERMISSION NEEDED
    alert('One Way Backing');
    const terms =
      await backerTermsListController.actions.createActions.createTerms(
        'Backer terms',
        '1 year',
        moment().add(1, 'year').toISOString(),
      );
    await backerListController.actions.createActions.createConnection(
      loggedInUser.id, // initiator
      profileUser.id, // receiver
      terms.id,
    );
  }

  async function removeOneWayBacking() {
    alert('Removing One Way Backing');
    const ids = backerListController.state.objs
      .filter((backer) => backer.userId === loggedInUser.id)
      .map((backer) => backer.id);
    const backings =
      await backerListController.actions.deleteActions.deleteMany(ids);

    backings.map(async (backing) => {
      await backerTermsListController.actions.deleteActions.delete(
        backing.termsId,
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
          if (userBacked) {
            removeOneWayBacking();
          } else {
            addOneWayBacking();
          }
        }}
      >
        <p className='font-bold text-slate-300'>
          {userBacked ? (
            <>{mutualBacking ? 'Backed' : 'Mutual Backing'}</>
          ) : (
            'Back'
          )}
        </p>
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-10']} />
    </GlassWindowFrame>
  );
}
