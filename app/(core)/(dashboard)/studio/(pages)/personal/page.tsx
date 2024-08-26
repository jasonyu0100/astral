'use client';
import {
  ContextForGalleryList,
  useControllerForGalleryList,
} from '@/(server)/controller/gallery/list';
import {
  ContextForSpaceList,
  useControllerForSpaceList,
} from '@/(server)/controller/space/list';
import { ContextForLoggedInUserObj } from '@/(server)/model/user/main';
import { useGlobalUser } from '@/logic/internal/store/user/main';
import isAstralAuth from '@/utils/isAuth';
import { StudioSpacesView } from './view/view';

function Page() {
  const loggedInUser = useGlobalUser((state) => state.user);
  const spaceListController = useControllerForSpaceList(loggedInUser.id);
  const galleryListController = useControllerForGalleryList(loggedInUser.id);

  return (
    <ContextForLoggedInUserObj.Provider value={loggedInUser}>
      <ContextForSpaceList.Provider value={spaceListController}>
        <ContextForGalleryList.Provider value={galleryListController}>
          <StudioSpacesView />
        </ContextForGalleryList.Provider>
      </ContextForSpaceList.Provider>
    </ContextForLoggedInUserObj.Provider>
  );
}

export default isAstralAuth(Page);
