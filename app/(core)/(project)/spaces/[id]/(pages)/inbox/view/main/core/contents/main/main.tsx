import { ContextForUserPostListFromChapter } from '@/server/controller/post/list-from-chapter';
import { useControllerForUserMain } from '@/server/controller/user/main';
import {
  ContextForUserPostObj,
  exampleUserPost,
} from '@/server/model/post/main';
import { ContextForUserObj } from '@/server/model/user/main';
import { useContext } from 'react';
import {
  ContextForSpaceInbox,
  SpaceInboxFeedView,
} from '../../../../../controller/main';
import { SpaceInboxBreadcrumbs } from './breadcrumbs/main';
import { SpaceInboxChapterList } from './chapter/main';
import { SpaceInboxMainPost } from './post/main';

export function SpaceInboxMain() {
  const spaceInboxController = useContext(ContextForSpaceInbox);
  const postListController = useContext(ContextForUserPostListFromChapter);
  const userMainController = useControllerForUserMain(
    postListController.state.currentObj?.userId || '',
  );

  return (
    <ContextForUserObj.Provider value={userMainController.state.obj}>
      <div className='flex flex-col overflow-auto p-[2rem]'>
        <SpaceInboxBreadcrumbs />
        {spaceInboxController.state.feedView === SpaceInboxFeedView.CHAPTER && (
          <SpaceInboxChapterList />
        )}
        {spaceInboxController.state.feedView === SpaceInboxFeedView.POST && (
          <ContextForUserPostObj.Provider
            value={postListController.state.currentObj || exampleUserPost}
          >
            <SpaceInboxMainPost />
          </ContextForUserPostObj.Provider>
        )}
      </div>
    </ContextForUserObj.Provider>
  );
}
