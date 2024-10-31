import { VaultFinderModals } from '@/(core)/(dashboard)/vault/finder/modals/controller/main';
import { ContextForCollectionResourceList } from '@/server/controller/gallery/collection/resource/list';
import { ContextForCollectionResourceObj } from '@/server/model/gallery/collection/resource/main';
import { useContext } from 'react';
import { CollectionResourceAdd } from '../../../../../common/resource/add/main';
import { FinderResource } from '../../../../../common/resource/main';

export function FinderCollectionResourcesGrid() {
  const resourceListController = useContext(ContextForCollectionResourceList);

  return (
    <>
      <div className='flex-grow overflow-auto' style={{ height: '100%' }}>
        <div className='grid grid-cols-5 gap-[1rem] pr-[2rem]'>
          {resourceListController.state.more.queryResults.map((resource) => (
            <ContextForCollectionResourceObj.Provider
              value={resource}
              key={resource.id}
            >
              <VaultFinderModals>
                <FinderResource key={resource.id} />
              </VaultFinderModals>
            </ContextForCollectionResourceObj.Provider>
          ))}
          <CollectionResourceAdd />
        </div>
      </div>
    </>
  );
}
