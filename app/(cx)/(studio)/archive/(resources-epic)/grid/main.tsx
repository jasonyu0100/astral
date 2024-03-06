import { useContext } from 'react';
import { CollectionResourceAdd } from '../resource/explorer/add/main';
import { ExplorerResource } from '../resource/explorer/main';
import { ResourceContext } from '@/(logic)/internal/data/infra/model/resource/main';
import { ArchiveExplorerCreateModalContext } from '@/(modals)/(studio)/archive/explorer/create/main';
import { CollectionResourcesHandlerContext } from '@/(logic)/internal/handler/explorer/resources/main';

export function ResourcesGrid() {
  const resourcesHandler = useContext(CollectionResourcesHandlerContext);
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
