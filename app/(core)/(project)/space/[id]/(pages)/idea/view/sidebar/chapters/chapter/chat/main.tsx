import { ContextForChapterChatList } from '@/(server)/controller/space/chapter/chat/list';
import { ContextForChapterChatObj } from '@/(server)/model/space/chapter/chat/main';
import { ContextForIndexable } from '@/logic/contexts/indexable/main';
import { useContext } from 'react';
import SpaceIdeaHeaderIndicator from '../header/indicator/main';

export function ChatChapterChat() {
  const chat = useContext(ContextForChapterChatObj);
  const index = useContext(ContextForIndexable);
  const chatListController = useContext(ContextForChapterChatList);
  const active = chatListController.actions.stateActions.checkActive(chat);

  return (
    <button
      onClick={() => chatListController.actions.stateActions.select(chat)}
    >
      <div className='flex w-full flex-row items-center'>
        {active ? (
          <div className='flex w-full animate-pulse-slow flex-row items-center justify-between'>
            <p className='text-lg font-bold text-slate-500'>
              {index + 1}. {chat.title}
            </p>
            <SpaceIdeaHeaderIndicator />
          </div>
        ) : (
          <p className='text-lg font-bold text-slate-500'>
            {index + 1}. {chat.title}
          </p>
        )}
      </div>
    </button>
  );
}
