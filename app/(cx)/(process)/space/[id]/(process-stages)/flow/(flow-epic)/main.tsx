import { GlassAreaContainer } from '@/(components)/(basic)/glass/area/main';
import { containerStyles } from '@/(design)/(styles)/data';
import { FlowChapters } from './chapters/main';
import { FlowCore } from './core/main';

export function FlowMain() {
  return (
    <GlassAreaContainer
      displayName={FlowMain.name}
      sizeStyle='h-full flex-grow'
      className={`${containerStyles['col']}`}
    >
      <FlowCore/>
      <FlowChapters/>
    </GlassAreaContainer>
  );
}
