import { containerStyles } from '@/(common)/styles/data';
import { Glass } from '@/(common)/layer/main';
import { StormHeader } from '../header/main';
import { StormChatMessages } from './messages/main';

export function StormChat() {
  return (
    <div className='w-full' style={{ height: '100%' }}>
      <Glass
        displayName={StormChat.name}
        sizeStyle='w-full h-full'
        className={`${containerStyles['col-center']}`}
      >
        <StormHeader />
        <StormChatMessages />
      </Glass>
    </div>
  );
}
