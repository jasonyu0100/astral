import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { SpaceSessionContainer } from './core/container/main';
import { SpaceSessionCoreMain } from './core/main';
import { SpaceSessionHeader } from './header/main';
import { SpaceSessionChapterNavigation } from './navigation/main';

export function SpaceSessionMain() {
  return (
    <GlassWindowFrame
      name={SpaceSessionMain.name}
      className={`flex h-full flex-grow flex-col`}
    >
      <SpaceSessionHeader />
      <SpaceSessionContainer>
        <SpaceSessionCoreMain />
      </SpaceSessionContainer>
      <SpaceSessionChapterNavigation />
    </GlassWindowFrame>
  );
}
