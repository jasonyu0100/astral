import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { SpaceVersesCoreContents } from './contents/main';
import { SpaceVersesHeader } from './header/main';

export function SpaceVersesCore() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <GlassWindowFrame
        name={SpaceVersesCore.name}
        className={`flex h-full flex-grow flex-col`}
      >
        <SpaceVersesHeader />
        <SpaceVersesCoreContents />
      </GlassWindowFrame>
    </div>
  );
}
