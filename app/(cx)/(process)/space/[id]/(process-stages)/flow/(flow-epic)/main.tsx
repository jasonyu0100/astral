import { Glass } from '@/(components)/(basic)/glass/main';
import { containerStyles } from '@/(design)/(styles)/data';
import { FlowChapters } from './chapters/main';
import { FlowCore } from './core/main';

export function FlowMain() {
  return (
    <Glass
      displayName={FlowMain.name}
      sizeStyle='h-full flex-grow'
      className={`${containerStyles['col']}`}
    >
      <FlowCore/>
      <FlowChapters/>
    </Glass>
  );
}
