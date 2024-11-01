import { ContextForUserPostListFromChapter } from '@/server/controller/post/list-from-chapter';
import { useControllerForUserMain } from '@/server/controller/user/main';
import {
  ContextForUserPostObj,
  exampleUserPost,
} from '@/server/model/post/main';
import { ContextForUserObj } from '@/server/model/user/main';
import { useContext } from 'react';
import {
  ContextForSpacesPreview,
  SpacesPreviewFeedView,
} from '../../../../../controller/main';
import { SpacesPreviewBreadcrumbs } from './breadcrumbs/main';
import { SpacesPreviewChapterPosts } from './chapter/main';
import { SpacesPreviewMainPost } from './post/main';

export function SpacesPreviewMain() {
  const spacesPreviewController = useContext(ContextForSpacesPreview);
  const postListController = useContext(ContextForUserPostListFromChapter);
  const userMainController = useControllerForUserMain(
    postListController.state.currentObj?.userId || '',
  );

  return (
    <ContextForUserObj.Provider value={userMainController.state.obj}>
      <div className='flex flex-col space-y-[2rem] px-[4rem] py-[2rem]'>
        <SpacesPreviewBreadcrumbs />
        {spacesPreviewController.state.feedView ===
          SpacesPreviewFeedView.CHAPTER && (
          <>
            <SpacesPreviewChapterPosts />
          </>
        )}
        {spacesPreviewController.state.feedView ===
          SpacesPreviewFeedView.POST && (
          <ContextForUserPostObj.Provider
            value={postListController.state.currentObj || exampleUserPost}
          >
            <SpacesPreviewMainPost />
          </ContextForUserPostObj.Provider>
        )}
      </div>
    </ContextForUserObj.Provider>
  );
}
