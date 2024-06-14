'use client';
import { useGlobalUser } from '@/(logic)/internal/store/user/main';
import {
  ContextForGalleryList,
  useControllerForGalleryList,
} from '@/(server)/(controller)/gallery/list';
import isVerseAuth from '@/(utils)/isAuth';
import { ExplorerHomeGallerysView } from './view/view';

function Page() {
  const user = useGlobalUser((state) => state.user);
  const galleryListController = useControllerForGalleryList(user.id);

  return (
    <ContextForGalleryList.Provider value={galleryListController}>
      <ExplorerHomeGallerysView />
    </ContextForGalleryList.Provider>
  );
}

export default isVerseAuth(Page);
