import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { containerStyles } from '@/(design)/(styles)/data';
import { FlowChapters } from './chapters/main';
import { FlowCore } from './core/main';

export function FlowMain() {
  return (
    <GlassAreaContainer
      name={FlowMain.name}
      size='h-full flex-grow'
      className={`${containerStyles['col']}`}
    >
      <FlowCore/>
      <FlowChapters/>
    </GlassAreaContainer>
  );
}
