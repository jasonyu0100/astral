'use client';
import {
  ContextForGalleryCollectionList,
  useControllerForGalleryCollectionList,
} from '@/(server)/(controller)/gallery/collection/list';
import {
  ContextForGalleryMain,
  useControllerForGalleryMain,
} from '@/(server)/(controller)/gallery/main';
import isAstralAuth from '@/(utils)/isAuth';
import { ExplorerGalleryCollections } from './view/view';

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
        <ExplorerGalleryCollections />
      </ContextForGalleryCollectionList.Provider>
    </ContextForGalleryMain.Provider>
  );
}

export default isAstralAuth(Page);
