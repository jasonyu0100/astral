import { useControllerForChapterChatMain } from '@/(server)/(controller)/space/chapter/chat/main';
import { useControllerForSpaceChapterMain } from '@/(server)/(controller)/space/chapter/main';
import { ContextForChapterUpdateItemObj } from '@/(server)/(model)/space/chapter/update/item/main';
import { useContext } from 'react';
import { SpaceSeaWorkCard } from '../../main';

export function SpaceSeaCardChat() {
  const updateItem = useContext(ContextForChapterUpdateItemObj);
  const chapterController = useControllerForSpaceChapterMain(
    updateItem.chapterId,
  );
  const chatController = useControllerForChapterChatMain(updateItem.chatId);

  return (
    <SpaceSeaWorkCard>
      <p className='text-sm font-bold text-slate-300'>
        {chatController.state.obj.title}
      </p>
      <p className='text-xs font-light text-slate-300'>New Chat</p>
    </SpaceSeaWorkCard>
  );
}
