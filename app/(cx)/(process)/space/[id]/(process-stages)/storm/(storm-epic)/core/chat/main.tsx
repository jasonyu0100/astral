import { containerStyles } from '@/(design)/(styles)/data';
import { Glass } from '@/(components)/(basic)/glass/main';
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
