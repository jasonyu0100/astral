import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { ImageBackground } from '@/components/background/img/main';
import { AbsoluteHolder } from '@/components/holder/main';
import { useContext } from 'react';
import { ContextForSpacesView } from '../../../../controller/main';
import { SpacesViewPalette } from './map/palette/main';
import { SpacesViewScene } from './map/scene/main';
import { SpacesViewScreenshot } from './map/screenshot/main';

export function SpacesViewContents() {
  const {
    state: { screenshotRef, hideUI },
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
        <SpacesViewScene />
        {/* Conditionally hide UI components based on `hideUI` state */}
        {!hideUI && (
          <>
            {/* <SpacesViewStatus /> */}
            <SpacesViewPalette />
            <SpacesViewScreenshot />
          </>
        )}
      </AbsoluteHolder>
    </div>
  );
}
