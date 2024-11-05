import { ContextForIdeaSceneList } from '@/architecture/controller/scene/list';
import { useContext } from 'react';
import { ContextForSpaceSpace } from '../../../../controller/main';
import { SpaceSpaceInterface } from './map/interface/main';
import { SpaceSpaceSceneEmpty } from './map/scene/empty/main';
import { SpaceSpaceScene } from './map/scene/main';

export function SpaceSpaceContents() {
  const {
    state: { screenshotRef, hideUI },
  } = useContext(ContextForSpaceSpace);
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
            <SpaceSpaceScene />
            {!hideUI && <SpaceSpaceInterface />}
          </>
        ) : (
          <>
            <SpaceSpaceSceneEmpty />
          </>
        )}
      </>
    </div>
  );
}
