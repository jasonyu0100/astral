'use client';
import { CollectionController } from '../../gallerys-view/gallerys-epic/main';
import { CollectionBreadcrumbs } from '../../(common)/breadcrumb/main';
import { CollectionBreadcrumbItem } from '../../(common)/breadcrumb/item/main';
import { CollectionBreadcrumbDivider } from '../../(common)/breadcrumb/divider/main';
import { vaultMap } from '../../../../map';
import { CollectionResourceGrid } from './resources-epic/grid/main';
import { CollectionResource } from './resources-epic/resource/main';
import { CollectionResourceAdd } from './resources-epic/add-resource/main';
import { ExploreCollectionContext } from './page';
import { useContext } from 'react';
import { ResourcesModalContext } from '@/(cosmos)/(modals)/resources-modal/main';
import { ResourcesModalView } from '@/(cosmos)/(modals)/resources-modal/view';

export default function ExploreResourcesView() {
  const { gallery, collection, resources } = useContext(
    ExploreCollectionContext,
  );
  const { explorerAddResourceModal: addFileModal } = useContext(ResourcesModalContext);

  return (
    <>
      <ResourcesModalView />
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
            href={vaultMap.vault.explorer.collections.id.link(gallery.id)}
          >
            {gallery.title}
          </CollectionBreadcrumbItem>
          <CollectionBreadcrumbDivider />
          <CollectionBreadcrumbItem
            active={true}
            href={vaultMap.vault.explorer.resources.id.link(collection.id)}
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
