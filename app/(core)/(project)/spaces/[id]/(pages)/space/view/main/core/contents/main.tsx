import { ContextForConversationMessageList } from '@/(server)/controller/space/chapter/conversation/message/list';
import { useContext } from 'react';
import { SpacesSpaceConversations } from './conversations/main';
import { SpacesSpaceMessages } from './messages/list/main';

export function SpacesSpaceContents() {
  const messageListController = useContext(ContextForConversationMessageList);
  return (
    <div
      className='relative flex w-full flex-col items-center'
      style={{ height: 'calc(100% - 4rem)' }}
    >
      {messageListController.state.objs.length === 0 ? (
        <div className='flex h-full w-full items-center justify-center'>
          <p className='text-8xl font-black uppercase text-slate-300 text-opacity-30'>
            Space
          </p>
        </div>
      ) : (
        <>
          <SpacesSpaceMessages />
        </>
      )}
      <SpacesSpaceConversations />
    </div>
  );
}
