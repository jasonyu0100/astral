import { ContextForUserPostListFromChapter } from '@/architecture/controller/post/list-from-chapter';
import { useControllerForUserMain } from '@/architecture/controller/user/main';
import { ContextForUserObj } from '@/architecture/model/user/main';
import { useContext } from 'react';
import { ContextForSpacesTable } from '../../../../../controller/main';
import { SpacesTableChapterList } from './chapter/main';

export function SpacesTableMain() {
  const spacesTableController = useContext(ContextForSpacesTable);
  const postListController = useContext(ContextForUserPostListFromChapter);
  const userMainController = useControllerForUserMain(
    postListController.state.currentObj?.userId || '',
  );

  return (
    <ContextForUserObj.Provider value={userMainController.state.obj}>
      <SpacesTableChapterList />
    </ContextForUserObj.Provider>
  );
}
