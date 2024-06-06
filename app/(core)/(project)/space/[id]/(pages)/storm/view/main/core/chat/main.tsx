import { useContext } from 'react';
import { StormMessage } from './message/main';
import { ConversationMessageContext } from '@/(model)/space/chapter/chat/conversation/message/main';
import { MessagesHandlerContext } from '@/(model)/(controller)/(archive)/storm/messages/main';

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
          <ConversationMessageContext.Provider value={message} key={message.id}>
            <StormMessage key={message.id}/>
          </ConversationMessageContext.Provider>
        ))}
      </div>
    </div>
  );
}
