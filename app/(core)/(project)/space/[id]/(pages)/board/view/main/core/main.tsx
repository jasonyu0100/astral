import { GlassAreaContainer } from '@/(components)/(glass)/area/main';

import { SpaceBoardCoreContents } from './contents/main';
import { SpaceBoardHeader } from './header/main';

export function SpaceBoardBodyCore() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <GlassAreaContainer
        name={SpaceBoardBodyCore.name}
        sizeFx='w-full h-full'
        className={`flex flex-col`}
      >
        <SpaceBoardHeader />
        <SpaceBoardCoreContents />
      </GlassAreaContainer>
    </div>
  );
}
