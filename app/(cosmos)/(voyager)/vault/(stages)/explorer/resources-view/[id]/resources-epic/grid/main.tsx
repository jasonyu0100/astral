import { ResourcesModalContext } from '@/(cosmos)/(modals)/resources-modal/main';
import { useContext } from 'react';
import { ExploreCollectionContext } from '../../page';
import { CollectionResourceAdd } from '../add-resource/main';
import { CollectionResource } from '../resource/main';

export function ResourcesGrid() {
  const { resources } = useContext(ExploreCollectionContext);
  const modalContext = useContext(ResourcesModalContext);

  return (
    <div className='flex flex-row flex-wrap gap-[3rem]'>
      <CollectionResourceAdd
        onClick={() => modalContext.explorerAddResourceModal.open()}
      />
      {resources.map((resource) => (
        <CollectionResource resource={resource} />
      ))}
    </div>
  );
}
