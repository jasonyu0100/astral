import { driveMap } from '@/(core)/(dashboard)/drive/map';
import { ContextForGalleryMain } from '@/architecture/controller/gallery/main';
import { useContext } from 'react';
import { DriveFinderBreadcrumbDivider } from '../../../../../common/breadcrumb/divider/main';
import { DriveFinderBreadcrumbItem } from '../../../../../common/breadcrumb/item/main';
import { DriveFinderBreadcrumbs } from '../../../../../common/breadcrumb/main';

export function DriveFinderGalleryCollectionsBreadcrumbs() {
  const galleryMainController = useContext(ContextForGalleryMain);

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
        active={true}
        href={driveMap.drive.finder.gallery.id.link(
          galleryMainController.state.objId,
        )}
      >
        {galleryMainController.state.obj?.title || 'Untitled'}
      </DriveFinderBreadcrumbItem>
    </DriveFinderBreadcrumbs>
  );
}
