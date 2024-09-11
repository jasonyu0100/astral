'use client';
import {
  ContextForGalleryCollectionList,
  useControllerForGalleryCollectionList,
} from '@/(server)/controller/gallery/collection/list';
import {
  ContextForCollectionResourceList,
  useControllerForCollectionResourceList,
} from '@/(server)/controller/gallery/collection/resource/list';
import {
  ContextForGalleryMain,
  useControllerForGalleryMain,
} from '@/(server)/controller/gallery/main';
import { ContextForLoggedInUserObj } from '@/(server)/model/user/main';
import { useGlobalUser } from '@/logic/store/user/main';
import protectedUnderAstralAuth from '@/utils/isAuth';
import { JournalDailyView } from './view/view';

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
    <ContextForLoggedInUserObj.Provider value={user}>
      <ContextForGalleryMain.Provider value={galleryController}>
        <ContextForGalleryCollectionList.Provider
          value={collectionListController}
        >
          <ContextForCollectionResourceList.Provider
            value={resourceListController}
          >
            <JournalDailyView />
          </ContextForCollectionResourceList.Provider>
        </ContextForGalleryCollectionList.Provider>
      </ContextForGalleryMain.Provider>
    </ContextForLoggedInUserObj.Provider>
  );
}

export default protectedUnderAstralAuth(Page);
