import { HorizontalDivider } from '@/components/indicator/divider/horizontal/main';
import { ContextForCollectionResourceList } from '@/server/controller/gallery/collection/resource/list';
import { ContextForCollectionResourceObj } from '@/server/model/gallery/collection/resource/main';
import { useContext } from 'react';
import { SpacesSceneResourcesBack } from '../back/main';
import { SpacesSceneAddResource } from './add/main';
import { SpacesSceneResourceResource } from './resource/main';

export function SpacesSceneResourcesResults() {
  const resourceListController = useContext(ContextForCollectionResourceList);

  return (
    <div
      className='flex h-full w-full flex-col items-center space-y-[1rem] overflow-auto p-[1rem]'
      style={{ height: '100%' }}
    >
      <SpacesSceneResourcesBack />
      {resourceListController.state.more.queryResults.map((resource) => (
        <ContextForCollectionResourceObj.Provider value={resource}>
          <SpacesSceneResourceResource />
        </ContextForCollectionResourceObj.Provider>
      ))}
      <HorizontalDivider />
      <SpacesSceneAddResource />
    </div>
  );
}
