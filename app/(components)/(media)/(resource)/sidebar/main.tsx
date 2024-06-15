import { ContextForSceneIdeaList } from '@/(server)/(controller)/space/chapter/scene/idea/list';
import { FileElem } from '@/(server)/(model)/elements/file/main';
import { ContextForCollectionResourceObj } from '@/(server)/(model)/gallery/collection/resource/main';
import { useContext } from 'react';
import { ResourceContainer } from '../common/container/main';
import { CollectionResourceMedia } from '../common/media/main';

export function SidebarCollectionResource() {
  const sceneIdeasController = useContext(ContextForSceneIdeaList);
  const resource = useContext(ContextForCollectionResourceObj);

  return (
    <ResourceContainer
      className='w-full flex-shrink-0'
      onClick={() => {
        sceneIdeasController.actions.createActions.createFromFile(
          resource.title,
          resource.description,
          Math.random() * 500,
          Math.random() * 500,
          resource?.fileElem || ({} as FileElem),
        );
      }}
    >
      <CollectionResourceMedia className='p-[10px]' />
    </ResourceContainer>
  );
}
