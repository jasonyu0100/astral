import { ContextForConversationMessageList } from '@/(server)/controller/space/chapter/scene/conversation/message/list';
import { ContextForConversationMessageObj } from '@/(server)/model/space/chapter/scene/conversation/message/main';
import { useContext } from 'react';
import { SpaceMapChatExplorerMessage } from './message/main';

export function SpaceMapChatExplorerList() {
  const messageListController = useContext(ContextForConversationMessageList);

  return (
    <div
      className='flex w-full flex-col space-y-[1rem] overflow-auto p-[1rem]'
      style={{ height: 'calc(100% - 9rem)' }}
    >
      {messageListController.state.objs.map((message) => (
        <ContextForConversationMessageObj.Provider
          value={message}
          key={message.id}
        >
          <SpaceMapChatExplorerMessage />
        </ContextForConversationMessageObj.Provider>
      ))}
    </div>
  );
}
