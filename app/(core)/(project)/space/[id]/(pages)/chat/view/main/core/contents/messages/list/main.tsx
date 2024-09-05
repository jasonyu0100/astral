import { ContextForConversationMessageList } from '@/(server)/controller/space/chapter/scene/conversation/message/list';
import { ContextForConversationMessageObj } from '@/(server)/model/space/chapter/scene/conversation/message/main';
import { useContext } from 'react';
import { SpaceChatEmpty } from '../../empty/main';
import { SpaceChatMessage } from './message/main';

export function SpaceChatMessages() {
  const messageListController = useContext(ContextForConversationMessageList);

  return (
    <div className='flex h-full w-full flex-col items-center overflow-auto'>
      {messageListController.state.objs.length === 0 ? (
        <SpaceChatEmpty />
      ) : (
        <div className='w-[900px] flex-col space-y-[2rem] py-[2rem]'>
          {messageListController.state.objs.map((message) => (
            <ContextForConversationMessageObj.Provider
              value={message}
              key={message.id}
            >
              <SpaceChatMessage key={message.id} />
            </ContextForConversationMessageObj.Provider>
          ))}
        </div>
      )}
    </div>
  );
}
