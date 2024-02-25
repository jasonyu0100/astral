import { Glass } from '@/(components)/glass/main';
import { containerStyles } from '@/(components)/styles/data';
import { FlowChapters } from './chapters/main';
import { FlowCore } from './core/main';

export function FlowBody() {
  return (
    <Glass
      displayName={FlowBody.name}
      sizeStyle='h-full flex-grow'
      className={`${containerStyles['col']}`}
    >
      <FlowCore/>
      <FlowChapters/>
    </Glass>
  );
}
