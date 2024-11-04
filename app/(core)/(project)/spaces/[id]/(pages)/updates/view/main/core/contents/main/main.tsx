import { ContextForUserPostListFromChapter } from '@/architecture/controller/post/list-from-chapter';
import { useControllerForUserMain } from '@/architecture/controller/user/main';
import {
  ContextForUserPostObj,
  exampleUserPost,
} from '@/architecture/model/post/main';
import { ContextForUserObj } from '@/architecture/model/user/main';
import { useContext } from 'react';
import {
  ContextForSpacesUpdates,
  SpacesUpdatesFeedView,
} from '../../../../../controller/main';
import { SpacesUpdatesBreadcrumbs } from '../breadcrumbs/main';
import { SpacesUpdatesChapterList } from './chapter/main';
import { SpacesUpdatesMainPost } from './post/main';

export function SpacesUpdatesMain() {
  const spacesUpdatesController = useContext(ContextForSpacesUpdates);
  const postListController = useContext(ContextForUserPostListFromChapter);
  const userMainController = useControllerForUserMain(
    postListController.state.currentObj?.userId || '',
  );

  return (
    <ContextForUserObj.Provider value={userMainController.state.obj}>
      <div className='flex flex-col overflow-auto p-[2rem]'>
        {spacesUpdatesController.state.feedView ===
          SpacesUpdatesFeedView.CHAPTER && <SpacesUpdatesChapterList />}
        {spacesUpdatesController.state.feedView ===
          SpacesUpdatesFeedView.POST && (
          <>
            <SpacesUpdatesBreadcrumbs />
            <ContextForUserPostObj.Provider
              value={postListController.state.currentObj || exampleUserPost}
            >
              <SpacesUpdatesMainPost />
            </ContextForUserPostObj.Provider>
          </>
        )}
      </div>
    </ContextForUserObj.Provider>
  );
}
