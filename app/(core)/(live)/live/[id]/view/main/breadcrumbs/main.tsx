import { ContextForUserPostListFromChapter } from '@/architecture/controller/post/list-from-chapter';
import { ContextForSpaceChapterList } from '@/architecture/controller/space/chapter/list';
import { ContextForSpaceMain } from '@/architecture/controller/space/main';
import { HorizontalDivider } from '@/components/indicator/divider/horizontal/main';
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
      {publicSpaceController.state.feedView === PublicSpaceFeedView.POST && (
        <>
          <div className='flex flex-row items-center space-x-[1rem]'>
            <p
              className='cursor-pointer text-2xl font-bold text-slate-300'
              onClick={() => {
                publicSpaceController.actions.updateFeedView(
                  PublicSpaceFeedView.CHAPTER,
                );
              }}
            >
              {chapterListController.state.currentObj?.title}
            </p>
            <span className='text-2xl font-bold text-slate-300'> / </span>
            <p
              className='cursor-pointer text-2xl font-bold text-slate-300'
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
              className='cursor-pointer text-2xl font-bold text-slate-300'
              onClick={() => {
                publicSpaceController.actions.updateFeedView(
                  PublicSpaceFeedView.CHAPTER,
                );
              }}
            >
              {chapterListController.state.currentObj?.title}
            </p>
            <span className='text-2xl font-bold text-slate-300'> / </span>
          </div>
        </>
      )}
      <HorizontalDivider />
    </div>
  );
}
