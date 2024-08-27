import {
  ContextForOpenable,
  useControllerForOpenable,
} from '@/logic/contexts/openable/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { useContext } from 'react';
import {
  ContextForSpaceSessionController,
  SpaceSessionPage,
} from '../../controller/space-session/main';
import { SpaceSessionAddSceneModal } from '../../modal/add/scene/main';
import { SpaceSessionContainer } from './core/container/main';
import { SpaceSessionCompleteSession } from './core/pages/complete-session/main';
import { SpaceSessionCompleteUpdate } from './core/pages/complete-update/main';
import { SpaceSessionViewSession } from './core/pages/view-session/main';
import { SpaceSessionViewUpdate } from './core/pages/view-update/main';
import { SpaceSessionHeader } from './header/main';
import { SpaceSessionChapterNavigation } from './navigation/main';

export function SpaceSessionMain() {
  const openableController = useControllerForOpenable();
  const spaceSessionController = useContext(ContextForSpaceSessionController);

  return (
    <GlassWindowFrame
      name={SpaceSessionMain.name}
      className={`flex h-full flex-grow flex-col`}
    >
      <ContextForOpenable.Provider value={openableController}>
        <SpaceSessionAddSceneModal />
      </ContextForOpenable.Provider>
      <SpaceSessionHeader />
      <SpaceSessionContainer>
        {spaceSessionController.page === SpaceSessionPage.VIEW_SESSION && (
          <SpaceSessionViewSession />
        )}
        {spaceSessionController.page ===
          SpaceSessionPage.VIEW_SESSION_UPDATE && <SpaceSessionViewUpdate />}

        {spaceSessionController.page === SpaceSessionPage.COMPLETE_SESSION && (
          <SpaceSessionCompleteSession />
        )}
        {spaceSessionController.page ===
          SpaceSessionPage.COMPLETE_SESSION_UPDATE && (
          <SpaceSessionCompleteUpdate />
        )}
      </SpaceSessionContainer>
      <SpaceSessionChapterNavigation />
    </GlassWindowFrame>
  );
}
