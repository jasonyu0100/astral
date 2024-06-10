'use client';
import { CollectionsResults } from './view/view';
import { ContextForGalleryObj } from '@/(server)/(model)/gallery/main';
import isVerseAuth from '@/(utils)/isAuth';
import {
  ContextForGalleryCollectionList,
  useControllerForGalleryCollectionList,
} from '@/(server)/(controller)/gallery/collection/list';
import {
  ContextForGalleryMain,
  useControllerForGalleryMain,
} from '@/(server)/(controller)/gallery/main';

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
        <CollectionsResults />
      </ContextForGalleryCollectionList.Provider>
    </ContextForGalleryMain.Provider>
  );
}

export default isVerseAuth(Page);
