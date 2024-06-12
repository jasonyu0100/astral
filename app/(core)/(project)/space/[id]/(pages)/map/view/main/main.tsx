import { GlassAreaContainer } from '@/(components)/(glass)/area/main';

import { MapCore } from './core/main';
import { MapScenes } from './scenes/main';

export function MapMain() {
  return (
    <GlassAreaContainer
      name={MapMain.name}
      sizeFx='h-full flex-grow'
      className={`flex flex-col`}
    >
      <MapCore />
      <MapScenes />
    </GlassAreaContainer>
  );
}
