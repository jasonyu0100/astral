import { ResourcesModalContext } from '@/(verses)/(modals)/resources-modal/main';
import { useContext } from 'react';
import { ExploreCollectionContext } from '../../page';
import { CollectionResourceAdd } from '../add-resource/main';
import { CollectionResource } from '../resource/main';
import { ResourceContext } from '@/(ouros)/(model)/resource/main';

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
