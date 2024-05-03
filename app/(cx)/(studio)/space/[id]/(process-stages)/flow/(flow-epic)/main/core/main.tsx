import { GlassAreaContainer } from '@/(pkgs)/(glass)/area/main';
import { containerFx } from '@/(fx)/data';
import { FlowHeader } from './header/main';
import { FlowMoments } from './moments/main';

export function FlowCore() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <GlassAreaContainer
        name={FlowCore.name}
        sizeFx='w-full h-full'
        className={`${containerFx['col']}`}
      >
        <FlowHeader />
        <FlowMoments />
      </GlassAreaContainer>
    </div>
  );
}
