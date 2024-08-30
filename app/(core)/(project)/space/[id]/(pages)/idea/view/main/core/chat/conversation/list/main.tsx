import { ContextForConversationMessageList } from '@/(server)/controller/space/chapter/scene/conversation/message/list';
import { ContextForConversationMessageObj } from '@/(server)/model/space/chapter/scene/conversation/message/main';
import { useContext } from 'react';
import { SpaceIdeaMessage } from '../../message/main';

export function SpaceIdeaConversationMessages() {
  const messageListController = useContext(ContextForConversationMessageList);

  return (
    <div className='w-[900px] flex-col space-y-[2rem] py-[2rem]'>
      {messageListController.state.objs.map((message) => (
        <ContextForConversationMessageObj.Provider
          value={message}
          key={message.id}
        >
          <SpaceIdeaMessage key={message.id} />
        </ContextForConversationMessageObj.Provider>
      ))}
    </div>
  );
}
