import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { SpaceChatChat } from './chat/main';
import { SpaceChatHeader } from './header/main';

export function SpaceChatCore() {
  return (
    <div className='w-full' style={{ height: '100%' }}>
      <GlassAreaContainer
        name={SpaceChatCore.name}
        sizeFx='w-full h-full'
        className={`flex flex-col items-center`}
      >
        <SpaceChatHeader />
        <SpaceChatChat />
      </GlassAreaContainer>
    </div>
  );
}
