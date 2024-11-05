import { ContextForIdeaSceneList } from '@/architecture/controller/scene/list';
import { useContext } from 'react';
import { ContextForSpacesSpace } from '../../../../controller/main';
import { SpacesSpaceInterface } from './map/interface/main';
import { SpacesSpaceSceneEmpty } from './map/scene/empty/main';
import { SpacesSpaceScene } from './map/scene/main';

export function SpacesSpaceContents() {
  const {
    state: { screenshotRef, hideUI },
  } = useContext(ContextForSpacesSpace);
  const sceneListController = useContext(ContextForIdeaSceneList);

  return (
    <div
      ref={screenshotRef} // Attach the ref for screenshot
      style={{ width: '100%', height: '100%' }}
      className='relative flex flex-col items-center'
    >
      <>
        {sceneListController.state.objs.length > 0 ? (
          <>
            <SpacesSpaceScene />
            {!hideUI && <SpacesSpaceInterface />}
          </>
        ) : (
          <>
            <SpacesSpaceSceneEmpty />
          </>
        )}
      </>
    </div>
  );
}
