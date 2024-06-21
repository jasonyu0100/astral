import { GlassAreaContainer } from '@/(components)/(glass)/area/main';

import { SpaceVerseCoreContents } from './contents/main';
import { SpaceVerseHeader } from './header/main';

export function SpaceVerseCore() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <GlassAreaContainer
        name={SpaceVerseCore.name}
        sizeFx='w-full h-full'
        className={`flex flex-col`}
      >
        <SpaceVerseHeader />
        <SpaceVerseCoreContents />
      </GlassAreaContainer>
    </div>
  );
}
