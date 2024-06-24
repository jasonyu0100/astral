'use client';
import { useGlobalUser } from '@/(logic)/internal/store/user/main';
import {
  ContextForGalleryCollectionList,
  useControllerForGalleryCollectionList,
} from '@/(server)/(controller)/gallery/collection/list';
import {
  ContextForCollectionResourceList,
  useControllerForCollectionResourceList,
} from '@/(server)/(controller)/gallery/collection/resource/list';
import {
  ContextForGalleryMain,
  useControllerForGalleryMain,
} from '@/(server)/(controller)/gallery/main';
import { ContextForCurrentUserObj } from '@/(server)/(model)/user/main';
import isVerseAuth from '@/(utils)/isAuth';
import { JournalRecordView } from './view/view';

function Page() {
  const user = useGlobalUser((state) => state.user);
  const galleryController = useControllerForGalleryMain(user.journalId);
  const collectionListController = useControllerForGalleryCollectionList(
    galleryController.state.obj.id,
  );
  const resourceListController = useControllerForCollectionResourceList(
    collectionListController.state.objId,
  );

  return (
    <ContextForCurrentUserObj.Provider value={user}>
      <ContextForGalleryMain.Provider value={galleryController}>
        <ContextForGalleryCollectionList.Provider
          value={collectionListController}
        >
          <ContextForCollectionResourceList.Provider
            value={resourceListController}
          >
            <JournalRecordView />
          </ContextForCollectionResourceList.Provider>
        </ContextForGalleryCollectionList.Provider>
      </ContextForGalleryMain.Provider>
    </ContextForCurrentUserObj.Provider>
  );
}

export default isVerseAuth(Page);
