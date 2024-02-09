'use client';
import { HomeGallery } from './gallerys-epic/gallery/main';
import { HomeGalleryAdd } from './gallerys-epic/add-gallery/main';
import { CollectionController } from './gallerys-epic/main';
import { CollectionBreadcrumbs } from '../(common)/breadcrumb/main';
import { CollectionBreadcrumbItem } from '../(common)/breadcrumb/item/main';
import { HomeGalleryGrid } from './gallerys-epic/grid/main';
import { vaultMap } from '../../../map';
import { ExploreHomeContext } from './page';
import { useContext } from 'react';
import { GallerysModalContext } from '@/(cosmos)/(modals)/gallerys-modal/main';
import { GallerysModalView } from '@/(cosmos)/(modals)/gallerys-modal/view';

export function ExploreGallerysView() {
  const { gallerys } = useContext(ExploreHomeContext);
  const { explorerCreateGalleryModal: createGalleryModal } = useContext(GallerysModalContext);

  return (
    <>
      <GallerysModalView />
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
              href={vaultMap.vault.explorer.collections.id.link(gallery.id)}
            />
          ))}
          <HomeGalleryAdd onClick={() => createGalleryModal.open()} />
        </HomeGalleryGrid>
      </CollectionController>
    </>
  );
}
