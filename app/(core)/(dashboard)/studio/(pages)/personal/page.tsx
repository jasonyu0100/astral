'use client';
import {
  ContextForGalleryCollectionList,
  useControllerForGalleryCollectionList,
} from '@/(server)/controller/gallery/collection/list';
import {
  ContextForGalleryList,
  useControllerForGalleryList,
} from '@/(server)/controller/gallery/list';
import {
  ContextForSpaceList,
  useControllerForSpaceList,
} from '@/(server)/controller/space/list';
import { ContextForLoggedInUserObj } from '@/(server)/model/user/main';
import { useGlobalUser } from '@/logic/store/user/main';
import protectedUnderAstralAuth from '@/utils/isAuth';
import { StudioSpacesView } from './view/view';

function Page() {
  const loggedInUser = useGlobalUser((state) => state.user);
  const spaceListController = useControllerForSpaceList(loggedInUser.id);
  const galleryListController = useControllerForGalleryList(loggedInUser.id);
  const collectionListController = useControllerForGalleryCollectionList(
    galleryListController.state.objId,
  );

  return (
    <ContextForLoggedInUserObj.Provider value={loggedInUser}>
      <ContextForSpaceList.Provider value={spaceListController}>
        <ContextForGalleryList.Provider value={galleryListController}>
          <ContextForGalleryCollectionList.Provider
            value={collectionListController}
          >
            <StudioSpacesView />
          </ContextForGalleryCollectionList.Provider>
        </ContextForGalleryList.Provider>
      </ContextForSpaceList.Provider>
    </ContextForLoggedInUserObj.Provider>
  );
}

export default protectedUnderAstralAuth(Page);
