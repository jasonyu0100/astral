import { useControllerForChatConversationMain } from '@/(server)/(controller)/space/chapter/chat/conversation/main';
import { useControllerForChapterChatMain } from '@/(server)/(controller)/space/chapter/chat/main';
import { ContextForChapterUpdateItemObj } from '@/(server)/(model)/space/chapter/update/item/main';
import { getFormattedDate } from '@/(utils)/dateFormat';
import { useContext } from 'react';
import { SpaceSeaEditCard } from '../../main';

export function SpaceSeaCardConversation() {
  const updateItem = useContext(ContextForChapterUpdateItemObj);
  const chatController = useControllerForChapterChatMain(updateItem.chatId);
  const conversationController = useControllerForChatConversationMain(
    updateItem.conversationId,
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
