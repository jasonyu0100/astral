import { HorizontalDivider } from '@/components/indicator/divider/horizontal/main';
import { ContextForUserPostListFromChapter } from '@/server/controller/post/list-from-chapter';
import { ContextForSpaceChapterList } from '@/server/controller/space/chapter/list';
import { useContext } from 'react';
import {
  ContextForSpaceInbox,
  SpaceInboxFeedView,
} from '../../../../../../controller/main';

export function SpaceInboxBreadcrumbs() {
  const spaceInboxController = useContext(ContextForSpaceInbox);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const postListController = useContext(ContextForUserPostListFromChapter);

  return (
    <div className='flex h-[3rem] flex-shrink-0 flex-col justify-between'>
      {spaceInboxController.state.feedView === SpaceInboxFeedView.POST && (
        <>
          <div className='flex flex-row items-center space-x-[1rem]'>
            <p
              className='cursor-pointer font-bold text-slate-300'
              onClick={() => {
                spaceInboxController.actions.updateFeedView(
                  SpaceInboxFeedView.CHAPTER,
                );
              }}
            >
              {chapterListController.state.currentObj?.title}
            </p>
            <span className='font-bold text-slate-300'> / </span>
            <p
              className='cursor-pointer font-bold text-slate-300'
              onClick={() => {
                spaceInboxController.actions.updateFeedView(
                  SpaceInboxFeedView.POST,
                );
              }}
            >
              {postListController.state.currentObj?.title}
            </p>
          </div>
        </>
      )}
      {spaceInboxController.state.feedView === SpaceInboxFeedView.CHAPTER && (
        <>
          <div className='flex flex-row items-center space-x-[1rem]'>
            <p
              className='cursor-pointer font-bold text-slate-300'
              onClick={() => {
                spaceInboxController.actions.updateFeedView(
                  SpaceInboxFeedView.CHAPTER,
                );
              }}
            >
              {chapterListController.state.currentObj?.title}
            </p>
            <span className='font-bold text-slate-300'> / </span>
          </div>
        </>
      )}
      <HorizontalDivider />
    </div>
  );
}
