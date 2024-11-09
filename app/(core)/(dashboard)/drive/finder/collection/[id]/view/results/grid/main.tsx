import { DriveFinderModals } from '@/(core)/(dashboard)/drive/finder/modals/controller/main';
import { ContextForCollectionResourceList } from '@/architecture/controller/gallery/collection/resource/list';
import { ContextForCollectionResourceObj } from '@/architecture/model/gallery/collection/resource/main';
import { useContext } from 'react';
import { DriveFinderCollectionResourceAdd } from '../../../../../common/resource/add/main';
import { DriveFinderResource } from '../../../../../common/resource/main';

export function DriveFinderCollectionResourcesGrid() {
  const resourceListController = useContext(ContextForCollectionResourceList);

  return (
    <div className='flex-grow overflow-auto' style={{ height: '100%' }}>
      <div className='grid grid-cols-5 gap-[2rem] pr-[2rem]'>
        {resourceListController.state.more.queryResults.map((resource) => (
          <ContextForCollectionResourceObj.Provider
            value={resource}
            key={resource.id}
          >
            <DriveFinderModals>
              <DriveFinderResource key={resource.id} />
            </DriveFinderModals>
          </ContextForCollectionResourceObj.Provider>
        ))}
        <DriveFinderCollectionResourceAdd />
      </div>
    </div>
  );
}
