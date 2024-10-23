import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
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
import { SpacesMapScreenshot } from './map/right/screenshot/main';
import { SpacesMapScene } from './map/scene/main';

export function SpacesMapContents() {
  const {
    state: { directoryMode, screenshotRef, hideUI },
  } = useContext(ContextForSpacesMap);
  const chapterListController = useContext(ContextForSpaceChapterList);

  return (
    <div
      ref={screenshotRef} // Attach the ref for screenshot
      style={{ width: '100%', height: '100%' }}
      className='relative flex flex-col items-center'
    >
      <ImageBackground
        src={chapterListController.state.currentObj?.bg}
        active
      />
      <AbsoluteHolder>
        {directoryMode === SpacesMapDirectoryMode.DIRECTORY ? (
          <SpacesMapHistory />
        ) : (
          <>
            <SpacesMapScene />
            {/* Conditionally hide UI components based on `hideUI` state */}
            {!hideUI && (
              <>
                {/* <SpacesMapStatus /> */}
                <SpacesMapPalette />
                <SpacesMapBack />
                <SpacesMapChat />
                {/* <SpacesMapNavigationUp /> */}
                {/* <SpacesMapNavigationDown /> */}
                <SpacesMapScreenshot />
              </>
            )}
          </>
        )}
      </AbsoluteHolder>
    </div>
  );
}
