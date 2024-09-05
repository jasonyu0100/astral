import { ContextForSpotlightKarmaList } from '@/(server)/controller/space/chapter/spotlight/karma/list';
import { ContextForChapterSpotlightList } from '@/(server)/controller/space/chapter/spotlight/list';
import { ContextForLoggedInUserObj } from '@/(server)/model/user/main';
import { AstralChevronDownIcon } from '@/icons/chevron-down/main';
import { AstralChevronUpIcon } from '@/icons/chevron-up/main';
import { cn } from '@/utils/cn';
import { useContext } from 'react';

export function SpaceSpotlightKarma() {
  const loggedInUser = useContext(ContextForLoggedInUserObj);
  const spotlightListController = useContext(ContextForChapterSpotlightList);
  const spotlightKarmaListController = useContext(ContextForSpotlightKarmaList);

  const karmaVotes = spotlightKarmaListController.state.objs;
  const cumulativeKarma = karmaVotes.reduce(
    (acc, obj) => acc + (obj.neutrality === true ? 1 : -1),
    0,
  );

  const userKarma = karmaVotes
    .filter((obj) => obj.userId === loggedInUser.id)
    .at(0);
  const userVote =
    userKarma === undefined ? 0 : userKarma.neutrality === true ? 1 : -1;

  async function upvote() {
    if (userKarma) {
      spotlightKarmaListController.actions.editActions.edit(userKarma.id, {
        neutrality: true,
      });
    } else {
      spotlightKarmaListController.actions.createActions.createKarma(
        spotlightListController.state.objId,
        loggedInUser.id,
        true,
      );
    }
  }

  async function downvote() {
    if (userKarma) {
      spotlightKarmaListController.actions.editActions.edit(userKarma.id, {
        neutrality: false,
      });
    } else {
      spotlightKarmaListController.actions.createActions.createKarma(
        spotlightListController.state.objId,
        loggedInUser.id,
        false,
      );
    }
  }

  return (
    <div className='flex flex-col items-center'>
      <AstralChevronUpIcon
        className={cn('h-[3rem] w-[3rem]', {
          'fill-blue-500': userVote === 1,
          'fill-slate-500': userVote === -1,
          'fill-slate-300': userVote === 0,
        })}
        onClick={() => upvote()}
      />
      <p
        className={cn('text-xl font-bold text-slate-300', {
          'text-red-300': userVote === -1,
          'text-blue-300': userVote === 1,
          'text-slate-500': userVote === 0,
        })}
      >
        {cumulativeKarma}
      </p>
      <AstralChevronDownIcon
        className={cn('h-[3rem] w-[3rem]', {
          'fill-red-500': userVote === -1,
          'fill-slate-500': userVote === 1,
          'fill-slate-300': userVote === 0,
        })}
        onClick={() => downvote()}
      />
    </div>
  );
}
