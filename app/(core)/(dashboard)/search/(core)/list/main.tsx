import { ContextForConversationMessageList } from '@/(server)/controller/space/chapter/scene/conversation/message/list';
import { ContextForConversationMessageObj } from '@/(server)/model/space/chapter/scene/conversation/message/main';
import { borderFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { useContext } from 'react';
import { SpaceMapChatExplorerMessage } from './message/main';

export function ConversationalSearchChatList() {
  const messageListController = useContext(ContextForConversationMessageList);

  return (
    <div className='w-[1000px]' style={{ height: 'calc(100% - 7rem - 7rem)' }}>
      <GlassWindowFrame
        className='h-full w-full overflow-auto p-[3rem]'
        borderFx={borderFx['border-l']}
      >
        <GlassWindowContents className='flex flex-col space-y-[2rem]'>
          {messageListController.state?.objs.map((message) => (
            <ContextForConversationMessageObj.Provider
              value={message}
              key={message.id}
            >
              <SpaceMapChatExplorerMessage />
            </ContextForConversationMessageObj.Provider>
          ))}
        </GlassWindowContents>
      </GlassWindowFrame>
    </div>
  );
}
