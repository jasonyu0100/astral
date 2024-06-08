import { FileElem } from '@/(model)/elements/file/main';
import { ContextForCollectionResourceObj } from '@/(model)/gallery/collection/resource/main';
import { useContext } from 'react';
import { CollectionResourceMedia } from '../common/media/main';
import { IdeasHandlerContext } from '@/(model)/(controller)/(archive)/ideas/main';
import { ResourceContainer } from '../common/container/main';

export function SidebarCollectionResource() {
  const ideasHandler = useContext(IdeasHandlerContext);
  const resource = useContext(ContextForCollectionResourceObj);

  return (
    <ResourceContainer
      className='h-[100px] p-[10px] flex-shrink-0'
      onClick={() => {
        ideasHandler.ideaActions.createFromFile(
          resource.title,
          resource.description,
          Math.random() * 500,
          Math.random() * 500,
          resource?.fileElem || ({} as FileElem),
        );
      }}
    >
      <CollectionResourceMedia />
    </ResourceContainer>
  );
}
