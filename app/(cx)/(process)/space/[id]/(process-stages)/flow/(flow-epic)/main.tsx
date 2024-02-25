import { GlassContainer } from '@/(components)/(basic)/glass/container/main';
import { containerStyles } from '@/(design)/(styles)/data';
import { FlowChapters } from './chapters/main';
import { FlowCore } from './core/main';

export function FlowMain() {
  return (
    <GlassContainer
      displayName={FlowMain.name}
      sizeStyle='h-full flex-grow'
      className={`${containerStyles['col']}`}
    >
      <FlowCore/>
      <FlowChapters/>
    </GlassContainer>
  );
}
