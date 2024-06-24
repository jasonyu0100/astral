import { useControllerForChapterChatMain } from '@/(server)/(controller)/space/chapter/chat/main';
import { ContextForChapterSessionUpdateObj } from '@/(server)/(model)/space/chapter/session/update/main';
import { useContext } from 'react';

export function SpaceSessionUpdatePreviewChat() {
  const sessionUpdate = useContext(ContextForChapterSessionUpdateObj);
  const chatController = useControllerForChapterChatMain(
    sessionUpdate?.chatId || '',
  );

  return (
    <>
      <p className='text-xl font-bold text-slate-300'>
        {chatController.state.obj.title}
        {chatController.state.obj.description}
      </p>
    </>
  );
}
