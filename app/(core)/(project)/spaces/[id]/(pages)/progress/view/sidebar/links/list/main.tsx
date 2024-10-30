import { useContext } from 'react';
import {
  ContextForSpacesProgress,
  SpacesProgressSidebarMode,
} from '../../../../controller/main';
import { SpacesProgressSidebarChapters } from '../../chapters/main';
import { SpacesProgressSidebarLinksList } from '../main';

export function SpacesProgressSidebarList() {
  const {
    state: { sidebarMode },
  } = useContext(ContextForSpacesProgress);

  return (
    <div
      className='flex flex-col overflow-auto'
      style={{ height: '100%', width: '100%' }}
    >
      <div className='flex flex-col space-y-[1rem]'>
        {sidebarMode === SpacesProgressSidebarMode.CHAPTERS && (
          <SpacesProgressSidebarChapters />
        )}
        {sidebarMode === SpacesProgressSidebarMode.NOTES && (
          <SpacesProgressSidebarLinksList />
        )}
      </div>
    </div>
  );
}
