import { ContextForCollectionResourceList } from '@/(server)/controller/gallery/collection/resource/list';
import { ContextForCollectionResourceObj } from '@/(server)/model/gallery/collection/resource/main';
import { useContext } from 'react';
import { SpaceMapAddResource } from './add/main';
import { SpaceMapResourceResource } from './resource/main';

export function SpaceMapResourcesResults() {
  const resourceListController = useContext(ContextForCollectionResourceList);

  return (
    <div className='flex h-full w-full flex-col overflow-auto p-[1rem]'>
      <div className='grid grid-cols-2 gap-[1rem]'>
        {resourceListController.state.objs.map((resource) => (
          <ContextForCollectionResourceObj.Provider value={resource}>
            <SpaceMapResourceResource />
          </ContextForCollectionResourceObj.Provider>
        ))}
        <SpaceMapAddResource />
      </div>
    </div>
  );
}
