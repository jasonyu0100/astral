import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { AstralCameraIcon } from '@/icons/camera/main';
import { ImageBackground } from '@/ui/background/img/main';
import { AbsoluteHolder } from '@/ui/holder/main';
import html2canvas from 'html2canvas'; // Import html2canvas
import { useContext, useRef, useState } from 'react';
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
import { SpacesMapStatus } from './map/status/main';

export function SpacesMapContents() {
  const {
    state: { directoryMode },
  } = useContext(ContextForSpacesMap);
  const chapterListController = useContext(ContextForSpaceChapterList);

  // Add ref for capturing the screenshot of the container
  const screenshotRef = useRef<HTMLDivElement>(null);

  // State to control the visibility of UI components
  const [hideUI, setHideUI] = useState(false);

  // Function to handle screenshot
  const takeScreenshot = async () => {
    // Hide UI components before taking the screenshot
    setHideUI(true);

    setTimeout(async () => {
      if (screenshotRef.current) {
        try {
          const canvas = await html2canvas(screenshotRef.current, {
            useCORS: true, // To capture cross-origin images
          });
          const imgData = canvas.toDataURL('image/png'); // Convert to image

          // Create an anchor element to download the screenshot
          const link = document.createElement('a');
          link.href = imgData;
          link.download = 'screenshot.png';
          link.click(); // Trigger download
        } catch (error) {
          console.error('Screenshot capture failed:', error);
        } finally {
          // Show UI components again after the screenshot
          setHideUI(false);
        }
      }
    }, 500);
  };

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
                <SpacesMapStatus />
                <SpacesMapPalette />
                <SpacesMapBack />
                <SpacesMapChat />
                <SpacesMapNavigationUp />
                <SpacesMapNavigationDown />
                <div className='absolute right-[2rem] top-[0rem] z-30 flex h-full w-[4rem] flex-col items-center justify-center'>
                  <AstralCameraIcon onClick={takeScreenshot} />
                </div>
              </>
            )}
          </>
        )}
      </AbsoluteHolder>
    </div>
  );
}
