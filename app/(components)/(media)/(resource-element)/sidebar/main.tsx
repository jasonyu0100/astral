import { FileObj } from '@/(model)/concept/file/main';
import { CollectionResourceContext } from '@/(model)/media/resource/main';
import { useContext } from 'react';
import { CollectionResourceMedia } from '../common/media/main';
import { IdeasHandlerContext } from '@/(controller)/ideas/main';
import { ResourceContainer } from '../common/container/main';

export function SidebarCollectionResource() {
  const ideasHandler = useContext(IdeasHandlerContext);
  const resource = useContext(CollectionResourceContext);

  return (
    <ResourceContainer
      className='h-[100px] p-[10px] flex-shrink-0'
      onClick={() => {
        ideasHandler.ideaActions.createFromFile(
          resource.title,
          resource.description,
          Math.random() * 500,
          Math.random() * 500,
          resource?.file || ({} as FileObj),
        );
      }}
    >
      <CollectionResourceMedia />
    </ResourceContainer>
  );
}
