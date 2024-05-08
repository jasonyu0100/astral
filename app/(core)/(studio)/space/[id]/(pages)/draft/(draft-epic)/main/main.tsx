import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { containerFx } from '@/(style)/data';
import { DraftChapters } from './chapters/main';
import { DraftCore } from './core/main';

export function DraftMain() {
  return (
    <GlassAreaContainer
      name={DraftMain.name}
      sizeFx='h-full flex-grow'
      className={`${containerFx['col']}`}
    >
      <DraftCore/>
      <DraftChapters/>
    </GlassAreaContainer>
  );
}
