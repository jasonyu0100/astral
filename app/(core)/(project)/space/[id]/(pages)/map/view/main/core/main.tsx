import { GlassAreaContainer } from '@/(components)/(glass)/area/main';

import { MapBody } from './body/main';
import { MapHeader } from './header/main';

export function MapCore() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <GlassAreaContainer
        name={MapCore.name}
        sizeFx='w-full h-full'
        className={`flex flex-col`}
      >
        <MapHeader />
        <MapBody />
      </GlassAreaContainer>
    </div>
  );
}
