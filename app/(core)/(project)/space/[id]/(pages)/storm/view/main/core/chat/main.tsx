import { ContextForChatConversationList } from '@/(server)/(controller)/space/chapter/chat/conversation/list';
import { ContextForConversationMessageList } from '@/(server)/(controller)/space/chapter/chat/conversation/message/list';
import { ContextForConversationMessageObj } from '@/(server)/(model)/space/chapter/chat/conversation/message/main';
import { useContext } from 'react';
import { SpaceStormChatMessage } from './message/main';

export function SpaceStormChat() {
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
          <div className='flex w-full flex-row items-center justify-between'>
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
            <SpaceStormChatMessage key={message.id} />
          </ContextForConversationMessageObj.Provider>
        ))}
      </div>
    </div>
  );
}
