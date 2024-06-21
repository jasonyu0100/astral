import { useControllerForChapterChatMain } from '@/(server)/(controller)/space/chapter/chat/main';
import { ContextForChapterSessionUpdateObj } from '@/(server)/(model)/space/chapter/session/update/main';
import { useContext } from 'react';
import { SpaceSeaEditCard } from '../../main';

export function SpaceSeaCardChat() {
  const sessionUpdate = useContext(ContextForChapterSessionUpdateObj);
  const chatController = useControllerForChapterChatMain(
    sessionUpdate?.chatId || '',
  );

  return (
    <SpaceSeaEditCard>
      <p className='text-xl font-bold text-slate-300'>
        {chatController.state.obj.title}
      </p>
      <p className='text-lg font-light text-slate-300'>New Chat</p>
    </SpaceSeaEditCard>
  );
}
