import { GlassAreaContainer } from '@/(components)/(glass)/area/main';

import { SpaceFlowCoreContents } from './contents/main';
import { SpaceFlowHeader } from './header/main';

export function SpaceFlowCore() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <GlassAreaContainer
        name={SpaceFlowCore.name}
        sizeFx='w-full h-full'
        className={`flex flex-col`}
      >
        <SpaceFlowHeader />
        <SpaceFlowCoreContents />
      </GlassAreaContainer>
    </div>
  );
}
