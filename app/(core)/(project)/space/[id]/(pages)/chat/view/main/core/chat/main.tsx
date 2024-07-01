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
          className='flex h-[4rem] w-[4rem] cursor-pointer items-center justify-center rounded-full bg-blue-500 shadow-glow'
          href={spaceMap.space.id.map.link(spaceController.state.objId)}
          onClick={() => {
            alert('Summarising Conversation');
          }}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className={'h-3/4 w-3/4'}
            viewBox='0 0 25 25'
            fill='none'
          >
            <mask
              id='mask0_3291_42'
              maskUnits='userSpaceOnUse'
              x='0'
              y='0'
              width='25'
              height='25'
            >
              <rect
                x='0.708008'
                y='0.09375'
                width='24'
                height='24'
                fill='#D9D9D9'
              />
            </mask>
            <g mask='url(#mask0_3291_42)'>
              <path
                d='M16.883 13.0938H4.70801V11.0938H16.883L11.283 5.49375L12.708 4.09375L20.708 12.0938L12.708 20.0938L11.283 18.6938L16.883 13.0938Z'
                fill='#CBD5E1'
              />
            </g>
          </svg>
        </a>
      </div>
    </div>
  );
}
