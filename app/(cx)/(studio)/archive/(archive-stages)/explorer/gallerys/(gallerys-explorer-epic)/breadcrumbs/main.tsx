import { archiveMap } from '@/(cx)/(studio)/archive/map';
import { CollectionBreadcrumbItem } from '../../../(common)/breadcrumb/item/main';
import { CollectionBreadcrumbs } from '../../../(common)/breadcrumb/main';
import { CollectionBreadcrumbDivider } from '../../../(common)/breadcrumb/divider/main';

export function GallerysBreadcrumbs() {
  return (
    <CollectionBreadcrumbs>
      <CollectionBreadcrumbItem href={archiveMap.archive.link} active={true}>
        Home
      </CollectionBreadcrumbItem>
      <CollectionBreadcrumbDivider />
    </CollectionBreadcrumbs>
  );
}
