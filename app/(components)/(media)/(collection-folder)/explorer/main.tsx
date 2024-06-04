import { CollectionThumbnail } from '../common/thumbnail/main';
import { CollectionInfo } from '../common/info/main';
import { CollectionContainer } from '../common/container/main';
import { archiveMap } from '@/(core)/(dashboard)/archive/map';
import Link from 'next/link';
import { useContext } from 'react';
import {
  CollectionContext,
  ResourcesContext,
} from '@/(model)/media/collection/main';
import { useResourcesHandler } from '@/(controller)/explorer/resources/main';
import { useGlobalUser } from '@/(logic)/internal/store/user/main';

export function ExplorerCollection() {
  const collection = useContext(CollectionContext);
  const user = useGlobalUser((state) => state.user);
  const { resources } = useResourcesHandler(collection.id, user?.id);

  return (
    <ResourcesContext.Provider value={resources}>
      <Link href={archiveMap.archive.explorer.resources.id.link(collection.id)}>
        <CollectionContainer className="w-[300px]">
          <CollectionThumbnail />
          <CollectionInfo />
        </CollectionContainer>
      </Link>
    </ResourcesContext.Provider>
  );
}
