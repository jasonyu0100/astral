import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { SpaceStormChat } from './chat/main';
import { SpaceStormHeader } from './header/main';

export function SpaceStormCore() {
  return (
    <div className='w-full' style={{ height: '100%' }}>
      <GlassAreaContainer
        name={SpaceStormCore.name}
        sizeFx='w-full h-full'
        className={`flex flex-col items-center`}
      >
        <SpaceStormHeader />
        <SpaceStormChat />
      </GlassAreaContainer>
    </div>
  );
}
