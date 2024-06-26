import { HorizontalDivider } from '@/(components)/(line)/divider/horizontal/main';
import { ContextForChatConversationList } from '@/(server)/(controller)/space/chapter/chat/conversation/list';
import { ContextForConversationMessageList } from '@/(server)/(controller)/space/chapter/chat/conversation/message/list';
import { ContextForConversationMessageObj } from '@/(server)/(model)/space/chapter/chat/conversation/message/main';
import { getFormattedDate } from '@/(utils)/dateFormat';
import { useContext } from 'react';
import { roleDescriptions } from '../../../../data';
import { ContextForChat } from '../../../../page';
import { SpaceChatChatMessage } from './message/main';

export function SpaceChatChat() {
  const { role } = useContext(ContextForChat);
  const conversationListController = useContext(ContextForChatConversationList);
  const messageListController = useContext(ContextForConversationMessageList);
  const conversationObj = conversationListController.state.currentObj;

  return (
    <div
      className='flex w-full flex-col items-center overflow-auto px-[1rem]'
      style={{ height: '100%' }}
    >
      <div className='flex w-full max-w-[900px] flex-col space-y-[2rem] py-[2rem]'>
        {conversationObj && (
          <div className='flex w-full flex-row items-center justify-between'>
            <div className='flex'>
              <p
                className='text-md cursor-pointer font-bold text-slate-500'
                onClick={() => {
                  conversationListController.actions.stateActions.goNext();
                }}
              >
                PREV
              </p>
            </div>
            <div className='flex'>
              <p className='text-md font-bold text-slate-500'>
                {getFormattedDate(new Date(conversationObj.created))}
              </p>
            </div>
            <div className='flex'>
              <p
                className='text-md cursor-pointer font-bold text-slate-500'
                onClick={() => {
                  conversationListController.actions.stateActions.goPrev();
                }}
              >
                NEXT
              </p>
            </div>
          </div>
        )}
        <HorizontalDivider />
        <p className='font-bold text-white'>
          {role}: {roleDescriptions[role as keyof typeof roleDescriptions]}
        </p>
        <HorizontalDivider />
        {messageListController.state.objs.map((message) => (
          <ContextForConversationMessageObj.Provider
            value={message}
            key={message.id}
          >
            <SpaceChatChatMessage key={message.id} />
          </ContextForConversationMessageObj.Provider>
        ))}
      </div>
    </div>
  );
}
