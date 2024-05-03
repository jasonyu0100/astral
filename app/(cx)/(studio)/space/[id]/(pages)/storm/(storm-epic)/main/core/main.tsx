import { containerFx } from '@/(fx)/data';
import { GlassAreaContainer } from '@/(lib)/(glass)/area/main';
import { StormHeader } from './header/main';
import { StormChat } from './chat/main';

export function StormCore() {
  return (
    <div className='w-full' style={{ height: '100%' }}>
      <GlassAreaContainer
        name={StormCore.name}
        sizeFx='w-full h-full'
        className={`${containerFx['col-center']}`}
      >
        <StormHeader />
        <StormChat />
      </GlassAreaContainer>
    </div>
  );
}
