'use client';
import { GallerysView } from './view/view';
import isVerseAuth from '@/(utils)/isAuth';
import { useGlobalUser } from '@/(logic)/internal/store/user/main';
import {
  ContextForGalleryList,
  useControllerForGalleryList,
} from '@/(server)/(controller)/gallery/list';

function Page() {
  const user = useGlobalUser((state) => state.user);
  const galleryListController = useControllerForGalleryList(user.id);

  return (
    <ContextForGalleryList.Provider value={galleryListController}>
      <GallerysView />
    </ContextForGalleryList.Provider>
  );
}

export default isVerseAuth(Page);
