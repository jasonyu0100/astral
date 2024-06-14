import { GlassAreaContainer } from '@/(components)/(glass)/area/main';

import { VerseChapters } from './chapters/main';
import { VerseCore } from './core/main';

export function VerseMain() {
  return (
    <GlassAreaContainer
      name={VerseMain.name}
      sizeFx='h-full flex-grow'
      className={`flex flex-col`}
    >
      <VerseCore />
      <VerseChapters />
    </GlassAreaContainer>
  );
}
