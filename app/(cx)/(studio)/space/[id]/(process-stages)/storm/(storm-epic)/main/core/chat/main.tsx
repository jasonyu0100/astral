import { useContext } from 'react';
import { StormMessage } from './message/main';
import { MessageContext } from '@/(lgx)/internal/model/storm/chat/message/main';
import { MessagesHandlerContext } from '@/(lgx)/internal/handler/storm/messages/main';

export function StormChat() {
  const messagesHandler = useContext(MessagesHandlerContext)
  const messages = messagesHandler.messages
  
  return (
    <div
      className='flex w-full flex-col items-center overflow-auto px-[1rem]'
      style={{ height: '100%' }}
    >
      <div className='flex w-full max-w-[900px] flex-col space-y-[1rem] py-[2rem]'>
        {messages.map((message) => (
          <MessageContext.Provider value={message} key={message.id}>
            <StormMessage key={message.id}/>
          </MessageContext.Provider>
        ))}
      </div>
    </div>
  );
}
