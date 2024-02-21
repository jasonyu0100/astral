import { Glass } from '@/(common)/layer/main';
import { containerStyles } from '@/(common)/styles/data';
import { FlowHeader } from './header/main';
import { FlowMoments } from './moments/main';

export function FlowPage() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Glass
        displayName={FlowPage.name}
        sizeStyle='w-full h-full'
        className={`${containerStyles['col']}`}
      >
        <FlowHeader />
        <FlowMoments />
      </Glass>
    </div>
  );
}
