import { FileObj } from '@/(logic)/internal/model/resource/file/main';
import { ResourceContext } from '@/(logic)/internal/model/resource/main';
import { useContext } from 'react';
import { ResourcePolaroid } from './polaroid/main';
import { CollectionResourceMedia } from '../common/media/main';
import { StarsHandlerContext } from '@/(logic)/internal/handler/stars/main';

export function SidebarCollectionResource() {
  const starsHandler = useContext(StarsHandlerContext);
  const resource = useContext(ResourceContext);

  return (
    <ResourcePolaroid
      onClick={() =>
        starsHandler.starActions.createFromFile(
          resource.title,
          resource.description,
          Math.random() * 500,
          Math.random() * 500,
          resource?.file || ({} as FileObj),
        )
      }
    >
      <CollectionResourceMedia />
    </ResourcePolaroid>
  );
}
