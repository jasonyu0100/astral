import { vaultMap } from '@/(core)/(dashboard)/vault/map';
import { ContextForGalleryMain } from '@/server/controller/gallery/main';
import { useContext } from 'react';
import { VaultFinderBreadcrumbDivider } from '../../../../../common/breadcrumb/divider/main';
import { VaultFinderBreadcrumbItem } from '../../../../../common/breadcrumb/item/main';
import { VaultFinderBreadcrumbs } from '../../../../../common/breadcrumb/main';

export function FinderGalleryCollectionsBreadcrumbs() {
  const galleryMainController = useContext(ContextForGalleryMain);

  return (
    <VaultFinderBreadcrumbs>
      <VaultFinderBreadcrumbItem
        href={vaultMap.vault.finder.link}
        active={false}
      >
        Home
      </VaultFinderBreadcrumbItem>
      <VaultFinderBreadcrumbDivider />
      <VaultFinderBreadcrumbItem
        active={true}
        href={vaultMap.vault.finder.gallery.id.link(
          galleryMainController.state.objId,
        )}
      >
        {galleryMainController.state.obj?.title || 'Untitled'}
      </VaultFinderBreadcrumbItem>
    </VaultFinderBreadcrumbs>
  );
}
