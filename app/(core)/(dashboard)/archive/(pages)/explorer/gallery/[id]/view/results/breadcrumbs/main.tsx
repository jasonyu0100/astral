import { archiveMap } from '@/(core)/(dashboard)/archive/map';
import { ContextForGalleryMain } from '@/(server)/(controller)/gallery/main';
import { useContext } from 'react';
import { ArchiveExplorerBreadcrumbDivider } from '../../../../../(common)/breadcrumb/divider/main';
import { ArchiveExplorerBreadcrumbItem } from '../../../../../(common)/breadcrumb/item/main';
import { ArchiveExplorerBreadcrumbs } from '../../../../../(common)/breadcrumb/main';

export function ExplorerGalleryCollectionsBreadcrumbs() {
  const galleryMainController = useContext(ContextForGalleryMain);

  return (
    <ArchiveExplorerBreadcrumbs>
      <ArchiveExplorerBreadcrumbItem
        href={archiveMap.archive.explorer.link}
        active={false}
      >
        Home
      </ArchiveExplorerBreadcrumbItem>
      <ArchiveExplorerBreadcrumbDivider />
      <ArchiveExplorerBreadcrumbItem
        active={true}
        href={archiveMap.archive.explorer.gallery.id.link(
          galleryMainController.state.objId,
        )}
      >
        {galleryMainController.state.obj.title}
      </ArchiveExplorerBreadcrumbItem>
    </ArchiveExplorerBreadcrumbs>
  );
}
