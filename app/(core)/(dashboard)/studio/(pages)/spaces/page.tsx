'use client';
import { useGlobalUser } from '@/(logic)/internal/store/user/main';
import {
  ContextForGalleryList,
  useControllerForGalleryList,
} from '@/(server)/(controller)/gallery/list';
import {
  ContextForSpaceList,
  useControllerForSpaceList,
} from '@/(server)/(controller)/space/list';
import isVerseAuth from '@/(utils)/isAuth';
import { StudioSpacesView } from './view/view';

function Page() {
  const user = useGlobalUser((state) => state.user);
  const spaceListController = useControllerForSpaceList(user.id);
  const galleryListController = useControllerForGalleryList(user.id);

  return (
    <ContextForSpaceList.Provider value={spaceListController}>
      <ContextForGalleryList.Provider value={galleryListController}>
        <StudioSpacesView />
      </ContextForGalleryList.Provider>
    </ContextForSpaceList.Provider>
  );
}

export default isVerseAuth(Page);
