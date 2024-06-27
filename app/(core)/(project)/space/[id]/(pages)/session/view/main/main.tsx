import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { useContext } from 'react';
import { ContextForSpaceSessionController } from '../../(controller)/space-session/main';
import { SpaceSessionContainer } from './core/container/main';
import { SpaceSessionCoreMain } from './core/main';
import { SpaceSessionHeader } from './header/main';
import { SpaceSessionHistoryMain } from './history/main';
import { SpaceSessionChapterNavigation } from './navigation/main';

export function SpaceSessionMain() {
  const spaceSessionController = useContext(ContextForSpaceSessionController);

  return (
    <GlassWindowFrame
      name={SpaceSessionMain.name}
      className={`flex h-full flex-grow flex-col`}
    >
      <SpaceSessionHeader />
      <SpaceSessionContainer>
        {spaceSessionController.historyView ? (
          <SpaceSessionHistoryMain />
        ) : (
          <SpaceSessionCoreMain />
        )}
      </SpaceSessionContainer>
      <SpaceSessionChapterNavigation />
    </GlassWindowFrame>
  );
}
