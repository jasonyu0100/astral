import { ContextForUserPostListFromChapter } from '@/architecture/controller/post/list-from-chapter';
import { useControllerForUserMain } from '@/architecture/controller/user/main';
import { ContextForUserObj } from '@/architecture/model/user/main';
import { useContext } from 'react';
import { ContextForSpacesPublic } from '../../../../../controller/main';
import { SpacesPublicChapterList } from './chapter/main';

export function SpacesPublicMain() {
  const spacesPublicController = useContext(ContextForSpacesPublic);
  const postListController = useContext(ContextForUserPostListFromChapter);
  const userMainController = useControllerForUserMain(
    postListController.state.currentObj?.userId || '',
  );

  return (
    <ContextForUserObj.Provider value={userMainController.state.obj}>
      <SpacesPublicChapterList />
    </ContextForUserObj.Provider>
  );
}
