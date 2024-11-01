import { ContextForUserPostListFromChapter } from '@/server/controller/post/list-from-chapter';
import { ContextForSpaceChapterList } from '@/server/controller/space/chapter/list';
import { useContext } from 'react';
import {
  ContextForSpacesPreview,
  SpacesPreviewFeedView,
} from '../../../../../../controller/main';

export function SpacesPreviewBreadcrumbs() {
  const spacesPreviewController = useContext(ContextForSpacesPreview);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const postListController = useContext(ContextForUserPostListFromChapter);

  return (
    <>
      {spacesPreviewController.state.feedView ===
        SpacesPreviewFeedView.POST && (
        <>
          <div className='flex flex-row items-center space-x-[1rem]'>
            <p
              className='cursor-pointer font-bold text-slate-300'
              onClick={() => {
                spacesPreviewController.actions.updateFeedView(
                  SpacesPreviewFeedView.CHAPTER,
                );
              }}
            >
              {chapterListController.state.currentObj?.title}
            </p>
            <span className='font-bold text-slate-300'> / </span>
            <p
              className='cursor-pointer font-bold text-slate-300'
              onClick={() => {
                spacesPreviewController.actions.updateFeedView(
                  SpacesPreviewFeedView.POST,
                );
              }}
            >
              {postListController.state.currentObj?.title}
            </p>
          </div>
        </>
      )}
      {spacesPreviewController.state.feedView ===
        SpacesPreviewFeedView.CHAPTER && (
        <>
          <div className='flex flex-row items-center space-x-[1rem]'>
            <p
              className='cursor-pointer font-bold text-slate-300'
              onClick={() => {
                spacesPreviewController.actions.updateFeedView(
                  SpacesPreviewFeedView.CHAPTER,
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
