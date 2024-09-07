import { useContext } from 'react';
import {
  ContextForSpaceMap,
  SpaceMapDirectoryMode,
} from '../../../../controller/map/main';
import { SpaceMapDirectory } from './directory/main';
import { SpaceMapBack } from './map/back/main';
import { SpaceMapChat } from './map/chat/main';
import { SpaceMapPalette } from './map/palette/main';
import { SpaceMapScene } from './map/scene/main';
import { SpaceMapStatus } from './map/status/main';

export function SpaceMapContents() {
  const {
    state: { directoryMode: directoryMode },
  } = useContext(ContextForSpaceMap);

  return (
    <div
      style={{ width: '100%', height: '100%' }}
      className='relative flex flex-col items-center'
    >
      {directoryMode === SpaceMapDirectoryMode.DIRECTORY ? (
        <>
          <SpaceMapDirectory />
        </>
      ) : (
        <>
          <SpaceMapStatus />
          <SpaceMapBack />
          <SpaceMapScene />
          <SpaceMapPalette />
          <SpaceMapChat />
          {/* <SpaceMapNavigation /> */}
        </>
      )}
    </div>
  );
}
