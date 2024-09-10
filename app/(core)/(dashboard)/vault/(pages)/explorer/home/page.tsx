'use client';
import {
  ContextForGalleryList,
  useControllerForGalleryList,
} from '@/(server)/controller/gallery/list';
import { useGlobalUser } from '@/logic/store/user/main';
import protectedUnderAstralAuth from '@/utils/isAuth';
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

export default protectedUnderAstralAuth(Page);
