import { userMap } from '@/(core)/(dashboard)/user/[id]/map';
import { spacesMap } from '@/(core)/(project)/spaces/[id]/map';
import { ContextForUserPostListFromChapter } from '@/architecture/controller/post/list-from-chapter';
import { ContextForSpaceChapterList } from '@/architecture/controller/space/chapter/list';
import { ContextForSpaceMain } from '@/architecture/controller/space/main';
import { ContextForUserMain } from '@/architecture/controller/user/main';
import { AstralAddIcon } from '@/icons/add/main';
import Link from 'next/link';
import { useContext } from 'react';
import {
  ContextForPublicSpace,
  PublicSpaceFeedView,
} from '../../../../controller/main';

export function PublicSpaceBreadcrumbsFocus() {
  const spaceMainController = useContext(ContextForSpaceMain);
  const publicSpaceController = useContext(ContextForPublicSpace);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const postListController = useContext(ContextForUserPostListFromChapter);
  const userMainController = useContext(ContextForUserMain);

  return (
    <div className='flex flex-shrink-0 flex-row justify-between pr-[1rem]'>
      <div className='flex flex-row items-center space-x-[1rem]'>
        <Link href={userMap.profile.link(userMainController.state.obj.id)}>
          <p className='cursor-pointer text-lg font-bold text-slate-400'>
            {userMainController.state.obj.displayName || 'Untitled'}
          </p>
        </Link>
        <span className='text-lg font-bold text-slate-400'> / </span>
        <Link
          href={spacesMap.spaces.id.focus.link(spaceMainController.state.objId)}
        >
          <p className='cursor-pointer text-lg font-bold text-slate-400'>
            {spaceMainController.state.obj?.title || 'Untitled'}
          </p>
        </Link>
        <span className='text-lg font-bold text-slate-400'> / </span>
        <p
          className='cursor-pointer text-lg font-bold text-slate-400'
          onClick={() => {
            publicSpaceController.actions.updateFeedView(
              PublicSpaceFeedView.FOCUS,
            );
          }}
        >
          {chapterListController.state.currentObj?.title || 'Untitled'}
        </p>
      </div>
      <Link
        href={`${spacesMap.spaces.id.focus.link(spaceMainController.state.objId)}?chapter=${chapterListController.state.currentObj?.id}`}
      >
        <div className='flex h-[2rem] w-[2rem] flex-shrink-0 cursor-pointer items-center justify-center rounded-full bg-blue-500'>
          <AstralAddIcon />
        </div>
      </Link>
    </div>
  );
}
