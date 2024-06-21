import { useControllerForChatConversationMain } from '@/(server)/(controller)/space/chapter/chat/conversation/main';
import { useControllerForChapterChatMain } from '@/(server)/(controller)/space/chapter/chat/main';
import { ContextForChapterSessionUpdateObj } from '@/(server)/(model)/space/chapter/session/update/main';
import { getFormattedDate } from '@/(utils)/dateFormat';
import { useContext } from 'react';
import { SpaceSeaEditCard } from '../../main';

export function SpaceSeaCardConversation() {
  const sessionUpdate = useContext(ContextForChapterSessionUpdateObj);
  const chatController = useControllerForChapterChatMain(
    sessionUpdate?.chatId || '',
  );
  const conversationController = useControllerForChatConversationMain(
    sessionUpdate?.conversationId || '',
  );

  return (
    <SpaceSeaEditCard>
      <p className='text-xl font-bold text-slate-300'>
        {getFormattedDate(new Date(conversationController.state.obj.created))}
      </p>
      <p className='text-xl font-bold text-slate-300'>
        {chatController.state.obj.title}
      </p>
      <p className='text-lg font-light text-slate-300'>New Conversation</p>
    </SpaceSeaEditCard>
  );
}
