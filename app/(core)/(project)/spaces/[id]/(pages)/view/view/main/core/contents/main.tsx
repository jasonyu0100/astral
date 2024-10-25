import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { ImageBackground } from '@/components/background/img/main';
import { AbsoluteHolder } from '@/components/holder/main';
import { useContext } from 'react';
import {
  ContextForSpacesView,
  SpacesViewDirectoryMode,
} from '../../../../controller/main';
import { SpacesViewHistory } from './history/main';
import { SpacesViewBack } from './map/palette/back/main';
import { SpacesViewChat } from './map/palette/chat/main';
import { SpacesViewPalette } from './map/palette/main';
import { SpacesViewScene } from './map/scene/main';
import { SpacesViewScreenshot } from './map/screenshot/main';

export function SpacesViewContents() {
  const {
    state: { directoryMode, screenshotRef, hideUI },
  } = useContext(ContextForSpacesView);
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
        {directoryMode === SpacesViewDirectoryMode.DIRECTORY ? (
          <SpacesViewHistory />
        ) : (
          <>
            <SpacesViewScene />
            {/* Conditionally hide UI components based on `hideUI` state */}
            {!hideUI && (
              <>
                {/* <SpacesViewStatus /> */}
                <SpacesViewPalette />
                <SpacesViewBack />
                <SpacesViewChat />
                <SpacesViewScreenshot />
              </>
            )}
          </>
        )}
      </AbsoluteHolder>
    </div>
  );
}
