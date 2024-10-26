import { useContext } from 'react';
import {
  ContextForSpacesBoard,
  SpacesBoardSidebarMode,
} from '../../../../controller/main';
import { SpacesBoardSidebarChapters } from '../../chapters/main';
import { SpacesBoardSidebarLinksList } from '../main';

export function SpacesBoardSidebarList() {
  const {
    state: { sidebarMode },
  } = useContext(ContextForSpacesBoard);

  return (
    <div
      className='flex flex-col overflow-auto'
      style={{ height: '100%', width: '100%' }}
    >
      <div className='flex flex-col space-y-[1rem]'>
        {sidebarMode === SpacesBoardSidebarMode.CHAPTERS && (
          <SpacesBoardSidebarChapters />
        )}
        {sidebarMode === SpacesBoardSidebarMode.NOTES && (
          <SpacesBoardSidebarLinksList />
        )}
      </div>
    </div>
  );
}
