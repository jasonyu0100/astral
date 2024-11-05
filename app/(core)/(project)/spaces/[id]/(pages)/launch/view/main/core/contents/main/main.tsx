import { ContextForUserPostListFromChapter } from '@/architecture/controller/post/list-from-chapter';
import { useControllerForUserMain } from '@/architecture/controller/user/main';
import {
  ContextForUserPostObj,
  exampleUserPost,
} from '@/architecture/model/post/main';
import { ContextForUserObj } from '@/architecture/model/user/main';
import { useContext } from 'react';
import {
  ContextForSpacesLaunch,
  SpacesLaunchFeedView,
} from '../../../../../controller/main';
import { SpacesLaunchBreadcrumbs } from '../breadcrumbs/main';
import { SpacesLaunchChapterList } from './chapter/main';
import { SpacesLaunchMainPost } from './post/main';

export function SpacesLaunchMain() {
  const spacesLaunchController = useContext(ContextForSpacesLaunch);
  const postListController = useContext(ContextForUserPostListFromChapter);
  const userMainController = useControllerForUserMain(
    postListController.state.currentObj?.userId || '',
  );

  return (
    <ContextForUserObj.Provider value={userMainController.state.obj}>
      <div className='flex flex-shrink-0 flex-col p-[2rem]'>
        {spacesLaunchController.state.feedView ===
          SpacesLaunchFeedView.CHAPTER && <SpacesLaunchChapterList />}
        {spacesLaunchController.state.feedView ===
          SpacesLaunchFeedView.POST && (
          <>
            <SpacesLaunchBreadcrumbs />
            <ContextForUserPostObj.Provider
              value={postListController.state.currentObj || exampleUserPost}
            >
              <SpacesLaunchMainPost />
            </ContextForUserPostObj.Provider>
          </>
        )}
      </div>
    </ContextForUserObj.Provider>
  );
}
