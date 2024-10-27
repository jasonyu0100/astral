import { ImageBackground } from '@/components/background/img/main';
import { AbsoluteHolder } from '@/components/holder/main';
import { ContextForSpaceChapterList } from '@/server/controller/space/chapter/list';
import { useContext } from 'react';
import { ContextForSpacesScene } from '../../../../controller/main';
import { SpacesSceneChat } from './map/chat/main';
import { SpacesScenePalette } from './map/palette/main';
import { SpacesSceneSave } from './map/save/main';
import { SpacesSceneScene } from './map/scene/main';

export function SpacesSceneContents() {
  const {
    state: { screenshotRef, hideUI },
  } = useContext(ContextForSpacesScene);
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
        <SpacesSceneScene />
        {/* Conditionally hide UI components based on `hideUI` state */}
        {!hideUI && (
          <>
            {/* <SpacesSceneStatus /> */}
            <SpacesScenePalette />
            <SpacesSceneSave />
            <SpacesSceneChat />
          </>
        )}
      </AbsoluteHolder>
    </div>
  );
}
