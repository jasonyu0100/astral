import { GlassAreaContainer } from '@/(components)/(glass)/area/main';

import { DraftHeader } from './header/main';
import { DraftMoments } from './moments/main';

export function DraftCore() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <GlassAreaContainer
        name={DraftCore.name}
        sizeFx='w-full h-full'
        className={`flex flex-col`}
      >
        <DraftHeader />
        <DraftMoments />
      </GlassAreaContainer>
    </div>
  );
}
