import { ContextForUserPostListFromChapter } from '@/architecture/controller/post/list-from-chapter';
import { useControllerForUserMain } from '@/architecture/controller/user/main';
import { ContextForUserObj } from '@/architecture/model/user/main';
import { useContext } from 'react';
import { ContextForSpacesLive } from '../../../../../controller/main';
import { SpacesLiveChapterList } from './chapter/main';

export function SpacesLiveMain() {
  const spacesLiveController = useContext(ContextForSpacesLive);
  const postListController = useContext(ContextForUserPostListFromChapter);
  const userMainController = useControllerForUserMain(
    postListController.state.currentObj?.userId || '',
  );

  return (
    <ContextForUserObj.Provider value={userMainController.state.obj}>
      <SpacesLiveChapterList />
    </ContextForUserObj.Provider>
  );
}
