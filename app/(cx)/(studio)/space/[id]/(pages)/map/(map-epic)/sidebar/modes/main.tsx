import { useContext } from 'react';
import { MapSidebarContext, SidebarMode } from '../main';
import { CollectionsInterface } from './(collections-sidebar-epic)/main';
import { SidebarGallerysInterface } from './(gallerys-sidebar-epic)/main';
import { ResourcesInterface } from './(resources-sidebar-epic)/main';

export function MapSidebarBody() {
  const { sidebarMode } = useContext(MapSidebarContext);
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
