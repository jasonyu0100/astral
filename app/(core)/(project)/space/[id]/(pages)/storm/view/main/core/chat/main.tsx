import { useContext } from 'react';
import { StormMessage } from './message/main';
import { ContextForConversationMessageObj } from '@/(server)/(model)/space/chapter/chat/conversation/message/main';
import { ContextForConversationMessageList } from '@/(server)/(controller)/space/chapter/chat/conversation/message/list';
import { HorizontalDivider } from '@/(components)/(line)/divider/horizontal/main';

export function StormChat() {
  const conversationListController = useContext(ContextForConversationMessageList);
  const messageListController = useContext(ContextForConversationMessageList);
  const conversationObj = conversationListController.state.currentObj;
  
  return (
    <div
      className='flex w-full flex-col items-center overflow-auto px-[1rem]'
      style={{ height: '100%' }}
    >
      <div className='flex w-full max-w-[900px] flex-col space-y-[1rem] py-[2rem]'>
        {conversationObj &&
          <div className="w-full items-center flex flex-col space-y-[1rem]">
            <p className="text-md text-slate-500 font-bold">{new Date(conversationObj.created).toDateString()}, {new Date(conversationObj.created).toLocaleTimeString()}</p>
          </div>
        }
        {messageListController.state.objs.map((message) => (
          <ContextForConversationMessageObj.Provider value={message} key={message.id}>
            <StormMessage key={message.id}/>
          </ContextForConversationMessageObj.Provider>
        ))}
      </div>
    </div>
  );
}
