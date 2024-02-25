import { Glass } from '@/(components)/(basic)/glass/main';
import { containerStyles } from '@/(design)/(styles)/data';
import { FlowHeader } from './header/main';
import { FlowMoments } from './moments/main';

export function FlowCore() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Glass
        displayName={FlowCore.name}
        sizeStyle='w-full h-full'
        className={`${containerStyles['col']}`}
      >
        <FlowHeader />
        <FlowMoments />
      </Glass>
    </div>
  );
}
