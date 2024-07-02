import { HorizontalDivider } from '@/(components)/(line)/divider/horizontal/main';
import { spaceMap } from '@/(core)/(project)/space/[id]/map';
import { ContextForChatConversationList } from '@/(server)/(controller)/space/chapter/chat/conversation/list';
import { ContextForConversationMessageList } from '@/(server)/(controller)/space/chapter/chat/conversation/message/list';
import { ContextForSpaceMain } from '@/(server)/(controller)/space/main';
import { ContextForConversationMessageObj } from '@/(server)/(model)/space/chapter/chat/conversation/message/main';
import { getFormattedDate } from '@/(utils)/dateFormat';
import { useContext } from 'react';
import { roleDescriptions } from '../../../../data';
import { ContextForChat } from '../../../../page';
import { SpaceChatMessage } from './message/main';

export function SpaceChatChat() {
  const { role } = useContext(ContextForChat);
  const spaceController = useContext(ContextForSpaceMain);
  const conversationListController = useContext(ContextForChatConversationList);
  const messageListController = useContext(ContextForConversationMessageList);
  const conversationObj = conversationListController.state.currentObj;

  return (
    <div
      className='flex w-full flex-row justify-between overflow-auto px-[1rem]'
      style={{ height: '100%' }}
    >
      <div className='flex h-full w-[6rem] items-center justify-center' />
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
            <SpaceChatMessage key={message.id} />
          </ContextForConversationMessageObj.Provider>
        ))}
      </div>
      <div className='flex h-full w-[6rem] items-center justify-center'>
        <a
          className='flex h-[3rem] w-[3rem] animate-pulse cursor-pointer items-center justify-center rounded-full'
          href={spaceMap.space.id.map.link(spaceController.state.objId)}
          onClick={() => {
            alert('Summarising Conversation');
          }}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-3/4 w-3/4'
            viewBox='0 0 24 24'
            fill='none'
          >
            <mask
              id='mask0_3293_66'
              maskUnits='userSpaceOnUse'
              x='0'
              y='0'
              width='24'
              height='24'
            >
              <rect width='24' height='24' fill='#D9D9D9' />
            </mask>
            <g mask='url(#mask0_3293_66)'>
              <path
                d='M4 15V13H20V15H4ZM4 19V17H20V19H4ZM4 11V9H20V11H4ZM4 7V5H20V7H4Z'
                fill='#CBD5E1'
              />
            </g>
          </svg>
        </a>
      </div>
    </div>
  );
}
