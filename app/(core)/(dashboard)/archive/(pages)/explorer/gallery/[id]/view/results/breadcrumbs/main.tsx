import { archiveMap } from '@/(core)/(dashboard)/archive/map';
import { CollectionBreadcrumbDivider } from '../../../../../(common)/breadcrumb/divider/main';
import { CollectionBreadcrumbItem } from '../../../../../(common)/breadcrumb/item/main';
import { CollectionBreadcrumbs } from '../../../../../(common)/breadcrumb/main';
import { useContext } from 'react';
import { ContextForGalleryObj } from '@/(server)/(model)/gallery/main';

export function CollectionsBreadcrumbs() {
  const gallery = useContext(ContextForGalleryObj);

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
        href={archiveMap.archive.explorer.gallery.id.link(gallery.id)}
      >
        {gallery.title}
      </CollectionBreadcrumbItem>
    </CollectionBreadcrumbs>
  );
}
