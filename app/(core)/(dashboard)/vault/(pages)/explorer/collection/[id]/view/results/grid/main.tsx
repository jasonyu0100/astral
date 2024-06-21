import { CollectionResourceAdd } from '@/(core)/(dashboard)/vault/(pages)/explorer/(common)/resource/add/main';
import { ExplorerResource } from '@/(core)/(dashboard)/vault/(pages)/explorer/(common)/resource/main';
import {
  ContextForOpenable,
  useControllerForOpenable,
} from '@/(logic)/contexts/openable/main';
import { ContextForCollectionResourceList } from '@/(server)/(controller)/gallery/collection/resource/list';
import { ContextForCollectionResourceObj } from '@/(server)/(model)/gallery/collection/resource/main';
import { useContext } from 'react';
import { ExplorerCreateResourceModal } from '../../../../../(modals)/create/resource/main';

export function ExplorerCollectionResourcesGrid() {
  const resourcesHandler = useContext(ContextForCollectionResourceList);
  const openableController = useControllerForOpenable();

  return (
    <>
      <ContextForOpenable.Provider value={openableController}>
        <ExplorerCreateResourceModal />
      </ContextForOpenable.Provider>
      <div className='flex-grow overflow-auto' style={{ height: '100%' }}>
        <div className='flex w-full flex-row flex-wrap gap-[2rem] '>
          {resourcesHandler.state.objs.map((resource) => (
            <ContextForCollectionResourceObj.Provider
              value={resource}
              key={resource.id}
            >
              <ExplorerResource key={resource.id} />
            </ContextForCollectionResourceObj.Provider>
          ))}
          <CollectionResourceAdd onClick={() => openableController.open()} />
        </div>
      </div>
    </>
  );
}
