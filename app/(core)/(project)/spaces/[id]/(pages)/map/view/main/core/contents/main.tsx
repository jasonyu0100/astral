import { useContext } from 'react';
import {
  ContextForSpacesMap,
  SpacesMapDirectoryMode,
} from '../../../../controller/main';
import { SpacesMapHistory } from './history/main';
import { SpacesMapBack } from './map/back/main';
import { SpacesMapChat } from './map/chat/main';
import { SpacesMapPalette } from './map/palette/main';
import { SpacesMapScene } from './map/scene/main';

export function SpacesMapContents() {
  const {
    state: { directoryMode: directoryMode },
  } = useContext(ContextForSpacesMap);

  return (
    <div
      style={{ width: '100%', height: '100%' }}
      className='relative flex flex-col items-center'
    >
      {directoryMode === SpacesMapDirectoryMode.DIRECTORY ? (
        <>
          <SpacesMapHistory />
        </>
      ) : (
        <>
          {/* <SpacesMapStatus /> */}
          <SpacesMapBack />
          <SpacesMapScene />
          <SpacesMapPalette />
          <SpacesMapChat />
          {/* <SpacesMapNavigation /> */}
        </>
      )}
    </div>
  );
}
