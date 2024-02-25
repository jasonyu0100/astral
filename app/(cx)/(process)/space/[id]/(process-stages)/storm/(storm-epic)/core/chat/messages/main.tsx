import { useContext } from 'react';
import { StormContext } from '../../../../page';
import { StormMessage } from './message/main';
import { MessageContext } from '@/(logic)/internal/data/infra/model/storm/chat/message/main';

export function StormChatMessages() {
  const { messages, messageHandler } = useContext(StormContext);
  return (
    <div
      className='flex w-full flex-col items-center overflow-auto px-[1rem]'
      style={{ height: '100%' }}
    >
      <div className='flex w-full max-w-[900px] flex-col space-y-[1rem] py-[2rem]'>
        {messages.map((message) => (
          // eslint-disable-next-line react/jsx-key
          <MessageContext.Provider value={message}>
            <StormMessage />
          </MessageContext.Provider>
        ))}
      </div>
    </div>
  );
}
