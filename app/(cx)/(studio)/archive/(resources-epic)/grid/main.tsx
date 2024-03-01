import { useContext } from 'react';
import { ExplorerCollectionContext } from '../../(archive-stages)/explorer/resources-view/[id]/page';
import { CollectionResourceAdd } from '../resource/explorer/add/main';
import { ExplorerResource } from '../resource/explorer/main';
import { ResourceContext } from '@/(logic)/internal/data/infra/model/resource/main';
import { ArchiveExplorerCreateModalContext } from '@/(modals)/(studio)/archive/explorer/create/main';

export function ResourcesGrid() {
  const { resources } = useContext(ExplorerCollectionContext);
  const modalContext = useContext(ArchiveExplorerCreateModalContext)

  return (
    <div className='flex flex-row flex-wrap gap-[3rem]'>
      <CollectionResourceAdd
        onClick={() => modalContext.createResource.open()}
      />
      {resources.map((resource) => (
        // eslint-disable-next-line react/jsx-key
        <ResourceContext.Provider value={resource}>
          <ExplorerResource />
        </ResourceContext.Provider>
      ))}
    </div>
  );
}
