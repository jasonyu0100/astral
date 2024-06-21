import { ContextForCollectionResourceList } from '@/(server)/(controller)/gallery/collection/resource/list';
import { ContextForCollectionResourceObj } from '@/(server)/(model)/gallery/collection/resource/main';
import { useContext } from 'react';
import { SpaceMapResourceThumbnail } from './thumbnail/main';

export function SpaceMapResourcesResults() {
  const resourceListController = useContext(ContextForCollectionResourceList);

  return (
    <div
      className='flex w-full flex-col overflow-auto px-[1rem]'
      style={{ height: 'calc(100% - 4rem - 80px)' }}
    >
      <div className='grid grid-cols-2 gap-[1rem]'>
        {resourceListController.state.objs.map((resource) => (
          <ContextForCollectionResourceObj.Provider value={resource}>
            <SpaceMapResourceThumbnail />
          </ContextForCollectionResourceObj.Provider>
        ))}
      </div>
    </div>
  );
}
