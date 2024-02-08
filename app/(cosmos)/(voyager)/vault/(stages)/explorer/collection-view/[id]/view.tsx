'use client';
import { CollectionController } from '../../home-view/home-epic/main';
import { CollectionBreadcrumbs } from '../../(common)/breadcrumb/main';
import { CollectionBreadcrumbItem } from '../../(common)/breadcrumb/item/main';
import { CollectionBreadcrumbDivider } from '../../(common)/breadcrumb/divider/main';
import { vaultMap } from '../../../../map';
import { CollectionResourceGrid } from './collection-epic/grid/main';
import { CollectionResource } from './collection-epic/resource/main';
import { CollectionResourceAdd } from './collection-epic/add-resource/main';
import { ExploreCollectionContext } from './page';
import { useContext } from 'react';
import { CollectionModalContext } from '@/(cosmos)/(modals)/collection-modal/main';
import { CollectionModalsView } from '@/(cosmos)/(modals)/collection-modal/view';

export default function ExploreCollectionView() {
  const { gallery, collection, resources } = useContext(
    ExploreCollectionContext,
  );
  const { addFileModal } = useContext(CollectionModalContext);

  return (
    <>
      <CollectionModalsView />
      <CollectionController>
        <CollectionBreadcrumbs>
          <CollectionBreadcrumbItem
            href={vaultMap.vault.explorer.link}
            active={false}
          >
            Home
          </CollectionBreadcrumbItem>
          <CollectionBreadcrumbDivider />
          <CollectionBreadcrumbItem
            active={false}
            href={vaultMap.vault.explorer.gallery.id.link(gallery.id)}
          >
            {gallery.title}
          </CollectionBreadcrumbItem>
          <CollectionBreadcrumbDivider />
          <CollectionBreadcrumbItem
            active={true}
            href={vaultMap.vault.explorer.collection.id.link(collection.id)}
          >
            {collection.title}
          </CollectionBreadcrumbItem>
        </CollectionBreadcrumbs>
        <CollectionResourceGrid>
          <CollectionResourceAdd onClick={() => addFileModal.open()} />
          {resources.map((resource) => (
            <CollectionResource resource={resource} />
          ))}
        </CollectionResourceGrid>
      </CollectionController>
    </>
  );
}
