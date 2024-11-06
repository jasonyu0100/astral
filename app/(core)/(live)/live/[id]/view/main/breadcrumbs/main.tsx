import { spacesMap } from '@/(core)/(project)/spaces/[id]/map';
import { ContextForUserPostListFromChapter } from '@/architecture/controller/post/list-from-chapter';
import { ContextForSpaceChapterList } from '@/architecture/controller/space/chapter/list';
import { ContextForSpaceMain } from '@/architecture/controller/space/main';
import { HorizontalDivider } from '@/components/indicator/divider/horizontal/main';
import { AstralAddIcon } from '@/icons/add/main';
import { useContext } from 'react';
import {
  ContextForPublicSpace,
  PublicSpaceFeedView,
} from '../../../controller/main';

export function PublicSpaceBreadcrumbs() {
  const spaceMainController = useContext(ContextForSpaceMain);
  const publicSpaceController = useContext(ContextForPublicSpace);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const postListController = useContext(ContextForUserPostListFromChapter);

  return (
    <div className='flex h-[3rem] flex-shrink-0 flex-col justify-between'>
      {publicSpaceController.state.feedView === PublicSpaceFeedView.CHANNEL && (
        <div className='flex flex-shrink-0 flex-row justify-between pr-[1rem]'>
          <div className='flex flex-row items-center space-x-[1rem]'>
            <p
              className='cursor-pointer text-2xl font-bold text-slate-500'
              onClick={() => {
                publicSpaceController.actions.updateFeedView(
                  PublicSpaceFeedView.POSTS,
                );
              }}
            >
              {chapterListController.state.currentObj?.title}
            </p>
            <span className='text-2xl font-bold text-slate-500'> / </span>
            <p className='cursor-pointer text-2xl font-bold text-slate-500'>
              Conversations
            </p>
          </div>
          <div
            className='flex h-[2rem] w-[2rem] flex-shrink-0 cursor-pointer items-center justify-center rounded-full bg-blue-500'
            onClick={() => {
              window.location.href = `${spacesMap.spaces.id.space.link(spaceMainController.state.objId)}?chapter=${chapterListController.state.currentObj?.id}`;
            }}
          >
            <AstralAddIcon />
          </div>
        </div>
      )}
      {publicSpaceController.state.feedView === PublicSpaceFeedView.POST && (
        <div className='flex flex-shrink-0 flex-row justify-between pr-[1rem]'>
          <div className='flex flex-row items-center space-x-[1rem]'>
            <p
              className='cursor-pointer text-2xl font-bold text-slate-500'
              onClick={() => {
                publicSpaceController.actions.updateFeedView(
                  PublicSpaceFeedView.POSTS,
                );
              }}
            >
              {chapterListController.state.currentObj?.title}
            </p>
            <span className='text-2xl font-bold text-slate-500'> / </span>
            <p
              className='cursor-pointer text-2xl font-bold text-slate-500'
              onClick={() => {
                publicSpaceController.actions.updateFeedView(
                  PublicSpaceFeedView.POST,
                );
              }}
            >
              {postListController.state.currentObj?.title}
            </p>
          </div>
          <div
            className='flex h-[2rem] w-[2rem] flex-shrink-0 cursor-pointer items-center justify-center rounded-full bg-blue-500'
            onClick={() => {
              window.location.href = `${spacesMap.spaces.id.space.link(spaceMainController.state.objId)}?chapter=${chapterListController.state.currentObj?.id}`;
            }}
          >
            <AstralAddIcon />
          </div>
        </div>
      )}
      {publicSpaceController.state.feedView === PublicSpaceFeedView.POSTS && (
        <div className='flex flex-shrink-0 flex-row justify-between pr-[1rem]'>
          <div className='flex flex-row items-center space-x-[1rem]'>
            <p
              className='cursor-pointer text-2xl font-bold text-slate-500'
              onClick={() => {
                publicSpaceController.actions.updateFeedView(
                  PublicSpaceFeedView.POSTS,
                );
              }}
            >
              {chapterListController.state.currentObj?.title}
            </p>
            <span className='text-2xl font-bold text-slate-500'> / </span>
          </div>
          <div
            className='flex h-[2rem] w-[2rem] flex-shrink-0 cursor-pointer items-center justify-center rounded-full bg-blue-500'
            onClick={() => {
              window.location.href = `${spacesMap.spaces.id.space.link(spaceMainController.state.objId)}?chapter=${chapterListController.state.currentObj?.id}`;
            }}
          >
            <AstralAddIcon />
          </div>
        </div>
      )}
      <HorizontalDivider />
    </div>
  );
}
