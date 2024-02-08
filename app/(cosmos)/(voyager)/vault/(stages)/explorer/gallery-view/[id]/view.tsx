'use client';
import { CollectionController } from '../../home-view/home-epic/main';
import { CollectionBreadcrumbs } from '../../(common)/breadcrumb/main';
import { CollectionBreadcrumbItem } from '../../(common)/breadcrumb/item/main';
import { CollectionBreadcrumbDivider } from '../../(common)/breadcrumb/divider/main';
import { GalleryCollectionGrid } from './gallery-epic/grid/main';
import { vaultMap } from '../../../../map';
import { GalleryCollection } from './gallery-epic/collection/main';
import { GalleryCollectionAdd } from './gallery-epic/add-collection/main';
import { useContext } from 'react';
import { ExploreGalleryContext } from './page';
import { GalleryModalContext } from '@/(cosmos)/(modals)/gallery-modal/main';
import { GalleryModalsView } from '@/(cosmos)/(modals)/gallery-modal/view';

export function ExploreGalleryView() {
  const { gallery, collections } = useContext(ExploreGalleryContext);
  const { createCollectionModal: createCollectionModal } =
    useContext(GalleryModalContext);

  return (
    <>
      <GalleryModalsView />
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
            active={true}
            href={vaultMap.vault.explorer.gallery.id.link(gallery.id)}
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
    </>
  );
}
