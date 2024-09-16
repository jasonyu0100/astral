'use client';
import {
  ContextForGalleryCollectionList,
  useControllerForGalleryCollectionList,
} from '@/(server)/controller/gallery/collection/list';
import {
  ContextForGalleryMain,
  useControllerForGalleryMain,
} from '@/(server)/controller/gallery/main';
import protectedUnderAstralAuth from '@/utils/isAuth';
import { FinderGalleryCollections } from './view/view';

function Page({ params }: { params: { id: string } }) {
  const galleryMainController = useControllerForGalleryMain(params.id);
  const collectionListController = useControllerForGalleryCollectionList(
    galleryMainController.state.objId,
  );

  return (
    <ContextForGalleryMain.Provider value={galleryMainController}>
      <ContextForGalleryCollectionList.Provider
        value={collectionListController}
      >
        <FinderGalleryCollections />
      </ContextForGalleryCollectionList.Provider>
    </ContextForGalleryMain.Provider>
  );
}

export default protectedUnderAstralAuth(Page);
