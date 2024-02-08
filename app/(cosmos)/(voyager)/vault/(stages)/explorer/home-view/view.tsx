'use client';
import { HomeGallery } from './home-epic/gallery/main';
import { HomeGalleryAdd } from './home-epic/add-gallery/main';
import { CollectionController } from './home-epic/main';
import { CollectionBreadcrumbs } from '../(common)/breadcrumb/main';
import { CollectionBreadcrumbItem } from '../(common)/breadcrumb/item/main';
import { HomeGalleryGrid } from './home-epic/grid/main';
import { vaultMap } from '../../../map';
import { ExploreHomeContext } from './page';
import { useContext } from 'react';
import { HomeModalContext } from '@/(cosmos)/(modals)/home-modal/main';
import { HomeModalsView } from '@/(cosmos)/(modals)/home-modal/view';

export function ExploreHomeView() {
  const { gallerys } = useContext(ExploreHomeContext);
  const { createGalleryModal: createGalleryModal } = useContext(HomeModalContext);

  return (
    <>
      <HomeModalsView />
      <CollectionController>
        <CollectionBreadcrumbs>
          <CollectionBreadcrumbItem href={vaultMap.vault.link} active={true}>
            Home
          </CollectionBreadcrumbItem>
        </CollectionBreadcrumbs>
        <HomeGalleryGrid>
          {gallerys.map((gallery) => (
            <HomeGallery
              gallery={gallery}
              href={vaultMap.vault.explorer.gallery.id.link(gallery.id)}
            />
          ))}
          <HomeGalleryAdd onClick={() => createGalleryModal.open()} />
        </HomeGalleryGrid>
      </CollectionController>
    </>
  );
}
