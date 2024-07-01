import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { useContext } from 'react';
import {
  ContextForSpaceSessionsController,
  SpaceSessionsPage,
} from '../../(controller)/space-session/main';
import { SpaceSessionsContainer } from './core/container/main';
import { SpaceSessionsCompleteSession } from './core/pages/complete-session/main';
import { SpaceSessionsCompleteUpdate } from './core/pages/complete-update/main';
import { SpaceSessionsHeader } from './header/main';
import { SpaceSessionsChapterNavigation } from './navigation/main';

export function SpaceSessionsMain() {
  const spaceSessionController = useContext(ContextForSpaceSessionsController);

  return (
    <GlassWindowFrame
      name={SpaceSessionsMain.name}
      className={`flex h-full flex-grow flex-col`}
    >
      <SpaceSessionsHeader />
      <SpaceSessionsContainer>
        {spaceSessionController.page === SpaceSessionsPage.VIEW_SESSION && (
          <></>
        )}
        {spaceSessionController.page ===
          SpaceSessionsPage.VIEW_SESSION_UPDATE && <></>}
        {spaceSessionController.page === SpaceSessionsPage.COMPLETE_SESSION && (
          <SpaceSessionsCompleteSession />
        )}
        {spaceSessionController.page ===
          SpaceSessionsPage.COMPLETE_SESSION_UPDATE && (
          <SpaceSessionsCompleteUpdate />
        )}
      </SpaceSessionsContainer>
      <SpaceSessionsChapterNavigation />
    </GlassWindowFrame>
  );
}
