import { ContextForConversationMessageList } from '@/(server)/controller/space/chapter/scene/conversation/message/list';
import { ContextForConversationMessageObj } from '@/(server)/model/space/chapter/scene/conversation/message/main';
import { AstralSearchIcon } from '@/icons/search/main';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { useContext } from 'react';
import { SpaceMapChatExplorerMessage } from './message/main';

export function ConversationalSearchChatList() {
  const messageListController = useContext(ContextForConversationMessageList);

  return (
    <div
      className='flex w-full flex-col items-center justify-center'
      style={{ height: 'calc(100% - 7rem - 7rem)' }}
    >
      <div
        className='absolute right-[2rem] flex h-[4rem] cursor-pointer items-center space-x-[1rem] rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 px-[2rem]'
        onClick={() => {
          window.location.href = `/search/results`;
        }}
      >
        <p className='font-bold text-slate-300'>Map</p>
        <AstralSearchIcon />
      </div>
      <div className='h-full w-[1000px]'>
        <GlassWindowFrame className='h-full w-full overflow-auto border-l border-r border-slate-300 border-opacity-30 p-[3rem]'>
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
          {/* <GlassWindowPane glassFx={glassFx['glass-5']} /> */}
        </GlassWindowFrame>
      </div>
    </div>
  );
}
