import { GlassAreaContainer } from '@/(components)/(glass)/area/main';

import { SpaceMapCoreContents } from './contents/main';
import { SpaceMapHeader } from './header/main';

export function SpaceMapBodyCore() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <GlassAreaContainer
        name={SpaceMapBodyCore.name}
        sizeFx='w-full h-full'
        className={`flex flex-col`}
      >
        <SpaceMapHeader />
        <SpaceMapCoreContents />
      </GlassAreaContainer>
    </div>
  );
}
