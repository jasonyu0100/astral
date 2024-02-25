import { ResourcesModalContext } from '@/(modals)/resources-modal/main';
import { useContext } from 'react';
import { ExploreCollectionContext } from '../../(archive-stages)/explorer/resources-view/[id]/page';
import { CollectionResourceAdd } from '../resource/explorer/add/main';
import { CollectionResource } from '../resource/explorer/main';
import { ResourceContext } from '@/(logic)/internal/data/infra/model/resource/main';

export function ResourcesGrid() {
  const { resources } = useContext(ExploreCollectionContext);
  const modalContext = useContext(ResourcesModalContext);

  return (
    <div className='flex flex-row flex-wrap gap-[3rem]'>
      <CollectionResourceAdd
        onClick={() => modalContext.explorerAddResourceModal.open()}
      />
      {resources.map((resource) => (
        // eslint-disable-next-line react/jsx-key
        <ResourceContext.Provider value={resource}>
          <CollectionResource />
        </ResourceContext.Provider>
      ))}
    </div>
  );
}
