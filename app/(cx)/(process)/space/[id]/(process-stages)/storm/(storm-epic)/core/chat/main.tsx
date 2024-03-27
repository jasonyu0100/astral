import { containerStyles } from '@/(design)/(styles)/data';
import { GlassAreaContainer } from '@/(components)/(basic)/glass/area/main';
import { StormHeader } from '../header/main';
import { StormChatMessages } from './messages/main';

export function StormChat() {
  return (
    <div className='w-full' style={{ height: '100%' }}>
      <GlassAreaContainer
        displayName={StormChat.name}
        sizeStyle='w-full h-full'
        className={`${containerStyles['col-center']}`}
      >
        <StormHeader />
        <StormChatMessages />
      </GlassAreaContainer>
    </div>
  );
}
