import { FileObj } from '@/(types)/model/resource/file/main';
import { ResourceContext } from '@/(types)/model/resource/main';
import { useContext } from 'react';
import { CollectionResourceMedia } from '../common/media/main';
import { StarsHandlerContext } from '@/(logic)/internal/handler/stars/main';
import { ResourceContainer } from '../common/container/main';

export function SidebarCollectionResource() {
  const starsHandler = useContext(StarsHandlerContext);
  const resource = useContext(ResourceContext);

  return (
    <ResourceContainer
      className='w-[2/5] p-[10px]'
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
    </ResourceContainer>
  );
}
