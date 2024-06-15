import { GlassAreaContainer } from '@/(components)/(glass)/area/main';

import { SpaceDraftCoreContents } from './contents/main';
import { SpaceDraftHeader } from './header/main';

export function SpaceDraftBodyCore() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <GlassAreaContainer
        name={SpaceDraftBodyCore.name}
        sizeFx='w-full h-full'
        className={`flex flex-col`}
      >
        <SpaceDraftHeader />
        <SpaceDraftCoreContents />
      </GlassAreaContainer>
    </div>
  );
}
