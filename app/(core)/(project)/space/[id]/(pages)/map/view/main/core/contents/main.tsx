import { useContext } from 'react';
import {
  ContextForSpaceMap,
  SpaceMapDirectoryMode,
} from '../../../../controller/map/main';
import { SpaceMapHistory } from './history/main';
import { SpaceMapBack } from './map/back/main';
import { SpaceMapChat } from './map/chat/main';
import { SpaceMapPalette } from './map/palette/main';
import { SpaceMapScene } from './map/scene/main';

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
          <SpaceMapHistory />
        </>
      ) : (
        <>
          {/* <SpaceMapStatus /> */}
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
