'use client';

import { CollectionController } from '../../home/home-epic/main';
import { CollectionBreadcrumbs } from '../../(common)/breadcrumb/main';
import { CollectionBreadcrumbItem } from '../../(common)/breadcrumb/item/main';
import { CollectionBreadcrumbDivider } from '../../(common)/breadcrumb/divider/main';
import { vaultMap } from '../../../../map';
import { CollectionResourceGrid } from './collection-epic/grid/main';
import { CollectionResource } from './collection-epic/grid/file/main';
import { CollectionResourceAdd } from './collection-epic/grid/file/add/main';
import { ExploreCollectionContext } from './page';
import { useContext } from 'react';
import { CollectionWrapper } from '../../home/home-epic/wrapper/main';
import { CollectionModalsView } from './collection-epic/modal/view';
import { CollectionModalContext } from './collection-epic/modal/main';

export default function ExploreCollectionView() {
  const { gallery, collection, resources } = useContext(
    ExploreCollectionContext,
  );
  const { addFileModal: addFile } = useContext(CollectionModalContext);

  return (
    <CollectionWrapper>
      <CollectionModalsView />
      <CollectionController>
        <CollectionBreadcrumbs>
          <CollectionBreadcrumbItem
            href={vaultMap.vault.explore.link}
            active={false}
          >
            Home
          </CollectionBreadcrumbItem>
          <CollectionBreadcrumbDivider />
          <CollectionBreadcrumbItem
            active={false}
            href={vaultMap.vault.explore.gallery.id.link(gallery.id)}
          >
            {gallery.title}
          </CollectionBreadcrumbItem>
          <CollectionBreadcrumbDivider />
          <CollectionBreadcrumbItem
            active={true}
            href={vaultMap.vault.explore.collection.id.link(collection.id)}
          >
            {collection.title}
          </CollectionBreadcrumbItem>
        </CollectionBreadcrumbs>
        <CollectionResourceGrid>
          <CollectionResourceAdd onClick={() => addFile.open()} />
          {resources.map((resource) => (
            <CollectionResource resource={resource} />
          ))}
        </CollectionResourceGrid>
      </CollectionController>
    </CollectionWrapper>
  );
}
