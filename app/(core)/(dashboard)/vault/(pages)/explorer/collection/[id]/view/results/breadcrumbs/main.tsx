import { vaultMap } from '@/(core)/(dashboard)/vault/map';
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
        href={vaultMap.vault.explorer.link}
        active={false}
      >
        Home
      </ArchiveExplorerBreadcrumbItem>
      <ArchiveExplorerBreadcrumbDivider />
      <ArchiveExplorerBreadcrumbItem
        active={false}
        href={vaultMap.vault.explorer.gallery.id.link(
          galleryMainController.state.objId,
        )}
      >
        {galleryMainController.state.obj.title}
      </ArchiveExplorerBreadcrumbItem>
      <ArchiveExplorerBreadcrumbDivider />
      <ArchiveExplorerBreadcrumbItem
        active={true}
        href={vaultMap.vault.explorer.collection.id.link(
          collectionMainController.state.objId,
        )}
      >
        {collectionMainController.state.obj.title}
      </ArchiveExplorerBreadcrumbItem>
    </ArchiveExplorerBreadcrumbs>
  );
}
