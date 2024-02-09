import { useContext } from 'react';
import { StormContext } from '../../../../page';
import { StormMessage } from './message/main';

export function StormChatMessages() {
  const { messages, messageHandler } = useContext(StormContext);
  return (
    <div
      className='flex w-full flex-col items-center overflow-auto'
      style={{ height: '100%' }}
    >
      <div className='flex w-full max-w-[900px] flex-col space-y-[1rem] py-[2rem]'>
        {messages.map((message) => (
          <StormMessage message={message} />
        ))}
      </div>
    </div>
  );
}
