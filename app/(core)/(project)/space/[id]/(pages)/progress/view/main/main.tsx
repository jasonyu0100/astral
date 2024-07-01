import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { useContext } from 'react';
import {
  ContextForSpaceProgressController,
  SpaceProgressPage,
} from '../../(controller)/space-session/main';
import { SpaceProgressContainer } from './core/container/main';
import { SpaceProgressCompleteSession } from './core/pages/complete-session/main';
import { SpaceProgressCompleteUpdate } from './core/pages/complete-update/main';
import { SpaceProgressHeader } from './header/main';
import { SpaceProgressChapterNavigation } from './navigation/main';

export function SpaceProgressMain() {
  const spaceSessionController = useContext(ContextForSpaceProgressController);

  return (
    <GlassWindowFrame
      name={SpaceProgressMain.name}
      className={`flex h-full flex-grow flex-col`}
    >
      <SpaceProgressHeader />
      <SpaceProgressContainer>
        {spaceSessionController.page === SpaceProgressPage.VIEW_SESSION && (
          <></>
        )}
        {spaceSessionController.page ===
          SpaceProgressPage.VIEW_SESSION_UPDATE && <></>}
        {spaceSessionController.page === SpaceProgressPage.COMPLETE_SESSION && (
          <SpaceProgressCompleteSession />
        )}
        {spaceSessionController.page ===
          SpaceProgressPage.COMPLETE_SESSION_UPDATE && (
          <SpaceProgressCompleteUpdate />
        )}
      </SpaceProgressContainer>
      <SpaceProgressChapterNavigation />
    </GlassWindowFrame>
  );
}
