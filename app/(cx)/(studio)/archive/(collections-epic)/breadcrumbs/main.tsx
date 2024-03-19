import { archiveMap } from '@/(cx)/(studio)/archive/map';
import { CollectionBreadcrumbDivider } from '../../(archive-stages)/explorer/(common)/breadcrumb/divider/main';
import { CollectionBreadcrumbItem } from '../../(archive-stages)/explorer/(common)/breadcrumb/item/main';
import { CollectionBreadcrumbs } from '../../(archive-stages)/explorer/(common)/breadcrumb/main';
import { useContext } from 'react';
import { GalleryContext } from '@/(logic)/internal/model/gallery/main';

export function CollectionsBreadcrumbs() {
  const gallery = useContext(GalleryContext);

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
        active={true}
        href={archiveMap.archive.explorer.collections.id.link(gallery.id)}
      >
        {gallery.title}
      </CollectionBreadcrumbItem>
    </CollectionBreadcrumbs>
  );
}
