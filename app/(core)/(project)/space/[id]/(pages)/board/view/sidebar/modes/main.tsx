import { useContext } from 'react';
import { BoardSidebarContext, SidebarMode } from '../main';
import { CollectionsInterface } from './(collections)/main';
import { SidebarGallerysInterface } from './(galllerys)/main';
import { ResourcesInterface } from './(resources)/main';

export function BoardSidebarBody() {
  const { sidebarMode } = useContext(BoardSidebarContext);
  return (
    <div className='flex h-full w-full flex-col pt-[1rem]'>
      {sidebarMode === SidebarMode.Gallerys && <SidebarGallerysInterface />}
      {sidebarMode === SidebarMode.Collections && <CollectionsInterface />}
      {sidebarMode === SidebarMode.Resources && <ResourcesInterface />}
    </div>
  );
}
