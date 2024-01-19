'use client';

import { CollectionController } from '../../home/home-epic/main';
import { CollectionBreadcrumbs } from '../../(common)/breadcrumb/main';
import { CollectionBreadcrumbItem } from '../../(common)/breadcrumb/item/main';
import { CollectionBreadcrumbDivider } from '../../(common)/breadcrumb/divider/main';
import { driveMap } from '../../../../map';
import { CollectionResourceGrid } from './collection-epic/grid/main';
import { CollectionResource } from './collection-epic/grid/file/main';
import { CollectionResourceAdd } from './collection-epic/grid/add/main';
import { ExploreCollectionContext } from './page';
import { useContext } from 'react';
import { CollectionWrapper } from '../../home/home-epic/wrapper/main';
import { CollectionsModalsView } from './collection-epic/modal/view';
import { CollectionModalContext } from './collection-epic/modal/main';

export default function ExploreCollectionView() {
  const { gallery, collection, resources } = useContext(
    ExploreCollectionContext,
  );
  const { addFile: addFileModal } = useContext(CollectionModalContext)

  return (
    <CollectionWrapper>
      <CollectionsModalsView/>
      <CollectionController>
        <CollectionBreadcrumbs>
          <CollectionBreadcrumbItem
            href={driveMap.drive.explore.link}
            active={false}
          >
            Home
          </CollectionBreadcrumbItem>
          <CollectionBreadcrumbDivider />
          <CollectionBreadcrumbItem
            active={false}
            href={driveMap.drive.explore.gallery.id.link(gallery.id)}
          >
            {gallery.title}
          </CollectionBreadcrumbItem>
          <CollectionBreadcrumbDivider />
          <CollectionBreadcrumbItem
            active={true}
            href={driveMap.drive.explore.collection.id.link(collection.id)}
          >
            {collection.name}
          </CollectionBreadcrumbItem>
        </CollectionBreadcrumbs>
        <CollectionResourceGrid>
          <CollectionResourceAdd onClick={() => addFileModal.openModal()} />
          {resources.map((resource) => (
            <CollectionResource resource={resource} />
          ))}
        </CollectionResourceGrid>
      </CollectionController>
    </CollectionWrapper>
  );
}
