import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { containerStyles } from '@/(design)/(styles)/data';
import { FlowHeader } from './header/main';
import { FlowMoments } from './moments/main';

export function FlowCore() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <GlassAreaContainer
        name={FlowCore.name}
        size='w-full h-full'
        className={`${containerStyles['col']}`}
      >
        <FlowHeader />
        <FlowMoments />
      </GlassAreaContainer>
    </div>
  );
}
