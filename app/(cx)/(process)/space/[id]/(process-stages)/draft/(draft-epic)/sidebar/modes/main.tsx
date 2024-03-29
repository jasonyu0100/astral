import { useContext } from 'react';
import { DraftSidebarContext, SidebarMode } from '../main';
import { CollectionsInterface } from './(collections-sidebar-epic)/main';
import { SidebarGallerysInterface } from './(gallerys-sidebar-epic)/main';
import { ResourcesInterface } from './(resources-sidebar-epic)/main';

export function DraftSidebarBody() {
  const { sidebarMode } = useContext(DraftSidebarContext);
  return (
    <div
      className='flex flex-col overflow-auto pr-[2rem]'
      style={{ height: '100%' }}
    >
      {sidebarMode === SidebarMode.Gallerys && <SidebarGallerysInterface />}
      {sidebarMode === SidebarMode.Collections && <CollectionsInterface />}
      {sidebarMode === SidebarMode.Resources && <ResourcesInterface />}
    </div>
  );
}
