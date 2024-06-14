import { GlassAreaContainer } from '@/(components)/(glass)/area/main';

import { SpaceVerseHeader } from './header/main';
import { SpaceVerseList } from './list/main';

export function VerseCore() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <GlassAreaContainer
        name={VerseCore.name}
        sizeFx='w-full h-full'
        className={`flex flex-col`}
      >
        <SpaceVerseHeader />
        <SpaceVerseList />
      </GlassAreaContainer>
    </div>
  );
}
