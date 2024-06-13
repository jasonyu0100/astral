import { GlassAreaContainer } from '@/(components)/(glass)/area/main';

import { VerseHeader } from './header/main';
import { VerseMoments } from './moments/main';

export function VerseCore() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <GlassAreaContainer
        name={VerseCore.name}
        sizeFx='w-full h-full'
        className={`flex flex-col`}
      >
        <VerseHeader />
        <VerseMoments />
      </GlassAreaContainer>
    </div>
  );
}
