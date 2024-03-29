import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { containerFx } from '@/(design)/(fx)/data';
import { DraftCore } from './core/main';
import { DraftChapters } from './chapters/main';

export function DraftMain() {
  return (
    <GlassAreaContainer
      name={DraftMain.name}
      sizeFx='h-full flex-grow'
      className={`${containerFx['col']}`}
    >
      <DraftCore />
      <DraftChapters />
    </GlassAreaContainer>
  );
}
