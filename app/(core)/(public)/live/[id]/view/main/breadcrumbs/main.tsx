import { ContextForUserPostListFromChapter } from '@/server/controller/post/list-from-chapter';
import { ContextForSpaceChapterList } from '@/server/controller/space/chapter/list';
import { ContextForSpaceMain } from '@/server/controller/space/main';
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
    <>
      {publicSpaceController.state.feedView === PublicSpaceFeedView.POST && (
        <>
          <div className='flex flex-row items-center space-x-[1rem]'>
            <p
              className='cursor-pointer font-bold text-slate-300'
              onClick={() => {
                publicSpaceController.actions.updateFeedView(
                  PublicSpaceFeedView.CHAPTER,
                );
              }}
            >
              {chapterListController.state.currentObj?.title}
            </p>
            <span className='font-bold text-slate-300'> / </span>
            <p
              className='cursor-pointer font-bold text-slate-300'
              onClick={() => {
                publicSpaceController.actions.updateFeedView(
                  PublicSpaceFeedView.POST,
                );
              }}
            >
              {postListController.state.currentObj?.title}
            </p>
          </div>
        </>
      )}
      {publicSpaceController.state.feedView === PublicSpaceFeedView.CHAPTER && (
        <>
          <div className='flex flex-row items-center space-x-[1rem]'>
            <p
              className='cursor-pointer font-bold text-slate-300'
              onClick={() => {
                publicSpaceController.actions.updateFeedView(
                  PublicSpaceFeedView.CHAPTER,
                );
              }}
            >
              {chapterListController.state.currentObj?.title}
            </p>
            <span className='font-bold text-slate-300'> / </span>
          </div>
        </>
      )}
    </>
  );
}
