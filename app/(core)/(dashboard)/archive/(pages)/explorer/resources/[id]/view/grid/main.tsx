import { useContext } from 'react';
import { CollectionResourceAdd } from '../../../../../../../../../(components)/(media)/(resource-file)/explorer/add/main';
import { ExplorerResource } from '../../../../../../../../../(components)/(media)/(resource-file)/explorer/main';
import { ContextForCollectionResourceObj } from '@/(server)/(model)/gallery/collection/resource/main';
import { ContextForExplorerModals } from '@/(core)/(dashboard)/(modals)/archive/explorer/create/main';
import { ContextForCollectionResourceList } from '@/(server)/(controller)/gallery/collection/resource/list';

export function ResourcesGrid() {
  const resourcesHandler = useContext(ContextForCollectionResourceList);
  const modalContext = useContext(ContextForExplorerModals);

  return (
    <div className='flex-grow overflow-auto' style={{ height: '100%' }}>
      <div className='flex flex-row w-full flex-wrap gap-[2rem] '>
        {resourcesHandler.state.resources.map((resource) => (
          <ContextForCollectionResourceObj.Provider value={resource} key={resource.id}>
            <ExplorerResource key={resource.id} />
          </ContextForCollectionResourceObj.Provider>
        ))}
        <CollectionResourceAdd
          onClick={() => modalContext.createResource.open()}
        />
      </div>
    </div>
  );
}
