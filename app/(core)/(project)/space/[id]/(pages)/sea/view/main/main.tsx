import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import SpaceSeaCore from './core/main';
import { SpaceSeaHeader } from './header/main';

export function SpaceSeaMain() {
  return (
    <GlassWindowFrame
      name={SpaceSeaMain.name}
      className={`flex h-full flex-grow flex-col`}
    >
      <SpaceSeaHeader />
      <SpaceSeaCore />
    </GlassWindowFrame>
  );
}
