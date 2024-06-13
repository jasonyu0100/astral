import { useContext } from 'react';
import { StormMessage } from './message/main';
import { ContextForConversationMessageObj } from '@/(server)/(model)/space/chapter/chat/conversation/message/main';
import { ContextForConversationMessageList } from '@/(server)/(controller)/space/chapter/chat/conversation/message/list';
import { HorizontalDivider } from '@/(components)/(line)/divider/horizontal/main';
import { ContextForChatConversationList } from '@/(server)/(controller)/space/chapter/chat/conversation/list';

export function StormChat() {
  const conversationListController = useContext(ContextForChatConversationList);
  const messageListController = useContext(ContextForConversationMessageList);
  const conversationObj = conversationListController.state.currentObj;

  return (
    <div
      className='flex w-full flex-col items-center overflow-auto px-[1rem]'
      style={{ height: '100%' }}
    >
      <div className='flex w-full max-w-[900px] flex-col space-y-[1rem] py-[2rem]'>
        {conversationObj && (
          <div className='justify-between flex w-full flex-row items-center'>
            <div className='flex'>
              <p
                className='text-md font-bold text-slate-500'
                onClick={() => {
                  conversationListController.actions.stateActions.goPrev();
                }}
              >
                PREVIOUS
              </p>
            </div>
            <div className='flex'>
              <p className='text-md font-bold text-slate-500'>
                {new Date(conversationObj.created).toDateString()},{' '}
                {new Date(conversationObj.created).toLocaleTimeString()}
              </p>
            </div>
            <div className='flex'>
              <p
                className='text-md font-bold text-slate-500'
                onClick={() => {
                  conversationListController.actions.stateActions.goNext();
                }}
              >
                NEXT
              </p>
            </div>
          </div>
        )}
        {messageListController.state.objs.map((message) => (
          <ContextForConversationMessageObj.Provider
            value={message}
            key={message.id}
          >
            <StormMessage key={message.id} />
          </ContextForConversationMessageObj.Provider>
        ))}
      </div>
    </div>
  );
}
