import { driveMap } from '@/(core)/(dashboard)/drive/map';
import { ContextForGalleryCollectionMain } from '@/architecture/controller/gallery/collection/main';
import { ContextForGalleryMain } from '@/architecture/controller/gallery/main';
import { useContext } from 'react';
import { DriveFinderBreadcrumbDivider } from '../../../../../common/breadcrumb/divider/main';
import { DriveFinderBreadcrumbItem } from '../../../../../common/breadcrumb/item/main';
import { DriveFinderBreadcrumbs } from '../../../../../common/breadcrumb/main';

export function DriveFinderCollectionResourcesBreadcrumbs() {
  const galleryMainController = useContext(ContextForGalleryMain);
  const collectionMainController = useContext(ContextForGalleryCollectionMain);

  return (
    <DriveFinderBreadcrumbs>
      <DriveFinderBreadcrumbItem
        href={driveMap.drive.finder.link}
        active={false}
      >
        Home
      </DriveFinderBreadcrumbItem>
      <DriveFinderBreadcrumbDivider />
      <DriveFinderBreadcrumbItem
        active={false}
        href={driveMap.drive.finder.gallery.id.link(
          galleryMainController.state.objId,
        )}
      >
        {galleryMainController.state.obj?.title || 'Untitled'}
      </DriveFinderBreadcrumbItem>
      <DriveFinderBreadcrumbDivider />
      <DriveFinderBreadcrumbItem
        active={true}
        href={driveMap.drive.finder.collection.id.link(
          collectionMainController.state.objId,
        )}
      >
        {collectionMainController.state.obj?.title || 'Untitled'}
      </DriveFinderBreadcrumbItem>
    </DriveFinderBreadcrumbs>
  );
}
