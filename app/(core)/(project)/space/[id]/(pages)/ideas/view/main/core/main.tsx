import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { SpaceIdeasHeader } from './header/main';
import { SpaceIdeasContentsVerse } from './verse/main';

export function SpaceIdeasCore() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <GlassWindowFrame
        name={SpaceIdeasCore.name}
        className={`flex h-full flex-grow flex-col`}
      >
        <SpaceIdeasHeader />
        <SpaceIdeasContentsVerse />
      </GlassWindowFrame>
    </div>
  );
}
