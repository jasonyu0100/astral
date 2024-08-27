import { spaceMap } from '@/(core)/(project)/space/[id]/map';
import { ContextForChatConversationList } from '@/(server)/controller/space/chapter/chat/conversation/list';
import { ContextForConversationMessageList } from '@/(server)/controller/space/chapter/chat/conversation/message/list';
import { ContextForChapterChatList } from '@/(server)/controller/space/chapter/chat/list';
import { ContextForSpaceMain } from '@/(server)/controller/space/main';
import { ContextForConversationMessageObj } from '@/(server)/model/space/chapter/chat/conversation/message/main';
import { AstralSubjectIcon } from '@/icons/subject/main';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { HorizontalDivider } from '@/ui/indicator/divider/horizontal/main';
import { getFormattedDate } from '@/utils/dateFormat';
import { useContext } from 'react';
import { roleDescriptions } from '../../../../data';
import { ContextForChat } from '../../../../page';
import { SpaceIdeaMessage } from './message/main';

export function SpaceIdeaChat() {
  const { role } = useContext(ContextForChat);
  const spaceController = useContext(ContextForSpaceMain);
  const chatListController = useContext(ContextForChapterChatList);
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
        <GlassWindowFrame className='w-full flex-shrink-0 px-[1rem]'>
          <GlassWindowContents className='flex flex-col space-y-[1rem]'>
            <p className='text-lg font-bold text-slate-300'>
              {chatListController.state.currentObj?.description || 'Open-ended'}
            </p>
            <p className='text-sm font-light text-slate-300'>
              {role}: {roleDescriptions[role as keyof typeof roleDescriptions]}
            </p>
            <p className='text-sm font-light text-slate-300'>
              It looks like you're almost there...
            </p>
          </GlassWindowContents>
        </GlassWindowFrame>
        <HorizontalDivider />
        {messageListController.state.objs.map((message) => (
          <ContextForConversationMessageObj.Provider
            value={message}
            key={message.id}
          >
            <SpaceIdeaMessage key={message.id} />
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
          <AstralSubjectIcon className='h-3/4 w-3/4' />
        </a>
      </div>
    </div>
  );
}
