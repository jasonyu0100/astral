import { archiveMap } from '@/(cx)/(studio)/archive/map';
import { CollectionBreadcrumbDivider } from '../../(archive-stages)/explorer/(common)/breadcrumb/divider/main';
import { CollectionBreadcrumbItem } from '../../(archive-stages)/explorer/(common)/breadcrumb/item/main';
import { CollectionBreadcrumbs } from '../../(archive-stages)/explorer/(common)/breadcrumb/main';
import { useContext } from 'react';
import { ExploreCollectionContext } from '../../(archive-stages)/explorer/resources-view/[id]/page';

export function ResourcesBreadcrumbs() {
  const { gallery, collection } = useContext(
    ExploreCollectionContext,
  );
  
  return (
    <CollectionBreadcrumbs>
      <CollectionBreadcrumbItem
        href={archiveMap.archive.explorer.link}
        active={false}
      >
        Home
      </CollectionBreadcrumbItem>
      <CollectionBreadcrumbDivider />
      <CollectionBreadcrumbItem
        active={false}
        href={archiveMap.archive.explorer.collections.id.link(gallery.id)}
      >
        {gallery.title}
      </CollectionBreadcrumbItem>
      <CollectionBreadcrumbDivider />
      <CollectionBreadcrumbItem
        active={true}
        href={archiveMap.archive.explorer.resources.id.link(collection.id)}
      >
        {collection.title}
      </CollectionBreadcrumbItem>
    </CollectionBreadcrumbs>
  );
}
