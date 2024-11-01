import {
  ContextForSpacesPreview,
  SpacesPreviewFeedView,
} from '@/(core)/(project)/spaces/[id]/(pages)/preview/controller/main';
import { ContextForUserPostListFromChapter } from '@/server/controller/post/list-from-chapter';
import { ContextForUserPostObj } from '@/server/model/post/main';
import { useContext } from 'react';
import { SpacesPreviewChapterPostKarma } from './karma/main';
import { SpacesPreviewChapterPostTitle } from './title/main';

export function SpacesPreviewChapterPostDescription() {
  const postObj = useContext(ContextForUserPostObj);
  const spacesPreviewController = useContext(ContextForSpacesPreview);
  const postListController = useContext(ContextForUserPostListFromChapter);

  return (
    <div className='flex cursor-pointer flex-row items-center justify-between space-x-[1rem]'>
      <div
        className='flex w-full cursor-pointer flex-col'
        onClick={() => {
          spacesPreviewController.actions.updateFeedView(
            SpacesPreviewFeedView.POST,
          );
          postListController.actions.stateActions.select(postObj);
        }}
      >
        <SpacesPreviewChapterPostTitle />
        <div className='flex flex-col justify-between space-y-[1rem] py-[1rem]'>
          <p className='text-xl text-slate-300'>
            {postObj.description || 'No description'}
          </p>
        </div>
      </div>
      <SpacesPreviewChapterPostKarma />
    </div>
  );
}
