import { useContext } from 'react';
import { CollectionResourceAdd } from '../../../../../../../../../(components)/(media)/(resource-file)/explorer/add/main';
import { ExplorerResource } from '../../../../../../../../../(components)/(media)/(resource-file)/explorer/main';
import { CollectionResourceContext } from '@/(model)/gallery/collection/resource/main';
import { ArchiveExplorerCreateModalContext } from '@/(core)/(dashboard)/(modals)/archive/explorer/create/main';
import { ResourcesHandlerContext } from '@/(model)/(controller)/(archive)/explorer/resources/main';

export function ResourcesGrid() {
  const resourcesHandler = useContext(ResourcesHandlerContext);
  const resources = resourcesHandler.resources;
  const modalContext = useContext(ArchiveExplorerCreateModalContext);

  return (
    <div className='flex-grow overflow-auto' style={{ height: '100%' }}>
      <div className='flex flex-row w-full flex-wrap gap-[2rem] '>
        {resources.map((resource) => (
          <CollectionResourceContext.Provider value={resource} key={resource.id}>
            <ExplorerResource key={resource.id} />
          </CollectionResourceContext.Provider>
        ))}
        <CollectionResourceAdd
          onClick={() => modalContext.createResource.open()}
        />
      </div>
    </div>
  );
}
