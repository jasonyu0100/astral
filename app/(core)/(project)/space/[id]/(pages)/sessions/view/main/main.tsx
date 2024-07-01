import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { useContext } from 'react';
import { ContextForSpaceSessionsController } from '../../(controller)/space-session/main';
import { SpaceSessionsContainer } from './core/container/main';
import { SpaceSessionsCoreMain } from './core/main';
import { SpaceSessionsHeader } from './header/main';
import { SpaceSessionsHistoryMain } from './history/main';
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
        {spaceSessionController.historyView ? (
          <SpaceSessionsHistoryMain />
        ) : (
          <SpaceSessionsCoreMain />
        )}
      </SpaceSessionsContainer>
      <SpaceSessionsChapterNavigation />
    </GlassWindowFrame>
  );
}
