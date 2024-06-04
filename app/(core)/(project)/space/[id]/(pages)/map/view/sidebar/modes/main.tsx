import { useContext } from 'react';
import { MapSidebarContext, SidebarMode } from '../main';
import { CollectionsInterface } from './(collections)/main';
import { SidebarGallerysInterface } from './(galllerys)/main';
import { ResourcesInterface } from './(resources)/main';

export function MapSidebarBody() {
  const { sidebarMode } = useContext(MapSidebarContext);
  return (
    <div
      className='flex flex-col h-full w-full pt-[1rem]'
    >
      {sidebarMode === SidebarMode.Gallerys && <SidebarGallerysInterface />}
      {sidebarMode === SidebarMode.Collections && <CollectionsInterface />}
      {sidebarMode === SidebarMode.Resources && <ResourcesInterface />}
    </div>
  );
}
