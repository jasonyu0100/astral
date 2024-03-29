import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { containerFx } from '@/(design)/(fx)/data';
import { FlowChapters } from './chapters/main';
import { FlowCore } from './core/main';

export function FlowMain() {
  return (
    <GlassAreaContainer
      name={FlowMain.name}
      sizeFx='h-full flex-grow'
      className={`${containerFx['col']}`}
    >
      <FlowCore/>
      <FlowChapters/>
    </GlassAreaContainer>
  );
}
