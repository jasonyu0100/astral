import { GlassAreaContainer } from '@/(components)/(glass)/area/main';

import { SpaceDraftsCoreContents } from './contents/main';
import { SpaceDraftsHeader } from './header/main';

export function SpaceDraftsCore() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <GlassAreaContainer
        name={SpaceDraftsCore.name}
        sizeFx='w-full h-full'
        className={`flex flex-col`}
      >
        <SpaceDraftsHeader />
        <SpaceDraftsCoreContents />
      </GlassAreaContainer>
    </div>
  );
}
