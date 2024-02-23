import { archiveMap } from '@/(cx)/(studio)/archive/map';
import { CollectionBreadcrumbDivider } from '../../../../(common)/breadcrumb/divider/main';
import { CollectionBreadcrumbItem } from '../../../../(common)/breadcrumb/item/main';
import { CollectionBreadcrumbs } from '../../../../(common)/breadcrumb/main';
import { useContext } from 'react';
import { ExploreGalleryContext } from '../../page';

export function CollectionsBreadcrumbs() {
  const { gallery } = useContext(ExploreGalleryContext);

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
