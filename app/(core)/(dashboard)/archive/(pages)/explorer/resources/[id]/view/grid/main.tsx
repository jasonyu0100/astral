import { useContext } from 'react';
import { CollectionResourceAdd } from '../../../../../../../../../(components)/(explorer)/(resource-element)/explorer/add/main';
import { ExplorerResource } from '../../../../../../../../../(components)/(explorer)/(resource-element)/explorer/main';
import { ResourceContext } from '@/(model)/resource/main';
import { ArchiveExplorerCreateModalContext } from '@/(core)/(dashboard)/(modals)/archive/explorer/create/main';
import { ResourcesHandlerContext } from '@/(controller)/explorer/resources/main';

export function ResourcesGrid() {
  const resourcesHandler = useContext(ResourcesHandlerContext);
  const resources = resourcesHandler.resources;
  const modalContext = useContext(ArchiveExplorerCreateModalContext);

  return (
    <div className='flex-grow mt-[2rem] overflow-auto' style={{ height: '100%' }}>
      <div className='flex flex-row w-full flex-wrap gap-[2rem] '>
        {resources.map((resource) => (
          <ResourceContext.Provider value={resource} key={resource.id}>
            <ExplorerResource key={resource.id} />
          </ResourceContext.Provider>
        ))}
        <CollectionResourceAdd
          onClick={() => modalContext.createResource.open()}
        />
      </div>
    </div>
  );
}
