import { GlassAreaContainer } from '@/(lib)/(glass)/area/main';
import { containerFx } from '@/(fx)/data';
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
