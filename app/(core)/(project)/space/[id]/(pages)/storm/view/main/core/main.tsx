
import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { StormHeader } from './header/main';
import { StormChat } from './chat/main';

export function StormCore() {
  return (
    <div className='w-full' style={{ height: '100%' }}>
      <GlassAreaContainer
        name={StormCore.name}
        sizeFx='w-full h-full'
        className={`$flex flex-col items-center`}
      >
        <StormHeader />
        <StormChat />
      </GlassAreaContainer>
    </div>
  );
}
