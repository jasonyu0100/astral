import { ContextForConversationMessageList } from '@/(server)/controller/conversation/message/list';
import { glassFx, roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import { useContext } from 'react';
import { ContextForSpacesMapChat } from '../../../../controller/chat/main';

export function SpacesMapChatSceneInput() {
  const messageListController = useContext(ContextForConversationMessageList);

  const {
    actions: { sendMessage },
  } = useContext(ContextForSpacesMapChat);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <GlassWindowFrame className='h-[5rem] w-full flex-shrink-0'>
      <GlassWindowContents className='p-[1rem]'>
        <GlassWindowFrame
          className='h-full w-full flex-shrink-0'
          roundedFx={roundedFx['rounded-full']}
        >
          <GlassWindowContents className='flex h-full w-full flex-row items-center'>
            <input
              className='h-full w-full bg-transparent px-[1rem] font-light text-slate-300 outline-none placeholder:font-light'
              placeholder='Type a message'
              onKeyDown={handleKeyDown}
              onChange={(e) =>
                messageListController.actions.stateActions.updateInputMessageText(
                  e.target.value,
                )
              }
              value={messageListController.state.more.inputMessageText}
            />
          </GlassWindowContents>
          <GlassWindowPane glassFx={glassFx['glass-10']} />
        </GlassWindowFrame>
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-10']} />
    </GlassWindowFrame>
  );
}
