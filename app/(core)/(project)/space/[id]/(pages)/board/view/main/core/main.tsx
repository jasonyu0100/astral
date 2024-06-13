import { GlassAreaContainer } from '@/(components)/(glass)/area/main';

import { BoardBody } from './body/main';
import { BoardHeader } from './header/main';

export function BoardCore() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <GlassAreaContainer
        name={BoardCore.name}
        sizeFx='w-full h-full'
        className={`flex flex-col`}
      >
        <BoardHeader />
        <BoardBody />
      </GlassAreaContainer>
    </div>
  );
}
