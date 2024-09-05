import { ContextForCommentKarmaList } from '@/(server)/controller/space/chapter/spotlight/comment/karma/list';
import { ContextForSpotlightCommentObj } from '@/(server)/model/space/chapter/spotlight/comment/main';
import { ContextForLoggedInUserObj } from '@/(server)/model/user/main';
import { AstralChevronDownIcon } from '@/icons/chevron-down/main';
import { AstralChevronUpIcon } from '@/icons/chevron-up/main';
import { cn } from '@/utils/cn';
import { useContext } from 'react';

export function SpaceSpotlightCommentKarma() {
  const commentObj = useContext(ContextForSpotlightCommentObj);
  const loggedInUser = useContext(ContextForLoggedInUserObj);
  const commentKarmaListController = useContext(ContextForCommentKarmaList);

  const karmaVotes = commentKarmaListController.state.objs;
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
      commentKarmaListController.actions.editActions.edit(userKarma.id, {
        neutrality: true,
      });
    } else {
      commentKarmaListController.actions.createActions.createKarma(
        commentObj.id,
        loggedInUser.id,
        true,
      );
    }
  }

  async function downvote() {
    if (userKarma) {
      commentKarmaListController.actions.editActions.edit(userKarma.id, {
        neutrality: false,
      });
    } else {
      commentKarmaListController.actions.createActions.createKarma(
        commentObj.id,
        loggedInUser.id,
        false,
      );
    }
  }

  return (
    <div className='flex flex-row items-center space-x-[0.5rem] pl-[4rem]'>
      <AstralChevronDownIcon
        className={cn('h-[1.5rem] w-[1.5rem]', {
          'fill-red-500': userVote === -1,
          'fill-slate-500': userVote === 1,
          'fill-slate-300': userVote === 0,
        })}
        onClick={() => downvote()}
      />
      <p
        className={cn('text-sm font-bold text-slate-300', {
          'text-red-300': userVote === -1,
          'text-blue-300': userVote === 1,
          'text-slate-500': userVote === 0,
        })}
      >
        {cumulativeKarma}
      </p>
      <AstralChevronUpIcon
        className={cn('h-[1.5rem] w-[1.5rem]', {
          'fill-blue-500': userVote === 1,
          'fill-slate-500': userVote === -1,
          'fill-slate-300': userVote === 0,
        })}
        onClick={() => upvote()}
      />
    </div>
  );
}
