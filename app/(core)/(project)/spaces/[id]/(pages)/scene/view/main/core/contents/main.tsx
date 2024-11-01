import { ImageBackground } from '@/components/background/img/main';
import { AbsoluteHolder } from '@/components/holder/main';
import { ContextForIdeaSceneList } from '@/server/controller/scene/list';
import { ContextForSpaceChapterList } from '@/server/controller/space/chapter/list';
import { useContext } from 'react';
import { ContextForSpacesScene } from '../../../../controller/main';
import { SpacesSceneInterface } from './map/interface/main';
import { SpacesSceneSceneEmpty } from './map/scene/empty/main';
import { SpacesSceneScene } from './map/scene/main';

export function SpacesSceneContents() {
  const {
    state: { screenshotRef, hideUI },
  } = useContext(ContextForSpacesScene);
  const sceneListController = useContext(ContextForIdeaSceneList);
  const chapterListController = useContext(ContextForSpaceChapterList);

  return (
    <div
      ref={screenshotRef} // Attach the ref for screenshot
      style={{ width: '100%', height: '100%' }}
      className='relative flex flex-col items-center'
    >
      <ImageBackground
        src={chapterListController.state.currentObj?.bg}
        // active
      />
      <AbsoluteHolder>
        <>
          {sceneListController.state.objs.length > 0 ? (
            <>
              <SpacesSceneScene />
              {!hideUI && <SpacesSceneInterface />}
            </>
          ) : (
            <>
              <SpacesSceneSceneEmpty />
            </>
          )}
        </>
      </AbsoluteHolder>
    </div>
  );
}
