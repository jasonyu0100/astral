import { ContextForIdeaSceneList } from '@/architecture/controller/scene/list';
import { useContext } from 'react';
import { ContextForSpacesIdeas } from '../../../../controller/main';
import { SpacesIdeasInterface } from './map/interface/main';
import { SpacesIdeasSceneEmpty } from './map/scene/empty/main';
import { SpacesIdeasScene } from './map/scene/main';

export function SpacesIdeasContents() {
  const {
    state: { screenshotRef, hideUI },
  } = useContext(ContextForSpacesIdeas);
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
            <SpacesIdeasScene />
            {!hideUI && <SpacesIdeasInterface />}
          </>
        ) : (
          <>
            <SpacesIdeasSceneEmpty />
          </>
        )}
      </>
    </div>
  );
}
