import { archiveMap } from '@/(core)/(dashboard)/archive/map';
import { CollectionBreadcrumbDivider } from '../../../../(common)/breadcrumb/divider/main';
import { CollectionBreadcrumbItem } from '../../../../(common)/breadcrumb/item/main';
import { CollectionBreadcrumbs } from '../../../../(common)/breadcrumb/main';
import { useContext } from 'react';
import { CollectionContext } from '@/(model)/gallery/collection/main';
import { GalleryContext } from '@/(model)/gallery/main';

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
      <CollectionBreadcrumbDivider />
    </CollectionBreadcrumbs>
  );
}
