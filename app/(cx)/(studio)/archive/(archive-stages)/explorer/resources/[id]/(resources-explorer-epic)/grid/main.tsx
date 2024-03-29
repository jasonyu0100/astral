import { useContext } from 'react';
import { CollectionResourceAdd } from '../../../../../../../../../(components)/(explorer)/(resource-assets-epic)/explorer/add/main';
import { ExplorerResource } from '../../../../../../../../../(components)/(explorer)/(resource-assets-epic)/explorer/main';
import { ResourceContext } from '@/(logic)/internal/model/resource/main';
import { ArchiveExplorerCreateModalContext } from '@/(modals)/(studio)/archive/explorer/create/main';
import { ResourcesHandlerContext } from '@/(logic)/internal/handler/explorer/resources/main';

export function ResourcesGrid() {
  const resourcesHandler = useContext(ResourcesHandlerContext);
  const resources = resourcesHandler.resources;
  const modalContext = useContext(ArchiveExplorerCreateModalContext)

  return (
    <div className='flex flex-row flex-wrap gap-[3rem]'>
      <CollectionResourceAdd
        onClick={() => modalContext.createResource.open()}
      />
      {resources.map((resource) => (
        <ResourceContext.Provider value={resource} key={resource.id}>
          <ExplorerResource key={resource.id}/>
        </ResourceContext.Provider>
      ))}
    </div>
  );
}
