import { ContextForCollectionResourceList } from '@/(server)/controller/gallery/collection/resource/list';
import { ContextForCollectionResourceObj } from '@/(server)/model/gallery/collection/resource/main';
import {
  ContextForOpenable,
  useControllerForOpenable,
} from '@/logic/contexts/openable/main';
import { useContext } from 'react';
import { CollectionResourceAdd } from '../../../../../(common)/resource/add/main';
import { FinderResource } from '../../../../../(common)/resource/main';
import { VaultFinderCreateResourceModal } from '../../../../../(modals)/create/resource/main';

export function FinderCollectionResourcesGrid() {
  const resourceListController = useContext(ContextForCollectionResourceList);
  const openableController = useControllerForOpenable();

  return (
    <>
      <ContextForOpenable.Provider value={openableController}>
        <VaultFinderCreateResourceModal />
      </ContextForOpenable.Provider>
      <div className='flex-grow overflow-auto' style={{ height: '100%' }}>
        <div className='grid grid-cols-4 gap-[2rem] pr-[2rem]'>
          {resourceListController.state.more.queryResults.map((resource) => (
            <ContextForCollectionResourceObj.Provider
              value={resource}
              key={resource.id}
            >
              <FinderResource key={resource.id} />
            </ContextForCollectionResourceObj.Provider>
          ))}
          <CollectionResourceAdd onClick={() => openableController.open()} />
        </div>
      </div>
    </>
  );
}
