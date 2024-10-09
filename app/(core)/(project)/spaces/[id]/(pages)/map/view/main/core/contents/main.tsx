import { ImageBackground } from '@/ui/background/img/main';
import { AbsoluteHolder } from '@/ui/holder/main';
import { useContext } from 'react';
import {
  ContextForSpacesMap,
  SpacesMapDirectoryMode,
} from '../../../../controller/main';
import { SpacesMapHistory } from './history/main';
import { SpacesMapBack } from './map/left/back/main';
import { SpacesMapChat } from './map/left/chat/main';
import { SpacesMapPalette } from './map/left/palette/main';
import { SpacesMapNavigationDown } from './map/right/down/main';
import { SpacesMapNavigationUp } from './map/right/up/main';
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
      <ImageBackground />
      <AbsoluteHolder>
        {directoryMode === SpacesMapDirectoryMode.DIRECTORY ? (
          <>
            <SpacesMapHistory />
          </>
        ) : (
          <>
            {/* <SpacesMapStatus /> */}
            <SpacesMapScene />
            <SpacesMapPalette />
            <SpacesMapBack />
            <SpacesMapChat />
            <SpacesMapNavigationUp />
            <SpacesMapNavigationDown />
          </>
        )}
      </AbsoluteHolder>
    </div>
  );
}
