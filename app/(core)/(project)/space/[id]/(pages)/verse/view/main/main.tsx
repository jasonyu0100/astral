import { GlassAreaContainer } from '@/(components)/(glass)/area/main';

import { VerseCore } from './core/main';

export function SpaceVerseMain() {
  return (
    <GlassAreaContainer
      name={SpaceVerseMain.name}
      sizeFx='h-full flex-grow'
      className={`flex flex-col`}
    >
      <VerseCore />
    </GlassAreaContainer>
  );
}
