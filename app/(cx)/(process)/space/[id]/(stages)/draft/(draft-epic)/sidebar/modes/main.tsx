import { useContext } from 'react';
import { DraftSidebarContext, SidebarMode } from '../main';
import { CollectionsInterface } from './collections-view/main';
import { SidebarGallerysInterface } from './gallerys-view/main';
import { ResourcesInterface } from './resources-view/main';

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
