'use client';
import { HomeGallery } from './home-epic/grid/gallery/main';
import { HomeGalleryAdd } from './home-epic/grid/add/main';
import { CollectionWrapper } from './home-epic/wrapper/main';
import { CollectionController } from './home-epic/main';
import { CollectionBreadcrumbs } from '../(common)/breadcrumb/main';
import { CollectionBreadcrumbItem } from '../(common)/breadcrumb/item/main';
import { HomeGalleryGrid } from './home-epic/grid/main';
import { driveMap } from '../../../map';
import { ExploreHomeContext } from './page';
import { useContext } from 'react';
import { HomeModalContext } from './home-epic/modal/main';
import { HomeModalsView } from './home-epic/modal/view';

export function ExploreHomeView() {
  const { gallerys } = useContext(ExploreHomeContext);
  const { createGalleryModal } = useContext(HomeModalContext);

  return (
    <CollectionWrapper>
      <HomeModalsView />
      <CollectionController>
        <CollectionBreadcrumbs>
          <CollectionBreadcrumbItem href={driveMap.drive.link} active={true}>
            Home
          </CollectionBreadcrumbItem>
        </CollectionBreadcrumbs>
        <HomeGalleryGrid>
          {gallerys.map((gallery) => (
            <HomeGallery
              gallery={gallery}
              href={driveMap.drive.explore.gallery.id.link(gallery.id)}
            />
          ))}
          <HomeGalleryAdd
            onClick={() => createGalleryModal.openModal()}
          />
        </HomeGalleryGrid>
      </CollectionController>
    </CollectionWrapper>
  );
}
