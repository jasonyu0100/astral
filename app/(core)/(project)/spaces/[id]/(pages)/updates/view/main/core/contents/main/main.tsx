import { ContextForUserPostListFromChapter } from '@/architecture/controller/post/list-from-chapter';
import { useControllerForUserMain } from '@/architecture/controller/user/main';
import { ContextForUserObj } from '@/architecture/model/user/main';
import { useContext } from 'react';
import { ContextForSpacesPosts } from '../../../../../controller/main';
import { SpacesPostsChapterList } from './chapter/main';

export function SpacesPostsMain() {
  const spacesPublicController = useContext(ContextForSpacesPosts);
  const postListController = useContext(ContextForUserPostListFromChapter);
  const userMainController = useControllerForUserMain(
    postListController.state.currentObj?.userId || '',
  );

  return (
    <ContextForUserObj.Provider value={userMainController.state.obj}>
      <SpacesPostsChapterList />
    </ContextForUserObj.Provider>
  );
}
