import { AstralArrowDropDown } from '@/icons/arrow-drop-down/main';
import { AstralArrowDropUp } from '@/icons/arrow-drop-up/main';
import { ContextForPostKarmaList } from '@/server/controller/post/karma/list';
import { ContextForUserPostListFromChapter } from '@/server/controller/post/list-from-chapter';
import { ContextForLoggedInUserObj } from '@/server/model/user/main';
import { ctwn } from '@/utils/cn';
import { useContext } from 'react';

export function PublicSpaceSpacePostKarma() {
  const loggedInUser = useContext(ContextForLoggedInUserObj);
  const postListController = useContext(ContextForUserPostListFromChapter);
  const postKarmaListController = useContext(ContextForPostKarmaList);

  const karmaVotes = postKarmaListController.state.objs;
  const cumulativeKarma = karmaVotes.reduce(
    (acc, obj) => acc + (obj.neutrality === true ? 1 : -1),
    0,
  );

  const userKarma = karmaVotes
    .filter((obj) => obj.userId === loggedInUser?.id)
    .at(0);
  const userVote =
    userKarma === undefined ? 0 : userKarma.neutrality === true ? 1 : -1;

  async function upvote() {
    if (userKarma) {
      postKarmaListController.actions.editActions.edit(userKarma.id, {
        neutrality: true,
      });
    } else {
      postKarmaListController.actions.createActions.createKarma(
        postListController.state.objId,
        loggedInUser?.id,
        true,
      );
    }
  }

  async function downvote() {
    if (userKarma) {
      postKarmaListController.actions.editActions.edit(userKarma.id, {
        neutrality: false,
      });
    } else {
      postKarmaListController.actions.createActions.createKarma(
        postListController.state.objId,
        loggedInUser?.id,
        false,
      );
    }
  }

  return (
    <div className='flex flex-col items-center'>
      <AstralArrowDropUp
        className={ctwn('h-[3rem] w-[3rem]', {
          'fill-red-500': userVote === 1,
          'fill-slate-500': userVote === -1,
          'fill-slate-300': userVote === 0,
        })}
        onClick={() => upvote()}
      />
      <p
        className={ctwn('text-xl font-bold text-slate-300', {
          'text-blue-300': userVote === -1,
          'text-red-300': userVote === 1,
          'text-slate-500': userVote === 0,
        })}
      >
        {cumulativeKarma}
      </p>
      <AstralArrowDropDown
        className={ctwn('h-[3rem] w-[3rem]', {
          'fill-blue-500': userVote === -1,
          'fill-slate-500': userVote === 1,
          'fill-slate-300': userVote === 0,
        })}
        onClick={() => downvote()}
      />
    </div>
  );
}
