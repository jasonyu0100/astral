import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { SpaceStormCore } from './core/main';
import { SpaceStormInput } from './input/main';

export function SpaceStormMain() {
  return (
    <GlassAreaContainer
      name={SpaceStormMain.name}
      sizeFx='flex-grow h-full'
      className={`flex flex-col`}
    >
      <SpaceStormCore />
      <SpaceStormInput />
    </GlassAreaContainer>
  );
}
