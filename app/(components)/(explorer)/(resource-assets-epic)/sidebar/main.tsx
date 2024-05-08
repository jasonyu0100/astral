import { FileObj } from '@/(types)/model/resource/file/main';
import { ResourceContext } from '@/(types)/model/resource/main';
import { useContext } from 'react';
import { CollectionResourceMedia } from '../common/media/main';
import { IdeasHandlerContext } from '@/(types)/handler/ideas/main';
import { ResourceContainer } from '../common/container/main';

export function SidebarCollectionResource() {
  const ideasHandler = useContext(IdeasHandlerContext);
  const resource = useContext(ResourceContext);

  return (
    <ResourceContainer
      className='w-[2/5] p-[10px]'
      onClick={() =>
        ideasHandler.ideaActions.createFromFile(
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
