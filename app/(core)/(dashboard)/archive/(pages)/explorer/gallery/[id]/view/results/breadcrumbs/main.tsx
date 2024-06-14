import { archiveMap } from '@/(core)/(dashboard)/archive/map';
import { CollectionBreadcrumbDivider } from '../../../../../(common)/breadcrumb/divider/main';
import { CollectionBreadcrumbItem } from '../../../../../(common)/breadcrumb/item/main';
import { CollectionBreadcrumbs } from '../../../../../(common)/breadcrumb/main';
import { useContext } from 'react';
import { ContextForGalleryObj } from '@/(server)/(model)/gallery/main';
import { ContextForGalleryMain } from '@/(server)/(controller)/gallery/main';

export function CollectionsBreadcrumbs() {
  const galleryMainController = useContext(ContextForGalleryMain);

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
        href={archiveMap.archive.explorer.gallery.id.link(
          galleryMainController.state.objId,
        )}
      >
        {galleryMainController.state.obj.title}
      </CollectionBreadcrumbItem>
    </CollectionBreadcrumbs>
  );
}
