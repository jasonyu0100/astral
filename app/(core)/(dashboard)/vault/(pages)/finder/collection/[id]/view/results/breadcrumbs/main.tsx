import { vaultMap } from '@/(core)/(dashboard)/vault/map';
import { ContextForGalleryCollectionMain } from '@/(server)/controller/gallery/collection/main';
import { ContextForGalleryMain } from '@/(server)/controller/gallery/main';
import { useContext } from 'react';
import { VaultFinderBreadcrumbDivider } from '../../../../../common/breadcrumb/divider/main';
import { VaultFinderBreadcrumbItem } from '../../../../../common/breadcrumb/item/main';
import { VaultFinderBreadcrumbs } from '../../../../../common/breadcrumb/main';

export function FinderCollectionResourcesBreadcrumbs() {
  const galleryMainController = useContext(ContextForGalleryMain);
  const collectionMainController = useContext(ContextForGalleryCollectionMain);

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
        active={false}
        href={vaultMap.vault.finder.gallery.id.link(
          galleryMainController.state.objId,
        )}
      >
        {galleryMainController.state.obj.title}
      </VaultFinderBreadcrumbItem>
      <VaultFinderBreadcrumbDivider />
      <VaultFinderBreadcrumbItem
        active={true}
        href={vaultMap.vault.finder.collection.id.link(
          collectionMainController.state.objId,
        )}
      >
        {collectionMainController.state.obj.title}
      </VaultFinderBreadcrumbItem>
    </VaultFinderBreadcrumbs>
  );
}
