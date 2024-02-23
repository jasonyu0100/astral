import { archiveMap } from '@/(cx)/(studio)/archive/map';
import { CollectionBreadcrumbItem } from '../../(archive-stages)/explorer/(common)/breadcrumb/item/main';
import { CollectionBreadcrumbs } from '../../(archive-stages)/explorer/(common)/breadcrumb/main';

export function GallerysBreadcrumbs() {
  return (
    <CollectionBreadcrumbs>
      <CollectionBreadcrumbItem href={archiveMap.archive.link} active={true}>
        Home
      </CollectionBreadcrumbItem>
    </CollectionBreadcrumbs>
  );
}
