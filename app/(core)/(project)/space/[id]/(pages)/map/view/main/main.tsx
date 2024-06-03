import { GlassAreaContainer } from '@/(components)/(glass)/area/main';

import { MapCore } from './core/main';
import { MapChapters } from './chapters/main';

export function MapMain() {
  return (
    <GlassAreaContainer
      name={MapMain.name}
      sizeFx='h-full flex-grow'
      className={`$flex flex-col`}
    >
      <MapCore />
      <MapChapters />
    </GlassAreaContainer>
  );
}
