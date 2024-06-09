import { FileElem } from '@/(model)/elements/file/main';
import { ContextForCollectionResourceObj } from '@/(model)/gallery/collection/resource/main';
import { useContext } from 'react';
import { CollectionResourceMedia } from '../common/media/main';
import { ResourceContainer } from '../common/container/main';
import { ContextForSceneIdeaList } from '@/(model)/(controller)/space/chapter/scene/idea/list';

export function SidebarCollectionResource() {
  const sceneIdeasController = useContext(ContextForSceneIdeaList);
  const resource = useContext(ContextForCollectionResourceObj);

  return (
    <ResourceContainer
      className='h-[100px] p-[10px] flex-shrink-0'
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
      <CollectionResourceMedia />
    </ResourceContainer>
  );
}
