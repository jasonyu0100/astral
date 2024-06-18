import { archiveMap } from '@/(core)/(dashboard)/archive/map';
import { ContextForGalleryCollectionMain } from '@/(server)/(controller)/gallery/collection/main';
import { ContextForGalleryMain } from '@/(server)/(controller)/gallery/main';
import { useContext } from 'react';
import { ArchiveExplorerBreadcrumbDivider } from '../../../../../(common)/breadcrumb/divider/main';
import { ArchiveExplorerBreadcrumbItem } from '../../../../../(common)/breadcrumb/item/main';
import { ArchiveExplorerBreadcrumbs } from '../../../../../(common)/breadcrumb/main';

export function ExplorerCollectionResourcesBreadcrumbs() {
  const galleryMainController = useContext(ContextForGalleryMain);
  const collectionMainController = useContext(ContextForGalleryCollectionMain);

  return (
    <ArchiveExplorerBreadcrumbs>
      <ArchiveExplorerBreadcrumbItem
        href={archiveMap.archive.explorer.link}
        active={false}
      >
        Gallerys
      </ArchiveExplorerBreadcrumbItem>
      <ArchiveExplorerBreadcrumbDivider />
      <ArchiveExplorerBreadcrumbItem
        active={false}
        href={archiveMap.archive.explorer.gallery.id.link(
          galleryMainController.state.objId,
        )}
      >
        {galleryMainController.state.obj.title}
      </ArchiveExplorerBreadcrumbItem>
      <ArchiveExplorerBreadcrumbDivider />
      <ArchiveExplorerBreadcrumbItem
        active={true}
        href={archiveMap.archive.explorer.collection.id.link(
          collectionMainController.state.objId,
        )}
      >
        {collectionMainController.state.obj.title}
      </ArchiveExplorerBreadcrumbItem>
    </ArchiveExplorerBreadcrumbs>
  );
}
