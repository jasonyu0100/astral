import { Glass } from '@/(common)/layer/main';
import { backgroundStyles, containerStyles } from '@/(common)/styles/data';
import { SidebarBody } from './modes/main';
import { ResourcesInterface } from './modes/resources-view/main';
import { CollectionsInterface } from './modes/collections-view/main';
import { DraftSidebarContext, SidebarMode } from './main';
import { useContext } from 'react';
import { DraftSidebarHeader } from './header/main';
import { SidebarGallerysInterface } from './modes/gallerys-view/main';

export function DraftSidebarView() {
  const { sidebarMode } = useContext(DraftSidebarContext);

  return (
    <Glass
      displayName={DraftSidebarView.name}
      sizeStyle='max-w-[500px] min-w-[250px] w-1/4 h-full'
      className={`${containerStyles['col']} space-y-[1rem] px-[1rem]`}
      backgroundStyle={backgroundStyles['glass-10']}
    >
      <DraftSidebarHeader />
      <SidebarBody>
        {sidebarMode === SidebarMode.Gallerys && <SidebarGallerysInterface />}
        {sidebarMode === SidebarMode.Collections && <CollectionsInterface />}
        {sidebarMode === SidebarMode.Resources && <ResourcesInterface />}
      </SidebarBody>
    </Glass>
  );
}
