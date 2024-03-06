import { archiveMap } from '@/(cx)/(studio)/archive/map';
import { CollectionBreadcrumbDivider } from '../../(archive-stages)/explorer/(common)/breadcrumb/divider/main';
import { CollectionBreadcrumbItem } from '../../(archive-stages)/explorer/(common)/breadcrumb/item/main';
import { CollectionBreadcrumbs } from '../../(archive-stages)/explorer/(common)/breadcrumb/main';
import { useContext } from 'react';
import { CollectionContext } from '@/(logic)/internal/data/infra/model/gallery/collection/main';
import { GalleryContext } from '@/(logic)/internal/data/infra/model/gallery/main';

export function ResourcesBreadcrumbs() {
  const gallery = useContext(GalleryContext);
  const collection = useContext(CollectionContext);
  
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
