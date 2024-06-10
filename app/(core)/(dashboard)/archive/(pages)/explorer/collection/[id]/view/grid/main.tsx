import { useContext } from 'react';
import { CollectionResourceAdd } from '../../../../../../../../../(components)/(media)/(resource-file)/explorer/add/main';
import { ExplorerResource } from '../../../../../../../../../(components)/(media)/(resource-file)/explorer/main';
import { ContextForCollectionResourceObj } from '@/(server)/(model)/gallery/collection/resource/main';
import { ContextForCollectionResourceList } from '@/(server)/(controller)/gallery/collection/resource/list';
import {
  ContextForOpenable,
  useControllerForOpenable,
} from '@/(logic)/contexts/openable/main';
import { ExplorerCreateResourceModal } from '../../../../(modals)/create/resource/main';

export function ResourcesGrid() {
  const resourcesHandler = useContext(ContextForCollectionResourceList);
  const openableController = useControllerForOpenable();

  return (
    <div className='flex-grow overflow-auto' style={{ height: '100%' }}>
      <div className='flex w-full flex-row flex-wrap gap-[2rem] '>
        {resourcesHandler.state.resources.map((resource) => (
          <ContextForCollectionResourceObj.Provider
            value={resource}
            key={resource.id}
          >
            <ExplorerResource key={resource.id} />
          </ContextForCollectionResourceObj.Provider>
        ))}
        <ContextForOpenable.Provider value={openableController}>
          <ExplorerCreateResourceModal />
        </ContextForOpenable.Provider>
        <CollectionResourceAdd onClick={() => openableController.open()} />
      </div>
    </div>
  );
}
