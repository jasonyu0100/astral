import { brandMap } from '@/(core)/(dashboard)/brand/map';
import { ContextForGalleryCollectionMain } from '@/architecture/controller/gallery/collection/main';
import { ContextForGalleryMain } from '@/architecture/controller/gallery/main';
import { useContext } from 'react';
import { BrandManageBreadcrumbDivider } from '../../../../../common/breadcrumb/divider/main';
import { BrandManageBreadcrumbItem } from '../../../../../common/breadcrumb/item/main';
import { BrandManageBreadcrumbs } from '../../../../../common/breadcrumb/main';

export function BrandManageCollectionResourcesBreadcrumbs() {
  const galleryMainController = useContext(ContextForGalleryMain);
  const collectionMainController = useContext(ContextForGalleryCollectionMain);

  return (
    <BrandManageBreadcrumbs>
      <BrandManageBreadcrumbItem
        href={brandMap.drive.manage.link}
        active={false}
      >
        Home
      </BrandManageBreadcrumbItem>
      <BrandManageBreadcrumbDivider />
      <BrandManageBreadcrumbItem
        active={false}
        href={brandMap.drive.manage.gallery.id.link(
          galleryMainController.state.objId,
        )}
      >
        {galleryMainController.state.obj?.title || 'Untitled'}
      </BrandManageBreadcrumbItem>
      <BrandManageBreadcrumbDivider />
      <BrandManageBreadcrumbItem
        active={true}
        href={brandMap.drive.manage.collection.id.link(
          collectionMainController.state.objId,
        )}
      >
        {collectionMainController.state.obj?.title || 'Untitled'}
      </BrandManageBreadcrumbItem>
    </BrandManageBreadcrumbs>
  );
}
