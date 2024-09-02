import { ContextForCollectionResourceList } from '@/(server)/controller/gallery/collection/resource/list';
import { ContextForCollectionResourceObj } from '@/(server)/model/gallery/collection/resource/main';
import { useContext } from 'react';
import { SpaceMapResourcesBack } from '../back/main';
import { SpaceMapAddResource } from './add/main';
import { SpaceMapResourceResource } from './resource/main';

export function SpaceMapResourcesResults() {
  const resourceListController = useContext(ContextForCollectionResourceList);

  return (
    <div className='flex h-full w-full flex-col items-center space-y-[1rem] overflow-auto p-[1rem]'>
      <SpaceMapResourcesBack />
      {resourceListController.state.more.queryResults.map((resource) => (
        <ContextForCollectionResourceObj.Provider value={resource}>
          <SpaceMapResourceResource />
        </ContextForCollectionResourceObj.Provider>
      ))}
      <SpaceMapAddResource />
    </div>
  );
}
