import { CollectionThumbnail } from '../common/thumbnail/main';
import { CollectionInfo } from '../common/info/main';
import { CollectionContainer } from '../common/container/main';
import { archiveMap } from '@/(core)/(dashboard)/archive/map';
import Link from 'next/link';
import { useContext } from 'react';
import {
  ContextForGalleryCollectionObj,
} from '@/(server)/(model)/gallery/collection/main';
import { useGlobalUser } from '@/(logic)/internal/store/user/main';
import { ContextForCollectionResourceList, useControllerForCollectionResourceList } from '@/(server)/(controller)/gallery/collection/resource/list';

export function ExplorerCollection() {
  const collection = useContext(ContextForGalleryCollectionObj);
  const resourceListController = useControllerForCollectionResourceList(collection.id);

  return (
    <ContextForCollectionResourceList.Provider value={resourceListController}>
      <Link href={archiveMap.archive.explorer.resources.id.link(collection.id)}>
        <CollectionContainer className="w-[300px]">
          <CollectionThumbnail />
          <CollectionInfo />
        </CollectionContainer>
      </Link>
    </ContextForCollectionResourceList.Provider>
  );
}
