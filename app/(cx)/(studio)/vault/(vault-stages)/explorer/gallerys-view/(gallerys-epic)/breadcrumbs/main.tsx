import { vaultMap } from '@/(cx)/(studio)/vault/map';
import { CollectionBreadcrumbItem } from '../../../(common)/breadcrumb/item/main';
import { CollectionBreadcrumbs } from '../../../(common)/breadcrumb/main';

export function GallerysBreadcrumbs() {
  return (
    <CollectionBreadcrumbs>
      <CollectionBreadcrumbItem href={vaultMap.vault.link} active={true}>
        Home
      </CollectionBreadcrumbItem>
    </CollectionBreadcrumbs>
  );
}
