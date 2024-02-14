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
        active={sidebarMode === SidebarMode.Gallerys}
        onClick={() => sidebarHandler.goToHomeView()}
      >
        Home
      </BreadcrumbsLink>
      {(sidebarMode === SidebarMode.Collections ||
        sidebarMode === SidebarMode.Resources) && (
        <>
          <BreadcrumbsDivider />
          <BreadcrumbsLink
            active={sidebarMode === SidebarMode.Collections}
            onClick={() => sidebarHandler.goToGalleryView()}
          >
            {gallery?.title}
          </BreadcrumbsLink>
        </>
      )}
      {sidebarMode === SidebarMode.Resources && (
        <>
          <BreadcrumbsDivider />
          <BreadcrumbsLink
            active={sidebarMode === SidebarMode.Resources}
            onClick={() => sidebarHandler.goToCollectionView()}
          >
            {collection?.title}
          </BreadcrumbsLink>
        </>
      )}
    </SidebarBreadcrumbs>
  );
}
