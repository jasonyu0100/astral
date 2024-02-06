'use client';

import { CollectionWrapper } from '../../home/home-epic/wrapper/main';
import { CollectionController } from '../../home/home-epic/main';
import { CollectionBreadcrumbs } from '../../(common)/breadcrumb/main';
import { CollectionBreadcrumbItem } from '../../(common)/breadcrumb/item/main';
import { CollectionBreadcrumbDivider } from '../../(common)/breadcrumb/divider/main';
import { GalleryCollectionGrid } from './gallery-epic/grid/main';
import { vaultMap } from '../../../../map';
import { GalleryCollection } from './gallery-epic/grid/collection/main';
import { GalleryCollectionAdd } from './gallery-epic/grid/add/main';
import { useContext } from 'react';
import { ExploreGalleryContext } from './page';
import { GalleryModalsView } from './gallery-epic/modal/view';
import { GalleryModalContext } from './gallery-epic/modal/main';

export function ExploreGalleryView() {
  const { gallery, collections } = useContext(ExploreGalleryContext);
  const { createCollection: createCollectionModal } =
    useContext(GalleryModalContext);

  return (
    <CollectionWrapper>
      <GalleryModalsView />
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
            active={true}
            href={vaultMap.vault.explore.gallery.id.link(gallery.id)}
          >
            {gallery.title}
          </CollectionBreadcrumbItem>
        </CollectionBreadcrumbs>
        {gallery !== null && (
          <GalleryCollectionGrid>
            {collections.map((collection, index) => (
              <GalleryCollection collection={collection} index={index} />
            ))}
            <GalleryCollectionAdd
              onClick={() => createCollectionModal.open()}
            />
          </GalleryCollectionGrid>
        )}
      </CollectionController>
    </CollectionWrapper>
  );
}
