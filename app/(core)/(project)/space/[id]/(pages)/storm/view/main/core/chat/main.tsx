import { useContext } from 'react';
import { StormMessage } from './message/main';
import { ContextForConversationMessageObj } from '@/(server)/(model)/space/chapter/chat/conversation/message/main';
import { ContextForConversationMessageList } from '@/(server)/(controller)/space/chapter/chat/conversation/message/list';

export function StormChat() {
  const messageListController = useContext(ContextForConversationMessageList)
  
  return (
    <div
      className='flex w-full flex-col items-center overflow-auto px-[1rem]'
      style={{ height: '100%' }}
    >
      <div className='flex w-full max-w-[900px] flex-col space-y-[1rem] py-[2rem]'>
        {messageListController.state.objs.map((message) => (
          <ContextForConversationMessageObj.Provider value={message} key={message.id}>
            <StormMessage key={message.id}/>
          </ContextForConversationMessageObj.Provider>
        ))}
      </div>
    </div>
  );
}
