import { vaultMap } from '@/(verses)/(voyager)/vault/map';
import { CollectionBreadcrumbDivider } from '../../../../(common)/breadcrumb/divider/main';
import { CollectionBreadcrumbItem } from '../../../../(common)/breadcrumb/item/main';
import { CollectionBreadcrumbs } from '../../../../(common)/breadcrumb/main';
import { useContext } from 'react';
import { ExploreCollectionContext } from '../../page';

export function ResourcesBreadcrumbs() {
  const { gallery, collection } = useContext(
    ExploreCollectionContext,
  );
  
  return (
    <CollectionBreadcrumbs>
      <CollectionBreadcrumbItem
        href={vaultMap.vault.explorer.link}
        active={false}
      >
        Home
      </CollectionBreadcrumbItem>
      <CollectionBreadcrumbDivider />
      <CollectionBreadcrumbItem
        active={false}
        href={vaultMap.vault.explorer.collections.id.link(gallery.id)}
      >
        {gallery.title}
      </CollectionBreadcrumbItem>
      <CollectionBreadcrumbDivider />
      <CollectionBreadcrumbItem
        active={true}
        href={vaultMap.vault.explorer.resources.id.link(collection.id)}
      >
        {collection.title}
      </CollectionBreadcrumbItem>
    </CollectionBreadcrumbs>
  );
}
