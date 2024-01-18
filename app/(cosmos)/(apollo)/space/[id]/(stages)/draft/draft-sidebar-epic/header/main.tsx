import { useContext } from 'react';
import { DraftSidebarContext, SidebarMode } from '../main';
import { BreadcrumbsLink } from './breadcrumbs/breadcrumb/main';
import { BreadcrumbsDivider } from './breadcrumbs/divider/main';
import { SidebarBreadcrumbs } from './breadcrumbs/main';

export function DraftSidebarHeader() {
  const { sidebarMode, gallery, collection, sidebarHandler } =
    useContext(DraftSidebarContext);
  return (
    <SidebarBreadcrumbs>
      <BreadcrumbsLink
        active={sidebarMode === SidebarMode.Home}
        onClick={() => sidebarHandler.goToHomeView()}
      >
        Home
      </BreadcrumbsLink>
      {(sidebarMode === SidebarMode.Gallery ||
        sidebarMode === SidebarMode.Collection) && (
        <>
          <BreadcrumbsDivider />
          <BreadcrumbsLink
            active={sidebarMode === SidebarMode.Gallery}
            onClick={() => sidebarHandler.goToGalleryView()}
          >
            {gallery?.title}
          </BreadcrumbsLink>
        </>
      )}
      {sidebarMode === SidebarMode.Collection && (
        <>
          <BreadcrumbsDivider />
          <BreadcrumbsLink
            active={sidebarMode === SidebarMode.Collection}
            onClick={() => sidebarHandler.goToCollectionView()}
          >
            {collection?.name}
          </BreadcrumbsLink>
        </>
      )}
    </SidebarBreadcrumbs>
  );
}
