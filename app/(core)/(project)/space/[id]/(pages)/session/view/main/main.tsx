import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { SpaceSessionCore } from './core/main';
import { SpaceSessionHeader } from './header/main';
import { SpaceSessionChapterNavigation } from './navigation/main';

export function SpaceSessionMain() {
  return (
    <GlassWindowFrame
      name={SpaceSessionMain.name}
      className={`flex h-full flex-grow flex-col`}
    >
      <SpaceSessionHeader />
      <SpaceSessionCore />
      <SpaceSessionChapterNavigation />
    </GlassWindowFrame>
  );
}
