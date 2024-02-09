'use client';
import { CollectionController } from '../../gallerys-view/gallerys-epic/main';
import { CollectionBreadcrumbs } from '../../(common)/breadcrumb/main';
import { CollectionBreadcrumbItem } from '../../(common)/breadcrumb/item/main';
import { CollectionBreadcrumbDivider } from '../../(common)/breadcrumb/divider/main';
import { GalleryCollectionGrid } from './collections-epic/grid/main';
import { vaultMap } from '../../../../map';
import { GalleryCollection } from './collections-epic/collection/main';
import { GalleryCollectionAdd } from './collections-epic/add-collection/main';
import { useContext } from 'react';
import { ExploreGalleryContext } from './page';
import { CollectionsModalContext } from '@/(cosmos)/(modals)/collections-modal/main';
import { CollectionsModalView } from '@/(cosmos)/(modals)/collections-modal/view';

export function ExploreCollectionsView() {
  const { gallery, collections } = useContext(ExploreGalleryContext);
  const { explorerCreateCollectionModal: createCollectionModal } =
    useContext(CollectionsModalContext);

  return (
    <>
      <CollectionsModalView />
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
            href={vaultMap.vault.explorer.collections.id.link(gallery.id)}
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
